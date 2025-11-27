const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // 유저 닉네임
  name: {
    type: String,
    required: [true, "User must type name"],
    unique: true,
  },
  // 연결 아이디 정보
  token: {
    type: String,
  },
  // 유저가 온라인 인지 확인 여부
  online: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("User", userSchema);
