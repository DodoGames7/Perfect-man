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
    .setTitle(`${client.user.username}'s stats`)
    .addField('Discord.js', `\`v${version}\``, true)
    .addField('platform', `${os.platform}`, true)
    .addField('Node.js', `\`${process.version}\``, true)
    .addField('server Count', `${client.guilds.cache.size}`, true)
    .addField('user Count', `${client.guilds.cache.map((g) => g.memberCount || 0).reduce((x, y) => x + y, 0)}`, true)
    .addField('Ping', `${client.ws.ping}ms`, true)
    .setColor('RANDOM')
    .setFooter({ text: 'bot coded by dodoGames' });
    return message.channel.send({ embeds: [statsembed] })
  }
}