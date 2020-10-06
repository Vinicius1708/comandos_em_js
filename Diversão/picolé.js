var Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if(!user) return message.reply("você precisa mencionar alguém para tomar picolé");
    let gifs = ['https://cdn.discordapp.com/attachments/731414652935995415/731425117112107058/tumblr_9c051f5dc7dfb28a460809501339ebc7_e664e322_540.gif', 'https://cdn.discordapp.com/attachments/731414652935995415/731430023894138960/0_U2tqtMTN11u7l-L9.gif', 'https://cdn.discordapp.com/attachments/731414652935995415/731429971188383754/original-18.gif', 'https://cdn.discordapp.com/attachments/731414652935995415/731429894927679508/tumblr_0db65336101aa37ba95104fc09ae4dd3_3bfe46b3_540.gif'] 
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** tomou picolé com **${user.username}**.`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('#a978ff')
        .setFooter(`especialmente para o servidor Sorveteria da lari 😁: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()

    message.channel.send(embed);
}
module.exports.help = {
    name:'picolé',
    aliases: ['picole']
  }