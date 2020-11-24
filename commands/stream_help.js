const Discord = require('discord.js')

module.exports = {
    commands: 'ew_help',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) =>{
        const embed = new Discord.MessageEmbed()
        .setTitle('autostream help')
        .setColor('#800080')
        .addFields({
          name: 'autostream announcement ',
          value: "this announces when some one is live streaming on twitch"
        })
        .addFields({
          name: 'how to add streamers',
          value: "s!addstreamer + (link to the twitch channel)"
        })
  
      message.channel.send(embed)
    },
}