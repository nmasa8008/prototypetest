require('dotenv').config();

module.exports = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  multipleStatements: true,
  connectTimeout : 10000, //タイムアウト(msec)
  supportBigNumbers : true, //bigint, decimal をサポートする。
  connectionLimit : 10 //一度に生成する接続インスタンスの数
}