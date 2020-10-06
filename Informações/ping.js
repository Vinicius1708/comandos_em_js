var Discord = require('discord.js')
module.exports.run = (client,message,args)=>{
    var embed = new Discord.MessageEmbed()
        .setDescription(`**Pong! <a:ping:753029702238601267> | Aproximadamente: **${Math.round(client.ws.ping)}** ms! <:cloud:751622139815395451>**`)
        .setColor('#a978ff')
    message.channel.send(embed)  
}
module.exports.help = {
    name:'ping',
    aliases: ['latencia']
  }