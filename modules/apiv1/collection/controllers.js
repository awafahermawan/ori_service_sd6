const Model = require("./models")
const moment = require("moment")

const insert = async (req) => {
    try {
        let addid = "ORIServiceSD6"
        let addtime = moment().format("YYYY-MM-DD hh:mm:ss")
        let version = "v1.0.0"
        let dataBody = req.body
        let listData = []
        for(let i of dataBody){
            listData.push([0, i.kdtk, i.tanggal, i.shift, i.nominal, addid, addtime, version])
        }
        await Model.insert(listData)
        return {
            code : 200,
            message : "Berhasil insert sales",
            rows : listData.length
        }
    } catch (error) {
        console.log(error)
        return {
            code : 400,
            message : "Ada kendala pada waktu insert sales",
            error : error.message
        }
    }
}

const update = async (req) => {
    try {
        let addid = "ORIServiceSD6"
        let addtime = moment().format("YYYY-MM-DD hh:mm:ss")
        let version = "v1.0.0"
        let dataBody = req.body
        let listData = []
        for(let i of dataBody){
            listData.push([0, i.kdtk, i.tanggal, i.status, addid, addtime, version])
        }
        
        await Model.update(listData)
        await Model.update_history(listData)
        
        return {
            code : 200,
            message : "Berhasil update status sales",
            rows : listData.length
        }
    } catch (error) {
        console.log(error)
        return {
            code : 400,
            message : "Ada kendala pada waktu update status sales",
            error : error.message
        }
    }
}


module.exports = {
    insert, update
}