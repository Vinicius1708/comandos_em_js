const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    try {
let user;

if (message.mentions.users.first()) {
  user = message.mentions.users.first();
  
} else if(args[0]) {
    user = client.users.cache.get(args[0]);

}
let botmessage = args.slice(1).join(' ')

if (args[0] == null) {return message.channel.send(`${message.author}, **Mencione um usuário.**`)}


if (args[1] == null) {return message.channel.send(`${message.author},  **Diga algo.**`)}
message.channel.createWebhook(user.username, user.avatarURL()).then(w => {
    w.send(botmessage);

})

} catch (err) {
message.reply('Eu não tenho permissão para criar um **Webhook** neste servidor, ou não encontrei este usuário.')
}
}
module.exports.help = {
    name:'fake',
    aliases: ['falso']
  }