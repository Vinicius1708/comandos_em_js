const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    var infocmd = new Discord.MessageEmbed()
    .setTitle("📎 Comando: chute")
    .addField("<a:check:753729566178148362> Uso:", "**h.chute** `@usuário`", true)
    .addField("📄 Exemplo:", "h.chute Theuzz#0001", true)
    .setColor("#a978ff")
    .setFooter("Informações do comando: \"chutar\"")
  if(!args[0]) return message.channel.send(infocmd)
    let gifs = [
        'https://cdn.discordapp.com/attachments/496488675610198026/496820629392326656/02-street-fighter-ryu-dando-um-chute-na-cara-da-sociedade.gif',
        'https://38.media.tumblr.com/ccfb562515974aafd5e879b75439ff18/tumblr_nece2jUD3p1tsd042o1_500.gif',
        'https://media1.tenor.com/images/15a74d10bb6dce11476acfdefe614540/tenor.gif?itemid=7779674',
        'https://i.imgur.com/24yKIai.gif',
        'https://data.whicdn.com/images/121010715/original.gif',
        'https://i.gifer.com/OHNW.gif',
        'https://24.media.tumblr.com/dfa5b815c6e587c2f1581d85c7c85442/tumblr_mw4irwOMjK1solyeco1_500.gif',
        'https://gifimage.net/wp-content/uploads/2018/10/anime-kicks-gif-3.gif',
        'https://em.wattpad.com/1e25632fcb00648a86bc1244b9c80d04b2364fb8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5675532d386e624c654c4d6d76773d3d2d3335343735363036302e313439363762373361393634396663313734343737323831393531352e676966'
] 
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** deu um chute em **${user.username}**.`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('#a978ff')
        .setFooter(`Chute dado por: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()

    message.channel.send(embed);
}
module.exports.help = {
    name:'chutar',
    aliases: ['chute']
  }