const { MessageEmbed } = require("discord.js");
const discord = require('discord.js')
const db = require('quick.db')
const { promptMessage } = require("../../functions.js");

module.exports = {
    run: async (client, message, args) => {
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply(`Você não tem permissão de **Expulsar membros**`)
        }
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply(`Não tenho permissão de **Expulsar membros**.`)
        }

        if (message.deletable);

        if (!args[0]) {
            return message.reply(`Mencione um usuário para expulsá-lo.`)
        }

        const toKick = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!toKick) {
            return message.reply(`Não encontrei o usuário mencionado ou seu ID, tente novamente.`)
        }

        if (toKick.id === message.author.id) {
            return message.reply(`Você não pode expulsar a si mesmo.`)
        }

        if (!toKick.kickable) {
            return message.reply(`Eu não posso expulsar esse usuário, pois ele possui um cargo maior que o meu.`)

        }

        let falas = ["Estaremos atentos, pois embreve ele irá voltar.",
        "O usuário cedeu as forças da baderna e teve o que mereceu.",
        "Quer que o usuário volte para servidor quando você permitir? Use meu comando de ban.",
        "Nada melhor como um kick para alegrar o meu dia.",]; 
let resultado = Math.floor((Math.random() * falas.length));

        const promptEmbed = new MessageEmbed()
            .setColor("RED")
            .setAuthor(`Esta verificação será válida por 30 segundos`)
            .setDescription(`Você quer expulsar ${toKick}?`)

        await message.channel.send(promptEmbed).then(async msg => {
            const emoji = await promptMessage(msg, message.author, 30, ["✅"]);

            if (emoji === "✅") {

                message.channel.send(`<@${user.id}> acaba de ser expulso por ${message.author.username}. ${falas[resultado]}`)

                toKick.kick(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(new discord.MessageEmbed()
                        .setDescription(`Isso não deveria ter acontecido.... este é o error ${err}`)
                        .setColor("RED"))
                    });
 }
            let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            let kick = db.get(`logchannel_${member.guild.id}`);
            
            if(kick === null) {
              return;
            }
          
            let log = new discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle(`**Expulso**`)
            .addField(`O usuário <@${user.id}> acaba de ser expulso por ${message.author.username}`, `Embreve ele voltará.`)
            .setFooter(message.guild.name, message.guild.iconURL())
            .setColor("#a978ff").setTimestamp() 
            client.channels.cache.get(kick).send(log);
          })
        }
    }
module.exports.help = {
    name:'kick',
    aliases: ['expulsar']
  }