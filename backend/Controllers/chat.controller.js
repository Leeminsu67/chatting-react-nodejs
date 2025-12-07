const Chat = require("../Models/chat.model");

const chatControlloer = {};

chatControlloer.saveChat = async (message, user) => {
  const newMessage = new Chat({
    chat: message,
    user: {
      id: user._id,
      name: user.name,
    },
  });

  await newMessage.save();
  return newMessage;
};

module.exports = chatControlloer;
