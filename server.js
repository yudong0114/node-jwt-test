const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("./config");
const auth = require("./auth");

const app = express();
const PORT = 3000;

// json形式の利用の設定
app.use(express.json());
app.listen(PORT, console.log("run"));

// 登録
app.post("/register", (req, res) => {
  // 送信される固有データ
  const payload = {
    username: req.body.username,
    email: req.body.email,
  };

  // Tokenの発行(payloadを暗号化)
  const token = jwt.sign(payload, config.jwt.secret, config.jwt.options);

  // 返すボディの作成
  const body = {
    username: req.body.username,
    email: req.body.email,
    token: token,
  };

  // レスポンス
  res.status(200).json(body);
});

// ログイン
// authメソッドが承認し、nextメソッドを実行
// その後statusを返す
app.get("/login", auth, (req, res) => {
  res.status(200).json({
    msg: "認証に成功しました！",
  });
});
