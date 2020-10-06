const ms = require('ms')
const discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message) => {
let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);

        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.reply('Especifique quem você deseja mutar para que eu possa tomar as devidas providências.')

            let role = message.guild.roles.cache.find(role => role.name === "Silenciado");

            if (!role) return message.reply("Oops.. Parece que o servidor não possui um cargo com o nome de `Silenciado`")

            let time = args[1];
            if (!time) {
                return message.reply("Especifique um tempo para o mute.");
            }

            member.roles.add(role.id);

            message.channel.send(`${member.user.tag} acaba de ser mutado por ${ms(ms(time))} esperamos que da próxima vez ele respeite as regras.`)

            setTimeout( function () {
                member.roles.remove(role.id);
                message.channel.send(`${member.user.tag} acaba de ser desmutado veremos quando será seu próximo mute.`)
            }, ms(time));

        } else {
            return message.chennel.send("Você não possui a permissão de **Gerenciar Mensagens**.")
        }
        let tempmute = db.get(`logchannel_${member.guild.id}`);
        let time = args[1];
        
        if(tempmute === null) {
          return;
        }
      
        let log = new discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle(`**Tempmute**`)
        .addField(`O usuário @${member.user.tag} acaba de ser mutado por ${ms(ms(time))} por: ${message.author.username}`)
        .setFooter(message.guild.name, message.guild.iconURL())
        .setColor("#a978ff").setTimestamp() 
        client.channels.cache.get(tempmute).send(log);
}
module.exports.help = {
    name:'tempmute',
    aliases: ['tempomute']
  } 