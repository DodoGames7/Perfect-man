module.exports = {
  name: "npm",
  description: "searchs for npm packages",
  aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    const { NPMSearch } = require('leaf-utils');

await NPMSearch({
            message: message,
            slash_command: false,
            args: args,
            embedColor: '#FCAD11',
            query: 'Give me a package name to search',
            noResult: 'I can\'t find this package',
        })
  }
}