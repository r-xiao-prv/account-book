import sqlite from './better-sqlite3/config.js';
const db = sqlite.db;
const operate = {
    insertData: function insertData(tableName, datas) {
        const keys = Object.keys(datas[0]);
        db.prepare(`INSERT INTO ${tableName} (${keys.join(',')}) VALUES (${keys.map(item => `@${item}`).join(',')})`).run(datas);
    },
    deleteData: function deleteData(tableName, params) {
        db.prepare(`DELETE FROM ${tableName} WHERE ${Object.keys(params).map(item => `${item}=@${item}`).join(' AND ')}`).run(params);
    },
    updateData: function updateData(tableName, data, params) {
        const keys = Object.keys(data);
        db.prepare(`UPDATE ${tableName} SET ${keys.map(item => `${item}=@${item}`).join(',')} WHERE ${Object.keys(params).map(item => `${item}=@${item}`).join(' AND ')}`).run(data, params);
    },
    selectData: function selectData(tableName, params, columns) {
        let sql = `SELECT ${columns ? columns.join(',') : '*'} FROM ${tableName}`;
        if (params) {
            sql += ` WHERE ${Object.keys(params).map(item => `${item}=@${item}`).join(' AND ')}`;
        }
        return db.prepare(sql).all(params);
    },
    initDB: function initDB(config) {
        sqlite.initDB(config);
    }
};

export default operate;