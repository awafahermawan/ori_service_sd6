const db = require("../../db")

const insert = async (listData) => {
    try {
        let sql = `replace into col_sinkron_sales values ?`
        await db.execute(sql, listData)
    } catch (error) {
        throw error
    }
}

const update = async (listData) => {
    try {
        let sql = `replace into col_sinkron_sales_status values ? `
        await db.execute(sql, listData)
    } catch (error) {
        throw error
    }
}

const update_history = async (listData) => {
    try {
        try {
            let sql = `replace into col_sinkron_sales_status_history values ? `
            await db.execute(sql, listData)
        } catch (error) {
            throw error
        }
    } catch (error) {
        throw error
    }
}

const insertShift = async (listData) => {
    try {
        let sql = `replace into col_sinkron_sales_shift values ?`
        await db.execute(sql, listData)
    } catch (error) {
        throw error
    }
}

module.exports = {
    insert, update, update_history, insertShift
}