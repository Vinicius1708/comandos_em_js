const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const moment = require("moment")
moment.locale('pt-BR');

module.exports.run = (client, message, args) => {

  var cargos = message.member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(", ") || "\`Sem cargo\`"
  let user = message.mentions.users.first() || message.author || message.user.id;
  
  const msg = new Discord.MessageEmbed() 
                                         
  .setTitle(`<:rg:752674767009611846> Informações sobre **${message.member.user.tag}**`, true)
  .addField("<:tocha:752674992235217011> » Conhecido neste servidor por:", `${message.member.nickname ? `${message.member.nickname}` : "**Atualmente nenhum...**"}`, true)
  .addField('<:canais:751622323270058065> » ID:', message.member.user.id)
  .addField('<a:loading:752680041619652710> » Status', message.member.presence.status.replace("dnd", "<:npertubar:752682403629367378> Não pertubar").replace("idle","<:ausente:752682403906191360> Ausente").replace('online','<:disponivel:752682403641950360> Disponivel').replace('offline','<:off:752682403981557790> Invisível'), true)                                 
  .addField("<a:discord:752679721237610506> » Jogando:", `${message.member.user.presence.game ? `${message.member.user.presence.game.name}` : "**Nada no momento...**"}`, true)
  .addField('<:developer:751652180703969301> » Cargos atuais:', cargos)
  .addField("<a:clock:752674007492460686> » Conta criada em:", `\`${moment(message.member.user.createdAt).format('LLL')}\``, true)
  .addField('<:seta:752674486561538128> » Entrou nesse servidor em:', `\`${moment(message.member.joinedAt).format('LLL')}\``, true)
  .setColor('#a978ff')
  .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true, size: 512}))
  .setTimestamp()
  .setThumbnail(message.member.user.displayAvatarURL({dynamic: true, size: 512}))
                                      
  message.channel.send(`${message.author}`, msg) 
}

module.exports.help = {
  name:'userinfo',
  aliases: ['user']
}
 