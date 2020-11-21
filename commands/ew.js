const config = require('../config.json')
const command = require('../command_manager')

client.on('ready', () => {
    console.log('command ew is ready')

    command(client, 'help_ew', (message) => {
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
    })

    command(client, 'ew', (message) => {
        message.channel.send('https://imgur.com/sYC6mM4')
    });
    
    
})