import TmastMachine from "../../model/modelData/master/TmastMachine.js";
import { addPlanningTworkDisplay } from "../../real time process/AllProcess.js";
export const getTmastMachine = async (req, res) => {
  try {
    const response = await TmastMachine.findAll();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createTmastMachine = async (req, res) => {
  try {
    await TmastMachine.create(req.body);
    return res.sendStatus(201);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTmastMachine = async (req, res) => {
  try {
    const { id } = req.query;
    await TmastMachine.destroy({
      where: {
        id: id,
      },
    });
    res.sendStatus(200);
    //  addPlanningTworkDisplay()
  } catch (error) {
    console.log(error);
  }
};

export const updateTmastMachine = async (req, res) => {
  try {
    const { id, code } = req.query;
    if (id) {
      await TmastMachine.update(req.body, {
        where: {
          id: id,
        },
      });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};
