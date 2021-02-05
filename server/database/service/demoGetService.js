'use strict';

const db = require('../dbConnection');
const DemoDto = require('../dto/demoDto');

class DemoGetService{
    constructor() {
    }

    demoGet = async () => {
        const conect = await db.dbConection.getConnection();
        let data = [];
        let resData = {
            status: 0,
            data:[]
        }
        // await conect.beginTransaction();
        try {
            const result = await DemoDto.selectAllUsers(conect);
            console.log(result);
            data.push(result);
            resData ={
                status: 200,
                data: data
            }
        } catch (e) {
            console.log(e);
        } finally {
            conect.release();
        }
        return resData;
    }

}

module.exports = new DemoGetService();
// const Controller = (req) => {
//     return async (req, res) => {
//     //     transaction(async (entityManager) => {
//     //     const result = await callback(entityManager, req.params, req.body, req.query);
//     //     res.status(status).type('json').send({ result }).end();
//     //   });

//      }
// }