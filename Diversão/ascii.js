const figlet = require('figlet');
const Discord = require('discord.js')
module.exports.run = (client, message, args, tools) => {
  var maxLen = 100
  if(args.join(' ').length > maxLen) return message.channel.send(`Você pode escrever no máximo ${maxLen} caracteres.`)
  var infocmd = new Discord.MessageEmbed()
    .setTitle("📎 Comando: ascii")
    .addField("<a:check:753729566178148362> Uso:", "**h.ascii** `<mensagem>`", true)
    .addField("📄 Exemplo:", "h.ascii <Luana>", true)
    .setColor("#a978ff")
    .setFooter("Informações do comando: \"ascii\"")
  if(!args[0]) return message.channel.send(infocmd)
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Existe um erro no comando ascii...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}

module.exports.help = {
  name:'ascii',
  aliases: ['asciiart']
};