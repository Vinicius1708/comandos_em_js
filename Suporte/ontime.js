const Discord = require("discord.js")
const moment = require("moment")
require("moment-duration-format")

module.exports.run = (client, message, args) => {
    let duration = moment.duration(client.uptime).format('D [dias], H [horas], m [minutos], s [segundos]');
    let embed = new Discord.MessageEmbed()
        .setDescription(`Estou online à: **${duration}**.`)
    message.channel.send(embed);
}
module.exports.help = {
    name:'uptime',
    aliases: ['ontime']
  }