const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
const cpuStat = require("cpu-stat");
moment.locale("pt-BR");

module.exports.run = async (client, message, args) => {

  if (os.platform() === "linux")
    var plata = "<:linux:625509707842584586> linux";

  let msg = message;
  msg.delete().catch(O_o => {});
  let { version } = require("discord.js");

  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }

    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let second = Math.floor(totalSeconds % 60);

    const info = new Discord.MessageEmbed()
      .setTitle(
        `<a:love:751652672100106301> Olá, meu nome é ${client.user.username}!`,
        client.user.avatarURL({dynamic: true, size: 512})
      )
      .addField(
        " **Atualmente com**",
        ` <:usurios:751621239080222721>» \`${client.users.cache.size}\` usuários\n <:cloud:751622139815395451>» \`${client.guilds.cache.size}\` servidores\n<:canais:751622323270058065> » \`${client.channels.cache.size}\` canais\n<a:pin:751623895785799810> » \`${client.emojis.cache.size}\` emojis`,
        true
      )

      .addField(
        " **<:clock:751622871159406632> » Uptime**",
        `Estou acordado à: \`${days} dias, ${hours} horas, ${minutes} minutos e ${second} segundos\``
      )
      .addField(
        "<a:duvidas:751650792343207956> **» Duvidas?**",
        `Use \`h.ajuda\` para saber meus comandos!`
      )
      .addField(
        "<:link:751651119200993300> **» Links**",
        `<:bot:751652180397785159> » [Adicione-me](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)\n<:developer:751652180703969301> » [Suporte](https://discord.gg/cb88bUn)\n`
      )
      .addField(
        "<a:star:751651910666158150>**» Desenvolvedores**",
        `\ Theuzz#0001 \
        `
      )
      .setFooter(
        `Comando solicitado por: ${message.author.tag}`,
        message.author.avatarURL({dynamic: true, size: 512})
      )
      .setThumbnail(client.user.avatarURL({dynamic: true, size: 512}))
      .setColor("#a978ff")
      .setTimestamp();

    message.channel.send(message.author, info);
  });
};

module.exports.help = {
  name:"botinfo",
  aliases: ['bot']
};
