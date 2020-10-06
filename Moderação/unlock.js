const discord = require("discord.js");
module.exports = { 
  run: async (client, message, args) => {
    
      if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS") || !message.guild.owner) return message.reply("Você não tem permissão de **Gerenciar Canais**")

  message.channel.createOverwrite(message.guild.id, {
    SEND_MESSAGES: null
    })
      message.channel.send(`O canal foi destrancado por **${message.author.username}**`)

  },
  
}

module.exports.help = {
    name:"unlock",
    aliases: ['destrancar']
  }