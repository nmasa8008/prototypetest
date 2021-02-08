'use strict';

const db = require('../config/dbconfig');
const mysql = require('mysql2/promise');

const pool = mysql.createPool(db);
const dbConection = pool;
module.exports = {dbConection}
