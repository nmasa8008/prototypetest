const express = require('express');
const router = express.Router();
const DemoGetService = require('../../database/service/demoGetService')
/* post home page. */
router.post('/test',  async (req, res, next) => {
  //controller---routerはwebAPIの数だけある
  //バリデーションチェック...エラーならリターン(responseChord)
  //バリデーションクラス作成
  //service----sql操作
  //serviceのリターンの値(body、responseChord)をresにset
  //serviceクラス作成
  //serviceクラスではDTOクラスの各メッソッドをコール
  //serviceクラスでトランザクション管理
  //一旦は作成するserviceクラスの数はrouterにあるcrudの数×router
  //serviceクラスにはserviceクラスを統合serviceクラスがある
  //DTOクラス作成
  //DTOはいわゆるselect文系の集まり
  // const demoService = new DemoGetService();
  const resData = await DemoGetService.demoGet();
  const status = resData.status;
  const body = resData.data[0];

  console.log("コントローラー",resData,status,body);
  const message = req.body.name;
  res.status(status).json(body).end();
});

module.exports = router;
