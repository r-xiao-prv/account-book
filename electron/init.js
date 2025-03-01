const path = require('path');
import dbManager from './database/db-manager';
// 启动所有配置: 这里将来改成读取配置文件的方式
export function initConfig() {
    debugger
    const config = {
        db: {
            dbPath: `${path.normalize(process.cwd()).replace(/\\/g, '/')}/data/database/ab.db`
        }
    };
    dbManager.initDB(config.db);
}