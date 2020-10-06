var Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if(!user) return message.reply("**|** você precisa mencionar alguém para socar!");
    let gifs = [
        'https://media.discordapp.net/attachments/495603769317261312/496806957945192458/-Kensei-Muguruma-bleach-anime-35128856-500-281.gif?width=400&height=225',
        'https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif',
        'https://i.pinimg.com/originals/a0/f2/24/a0f224a9de260d448684c50bfc0fb0f8.gif',
        'https://thumbs.gfycat.com/ShadowyFoolhardyEyas-max-1mb.gif',
        'https://pa1.narvii.com/6457/ef21d3fe6324b364aa23f0d398aec3190dda0b6a_hq.gif',
        'https://i.imgbox.com/NSOs8R9d.gif',
        'https://steamuserimages-a.akamaihd.net/ugc/861731921531324044/92CE16665CFABDE8D405D8810EFCF3EB0CD21969/',
        'https://pa1.narvii.com/6880/a523dbbb97f83bf6a65b4180522bba5b1c878d98r1-500-280_hq.gif'
    ]
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** acertou um soco bem no meio da cara do **${user.username}**.`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('#a978ff')
        .setFooter(`Soco dado pelo: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name:"soco",
     aliases: ['murro']
    }
