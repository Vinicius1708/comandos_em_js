const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    var infocmd = new Discord.MessageEmbed()
    .setTitle("📎 Comando: kiss")
    .addField("<a:check:753729566178148362> Uso:", "**h.beijar** `<@usuário>`", true)
    .addField("📄 Exemplo:", "h.beijar Daring.#0007", true)
    .setColor("#a978ff")
    .setFooter("Informações do comando: \"kiss\"")
  if(!args[0]) return message.channel.send(infocmd)
    let gifs = ['https://media.discordapp.net/attachments/495603769317261312/497179148066881576/6fc25fdd3e22d89b19c3ea76d11789e6.gif?width=400&height=224', 
    'https://media.discordapp.net/attachments/495603769317261312/497213957191237633/giphy_3.gif?width=400&height=225',
    'https://media0.giphy.com/media/FqBTvSNjNzeZG/source.gif',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1df3d0de-3256-4adc-8926-1eb9cefcbd93/d5i4sk2-22699af3-ed9b-401c-9604-b5de144acf95.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMWRmM2QwZGUtMzI1Ni00YWRjLTg5MjYtMWViOWNlZmNiZDkzXC9kNWk0c2syLTIyNjk5YWYzLWVkOWItNDAxYy05NjA0LWI1ZGUxNDRhY2Y5NS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.Ki-Gpu0PEsaz3giZv5PzXqC6TMgBLVS2t0_FbwJd8q4',
    'https://thumbs.gfycat.com/WarpedSlightFrigatebird-size_restricted.gif',
    'https://pa1.narvii.com/7546/7f864783f1806feba74bbdd2307788e1ffb69a86r1-400-225_00.gif',
    'https://data.whicdn.com/images/328811537/original.gif', 
    'https://media3.giphy.com/media/55boUp2IuV8pW/giphy.gif',
    'https://cutewallpaper.org/21/anime-girl-kiss-anime-girl/Samurai-Flamenco-Yuri-GIF-Find-Share-on-GIPHY.gif',
    'https://cutewallpaper.org/21/anime-love-kiss/Wolf-Girl-And-Black-Prince-Kiss-GIF-Kiss-Anime-Love-Discover-Share-GIFs.gif',
    'https://media.tenor.com/images/0136ddedea728ae27df8fbcd19d680f5/tenor.gif'
] 
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** deu um Beijo em <3 **${user.username}**.`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('#a978ff')
        .setFooter(`Quem beijou foi o: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name:"beijar",
    aliases: ["kiss"]
    }  