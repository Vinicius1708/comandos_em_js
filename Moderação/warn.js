const { MessageEmbed } = require("discord.js")
const discord = require('discord.js')
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("Você não possui a permissão de **Administrador**.")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("Mencione o indivíduo que você deseja avisar.")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Você não pode dar warns em bots.")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("Você não pode dar warns em si mesmo")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("Está pensando em dar warn no dono? Acho que isso não será possível.")
    }
    
    const reason = args.slice(1).join(" ")
    
    if(!reason) {
      return message.channel.send("Providencie um motivo para seu warn, não queremos ele perdido em nossa lista de warns sem motivos.")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} agora o usuário possui **3** warns deseja fazer algo com ele?`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`Você recebeu warn no servidor do **${message.guild.name}** devido ao motivo: **${reason}**`)
      await message.channel.send(`Você recebeu um warn em: **${message.mentions.users.first().username}** pelo motivo: **${reason}**`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`Você recebeu um warn em **${message.guild.name}** pelo motivo: **${reason}**`)
      await message.channel.send(`Você avisou **${message.mentions.users.first().username}** pelo motivo: **${reason}**`)
    }  

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

    let warn = db.get(`logchannel_${member.guild.id}`);
    
    if(warn === null) {
      return;
    }
  
    let log = new discord.MessageEmbed()
    .setThumbnail(message.guild.iconURL())
    .setTitle(`**Warn**`)
    .addField(`O usuário @${member.user.tag} acaba de receber um warn de ${message.author.username}`, `Devido ao motivo de ${reason}`)
    .setFooter(message.guild.name, message.guild.iconURL())
    .setColor("#a978ff").setTimestamp() 
    client.channels.cache.get(warn).send(log);
    
}
  
  module.exports.help = {
    name:'warn',
    aliases: ['warnuser']
  }