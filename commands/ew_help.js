const Discord = require('discord.js')

module.exports = {
    commands: 'ew_help',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) =>{
        const embed = new Discord.MessageEmbed()
        .setTitle('ew help')
        .setColor('#800080')
        .addFields({
            name: 'ew ',
            value: "this is a picture(contains swear words)"
        })
        .addFields({
            name: 'the command',
            value: "s!ew"
        })
        
        message.channel.send(embed)
    },
}
