const { Discord, MessageAttachment } = require('discord.js');

const DIG = require("discord-image-generation");

module.exports = {
  name: "jail",
  description: "posts the jail meme image",
   aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
let link = `https://some-random-api.ml/canvas/jail/?avatar=${message.author.avatarURL({ format: 'png' })}`
    
   
    
    let attachment = new MessageAttachment(link, 'jail.png');
    
       return message.channel.send({
            files: [attachment]
        })
  }
}