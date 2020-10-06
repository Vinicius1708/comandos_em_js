var Discord = require("discord.js");
module.exports.run = (client,message,args) => {
    var bug = args.slice(0).join(" ")
    var infocmd = new Discord.MessageEmbed()
    .setTitle("📎 Comando: bug")
    .addField("<:sim:751654617166905374> Uso:", "**h.bug** `<messgaem>`", true)
    .addField("📄 Exemplo:", "h.bug Não consigo usar os comandos", true)
    .setColor("#a978ff")
    .setFooter("Informações do comando: \"bug\"")
  if(!args[0]) return message.channel.send(infocmd)
    var embed = new Discord.MessageEmbed()
        .setTitle(":exclamation: **NOVA DENUNCIA:** :exclamation:")
        .addField("Denuncia:", `\`\`\`${bug}\`\`\``)
        .addField("Author: ", `\`\`\`${message.author.tag}\`\`\``)
        .addField("Servidor: ", `\`\`\`${message.guild.name}\`\`\``)
        .setThumbnail(message.author.avatarURL({dynamic: true, size: 512}))
        .setColor('#a978ff')
        .setFooter("Harumi - Denuncias", message.author.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()

    client.guilds.cache.get("750944769404043267").channels.cache.get("751542983035322480").send({embed})
    var enviado = new Discord.MessageEmbed()
        .setDescription("Sua Denuncia foi enviada, aguarde até resolvermos o seu problema. :sparkling_heart:")
    message.channel.send(enviado)

    var canal = client.channels.cache.get('728105631378047047')
    var msg = new Discord.MessageEmbed()
      .setDescription(` **${message.author.tag}** enviou uma denuncia, no servidor: *${message.guild.name}*.`)
      .setFooter("Harumi - Logs")
      .setTimestamp()
    canal.send(msg)      
}
module.exports.help = {
    name:'bug',
    aliases: ['bug-report']
  }