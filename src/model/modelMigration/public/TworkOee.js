import { TworkOeeDefinition } from "../../definitions/public/TworkOee.js";

export const up = async (queryInterface) => {
    await queryInterface.createTable("twork_oee", TworkOeeDefinition)
}

export const down = async (queryInterface) => {
    await queryInterface.dropTable("twork_oee")
}