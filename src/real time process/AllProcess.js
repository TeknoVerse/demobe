import { Sequelize } from "sequelize";
import TmastMachine from "../model/modelData/master/TmastMachine.js";
import TworkDisplay from "../model/modelData/public/TworkDisplay.js";
import TtransOperation from "../model/modelData/transaction/TtransOperation.js";
import schedule from "node-schedule";

export const addPlanningTworkDisplay = async () => {
  try {
    let addTaks = [];
    let getMachine = [];
    let getTworkDisplay = [];
    let getttransOperation = [];

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

    setInterval(async () => {
      getMachine = await TmastMachine.findAll();
      getTworkDisplay = await TworkDisplay.findAll();
      getttransOperation = await TtransOperation.findAll();
      if (getMachine === null) {
        console.log("Data Machine null");
      } else {
        getMachine.map(async (datamachine) => {
          const foundInTworkDisplay = getTworkDisplay.find(
            (dataTwork) => 
            dataTwork.machine_no === datamachine.code &&
            dataTwork.part_code === datamachine.part_no 
          );
          if (!foundInTworkDisplay) {
            await TworkDisplay.create({
              machine_no: datamachine.code,
              machine_name: datamachine.name,
              part_code: datamachine.part_no,
              ctime: 0,
            });
          }
        });
/*  */
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
  } catch (error) {
    console.log(error);
  }
};
