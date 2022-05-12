module.exports = {
  name: "meme",
  description: "posts memes",
  aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    const { Meme } = require('leaf-utils');

await Meme({
            message: message,
            slash_command: false,
            footer: true,
            time: 300000,
            label: {
                firstlabel: 'Next Meme',
                secondlabel: 'Stop',
            },
            emojis: {
                firstbutton: '↪️',
                secondbutton: '🛑',
            },
            colors: {
                firstbutton: 'PRIMARY',
                secondbutton: 'DANGER',
            },
            embedColor: 'RANDOM',
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
 }
}
  