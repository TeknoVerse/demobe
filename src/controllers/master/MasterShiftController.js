import TmastShift from "../../model/modelData/master/TmastShift.js"

export const getTmastShift = async (req,res) => {
    try {
        const response = await TmastShift.findAll()
        res.json(response)
    } catch (error) {
        console(error)
    }
}