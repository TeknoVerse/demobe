import { DataTypes } from "sequelize";

export const TmastShiftDefinition = {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
      },
       name : {
        type : DataTypes.STRING ,
        allowNull : true
      },
       category : {
        type : DataTypes.STRING ,
        allowNull : true
      },
       start : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       end : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       start_time_off_1 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       start_time_off_2 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       start_time_off_3 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       start_time_off_4 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       start_time_off_5 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       start_time_off_6 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       end_time_off_1 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       end_time_off_2 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       end_time_off_3 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       end_time_off_4 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       end_time_off_5 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       end_time_off_6 : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       duration_time_off : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       loading_time : {
        type : DataTypes.TIME ,
        allowNull : true
      },
       past_day : {
        type : DataTypes.INTEGER ,
        allowNull : true
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },

}
