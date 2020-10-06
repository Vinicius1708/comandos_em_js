const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    await message.delete()

    let mensg = args.join(' ')
    if (!mensg) {
        message.channel.send(`${message.author}, digite uma sugestão. :mailbox_with_no_mail:`)
        return undefined;
    }

    const embed = new Discord.MessageEmbed()
        .setAuthor(`Sugestão de: ${message.author.username}`)
        .setDescription(`${mensg}`)
        .setColor('#a978ff')
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
    client.channels.cache.get(`751527724601966633`).send(embed)
        .then(function (msg) {
            msg.react("👍");
            msg.react("👎"); 
            message.channel.send(`${message.author}, sua sugestão foi enviada em <#751527724601966633>. :mailbox_with_no_mail:`)
        }).catch(function (error) {
            console.log(error);
        });
}

module.exports.help = {
    name:'sugestão',
    aliases: ['ideias']
  }