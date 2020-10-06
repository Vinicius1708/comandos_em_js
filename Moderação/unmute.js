const discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Você não tem permissão de **Gerenciar Canais**")
        let user = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
        if(!toMute) return message.channel.send("Mencione um usuário ou ID para desmutar.")
        let role = message.guild.roles.cache.find(x => x.name === "Silenciado");
        
        if(!role || !toMute.roles.cache.has(role.id)) return message.channel.send("Este usuário não está mudo.")

        await toMute.roles.remove(role);
        message.channel.send(`${user} foi desmutado!`)
        let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

        let unmute = db.get(`logchannel_${member.guild.id}`);
        
        if(unmute === null) {
          return;
        }
      
        let log = new discord.MessageEmbed()
        .setThumbnail(message.guild.iconURL())
        .setTitle(`**Unmute**`)
        .addField(`O usuário @${member.user.tag} acaba de ser desmutado por ${message.author.username}`)
        .setFooter(message.guild.name, message.guild.iconURL())
        .setColor("#a978ff").setTimestamp() 
        client.channels.cache.get(unmute).send(log);
}

module.exports.help = {
    name:'unmute',
    aliases: ['desmutar']
  }