const Discord = require('discord.js');
module.exports.run = (client, message, arg) => {
    let user = message.mentions.users.first() || message.author || message.user.id,
        avatar = user.displayAvatarURL({dynamic: true, size: 512}),
        embed  = new Discord.MessageEmbed()
            .setDescription(`🖼 Avatar de ${user}\n**Clique [aqui](${avatar}) para fazer o download da imagem.**`)
            .setImage(avatar)
            .setColor("#a978ff")
            .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
            .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name:"avatar",
    aliases: ["foto", "icon"]
    }  