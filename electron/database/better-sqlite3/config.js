const Database = require('better-sqlite3');
let db;

// 创建数据库并在执行sql时打印
export function initDB(config) {
    db = new Database(config.dbPath, { verbose: console.log });
    console.log('数据库已连接');
};

export default db;