import TmastWarehouse from "../../model/modelData/master/TmastWarehouse.js";
import { Sequelize } from "sequelize";

export const getTmastWarehouse = async (req, res) => {
  try {
    const response = await TmastWarehouse.findAll();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createTmastWarehouse = async (req, res) => {
  try {
    const { sloc_code, part_code, qty, from, to ,sloc_name_to,part_name} = req.body;

    if (from && to) {
      const cekExistFromSloc = await TmastWarehouse.findOne({
        where: {
          sloc_code: from,
          part_code: part_code,
        },
      });

      if (cekExistFromSloc) {
        await TmastWarehouse.update(
          {
            qty: Sequelize.literal(`COALESCE(qty, 0) - ${qty}`),
            part_name : part_name
          },
          {
            where: {
              sloc_code: cekExistFromSloc.sloc_code,
              part_code: cekExistFromSloc.part_code,
            },
          }
        );
        const cekExistToSloc = await TmastWarehouse.findOne({
          where: {
            sloc_code: to,
            part_code: part_code,
          },
        });
        if (!cekExistToSloc) {
          await TmastWarehouse.create({
            sloc_code : to,
            qty : qty,
            sloc_name: sloc_name_to,
            part_code: part_code,
            part_name,
          });
        } else {
          await TmastWarehouse.update(
            {
              qty: Sequelize.literal(`COALESCE(qty, 0) + ${qty}`),
            part_name : part_name

            },
            {
              where: {
                sloc_code: to,
                part_code: part_code,
              },
            }
          );
          
        }
      }
      res.sendStatus(201)
    } else {
      const cekExistProduct = await TmastWarehouse.findOne({
        where: {
          sloc_code: sloc_code,
          part_code: part_code,
        },
      });
      if (!cekExistProduct) {
        await TmastWarehouse.create(req.body);
        res.sendStatus(201);
      } else {
        await TmastWarehouse.update(
          {
            qty: Sequelize.literal(`COALESCE(qty, 0) + ${qty}`),
            part_name : part_name

          },
          {
            where: {
              sloc_code: sloc_code,
              part_code: part_code,
            },
          }
        );
        res.sendStatus(201);

      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteTmastWarehouse = async (req, res) => {
  try {
    const { id } = req.query;
    await TmastWarehouse.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

export const updateTmastWarehouse = async (req, res) => {
  try {
    const { id } = req.query;
    await TmastWarehouse.update(req.body, {
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
