const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const config = require("./config");

const auth = (req, res, next) => {
  try {
    // 未承認用のトークン設定
    const token = req.headers.token;
    // トークンと秘密鍵で認証可能かどうか
    const decoded = jwt.verify(token, config.jwt.secret);
    console.log(decoded);
    next();
  } catch (err) {
    return res.status(401).json({
      msg: "認証できません。",
    });
  }
};

module.exports = auth;
