const Discord = require('discord.js')

module.exports = {
    commands: 'help',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) =>{
        const embed = new Discord.MessageEmbed()
        .setTitle('StreamBot help')
        .setColor('#800080')
        .addFields({
          name: 'stream ',
          value: "command1"
        })
        .addFields({
          name: 'ew',
          value: "command2"
        })
        .addFields({
          name: 'command3',
          value: "command3"
        })
        .setFooter("For more help type s!help_ + the command you want more info about(no spaces)")
  
      message.channel.send(embed)
    },
}