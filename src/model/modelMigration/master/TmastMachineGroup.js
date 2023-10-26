import { TmastMachineGroupDefiniiton } from "../../definitions/master/TmastMachineGroup.js";

export const up = async (queryInterface) => {
    await queryInterface.createTable('tmast_machine_group', TmastMachineGroupDefiniiton)
}

export const down = async (queryInterface) => {
    await queryInterface.dropTable('tmast_machine_group')
}