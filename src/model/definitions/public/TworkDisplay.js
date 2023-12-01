

import { DataTypes } from "sequelize"


export const tworkDisplayDefinition =  {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
      },
    time : {
        type : DataTypes.STRING,
        allowNull : true
    },
    date : {
        type : DataTypes.DATE,
        allowNull : true
    },
    machine_no : {
        type : DataTypes.STRING,
        allowNull : true
    },
    machine_name : {
        type : DataTypes.STRING,
        allowNull : true
    },
    machine_group : {
        type : DataTypes.STRING,
        allowNull : true
    },
    part_code : {
        type : DataTypes.STRING,
        allowNull : true
    },
    location : {
        type : DataTypes.STRING,
        allowNull : true
    },
    leader_npk : {
        type : DataTypes.STRING,
        allowNull : true
    },
    leader_name : {
        type : DataTypes.STRING,
        allowNull : true
    },
    operator_name : {
        type : DataTypes.STRING,
        allowNull : true
    },
    operator_name : {
        type : DataTypes.STRING,
        allowNull : true
    },
    machine_status : {
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
    qty_planning : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    qty_actual : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    plan_shift_1 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    plan_shift_2 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    plan_shift_3 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    problem_non_machine_1 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    problem_non_machine_2 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    problem_non_machine_3 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    problem_machine_1 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    problem_machine_2 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    problem_machine_3 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    plantotalday :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    targetqtyshift1 :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    targetqtyshift2 :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    targetqtyshift3 :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    targetqtyshifttotalday :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    actualshift1 :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    actualshift2 :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    actualshift3 :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    actualtotalday :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    balanceshift1 :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    balanceshift2 :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    balanceshift3 :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    balancetotalday :{
        type : DataTypes.INTEGER,
        allowNull :true,
    },
    achshift1 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    achshift2 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    achshift3 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    achtotalday : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    lossqualityshift1 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossqualityshift2 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossqualityshift3 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossqualitytotalday : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossmachineshift1 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossmachineshift2 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossmachineshift3 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossmachinetotalday : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossmaterialshift1 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossmaterialshift2 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossmaterialshift3 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    lossmattotalday : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    dandorishift1 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    dandorishift2 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    dandorishift3 : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    dandoritotalday : {
        type : DataTypes.FLOAT,
        allowNull : true
    },
    ctime : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    dari : {
        type : DataTypes.TIME,
        allowNull : true
    },
    sekarang : {
        type : DataTypes.TIME,
        allowNull : true
    },
    others1 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    others2 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    others3 : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    otherstotal : {
        type : DataTypes.INTEGER,
        allowNull : true
    },
    createdAt : {
        type : DataTypes.DATE
            }, 
            updatedAt : {
                type : DataTypes.DATE
        
            }
    
}