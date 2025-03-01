const Database = require('better-sqlite3');
let db;

// 创建数据库并在执行sql时打印
function initDB(config) {
    db = new Database(config.dbPath, { verbose: console.log });
    // db.prepare(`CREATE TABLE IF NOT EXISTS users (
    //     id INTEGER PRIMARY KEY AUTOINCREMENT,
    //     username TEXT,
    //     email TEXT
    // )`).run();
    // const insertSql = 'INSERT INTO users (username, email) VALUES (@username, @email)';
    // db.prepare(insertSql).run({
    //     username: 'admin',
    //     email: '123@abc.com'
    // });
    // const selectSql = 'SELECT * FROM users';
    // const users = db.prepare(selectSql).all();
    // console.log(JSON.stringify(users));
    console.log(`数据库已连接, 数据库db文件位置: ${config.dbPath}`);
};

export default { db, initDB };