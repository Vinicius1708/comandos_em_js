const Discord = require('discord.js')
const db = require("quick.db")


module.exports.run = async (bot, message, args) => {
  
  let guild = message.guild.id
  
    let permissao = new Discord.MessageEmbed()
    .setAuthor(`Ops!`)
    .addField(`Ocorreu um erro ao executar este comando!`, `Parece que temos um usuário não autorizado pelas redondezas. Peça a alguém mais experiente para configurar.\n\n`)
    .setImage(`https://tenor.com/view/error-computer-warning-gif-8680016`)
    .setFooter(`${bot.user.username} | Registro `)
    .setColor('#a978ff')
  if(!message.member.hasPermission(["MANAGE_ROLES"])){ return message.channel.send(permissao);
  }
  
  let erro = new Discord.MessageEmbed()
  .setAuthor(`Ocorreu um erro ao executar o comando`)
  .setDescription(`Siga a estrutura correta do comando:` + ` \`h.config ${args[0]} @CargoMencionando\` `)
  .setColor('#a978ff')
  .setFooter(`${bot.user.username}`, bot.user.avatarURL({dynamic: true, size: 512}))
  .setTimestamp()
  
 let registradores = await db.fetch(`${guild}_registradores`)
 let masculino = await db.fetch(`${guild}_masculino`)
 let feminino = await db.fetch(`${guild}_feminino`)
 let nbinario = await db.fetch(`${guild}_nbinario`)
 let cregistrado = await db.fetch(`${guild}_registrado`)
 let novato = await db.fetch(`${message.guild.id}_novato`)
 
 
 if (registradores != null) registradores = `<a:check:753729566178148362> setado para: <@&${registradores.id}> `
 if (registradores === null) registradores = `<a:no:753729100853674086> Desativado | Use: h.config registrador `
 if (masculino != null) masculino = `<a:check:753729566178148362> setado para: <@&${masculino.id}> `
 if (masculino === null) masculino = `<a:no:753729100853674086> Desativado | Use: h.config masculino `
 if (feminino != null) feminino = `<a:check:753729566178148362> setado para: <@&${feminino.id}> `
 if (feminino === null) feminino = `<a:no:753729100853674086> Desativado | Use: h.config feminino `
 if (nbinario != null) nbinario = `<a:check:753729566178148362> setado para: <@&${nbinario.id}> `
 if (nbinario === null) nbinario = `<a:no:753729100853674086> Desativado | Use: h.config nbinario `
 if (cregistrado != null) cregistrado = `<a:check:753729566178148362> setado para: <@&${cregistrado.id}> `
 if (cregistrado === null) cregistrado = `<a:no:753729100853674086> Desativado | Use: h.config registrado ` 
 if (novato != null) novato = `<a:check:753729566178148362> setado para: <@&${novato.id}> `
 if (novato === null) novato = `<a:no:753729100853674086> Desativado | Use: h.config novato `

                    

  
  let config = new Discord.MessageEmbed()
  .setAuthor(`Configuração de Registro`, message.guild.iconURL)
  .setDescription(`**Configurações para o registro do servidor**`)
  .addField(`**Cargo de Feminino**`, `${feminino}`)
  .addField(`**Cargo de Masculino**`, `${masculino}`)
  .addField(`**Cargo de Não Binario**`, `${nbinario}`)
  .addField(`**Cargo de Registrado**`, `${cregistrado}`)
  .addField(`**Cargo de Novato**`, `${novato}`)
  .addField(`**Cargo de Registrador**`, `${registradores}`)
  .setFooter(`${message.guild.name}`)
  .setTimestamp()
  .setColor('#a978ff')
  


  
  if(!args[0]) return message.channel.send(config)
  
  if(args[0] === "registrador") {
    let cargo = message.mentions.roles.first();
    db.set(`${message.guild.id}_registradores`, cargo)
    let ok = new Discord.MessageEmbed()
    .setAuthor(`Config Registro!`, message.guild.iconURL)
    .addField(`O cargo de registradores foi setado para:`, cargo)
    .setFooter(` Harumi  Registro`, bot.user.avatarURL({dynamic: true, size: 512}))
    .setTimestamp()
    .setColor('#a978ff')
    message.channel.send(ok)
}
  
  if(args[0] === "nbinario") {
    let cargo = message.mentions.roles.first();
    if(!cargo) return message.channel.send(erro);
    db.set(`${message.guild.id}_nbinario`, cargo)
    let ok = new Discord.MessageEmbed()
    .setAuthor(`Config Registro!`, message.guild.iconURL)
    .addField(`O cargo de não binário foi setado para:`, cargo)
    .setFooter(` Harumi  Registro`, bot.user.avatarURL({dynamic: true, size: 512}))
    .setTimestamp()
    .setColor('#a978ff')
    message.channel.send(ok)
}
  
  
if(args[0] === "novato") {
    let cargo = message.mentions.roles.first();
  if(!cargo) return message.channel.send(erro);
    db.set(`${message.guild.id}_novato`, cargo)
  
    let ok = new Discord.MessageEmbed()
    .setAuthor(`Config Registro!`, message.guild.iconURL)
    .addField(`O cargo de novato foi setado para:`, cargo)
    .setFooter(`Harumi  Registro`, bot.user.avatarURL({dynamic: true, size: 512}))
    .setTimestamp()
    .setColor('#a978ff')
    message.channel.send(ok)
}
  
if(args[0] === "masculino") {
    let cargo = message.mentions.roles.first();
  if(!cargo) return message.channel.send(erro);
    db.set(`${message.guild.id}_masculino`, cargo)
    let ok = new Discord.MessageEmbed()
    .setAuthor(`Config Registro!`, message.guild.iconURL)
    .addField(`O cargo de masculino foi setado para:`, cargo)
    .setFooter(` Harumi Registro`, bot.user.avatarURL({dynamic: true, size: 512}))
    .setTimestamp()
    .setColor('#a978ff')
    message.channel.send(ok)
}
  
  
if(args[0] === "feminino") {
    let cargo = message.mentions.roles.first();
  if(!cargo) return message.channel.send(erro);
    db.set(`${message.guild.id}_feminino`, cargo)
    let ok = new Discord.MessageEmbed()
    .setAuthor(`Config Registro!`, message.guild.iconURL)
    .addField(`O cargo de feminino foi setado para:`, cargo)
    .setFooter(` Harumi  Registro`, bot.user.avatarURL({dynamic: true, size: 512}))
    .setTimestamp()
    .setColor('#a978ff')
    message.channel.send(ok)
}
  
  if(args[0] === "registrado") {
    let cargo = message.mentions.roles.first();
    if(!cargo) return message.channel.send(erro);
    db.set(`${message.guild.id}_registrado`, cargo)
    let ok = new Discord.MessageEmbed()
    .setAuthor(`Config Registro!`, message.guild.iconURL)
    .addField(`O cargo de registrado foi setado para:`, cargo)
    .setFooter(`Harumi Registro`, bot.user.avatarURL({dynamic: true, size: 512}))
    .setTimestamp()
    .setColor('#a978ff')
    message.channel.send(ok)
}

}

module.exports.help = {
  name:'config',
aliases: ["c", "configuracao", "configs", "configuraçao", "configuração"]
}