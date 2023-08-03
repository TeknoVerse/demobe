import { DataTypes } from "sequelize";
import Database from "../../../config/database/Database.js"

const TtransDefect = Database.define("ttrans_defect", {
    time : { 
        type : DataTypes.TIME,
        allowNull : true
    }, 
    line : { 
        type : DataTypes.STRING,
        allowNull : true
    }, 
    shift : { 
        type : DataTypes.STRING,
        allowNull : true
    },
    machine_no : { 
        type : DataTypes.STRING,
        allowNull : true
    },
    npk : { 
        type : DataTypes.STRING,
        allowNull : true
    },
    assy_no : { 
        type : DataTypes.STRING,
        allowNull : true
    },
    circuit_no : { 
        type : DataTypes.STRING,
        allowNull : true
    },
    qty : { 
        type : DataTypes.INTEGER,
        allowNull : true
    }, 
    category_code : { 
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
    wire_part_no : { 
        type : DataTypes.STRING,
        allowNull : true
    },
    lot_no : { 
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

},{
    tableName: "ttrans_defect"
})

export default TtransDefect;


/* (async () => {
    await TtransDefect.sync()
})()
 */