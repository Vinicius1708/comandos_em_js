const Discord = require('discord.js')
module.exports.run = async (client, message, args, prefix) => {

    let user = message.mentions.users.first()
    let reason = args[0]
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não possui a permissão de **Gerenciar mensagens**.")

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Eu não possuo a permissão de **Gerenciar mensagens**.")

    if (!reason) return message.channel.send("É necessario colocar um número de **2** à **100**.")

    if (isNaN(reason)) return message.channel.send("É necessario colocar um número de **2** à **100**.")

    if (reason < 2) return message.channel.send("Esse número é muito baixo para que eu posso apagá-lo.")

    if (reason > 100) return message.channel.send("Esse número é muito alto, o máximo é de **100** mensagens a serem deletadas.")


    let massagem ="";
    let viagem ="";

    message.channel.messages.fetch({
        limit: reason
    }).then((messages) => {
        if (!user) {
            massagem = messages.filter(m => m.author.id).array().slice(0, reason)
            viagem = massagem.filter(a => a.pinned === false)
        }
        message.channel.bulkDelete(viagem).catch(error => console.log(error.stack))

        let pEmbed = new Discord.MessageEmbed()
          .setTitle("``🧺 Limpeza harumi``")
          .setDescription(`${message.author} limpou ${args[0]}.`)
          .setThumbnail('https://cdn.discordapp.com/emojis/638112693349384212.gif?v=1')
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, size: 512}))
          .setColor("#020202")

          message.channel.send(pEmbed).then(m => m.delete({timeout: 5000}))
     })
     
}
module.exports.help = {
    name: "clear",
    aliases: ["limpar"]
  }  