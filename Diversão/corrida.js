const Discord = require('discord.js')
module.exports.run = async  (client, message, args) => {
let user = message.mentions.users.first();
var infocmd = new Discord.MessageEmbed()
.setTitle("📎 Comando: corrida")
.addField("<a:check:753729566178148362> Uso:", "**h.corrida** `@usuário`", true)
.addField("📄 Exemplo:", "h.corrida Theuzz#0001", true)
.setColor("#a978ff")
.setFooter("Informações do comando: \"corrida\"")
if(!args[0]) return message.channel.send(infocmd)
          const Corrida = "<@" + message.author.id + ">" 
          const corrida2 =  " <@" + user.id + ">"
          var falas = [" fez **200** metros 🏎 ....."," fez **500** metros 🏎 ..........."," fez **800** metros 🏎 .............."," fez **1000** metros 🏎 ................."," fez **1500** metros 🏎 ............................","Explodiu 🔥 ","Bateu e pegou fogo 🔥" ]
          message.channel.send({
              "embed": {
                  "title": "🏎 Corrida",
                  "description": " O " + Corrida + " e" +  corrida2 + " **estao disputando uma corrida**" ,
                  "color": "65535",
                  
                  "fields": [
                      {
                          "name":"Sobre a corrida:",
                          "value":  "O " + Corrida +  "\n" + falas[Math.round(Math.random() * falas.length)]  + "\n" +  "O " + corrida2 +  "\n" + falas[Math.round(Math.random() * falas.length)],
                          "inline": false
                        }
                    ]
                }
            })
        }
        module.exports.help = {
            name:'corrida',
            aliases: ['run']
          }