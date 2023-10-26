import Database from "../../../../config/database/Database.js";
import { TmastMachineGroupDefiniiton } from "../../definitions/master/TmastMachineGroup.js";

const TmastMachineGroup = Database.define('tmast_machine_group', 
    TmastMachineGroupDefiniiton,{
        tableName : "tmast_machine_group",
       
    }
)

export default TmastMachineGroup