const { ButtonPages } = require('leaf-utils');

const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "help",
  description: "shows list of commands",
   aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
const page1 = new MessageEmbed()
            .setTitle("fun Commands")
            .setFooter('Page 1/3')
            .addField('images', '\`respect\`', false)
            .setColor('RANDOM')
            .setTimestamp()

        const page2 = new MessageEmbed()
            .setTitle("Other Commands")
            .setFooter('Page 2/3')
            .setColor('RANDOM')
            .setTimestamp()

        const page3 = new MessageEmbed()
            .setTitle("Utils Commands")
            .setFooter('Page 3/3')
            .setColor('RANDOM')
            .setTimestamp()

        const pages = [page1, page2, page3]

        await ButtonPages({
            message: message,
            slash_command: false,
            embeds: pages,
            time: 300000, // how long before buttons get disabled in ms
            back: {
                label: ' Prev',
                style: 'PRIMARY',
                emoji: '⬅️',
            },
            next: {
                label: ' Next',
                style: 'PRIMARY',
                emoji: '➡️',
            },
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
  }
}