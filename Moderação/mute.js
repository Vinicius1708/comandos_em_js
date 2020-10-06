const ms = require("ms");
const db = require('quick.db')
const discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(`Você não possui a permissão de **Gerenciar cargos**.`)
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(`Não tenho permissão de **Gerenciar cargos**.`)
  }

  const user = message.mentions.members.first();
  
  if(!user) {
    return message.channel.send(`Mencione alguém que você deseja mutar.`)
  }
  
  if(user.id === message.author.id) {
    return message.channel.send(`Você não pode mutar a si mesmo.`)
  }
  
  let muterole = message.guild.roles.cache.find(x => x.name === "Silenciado")
  
  
    if(!muterole) {
    return message.channel.send('Este servidor não possui um cargo com o nome de `Silenciado`')
  }
  
 if(user.roles.cache.has(muterole)) {
    return message.channel.send('Este usuário já está mudo.')
  }

  user.roles.add(muterole)
  await message.channel.send(`**${message.mentions.users.first().username}** foi mutado por tempo inderminado, quer definir um tempo? Use o meu comando de tempmute`)

  const mod = message.author;
  let user1 = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

  let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            let mute = db.get(`logchannel_${member.guild.id}`);
            
            if(mute === null) {
              return;
            }
  const log = new discord.MessageEmbed()
  .setAuthor(' Ação | Mute')
  .setThumbnail(`https://media3.giphy.com/media/3og0Iz5UaNsqlbl08E/giphy.gif`)
  .addField('Usuário mutado', `<@${user1.id}>`)
  .addField('Staff responsável pelo mute', `${mod}`)
  .setColor('#a978ff')
  client.channels.cache.get(mute).send(log);
  
};

module.exports.help = {
    name: 'mute',
    aliases: ['mute']
}