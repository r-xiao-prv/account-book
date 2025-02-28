import dbManager from './database/dbManager';

// 启动所有配置: 这里将来改成读取配置文件的方式
export function initConfig() {
    const config = {
        db: {
            dbPath: '../data/database/ab.db'
        }
    };
    dbManager.initDB(config.db);
}