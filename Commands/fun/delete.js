const { Discord } = require('discord.js')

const DIG = require("discord-image-generation");

module.exports = {
  name: "delete",
  description: "posts the delete image meme",
    aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
    
    let img = await new DIG.Delete().getImage(avatar)
    
    let attach = new Discord.MessageAttachment(img, "delete.png");
    return message.channel.send({ files: [attach] })
  }
}