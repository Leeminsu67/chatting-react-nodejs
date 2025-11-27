const express = require("express");
const mongoose = require("mongoose");
// process.env 환경변수 사용
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to database"))
  .catch((err) => console.log(err)); // 에러 처리를 위해 catch 추가 권장

module.exports = app;
