const { MessageEmbed } = require("discord.js");
const discord = require('discord.js')
const db = require('quick.db')
const { promptMessage } = require("../../functions.js");

module.exports.run = async (client, message, args) => {
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let reason = args.slice(1).join(' ');
        if (message.deletable);
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("Você não possui a permissão de **Banir membros**.")
        }
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("Eu não tenho permissão de **Banir membros**.")
        }
        if (!args[0]) {
            return message.reply("Mencione um usuário para executar o banimento")
        }
        const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!toBan) {
            return message.reply("Não encontrei esse usuário, tente novamente.")
        }
        if (toBan.id === message.author.id) {
            return message.reply("Você não pode banir a si mesmo.")
        }
        if (!toBan.bannable) {
            return message.reply("Parece que o usuário possui um cargo maior que o meu.")
        }
        const promptEmbed = new MessageEmbed()
            .setColor("#a978ff")
            .setAuthor(`Esta verificação será válida por 30 segundos.`)
            .setDescription(`<a:banned:751663785470853162> Você quer banir **${toBan}**?`)

        await message.channel.send(promptEmbed).then(async msg => {
            const emoji = await promptMessage(msg, message.author, 30, ["✅"]);
            let falas = ["Parece que o meliante não leu as regras e acabou sendo banido.",
                        "O martelo do ban foi tão forte que o meliante só voltará no servidor usando outra conta.",
                        "O meliante teve o que mereçou com a sua baderna."]; 
    let resultado = Math.floor((Math.random() * falas.length));

            if (emoji === "✅") {
            
                message.channel.send(`<@${user.id}> acaba de ser banido por ${message.author.username}. ${falas[resultado]}`)

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(new discord.MessageEmbed()
                        .setDescription(`Isso não deveria ter acontecido.... este é o error ${err}`)
                        .setColor("#a978ff"));
                    });
            }
                let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
                  let ban = db.get(`logchannel_${member.guild.id}`);
                  
                  if(ban === null) {
                    return;
                  }
                
                  let log = new discord.MessageEmbed()
                  .setThumbnail(message.guild.iconURL())
                  .setTitle(`**Banimento**`)
                  .addField(`O usuário <@${user.id}> acaba de ser banido por ${message.author.username}`, `Devido ao motivo de \`${reason}\``)
                  .setFooter(message.guild.name, message.guild.iconURL())
                  .setColor("#a978ff").setTimestamp() 
                  client.channels.cache.get(ban).send(log);
                })
        }
module.exports.help = {
    name:"ban",
    aliases: ["banir"]
    }  
