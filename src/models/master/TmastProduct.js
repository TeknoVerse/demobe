import { DataTypes } from "sequelize";
import Database from "../../../config/database/Database.js";

const TmastProduct = Database.define("tmast_product", {
  part_no : {
    type : DataTypes.STRING,
    allowNull : true
  },
  part_name : {
    type : DataTypes.STRING,
    allowNull : true
  },
  qty : {
    type : DataTypes.INTEGER,
    allowNull : true
  },
},{
    tableName : "tmast_product"
})

export default TmastProduct;

/* (async () => {
    await TmastProduct.sync()
})() */
