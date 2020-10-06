const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author
    var infocmd = new Discord.MessageEmbed()
    .setTitle("📎 Comando: abraço")
    .addField("<a:check:753729566178148362> Uso:", "**h.hug** `<usuário>`", true)
    .addField("📄 Exemplo:", "h.hug @Theuzz#0001", true)
    .setColor("#a978ff")
    .setFooter("Informações do comando: \"abraco\"")
  if(!args[0]) return message.channel.send(infocmd)

    let gifs = [
        'https://media.discordapp.net/attachments/495603769317261312/497158358634201108/65670133d732f8b0e627f3ecb2d6d899.gif?width=400&height=225',
        'https://66.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oil84e5PiQ1qehrvso2_500.gif',
        'https://acegif.com/wp-content/uploads/anime-hug.gif',
        'https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif',
        'https://i.imgur.com/wOmoeF8.gif',
        'https://cdn.myanimelist.net/s/common/uploaded_files/1460993069-9ac8eaae8cd4149af4510d0fed0796bf.gif',
        'https://45.media.tumblr.com/1a7773ae588d7beefe1451d57aed294b/tumblr_o10ljcUEPP1rwfctbo1_1280.gif',
        'https://media.giphy.com/media/seWRiJ9N8VoOI/giphy.gif',
        'https://giffiles.alphacoders.com/133/133135.gif',
        'https://64.media.tumblr.com/350c512200d6cbb6506774f2cddc9641/tumblr_ooonx9vM691qzxv73o1_400.gifv',
        'https://i.imgur.com/niD8tPb.gif',
        'https://i.pinimg.com/originals/49/a2/1e/49a21e182fcdfb3e96cc9d9421f8ee3f.gif',
        'https://i.gifer.com/3XEo.gif',
        'https://cdn.myanimelist.net/s/common/uploaded_files/1461068486-646f3523d0fd8f3e6d818d96012b248e.gif'


]
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.MessageEmbed()
        .setDescription(`**<@${message.author.id}>** abraçou **${user}**. **|** 🍭`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('#a978ff')
        .setFooter(`Abraço dado por: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()

    message.channel.send(embed);
}

module.exports.help = {
    name:"abraço",
    aliases: ["abraco", "hug"]
    }