import { Op, Sequelize, literal } from "sequelize";
import TmastMachine from "../model/modelData/master/TmastMachine.js";
import TworkDisplay from "../model/modelData/public/TworkDisplay.js";
import TtransOperation from "../model/modelData/transaction/TtransOperation.js";
import schedule from "node-schedule";
import TtransStop from "../model/modelData/transaction/TtransStop.js";
import TmastShift from "../model/modelData/master/TmastShift.js";

export const addPlanningTworkDisplay = async () => {
  try {

    let addTaks = [];
    let getMachine = [];
    let getTworkDisplay = [];
    let getttransOperation = [];
    let getttransStop = [];
    let getTmastSHift = [];

    const allJobs = schedule.scheduledJobs;

    
    const currentTime = new Date()
    const time = currentTime.toTimeString().split(' ')[0] /* 24:00:00 */
    const date = currentTime.toISOString().split('T')?.[0] /* 00-00-00 */
      
      setInterval(async () => {
        getMachine = await TmastMachine.findAll();
        getTworkDisplay = await TworkDisplay.findAll();
        getTmastSHift = await TmastShift.findAll()
        getttransOperation = await TtransOperation.findAll();
        getttransStop = await TtransStop.findAll({
          where : {
            [Op.or] : [
              literal(
                `DATE(work_date) = DATE('${date}')`
              ),
              {
                finish: {
                  [Op.lte]: '06:00:00'
                }
              }
            ] 
          }
        });

        let groupedData = []

         getTmastSHift.map(dataShift => {
            const getcurrentTtransStop = 
             getttransStop.filter(dataTtrasStop => 
              dataTtrasStop.start >= dataShift.start &&
              dataTtrasStop.finish <= dataShift.end
              )
              if(getcurrentTtransStop.length !== 0){

                const calculationData = (data) => {
                  return new Promise((resolve, reject) => {
                      const [hours, minutes, seconds] = data.duration.split(':').map(parseFloat);
                      const totalMinutes = hours * 60 + minutes + seconds / 60;
                      const totalSecond = hours * 3600 + minutes * 60 + seconds
        
                      const key = `${dataShift.name}_${data.category_code}`; // Kunci unik untuk grup data

                      if (!groupedData[key]) {
                        groupedData[key] = {
                          shift: dataShift.name,
                          category_code: data.category_code,
                          duration: totalSecond
                        };
                      } else {
                        groupedData[key].duration += totalSecond; // Tambahkan durasi jika data sudah ada
                      }
                      return resolve
                  })
                }

                getcurrentTtransStop.forEach(data => {
                  const dataVlues = data.dataValues;
                  if(dataVlues.category_code === 'PNM-01'){
                      calculationData({duration :dataVlues.duration, category_code : 'PNM-01' })
                  }
                  if(dataVlues.category_code === 'DND'){
                      calculationData({duration :dataVlues.duration, category_code : 'DND' })
                  }
                  if(dataVlues.category_code === 'PM-01'){
                      calculationData({duration :dataVlues.duration, category_code : 'PM-01' })
                  }
        
                });
              } 
          
        })
//        console.log(groupedData)


        if (getMachine === null) {
          return console.log("Data Machine null");
        } else {
          getMachine.map(async (datamachine) => {
            const foundInTworkDisplay =
             getTworkDisplay.find(
              (dataTwork) => 
              dataTwork.machine_no === datamachine.code 
            );
            if (!foundInTworkDisplay) {
              await TworkDisplay.create({
                machine_no: datamachine.code,
                machine_name: datamachine.name,
                part_code: datamachine.part_no,
                ctime: 0,
              });
            }else{
              await TworkDisplay.update({
                part_code: datamachine.part_no,
                dandorishift1 : groupedData['shift_1_DND'] && groupedData['shift_1_DND'].duration,
                dandorishift2 : groupedData['shift_2_DND'] && groupedData['shift_2_DND'].duration,
                dandorishift3 : groupedData['shift_3_DND'] && groupedData['shift_3_DND'].duration,
                problem_machine_1: groupedData['shift_1_PM-01'] && groupedData['shift_1_PM-01'].duration,
                problem_machine_2: groupedData['shift_2_PM-01'] && groupedData['shift_2_PM-01'].duration,
                problem_machine_3: groupedData['shift_3_PM-01'] && groupedData['shift_3_PM-01'].duration,
                problem_non_machine_1: groupedData['shift_1_PNM-01'] && groupedData['shift_1_PNM-01'].duration,
                problem_non_machine_2: groupedData['shift_2_PNM-01'] && groupedData['shift_2_PNM-01'].duration,
                problem_non_machine_3: groupedData['shift_3_PNM-01'] && groupedData['shift_3_PNM-01'].duration,
          
              },
                {
                where : {
                  machine_no: datamachine.code,
                }
              });
            }
          })
          getTworkDisplay.map(async (dataTwork) => {
            const existDataInMachine = 
            getMachine.find((dataMachine => 
              dataMachine.code === dataTwork.machine_no /* &&
              dataMachine.part_no === dataTwork.part_code */
              ))
            if(!existDataInMachine){
              await TworkDisplay.destroy({
                where : {
                  id : dataTwork.id
                }
              })
            }
          })
          
          const dataWithMyCt = getTworkDisplay.map((itemDisplay) => {
            const matchMachine = getMachine.find(
              (itemMachine) => itemMachine.code === itemDisplay.machine_no
            );
            return {
              ...itemDisplay.dataValues,
              my_ct: matchMachine ? matchMachine.ct : 0,
            };
          });
  
          const promises = dataWithMyCt.map(executeTaks);
          Promise.allSettled(promises).then(() => {
            promises.length = 0;
          });  
          
        }
      }, 1000);


      const executeTaks = async (item) => {      
        if (
          !addTaks.some(
            (taksItem) =>
              taksItem.machine_no === item.machine_no &&
              taksItem.my_ct == item.my_ct &&
              taksItem.part_code == item.part_code 
          )
        ) {
          addTaks.push(item);
          const { my_ct, machine_no } = item;
          new Promise(async() => {
            for (const jobId in allJobs) {
              schedule.cancelJob(allJobs[jobId]);
          } 
          }) 
        

            schedule.scheduleJob(`*/${my_ct/1000} * * * * *`, async () => {
              const cekMachine = getttransOperation.find(
                (itemMachine) => itemMachine.machine_no === machine_no
              );
              if (cekMachine) {
                if (cekMachine.finish === null) {
                  TworkDisplay.update(
                    {
                      ctime: Sequelize.literal("ctime + 1"),
                    },
                    {
                      where: {
                        machine_no: machine_no,
                      },
                    }
                  );
                }
              }
            });
      
        }
      };

      return res.sendStatus(200)
  } catch (error) {
    console.log(error);
  }
};

export const addDandoriToTworkDisplay = async (req,res) => {

  let addTaks = [];
  let getMachine = [];
  let getTworkDisplay = [];
  let getttransOperation = [];

  setInterval(async () => {
    getMachine = await TmastMachine.findAll()
    getTworkDisplay = await TworkDisplay.findAll()
    getttransOperation = await TtransOperation.findAll()
    if(!getMachine){
      return res.sendStatus(404)
    }else{
      getMachine.map(async (dataMachine) => {
        const foundInTworkDisplay = getTworkDisplay.find((dataTworkDisplay) => 
        dataTworkDisplay.machine_no === dataMachine.code)
        if(!foundInTworkDisplay){

        }
      })

    }

  }, 1000);



  const executeTaks = async () => {
    
  }
}
