const db = require("quick.db")
const discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Você não possui a permissão de **Administrador**.")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("Mencione o meliante que você deseja retirar o aviso.")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Parece que está tentando dar um de espertinho, você não pode dar retirar warns de bots.")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Você não pode retirar seus próprios warns.")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} Não possui warns.`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Você resetou todos os warns de ${message.author.username} no servidor de **${message.guild.name}**`)
    await message.channel.send(`Warns de ${message.mentions.users.first().username} foram apagados para sempre.`)

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let unwarn = db.get(`logchannel_${member.guild.id}`);
    
    if(unwarn === null) {
      return;
    }
  
    let log = new discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL())
    .setTitle(`**Unwarn**`)
    .addField(`O usuário @${member.user.tag} acaba de ter seus warns retirados por ${message.author.username}`, `Parece que o usuario decidiu se comportar.`)
    .setFooter(message.guild.name, message.guild.iconURL())
    .setColor("#a978ff").setTimestamp() 
    client.channels.cache.get(unwarn).send(log);
    
}
module.exports.help = {
    name:'unwarn',
    aliases: ['resetwarns']
  }