const Discord = require("discord.js");

module.exports.run = async (client, message, args, color, prefix) => {
  if (message.author.id !== '680101921356251203' && message.author.id !== '732598967489134655' && message.author.id !== '711048134490456136' && message.author.id !== '648185013728313394' && message.author.id !== '704079478091153540') {
  return message.channel.send("<a:nn:620787932097413130> | **Oops!** Você não tem permissão para utilizar esse comando.")
  }
    if (!args[0]) return message.channel.send(`> <a:no:619235696267362304> **»** utilize: \`${client.prefix}eval\` **<código>**`)
  
  try {
    let codigodeentrada = args.join(" ");
    let codigo = eval(codigodeentrada);

    if (typeof codigo !== "string")
      codigo = require("util").inspect(codigo, { depth: 0 });
    let embed = new Discord.MessageEmbed()
      .setColor('#a978ff')
      .addField("<a:caregando2:733721052370305085> » Código",`\`\`\`js\n${codigodeentrada}\`\`\``)
      .addField("<:debuger:733721511378288693> » Resultado:",`\`\`\`js\n${codigo}\n\`\`\``);
    message.channel.send(embed);
  } catch (e) {
    message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
  }
};

module.exports.help = {
  name:'eval',
  aliases: ['eval']
}