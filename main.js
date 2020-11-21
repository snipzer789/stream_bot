const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command_manager')
const commands = require('./commands')

client.on('ready', () => {
  console.log('The bot is ready')

  command(client, 'help', (message) => {
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
  })

  command(client, 'help_stream', (message) => {
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
  })
  //I hate mee6
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

client.login(config.token)
