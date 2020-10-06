const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
   
  let Invite = await message.guild.channels.cache.find((c) => c.type === 'text').createInvite()
  var hrs = Math.round(client.uptime / (1000 * 60 * 60)) + " hora(s),"
  var mins = " " + Math.round(client.uptime / (1000 * 60)) % 60 + " minuto(s), "
  var sec = Math.round(client.uptime / 1000) % 60 + " segundo(s)"
  if (hrs == "0 hora(s),") hrs = ""
  if (mins == " 0 minuto(s), ") mins = ""
  let uptime = hrs+mins+sec
  //
let bicon = client.user.displayAvatarURL({dynamic: true, size: 512});
    let string = ' ';
    client.guilds.cache.forEach(guild => {
    string += `${guild.name} ` + '\n';})
    let bt = client.user.username;
    console.log(`${string}`)

    
}

    module.exports.help = {
    name:"servidores",
    aliases: ['server-count', 'svs']
    }

