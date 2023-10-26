import { INTEGER, Op, literal } from "sequelize";
import TmastShift from "../../model/modelData/master/TmastShift.js";
import TworkOee from "../../model/modelData/public/TworkOee.js";
import TtransStop from "../../model/modelData/transaction/TtransStop.js";
import TtransOutput from "../../model/modelData/transaction/TtransOutput.js";
import TmastProduct from "../../model/modelData/master/TmastProduct.js";
import TtransDefect from "../../model/modelData/transaction/TtransDefect.js";

export const getTworkOee = async (req, res) => {
  try {
    const { machine_code } = req.query;
    if (machine_code) {
      const response = await TworkOee.findOne({
        where: {
          machine_code: machine_code,
        },
      });
      res.json(response);
    }
  } catch (error) {
    console.log(error);
  }
};
export const createTworkOee = async (req, res) => {
  try {
    const { machine_no, shift_id, date } = req.body;

    if ((machine_no, shift_id, date)) {
      const formatedDate = new Date(date).toISOString().split('T')?.[0]
      
  
   
      const existDataInDataBase = await TworkOee.findOne({
        where: {
          [Op.and]: literal(
            `DATE(date) = DATE('${formatedDate }')`
          ),
          machine_code: machine_no,
          shift: shift_id,
        },
      });
   
      let loadingTime = 0;
      let downTime = 0;
      let operationTime = 0;
      let qtyTtransOutput = 0
      let qtyTtransDefect = 0

      // get Loading Time
      const getTmastSHift = await TmastShift.findOne({
        where: {
          id: shift_id,
        },
      });

      const getLoadingTime = getTmastSHift.loading_time;
      const splitloadingTime = getLoadingTime.split(":");
      const hoursLoadingTime = parseInt(splitloadingTime[0]);
      const minutesLoadingTime = parseInt(splitloadingTime[1]);
      const secondsLoadingTime = parseInt(splitloadingTime[2]);
      loadingTime =
        hoursLoadingTime * 60 + minutesLoadingTime + secondsLoadingTime / 60;

      // get Down Time
      const startShift = getTmastSHift.start;
      const endShift = getTmastSHift.end;
      const getTtransStop = await TtransStop.findAll({
        where: {
          [Op.or]: [
            {
              [Op.and]: [
                {
                  start: {
                    [Op.gte]: startShift,
                  },
                },
                {
                  start: {
                    [Op.lte]: endShift,
                  },
                },
              ],
            },
            {
              [Op.and]: [
                {
                  finish: {
                    [Op.gte]: startShift,
                  },
                },
                {
                  finish: {
                    [Op.lte]: endShift,
                  },
                },
              ],
            },
          ],
          [Op.and]: literal(
            `DATE(work_date) = DATE('${formatedDate }')`
          ),
          machine_no : machine_no

        },
      });


      const getTtransOutput = await TtransOutput.findAll({
        where : {
          [Op.and]  : [
            {
              time : {
                [Op.gte] : startShift,
                [Op.lte] : endShift
              }
            },
            literal(
              `DATE(work_date) = DATE('${ formatedDate}')`
            ),
          
          ],
          machine_no : machine_no
        }
      })
       qtyTtransOutput = getTtransOutput.reduce((acc, value) => acc + value.qty,0)


      const getTtransDefect = await TtransDefect.findAll({
        where : {
          [Op.and] : [
            {
              time : {
                [Op.gte] : startShift,
                [Op.lte] : endShift
              }
            },
            literal(
              `DATE(work_date) = DATE('${formatedDate}')`
            )
          ],
          machine_no : machine_no

        }
      })

      qtyTtransDefect = getTtransDefect.reduce((acc, value) => acc + value.qty,0)
   



      let currentDownTime = 0;

      getTtransStop.forEach((data) => {
        const dataVlues = data.dataValues;

        if (dataVlues.duration !== null) {
          const durationParts = dataVlues.duration.split(":");
          const hours = parseInt(durationParts[0]);
          const minutes = parseInt(durationParts[1]);
          const seconds = parseInt(durationParts[2]);
          const durationInMinutes = (hours * 60) + minutes + (seconds / 60);
          currentDownTime += durationInMinutes;
        }
      });

      downTime = currentDownTime;
      operationTime = loadingTime - downTime;

      const getProduct = await TmastProduct.findAll();
      let totalDataCTxOutput = 0;
      await Promise.all(
        getProduct.map(async (itemProduct) => {
          const currentItem = itemProduct.dataValues;
          const ct = currentItem.ct / 1000;
          const getTtransOutput = await TtransOutput.findAll({
            where: {
              machine_no: machine_no,
              part_no: currentItem.part_no,
            },
          });
          const totalQty = getTtransOutput.reduce(
            (accumulator, item) => accumulator + item.qty,0);
 
          const countCTxTotalQTY = ct * totalQty;
        
          totalDataCTxOutput += countCTxTotalQTY;
        })
      );

      const avaibility = (((loadingTime - downTime) / loadingTime) * 100).toFixed(2);
      const performance = ((totalDataCTxOutput / operationTime) * 100).toFixed(2);
      const quality = (((qtyTtransOutput - qtyTtransDefect) / qtyTtransOutput) * 100).toFixed(2);
      console.log(avaibility)
      console.log(performance)
      console.log(quality)
      const oee = parseFloat(avaibility) + parseFloat(performance) + parseFloat(quality)
      console.log(oee.toFixed(2))
      
   

    if(!existDataInDataBase){
      await TworkOee.create({
        machine_code: machine_no,
        date: formatedDate,
        shift: shift_id,
        oee: oee,
        avaibility: avaibility,
        performance: performance,
        quality: quality,
      });
    res.json({oee: oee,avaibility : avaibility ,performance : performance,quality: quality});
    }else{
      await TworkOee.update({
        oee: oee,
        avaibility: avaibility,
        performance: performance,
        quality: quality,
      }, {
        where : {
          id :existDataInDataBase.id
        }
      });
    res.json({oee: oee,avaibility : avaibility ,performance : performance,quality: quality});
    }
    }
  } catch (error) {
    console.log(error);
  }
};
export const updateTworkOee = async (req, res) => {
  try {
    const { id, machine_code } = req.query;
    if (id) {
      await TworkOee.update(req.body, {
        where: {
          id: id,
        },
      });
      res.sendStatus(200);
    }
    if (machine_code) {
      await TworkOee.update(req.body, {
        where: {
          machine_code: machine_code,
        },
      });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};
export const deleteTworkOee = async (req, res) => {
  try {
    const { id, machine_code } = req.query;
    if (id) {
      await TworkOee.destroy({
        where: {
          id: id,
        },
      });
      res.sendStatus(200);
    }
    if (machine_code) {
      await TworkOee.destroy({
        where: {
          machine_code: machine_code,
        },
      });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};
