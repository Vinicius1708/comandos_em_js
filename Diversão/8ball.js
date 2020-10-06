const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let respostas = ["É certo",
					"É decididamente assim.",
					"Sem duvida.",
					"Sim definitivamente.",
					"Você pode contar com ele.",
					"Como eu vejo, sim.",
					"Provavelmente.",
					"Perspectiva boa.",
					"Sim.",
					"Sinais apontam que sim.",
					"Tente novamente.",
					"Melhor não te dizer agora.",
					"Não é possível prever agora.",
					"Concentre-se e pergunte novamente.",
					"Não conte com isso.",
					"Minha resposta é não.",
					"Minhas fontes dizem não.",
					"Perspectiva não é tão boa.",
					"Muito duvidoso."];
    let resultado = Math.floor((Math.random() * respostas.length));
    let questão = args.join(" ");
	var info = new Discord.MessageEmbed()
	.setTitle(":8ball: Comando: 8ball")
	.addField("<a:check:753729566178148362> Uso:", "**h.8ball** `<mensagem>`", true)
	.addField("📄 Exemplo:", "h.8ball Você gosta de mim?", true)
	.setColor("#a978ff")
	.setFooter("Informações do comando: \"8ball\"")
  if(!args[0]) return message.channel.send(info)
    let ballembed = new Discord.MessageEmbed()
        .setTitle("8ball 🎱")
        .setDescription(`${message.author} fez uma pergunta 🤔`)
        .addField('Questão 📝:', questão)
        .addField("Resposta 📃:", respostas[resultado])
        .setColor('#a978ff')
        .setThumbnail(message.author.avatarURL({dynamic: true, size: 512}))
        .setFooter(`Pergunta feita por: ${message.author.tag}`, message.author.avatarURL({dynamic: true, size: 512}))
        .setTimestamp()
    message.channel.send(ballembed);          
}

module.exports.help = {
	name:'8ball',
	aliases: ['pergunta', 'ball']
  }