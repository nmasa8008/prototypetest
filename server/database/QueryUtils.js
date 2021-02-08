'use strict';

// let logger = global.log4js.getLogger();

// SQL実行の共通処理
class QueryUtils {

  constructor() {
  }

  static doQuery(connect, query, params) {
    // logger.debug('SQL実行：' + JSON.stringify(query));
    return new Promise((resolve, reject) => {
      connect.query(query, params)
        .then((result) => {
          let retVal = (result == null) ? null : result[0];
          resolve(retVal);
        })
        .catch((err) => {
          err.message += '\n' + JSON.stringify(query);
          reject(err);
        });
    });
  }
}

module.exports = QueryUtils;
