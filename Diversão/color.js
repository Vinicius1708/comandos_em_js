const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var string = args.join(" ");
  var colors = [
    { 
      name: "Vermelho",
      id: "740986946826010716"
    },
    {
      name: "Verde",
      id: "740986984889057300"
    },
    {
      name: "Azul",
      id: "740987321779748874"
    },
    {
        name: "Roxo",
        id: "740987350166929420"
    }
  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  });

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
      return await message.channel.send(`${message.author}, escreva o nome da cor após o comando.`);
  } else if (args[0].toLowerCase()  === "remove") {
      await message.member.roles.remove(ids);
      return await message.channel.send(`${message.author}, suas cores foram resetadas ao padrão.`);
  } else if (!names.includes(string.toLowerCase()) || !role) {
    return message.channel.send(
      `${message.author}, não existe cores com o nome ${string} neste servidor.`
    );
  } else {
    try {
      await message.member.roles.remove(ids);
      await message.member.roles.add(role);
      return await message.channel.send(`${message.author}, agora você ganhou a cor ${string}`);
    } catch (err) {
      console.error("Erro: " + err);
    }
  }
};
exports.help = {
  name: 'color',
  aliases: ['cor']
}