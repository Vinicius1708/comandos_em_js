const prefix = "h."
module.exports.run = async (client, message, args) => {
    if (!message.content.startsWith(prefix)) return;

    message.reply('você acendeu um cigarro.').then(async msg => {
        setTimeout(() => {
          
            msg.edit('**MACONHA DA BRABA**');
        }, 500);
        setTimeout(() => {
            msg.edit(':smoking:');
        }, 1500);
       setTimeout(() => {
            msg.edit(':smoking: :cloud: ');
        }, 2000);
        setTimeout(() => {
            msg.edit(':smoking: :cloud::cloud: ');
        }, 2500);
        setTimeout(() => {
            msg.edit(':smoking: :cloud::cloud::cloud: ');
        }, 3000);
        setTimeout(() => {
            msg.edit(':smoking: :cloud::cloud:');
        }, 3500);
        setTimeout(() => {
            msg.edit(':smoking: :cloud:');
        }, 4000);
        setTimeout(() => {
            msg.edit(':smoking: ');
        }, 4500);
        setTimeout(() => {
            msg.edit(`Seu baseado acabou, use: **h.fumar** para tragar mais um.`);
        }, 5000);
    });
};
module.exports.help = {
    name:'fumar',
    aliases: ['cachimbar']
  }