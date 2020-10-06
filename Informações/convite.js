const discord = require('discord.js')
module.exports.run = (client, message, args)=>{
    var embed = new discord.MessageEmbed()
        .setTitle("<:link:751651119200993300> Convite Da Harumi:")
        .setDescription("<a:seta:751470925915881472> Adicione-me ao seu servidor! [Convite](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)\n \nProblemas com osmeus comandos? Entre aqui [Suporte](https://discord.gg/cb88bUn) \n \n**Quer ajudar? Dê um upvote na bot list assim você me ajudará a alcançar outros servidores, basta [Apertar aqui](https://botsparadiscord.com/bots/745772370186207339) para votar** <a:star:751609577102901248>.")
        .setThumbnail(client.user.avatarURL({dynamic: true, size: 512}))
        .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
        .setColor('#a978ff')
        .setTimestamp()

    message.channel.send(embed)    
}
module.exports.help = {
    name:'invite',
    aliases: ['convidar']
  }