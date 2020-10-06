const Discord = require('discord.js');
module.exports.run = (client, message, arg) => {
        icon = message.guild.iconURL({dynamic: true, size: 512}),
        embed  = new Discord.MessageEmbed()
        .setTitle(message.guild.name)
            .setImage(icon)
            .setColor("#a978ff")
            .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
            .setTimestamp()
    message.channel.send(embed);
}
module.exports.help = {
    name:"servericon",
    aliases: ["iconserver"]
    }  