const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if(!user) return message.reply("**|** você não mencionou o usuário que deseja chamar a policia!");
    let falas = [`**${message.author.username}** nenhuma linha no momento.`, `**${message.author.username}** chamou a Policia para **${user.username}**.`]
    let random2 = Math.round(Math.random() * falas.length);
    let gifs = ['https://static1.squarespace.com/static/5a8272ac8fd4d2d419948712/5b805b2ab8a045cacc76f3f9/5b8066d0352f53cbba24672b/1535141779603/a8e6de7fa2b31402cadb3efdca5b4a6d.gif?format=1000w', 'https://media.discordapp.net/attachments/496488675610198026/512381958760693790/police1.gif?width=400&height=217', 'https://media.discordapp.net/attachments/496488675610198026/512381975768727561/police2.gif?width=400&height=192', 'https://media.discordapp.net/attachments/496488675610198026/512394847857147944/police3.gif?width=400&height=164'] 
    let random = Math.round(Math.random() * gifs.length);       
    let embed = new Discord.MessageEmbed()
        .setDescription(`${falas[falas.length == 1 ? 0 : random2 == 0 ? random2 + 1 : random2 - 1]}`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor("#a978ff")
        .setFooter(`Pedido feito por: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name:"policia",
    aliases: ['police']
    }