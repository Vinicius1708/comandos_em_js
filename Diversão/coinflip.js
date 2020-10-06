const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.channel.send(`Resultado: **${Math.floor(Math.random() * 2) == 0 ? "Cara <a:cara:753744474475331716>" : "Coroa :crown:"}**!`);
}
module.exports.help = {
  name:'coinflip',
  aliases: ['flipcoin']
}