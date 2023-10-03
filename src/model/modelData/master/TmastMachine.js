import Database from "../../../../config/database/Database.js";

import {tmastMachineDefinition} from "../../definitions/master/TmastMachine.js"

const TmastMachine = Database.define('tmast_machine', tmastMachineDefinition ,{
    tableName : "tmast_machine"
})

export default TmastMachine;

