# 暂未开发!!!!!!!!

# 记账用的, 但刚开始用Electron, 所以先拿来学习Electron

记账本, 工资或副业等其他收入以及每天的支出都记录下来, 可以以图表的形式展现, 还可以设置一个每天的支出预警, 

## 基本信息

1. 依赖项

   |       依赖        | 已使用 |
   | :---------------: | :----: |
   |  Electron Forge   |   ✔    |
   |       Vue3        |   ✔    |
   | Ant Design of Vue |   ✔    |
   |    Vue Router     |   ✔    |
   |       Vite        |   ✔    |
   |      SQLite       |   ❌    |
   |       MySQL       |   ❌    |
   |    PostgreSQL     |   ❌    |

2. 结构说明

   ```
   account-book
   ├─ electron											# electron相关代码目录
   │  ├─ main.js										# 主进程文件
   │  └─ preload.js									# 业务进程
   ├─ forge.config.js									# electron-forge配置文件
   ├─ index.html										# 项目界面挂载点
   ├─ package-lock.json								# node_modules中所有包的信息
   ├─ package.json										# 项目配置及依赖
   ├─ README.md										# 项目说明
   ├─ src												# vue相关代码目录
   │  ├─ App.vue										# vue项目主页面
   │  ├─ main.js										# vue项目代码入口
   │  ├─ router										# 页面路由目录
   │  │  └─ index.js									# 页面路由代码文件
   │  └─ views											# vue项目页面
   │     ├─ Home.vue									# 项目首页
   │     └─ NotFound.vue								# 404页面
   ├─ vite.main.config.mjs								# vite主配置
   ├─ vite.preload.config.mjs							# 业务进程vite配置
   └─ vite.renderer.config.mjs							# 主进程vite配置
   ```

   

3. 命令操作

   * 安装依赖

     > npm install

   * 项目启动

     > npm start

## 设想
