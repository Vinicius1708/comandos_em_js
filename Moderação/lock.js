const discord = require('discord.js')
module.exports = { 
  run: async (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if (!message.member.hasPermission("MANAGE_CHANNELS") || !message.guild.owner) return message.reply("Você não tem permissão de **Gerenciar Canais**")

  message.channel.createOverwrite(message.guild.id, {
       SEND_MESSAGES: false
  })
      message.channel.send(`${message.author} acaba de trancar o canal ${message.channel}, use h.unlock para destrancá-lo.`)

  },
}

module.exports.help = {
  name:"lock",
  aliases: ['trancar', 'travar', 'fechar']
}