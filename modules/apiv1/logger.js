const db = require("./../db")

const insert = async (listData) => {
    try {
        let sql = `insert into logger values ? `
        await db.execute(sql, [listData])
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    insert
}