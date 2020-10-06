const Discord = require('discord.js')
module.exports.run = (client, message, args)=>{
        var permission = new Discord.MessageEmbed()
            .setDescription("Você não possui a permissão de **Administrador**.")
        if(!message.member.hasPermission("ADMINISTRATOR")){
          return message.channel.send(permission)
        }
        var aviso = args.join(" ");
        if(!aviso) return message.channel.send(msg);
        const infocmd = new Discord.MessageEmbed()
        .setTitle("📎 Comando: aviso")
        .addField("<a:check:753729566178148362> Uso:", "**h.aviso** `<mensagem>`", true)
        .addField("📄 Exemplo:", "h.aviso Comandos semanais :D", true)
        .setColor("#a978ff")
        .setFooter("Informações do comando: \"aviso\"")
        if(!args[0]) return message.channel.send(infocmd)
        var embed = new Discord.MessageEmbed()
            .setTitle("Aviso:")
            .setColor("#a978ff")
            .setDescription(`${aviso}`)
            .setFooter(`Aviso feito por: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
            .setTimestamp()
    message.channel.send(embed)
    message.channel.send("@everyone")    
}
module.exports.help = {
    name:"aviso",
    aliases: ["anuncio", "announce"]
}  