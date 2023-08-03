import { Sequelize, where } from "sequelize";
import TtransStop from "../../models/transaction/TtransStop.js";

export const getTtransStop = async (req, res) => {
  try {
    const { id_con, machine_no, category } = req.query;
    if ((id_con === "max") & (category === "problem")) {
      const maxIdData = await TtransStop.findOne({
        attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
        where: {
          machine_no: machine_no,
          category: category,
        },
      });

      if (maxIdData && maxIdData.dataValues.max_id) {
        const maxId = maxIdData.dataValues.max_id;
        const response = await TtransStop.findOne({
          where: {
            id: maxId,
            category: category,
          },
        });
        res.json(response);
      }
    }

      if ((id_con === "max") & (category === "stop")) {
        const maxIdData = await TtransStop.findOne({
          attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
          where: {
            machine_no: machine_no,
            category: category,
          },
        });

        if (maxIdData && maxIdData.dataValues.max_id) {
          const maxId = maxIdData.dataValues.max_id;
          const response = await TtransStop.findOne({
            where: {
              id: maxId,
              category: category,
            },
          });
          res.json(response);
        }
    } 
  } catch (error) {
    console.log(error);
  }
};

export const createTtransStop = async (req, res) => {
  try {
    const { machine_no, start, category } = req.body;

    if (category === "problem") {
      const cekMaxIdLightRed = await TtransStop.findOne({
        attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
        where: {
          machine_no: machine_no,
          category: "stop",
        },
      });
      if (cekMaxIdLightRed && cekMaxIdLightRed.dataValues.max_id) {
        const maxIdLightRed = cekMaxIdLightRed.dataValues.max_id;
        await TtransStop.update(
          { finish: start },
          {
            where: {
              id: maxIdLightRed,
              machine_no: machine_no,
              category: "stop",
            },
          }
        );
        await TtransStop.create(req.body);
        res.sendStatus(201);
      } else {
        await TtransStop.create(req.body);
        res.sendStatus(201);
      }
    }

    if (category === "stop") {
      const cekMaxIdLightRed = await TtransStop.findOne({
        attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
        where: {
          machine_no: machine_no,
          category: "problem",
        },
      });
      if (cekMaxIdLightRed && cekMaxIdLightRed.dataValues.max_id) {
        const maxIdLightRed = cekMaxIdLightRed.dataValues.max_id;
        await TtransStop.update(
          { finish: start },
          {
            where: {
              id: maxIdLightRed,
              machine_no: machine_no,
              category: "problem",
            },
          }
        );
        await TtransStop.create(req.body);
        res.sendStatus(201);
      } else {
        await TtransStop.create(req.body);
        res.sendStatus(201);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteTtransStop = async (req, res) => {
  try {
    const { id } = req.query;
    await TtransStop.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const updateTtransStop = async (req, res) => {
  try {
    const { machine_no, category } = req.query;

    const maxIdData = await TtransStop.findOne({
      attributes: [[Sequelize.fn("max", Sequelize.col("id")), "max_id"]],
      where: {
        machine_no: machine_no,
        category: category,
      },
    });

    if (maxIdData && maxIdData.dataValues.max_id) {
      const maxId = maxIdData.dataValues.max_id;

      // Update data dengan id terbesar (terbaru)
      await TtransStop.update(req.body, {
        where: {
          machine_no: machine_no,
          category: category,
          id: maxId,
        },
      });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
  }
};
