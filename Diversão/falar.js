var Discord = require('discord.js')
module.exports.run = (client, message, args)=> {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return message.reply("Você não possui a permissão de **Gerenciar mensagens**.").then(message.delete({timeout: 10000}));
            }
                var infocmd = new Discord.MessageEmbed()
                .setTitle("📎 Comando: say")
                .addField("<a:check:753729566178148362> Uso:", "**h.say** `<mensagem>`", true)
                .addField("📄 Exemplo:", "h.say Eu amo a harumi", true)
                .setColor("#a978ff")
                .setFooter("Informações do comando: \"say\"")
              if(!args[0]) return message.channel.send(infocmd)
        const sayMessage = args.join(" ");
        if(!sayMessage) return message.channel.send(embed);
        message.channel.send(sayMessage);
}
module.exports.help = {
        name:'say',
        aliases: ['falar']
      }