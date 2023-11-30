import { Op } from "sequelize";
import TmastShift from "../model/modelData/master/TmastShift.js";

export const handleLocalTime = (time) => {
    const timeTolocalString = new Date(time).toLocaleTimeString()

    // Membagi waktu menjadi jam, menit, detik, dan AM/PM
      const timeParts = timeTolocalString.split(/:| /);
  
      let hours24 = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);
      const seconds = parseInt(timeParts[2]);
      const ampm = timeParts[3].toUpperCase();
  
      // Mengonversi waktu ke format 24 jam
      if (ampm === "PM" && hours24 < 12) {
        hours24 += 12;
      } else if (ampm === "AM" && hours24 === 12) {
        hours24 = 0;
      }

      return  ( `${hours24.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
}



export const getCurrentShift = async (data) => {
  try {
      const { start, finish, current_time, category, code } = data;

      const fmStart = handleLocalTime(start);
      const fmFinish = handleLocalTime(finish);
      const fmCurrentTime = handleLocalTime(current_time);

      const findShift = (query) => {
          return new Promise( (resolve, reject) => {
               TmastShift.findOne(query)
              .then((data) => resolve(data))
              .catch((error) => reject(error))
          })
      }
      
      let dataShift = null

      if(fmStart && fmFinish) {
          dataShift = await findShift({
              where : {
                  [Op.or] : [
                      {start : { [Op.between] : [fmStart, fmFinish]  }},
                      {end : {[Op.between] : [fmStart, fmFinish] }}
                  ]
              }
          })
      }
    
      if(!dataShift && fmCurrentTime) {
          dataShift = await findShift({
              where : {
                  [Op.or] : [
                      {start : { [Op.gte] : [fmCurrentTime]}},
                      {end : {[Op.lte] : [fmCurrentTime]}}
                  ]
              }
          })
      }

      if (dataShift) {
          return res.json(dataShift);
      } else {
          return res.sendStatus(404);
      }
  } catch (error) {
      console.error(error);
      return res.sendStatus(500);
  }
};
