'use strict';

const QueryUtils = require('../QueryUtils')

class DemoDto{
     // コンストラクタ
  constructor(){
    }
    static selectAllUsers(conect) {
        const query = 'SELECT ' + ' * ' + ' FROM ' + 'users;';
        const params = [];
    return QueryUtils.doQuery(conect, query,params);
    }
}

module.exports = DemoDto;