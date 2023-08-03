import { DataTypes } from "sequelize";
import Database from "../../../config/database/Database.js";

const TmastProduct = Database.define("tmast_product", {
    assy_no : {
        type : DataTypes.STRING,
        allowNull : true
    },
    circuit_no : {
        type : DataTypes.STRING,
        allowNull : true
    },
    type_name : {
        type : DataTypes.STRING,
        allowNull : true
    },
    category : {
        type : DataTypes.STRING,
        allowNull : true
    },
    ct : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    qty_perct : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    note : {
        type : DataTypes.STRING,
        allowNull : true
    }, 
    wire_part_no : {
        type : DataTypes.STRING,
        allowNull : true
    },
    terminal_left : {
        type : DataTypes.STRING,
        allowNull : true
    },
    terminal_right : {
        type : DataTypes.STRING,
        allowNull : true
    },
    applicator_1 : {
        type : DataTypes.STRING,
        allowNull : true
    },
    applicator_2 : {
        type : DataTypes.STRING,
        allowNull : true
    },
    ct_planning : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    t_dandori : {
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