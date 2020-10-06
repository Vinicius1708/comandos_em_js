const discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Você não possui a permissão de **Gerenciar canais**.")
    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Mencione um canal para remover o canal de Logs.")
    }
    db.delete(`logchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(new discord.MessageEmbed()
    .setDescription(`Os logs de bans e kicks nunca mais aparecerão no ${channel}, espero que algum dia você mude de ideia.`)
    .setColor("GREEN"));
  }
exports.help = {
    name: 'removelog',
    aliases: ['unlog']
}