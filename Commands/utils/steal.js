module.exports = {
  name: "steal",
  description: "steals emojis from random servers and then upload it if user chosen to add them",
  aliases: [""],
  permissions: ["MANAGE_EMOJIS"],
  cooldown: 3000,
  run: async (client, message, args) => {
    const { FindEmoji } = require('leaf-utils');

await FindEmoji({
            message: message,
            slash_command: false,
            args: args,
            time: 300000,
            embed: {
                title: 'Successfully created a new emoji',
                description: 'Click on these buttons to find emojis',
                color: '#16BD3B',
            },
            buttons: {
                back: 'Back',
                next: 'Next',
                add: 'Add'
            }, // emojis are optional
            emojis: {
               back: '⬅️',
               next: '➡️',
               add: '⏺️',
            },
            colors: {
              back: 'PRIMARY',
              next: 'PRIMARY',
              add: 'DANGER',
            },
            noResultMessage: 'No results found for **{{query}}**',
            errorMessage: 'An error has occured. I can\'t add this emoji',
            authorOnly: 'Only <@{{author}}> can use these buttons!',
        })
  }
}