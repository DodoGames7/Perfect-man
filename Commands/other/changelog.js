const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "changelog",
  description: "shows a list of changes in the bot",
   aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    const changelog = new MessageEmbed()
    .setTitle('Change Log V1.0.2-fix 1')
    .setDescription('fixed embed footer deprecation warnings');
    
    return message.channel.send({ embeds: [changelog] })
  }
}