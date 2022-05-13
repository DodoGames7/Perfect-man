const { MessageEmbed, version } = require('discord.js');
const os = require('os')

module.exports = {
  name: "stats",
  description: "shows stats info about the bot",
  aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    const statsembed = new MessageEmbed()
    .setTitle('stats')
    .setField('version', 'v${version}');
    return message.channel.send({ embeds: [statsembed] })
  }
}