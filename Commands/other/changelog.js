const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "changelog",
  description: "shows a list of changes in the bot",
   aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    const changelog = new MessageEmbed()
    .setTitle('Change Log V1.0.2')
    .setDescription('updated to 13.7.0 (v14 was never a lie for real)\n added some image commands + fix god damn broke stuff\n added stats command');
    
    return message.channel.send({ embeds: [changelog] })
  }
}