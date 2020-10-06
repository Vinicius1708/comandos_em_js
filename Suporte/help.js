const Discord = require('discord.js')
const config = require("../../config.json")

module.exports.run = (bot, message, args) => {

let embed = new Discord.MessageEmbed()
    .setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
    .setDescription(`**Olá  ${message.author.username}, eu sou Harumi, seja bem-vindo ao meu painel de comandos**`)
    .addField('**Me adicione em seu servidor**', '**<a:seta:751470925915881472> [Convidar Harumi](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)\n<a:seta:751470925915881472> [Vote na Harumi](https://botsparadiscord.com/bots/745772370186207339)\n<a:seta:751470925915881472> [Suporte](https://discord.gg/cb88bUn)**')
.addField(' **Utils** ',
          `<a:1_:751558681124012063> **| Utilidades**\n`+
          `<a:2_:751558694298452009> **| Moderação**\n` +
          `<a:3_:751558749344497865> **| Entretenimento**`, true)
.addField('**Gestão**',
          `<a:4_:751558750074306620> **| Música**\n`+
          `<a:5_:751558751030476852> **| Diversão**\n`+
          `<a:6_:751558750095147118> **| Interação**\n`, true)    
              
          .setImage("https://cdn.discordapp.com/attachments/727315799873683467/751550463224185023/553e6ef457d94e096580e6c98f98e943.jpg")
    .setFooter(`Página 1 de 7 | Solicitado por: ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 512}))

    message.channel.send(embed).then((msg) => {
            msg.react('751558681124012063').then(() => { 
            msg.react('751558694298452009').then(() => { 
            msg.react('751558749344497865').then(() => { 
            msg.react('751558750074306620').then(() => { 
            msg.react('751558751030476852').then(() => { 
            msg.react('751558750095147118').then(() => {
            msg.react('751470925915881472').then(() => {
            
        })
        })
        })
        })
        })
        }) 
        })

     const UtilidadesFilter = (reaction, user, ) => reaction.emoji.id === '751558681124012063' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.id === '751558694298452009' && user.id === message.author.id;
        const EntretenimentoFilter = (reaction, user, ) => reaction.emoji.id === '751558749344497865' && user.id === message.author.id;
        const MúsicaFilter = (reaction, user, ) => reaction.emoji.id === '751558750074306620' && user.id === message.author.id;
        const ZueiraFilter = (reaction, user, ) => reaction.emoji.id === '751558751030476852' && user.id === message.author.id;
        const InteraçãoFilter = (reaction, user, ) => reaction.emoji.id === '751558750095147118' && user.id === message.author.id;
        const OutrosFilter = (reaction, user, ) => reaction.emoji.name === '' && user.id === message.author.id;
        const pornFilter = (reaction, user, ) => reaction.emoji.name === '' && user.id === message.author.id;
        const BackFilter = (reaction, user, ) => reaction.emoji.id === '751470925915881472' && user.id === message.author.id;
        const Utilidades = msg.createReactionCollector(UtilidadesFilter, { time: 80000 });
        const Moderação = msg.createReactionCollector(ModeraçãoFilter, { time: 80000 });
        const Entretenimento = msg.createReactionCollector(EntretenimentoFilter, { time: 80000 });
        const Música = msg.createReactionCollector(MúsicaFilter, { time: 80000 });
        const Zueira = msg.createReactionCollector(ZueiraFilter, { time: 80000 });
        const Interação = msg.createReactionCollector(InteraçãoFilter, { time: 80000 });
        const Outros = msg.createReactionCollector(OutrosFilter, { time: 80000 });
        const porn = msg.createReactionCollector(pornFilter, {time: 80000});
        const Back = msg.createReactionCollector(BackFilter, { time: 80000 });

        Utilidades.on('collect', (reaction, user) => { 
            const u = user.id == message.member.id
  if (u) {
    reaction.users.remove(user.id)
  }
            embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/727315799873683467/751550463224185023/553e6ef457d94e096580e6c98f98e943.jpg")

.setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
.addField('**Fixados**', '>  **[Meu convite](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)**')
                .setTitle("<a:1_:751558681124012063> |Comandos para utilidades")
                .setDescription(`• **${config.prefix}ajuda** ou _(${config.prefix}help)_ » Mostra todos os comandos do bot.\n• **${config.prefix}convite** » Deixe-me entrar em seu servidor preferido.\n• **${config.prefix}userinfo** \`<@user>\` » Mostra informações do usuário mencionado, ou sobre o seu usuário.\n• **${config.prefix}botinfo** » Descubra algumas informações a mais sobre mim.\n• **${config.prefix}serverinfo** » Mostra as informações do servidor.\n• **${config.prefix}avatar** \`<@user>\` » Veja o avatar do usuário mencionado, em um formato maior.\n• **${config.prefix}apagar ou ${config.prefix}clear** \`<quantidade>\` » Utilizado para apagar um grande número mensagens.\n• **${config.prefix}ping** » Veja meu ping/ms.\n• **${config.prefix}aviso** » Enviara um anúncio para o servidor.\n• **${config.prefix}say** » Escreva uma mensagem que você deseja para que eu posso falar.\n• **${config.prefix}servericon** » mostra o ícone do servidor.`)
                .setColor('#a978ff')
              .setFooter(`Página 2 de 7 | Solicitado por: ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 512}))

            msg.edit(embed);
        })

        Moderação.on('collect', (reaction, user) => { 
            const u = user.id == message.member.id
  if (u) {
    reaction.users.remove(user.id)
  }
            embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/727315799873683467/751550463224185023/553e6ef457d94e096580e6c98f98e943.jpg")

.setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
.addField('**Fixados**', '>  **[Meu convite](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)**')
                .setTitle("<a:2_:751558694298452009> |Comandos para moderação")
                .setDescription(`• **${config.prefix}ban** \`<@user>\` \`<motivo>\` » Bane um usuário do servidor.\n• **${config.prefix}kick** \`<@user>\` \`<motivo>\` » Expulsar um membro do servidor.\n• **${config.prefix}tempmute** \`<@user>\` \`<tempo>\` » Muta o usuário por o tempo determinado.\n• **${config.prefix}mute** \`<@user>\` \`<motivo>\` » Muta o usuário mencionado.\n• **${config.prefix}unmute** \`<@user>\` \`<tempo>\` » Irá desmutar o usuário mencionado.\n• **${config.prefix}lock** » Tranca o canal, permitindo que apenas administradores envie mensagens.\n• **${config.prefix}unlock** » Irá destravar o canal permitindo que todos possam enviar mensagens.\n• **${config.prefix}warn** \`<@user>\` \`<motivo>\` » Irá dar warn no usuário mencionado.\n• **${config.prefix}unwarn** \`<@user>\` » Irá retirar dos os warns do usuário mencionado.\n• **${config.prefix}warnlist** \`<@user>\` » Mostra todos os warns do usuário mencionado.\n• **${config.prefix}setlog** \`<#canal>\` » Irá definir o sistema de logs para o canal mencionado.\n• **${config.prefix}unlog** \`<#canal>\` » Irá remover o canal de logs.\n• **${config.prefix}config** » Abrirá um painel para a configuração de registro.`)
                .setColor('#a978ff')
              .setFooter(`Página 3 de 7 | Solicitado por: ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 512}))

            msg.edit(embed);
        })

        Entretenimento.on('collect', (reaction, user) => { 
            const u = user.id == message.member.id
  if (u) {
    reaction.users.remove(user.id)
  }
            embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/727315799873683467/751550463224185023/553e6ef457d94e096580e6c98f98e943.jpg")

.setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
.addField('**Fixados**', '>  **[Meu convite](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)**')
                .setTitle("<a:3_:751558749344497865> | Comandos de entretenimento")
                .setDescription(`• **${config.prefix}ascii** » Escreva uma mensagem tornando-a em ascii.\n• **${config.prefix}8ball** \`<mensagem>\` \`<tempo>\` » Faça-me uma pergunta e eu te responderei.`)
                .setColor('#a978ff')
              .setFooter(`Página 4 de 7 | Solicitado por: ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 512}))

            msg.edit(embed);
        })
 
        Música.on('collect', (reaction, user) => { 
            const u = user.id == message.member.id
  if (u) {
    reaction.users.remove(user.id)
  }
            embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/727315799873683467/751550463224185023/553e6ef457d94e096580e6c98f98e943.jpg")

.setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
.addField('**Fixados**', '>  **[Meu convite](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)**')
                .setTitle("<a:4_:751558750074306620> | Comandos de música")
                .setDescription(`• **${config.prefix}play** \`<link>\` » Toca uma música.\n• **${config.prefix}skip** » Pula a música.\n• **${config.prefix}stop** » Para a música.\n• **${config.prefix}volume** » Muda o volume da música.\n• **${config.prefix}np** » Motra a músia que está sendo tocada.\n• **${config.prefix}queue** » Lista das músicas.\n• **${config.prefix}pause** » Pausa a música.\n• **${config.prefix}resume** » Volta a tocar a música.\n• **${config.prefix}radio list** » Abre a lista de Rádios disponiveis na Luana.\n• **${config.prefix}radio stop** faz com que o bot saia do canal.`)
.setColor('#a978ff')
              .setFooter(`Página 5 de 7 | Solicitado por: ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 512}))

            msg.edit(embed);
        })

        Zueira.on('collect', (reaction, user) => { 
            const u = user.id == message.member.id
  if (u) {
    reaction.users.remove(user.id)
  }
            embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/727315799873683467/751550463224185023/553e6ef457d94e096580e6c98f98e943.jpg")

.setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
.addField('**Fixados**', '>  **[Meu convite](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)**')
                .setTitle("<a:5_:751558751030476852>  | Comandos de diversão")
                .setDescription(`• **${config.prefix}fumar** » Acenda uns basedos muito, ultra, megapower, locos!!!\n• **${config.prefix}dog** » Gosta de Dogs? Sim? Então esse comando foi feito para você!\n• **${config.prefix}cat** » Meow, meow, humm!!! Gatinho são muito fofinhos, não acha?\n• **${config.prefix}coinflip** » Cara ou coroa?\n• **${config.prefix}corrida** \`<@user>\` » Faz uma corrida com o usuário desejado.\n• **${config.prefix}fake** \`<@user>\` » Cria uma fake do usuário mencionado.\n• **${config.prefix}morse** \`<@user>\` » Transforma tudo oque você digita em codigo morse.`)
                .setColor('#a978ff')
              .setFooter(`Página 6 de 7 | Solicitado por: ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 512}))

            msg.edit(embed);
        })
        
        Interação.on('collect', (reaction, user) => { 
            const u = user.id == message.member.id
  if (u) {
    reaction.users.remove(user.id)
  }
            embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/727315799873683467/751550463224185023/553e6ef457d94e096580e6c98f98e943.jpg")
.setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
.addField('**Fixados**', '>  **[Meu convite](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)**')
                .setTitle("<a:6_:751558750095147118>  | Comandos de interação")
                .setDescription(`• **${config.prefix}beijar** \`<@user>\` » De um beijo na pessoa que você mais ama!\n• **${config.prefix}abraco** \`<@user>\` » Abrace a pessoa que você gosta.\n• **${config.prefix}chutar** \`<@user>\` » De um chute em alguém.\n• **${config.prefix}soco** \`<@user>\` » Acerte um soco em alguém!\n• **${config.prefix}policia** \`<@user>\` » Chame a polica para um usúario.`)
                .setColor('#a978ff')
              .setFooter(`Página 7 de 7 | Solicitado por: ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 512}))

            msg.edit(embed);
        })
        
        Outros.on('collect', (reaction, user) => { 
            const u = user.id == message.member.id
  if (u) {
    reaction.users.remove(user.id)
  }
            embed = new Discord.MessageEmbed()
.setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
.addField('**Fixados**', '>  **[Meu convite](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)**')
                .setTitle("7️⃣ | Outros")
                .setDescription(`• **${config.prefix}bug** \`<bug>\` » Caso encontre algum bug em meus comandos basta reportar o bug, que minha equipe de suporte está prota para resolver-lo.\n• **${config.prefix}sugestao** \`<sugestão>\` » Deem sugestões de comandos para mim.\n• **${config.prefix}host** » Veja as informações de minha Host.`)
                .setColor('#a978ff')
            msg.edit(embed);
        })
        
      
         porn.on('collect', (reaction, user) => { 
            const u = user.id == message.member.id
  if (u) {
    reaction.users.remove(user.id)
  }
            embed = new Discord.MessageEmbed()
.setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
.addField('**Fixados**', '>  **[Meu convite](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)**')
             .setTitle("8️⃣ |Porn (Válido somente em chats NSFW)")
             .setDescription(`• **${config.prefix}hentai** » Envia um GIF hentai no chat`)
            msg.edit(embed);
        })
        Back.on('collect', (reaction, user) => { 
            const u = user.id == message.member.id
  if (u) {
    reaction.users.remove(user.id)
  }
            embed = new Discord.MessageEmbed()
            .setImage("https://cdn.discordapp.com/attachments/727315799873683467/751550463224185023/553e6ef457d94e096580e6c98f98e943.jpg")
             .setAuthor(bot.user.username,bot.user.avatarURL({dynamic: true, size: 512}))
    .setThumbnail(bot.user.avatarURL({dynamic: true, size: 512}))
    .setDescription(`**Olá  ${message.author.username}, eu sou Harumi, seja bem-vindo ao meu painel de comandos**`)
    .addField('**Me adicione em seu servidor**', '**<a:seta:751470925915881472> [Convidar Harumi](https://discordapp.com/oauth2/authorize?client_id=745772370186207339&scope=bot&permissions=8)\n<a:seta:751470925915881472> [Vote na Harumi](https://botsparadiscord.com/bots/745772370186207339)\n<a:seta:751470925915881472> [Suporte](https://discord.gg/cb88bUn)**')
.addField(' **Utils** ',
          `<a:1_:751558681124012063> **| Utilidades**\n`+
          `<a:2_:751558694298452009> **| Moderação**\n` +
          `<a:3_:751558749344497865> **| Entretenimento**`, true)
.addField('**Gestão**',
          `<a:4_:751558750074306620> **| Música**\n`+
          `<a:5_:751558751030476852> **| Diversão**\n`+
          `<a:6_:751558750095147118> **| Interação**\n`, true)   
              
    .setFooter(`Página 1 de 7 | Solicitado por: ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 512}))
    
            msg.edit(embed);
        })
    });
};
module.exports.help = {
    name:"help",
    aliases: ["ajuda"]
    }  