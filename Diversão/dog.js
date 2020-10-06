const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (bot, message, args) => {
    let {body} = await superagent
        .get(`https://random.dog/woof.json`);
    let dogembed = new Discord.MessageEmbed()
        .setDescription("Dog :dog:")
        .setColor('#a978ff')
        .setImage(body.url);
    message.channel.send(dogembed);
}
module.exports.help = {
    name:"dog",
    aliases: ["cachorro"]
    }
