module.exports = async (client, message, args) => {
    if (!args.join(" ")) return message.reply("**Digite alguma coisa.**");
    let say = args.join(' ');
    message.channel.send(say,{disableEveryone:true});
};
exports.help = {
    name: 'say',
    aliases: ['falar']
}