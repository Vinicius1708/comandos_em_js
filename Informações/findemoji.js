const Discord = require("discord.js");
const emojis = ["627602048703004673", "627602158279327774"];

module.exports.run = async (client, message, args) => {

  if (
    !message.guild.members
      .cache.get("662052960351551490"))
  if (!message.member.hasPermission("MANAGE_EMOJIS"))
    return message.channel
      .send(
        "<a:no:753729100853674086>> **»** Oops! Você não possui a permissão de **Gerenciar Emojis**."
      )
  
    if (!args[0]) return message.channel.send(`> <a:no:619235696267362304> **»** Utilize: \`${client.prefix}findemoji\` **<nome do emoji>**`)      

  let busca = args.join(" ");

  if (!busca)
    return message.channel.send(
      "<a:no:753729100853674086>> » Você não informou um emoji para ser procurado."
    );
  const array = client.emojis.cache
    .filter(a => a.name.includes(busca))
    .map(a => a.id);
  if (array.length < 1)
    return message.channel.send(
      "<a:no:753729100853674086>> » Não consegui encontrar nenhum emoji com este nome."
    );
  let pages = Math.floor(array.length / 9) || 1;
  let page = 0;

  const embed = new Discord.MessageEmbed()
    .setTitle(`:mag: **Resultados para »** \`${busca}\``)
    .setDescription(
      `<a:check:753729566178148362> » Logo abaixo estão todos os resultados para a sua pesquisa, para poder adicionar o emoji basta clicar na sua reação.`
    )
    .setColor('#a978ff')
    .setFooter(`Página 1/${pages}`);

  const msg = await message.channel.send(embed);
  for (let i = 0; i < 9; i++) array[i] && msg.react(`${array[i]}`);
  for (let emoji of emojis) await msg.react(emoji);

  const r1 = msg.createReactionCollector(
    (r, user) => user.id === message.author.id,
    { max: 1 }
  );

  r1.on("collect", async r => {
    if (r.emoji.id == emojis[0]) {
      if (page == 0) return;
      await msg.clearReaction(message.author.id);
      page--;
      embed.setFooter(`Página ${page}/${pages}`);
      msg.edit(embed);
      for (let i = page * 9; i < page * 9 + 9; i++)
        array[i] && msg.react(array[i]);
    }

    if (r.emoji.id == emojis[1]) {
      if (page == pages) return;
      await msg.clearReaction(message.author.id);
      page++;
      embed.setFooter(`Página ${page}/${pages}`);
      msg.edit(embed);
      for (let i = page * 9; i < page * 9 + 9; i++)
        array[i] && msg.react(array[i]);
    }

    if (array.includes(r.emoji.id)) {
      const emoji = client.emojis.get(r.emoji.id);
      message.guild.createEmoji(emoji.url, emoji.id);
      message.channel.send(
        `<a:check:753729566178148362> » O emoji ${emoji} foi adicionado com sucesso!`
      );
    }
  });
};

module.exports.help = {
  name:'findemoji',
  aliases: ['find']
}