const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

    const filterLevels = {
        DISABLED: 'Desligado',
        MEMBERS_WITHOUT_ROLES: 'Sem cargo',
        ALL_MEMBERS: 'Everyone'
    };
    
    const verificationLevels = {
        NONE: 'Nenhuma',
        LOW: 'Baixa',
        MEDIUM: 'Media',
        HIGH: '(╯°□°）╯︵ ┻━┻',
        VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
    };
    
    const regions = {
        brazil: 'Brasil'
    };
    exports.run = (bot, message, args) => {
            const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
            const members = message.guild.members.cache;
            const date = message.guild.createdAt
            const channels = message.guild.channels.cache;
            const emojis = message.guild.emojis.cache;
            function formatDate (template, date) {
                var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
                date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
                return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
                  return template.split(specs[i]).join(item)
                }, template)
              }
              console.log(bot.guilds.cache.map(g => `${g.name} ( ${g.guild.user.tag} )`))
            const embed = new Discord.MessageEmbed()
                .setColor('#a978ff')
                .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField('<a:discord:733721221698420877>・Serverinfo', [
                `**<:userinfo:741054233914114189>・Nome:** \`${message.guild.name}\``,
                `**<:sv:736051221923758180>・ID:** \`${message.guild.id}\``,
                `**<:owner:733720699243593848>・Dono:** \`${message.guild.owner.user.tag} (${message.guild.ownerID})\``,
                `**<a:mundo:733721682749161482>・Região:** \`${regions[message.guild.region]}\``,
                `**<a:bost:698365680839426059>・Nível de boost:** \`${message.guild.premiumTier ? `Número ${message.guild.premiumTier}` : 'Nenhum'}\``,
                `**<a:reativo:698352624298360853>・Filtro de levels:** \`${filterLevels[message.guild.explicitContentFilter]}\``,
                `**<:seta_verde:741015731562479627>・Nível de verificação:** \`${verificationLevels[message.guild.verificationLevel]}\``,
                `**<:tempo:736655646899961887>・Criado em:**`, formatDate('DD/MM/YYYY, às HH:mm:ss', date)
                ])
                message.channel.send(embed).catch(err => message.channel.send(erros)).then(async msg => {
                await msg.react('736703182402486382')
                await msg.react('736634435956375552')
                const estatisticas = (reaction, user) => reaction.emoji.name === 'staff' && user.id === message.author.id;
                const back = (reaction, user) => reaction.emoji.name === "back" && user.id === message.author.id;
                const estatisticasL = msg.createReactionCollector(estatisticas)
                const backL = msg.createReactionCollector(back)
                estatisticasL.on('collect', (reaction, user) => { 
                    const u = user.id == message.member.id
          if (u) {
            reaction.users.remove(user.id)
          }
                    const embedd = new Discord.MessageEmbed()
                    .setColor('#a978ff')
                .addField('Estatisticas', [
                    `**<:cargo:734557993105883206>・Número de cargos:** \`${roles.length}\``,
                    `**<a:server:726921394377458119>・Número de emojis:** \`${emojis.size}\``,
                    `**<:membros:734560411826782259>・Total de memebros:** \`${message.guild.memberCount}\``,
                    `**<:humano:734560722272387245>・Humanos:** \`${members.filter(member => !member.user.bot).size}\``,
                    `**<:bot:734498521285394483>・Bots:** \`${members.filter(member => member.user.bot).size}\``,
                    `**<:texto:734559616800653443>・Canais de texto:** \`${channels.filter(channel => channel.type === 'text').size}\``,
                    `**<:voz:734561119317917737>・Canais de voz:** \`${channels.filter(channel => channel.type === 'voice').size}\``,
                    '\u200b'
                ])
                msg.edit(embedd)
                backL.on('collect', (reaction, user) => { 
                    const u = user.id == message.member.id
          if (u) {
            reaction.users.remove(user.id)
          }
                    const embedd = new Discord.MessageEmbed()
                    .setColor('#a978ff')
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .addField('<:info:734502237778477177>・Serverinfo', [
                        `**<:discord:734496207845720094>・Nome:** \`${message.guild.name}\``,
                        `**<:id:734555092262322187>・ID:** \`${message.guild.id}\``,
                        `**<:coroa:730127228805054547>・Criador:** \`${message.guild.owner.user.tag} (${message.guild.ownerID})\``,
                        `**:map:・Região:** \`${regions[message.guild.region]}\``,
                        `**<a:boost:726927113617276998>・Nível de boost:** \`${message.guild.premiumTier ? `Número ${message.guild.premiumTier}` : 'Nenhum'}\``,
                        `**<a:discordfofo:733721341643063398>・Filtro de levels:** \`${filterLevels[message.guild.explicitContentFilter]}\``,
                        `**<:verificado:730127982886125649>・Nível de verificação:** \`${verificationLevels[message.guild.verificationLevel]}\``,
                        `**<:criacao:734494955472551946>・Criado em:**`, formatDate('DD/MM/YYYY, às HH:mm:ss', date)
                        ])
                    msg.edit(embedd)

            },
        )},
    )},
)},
    


exports.help = {
    name: 'serverinfo',
    description: 'Verifica as informações do servidor',
    usage: 'serverinfo',
    aliases: ['server', 'serverinfo']
}