const { Discord, MessageAttachment } = require('discord.js');



module.exports = {
  name: "wasted",
  description: "posts the wasted meme image",
   aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
let link = `https://some-random-api.ml/canvas/wasted/?avatar=${message.author.avatarURL({ format: 'png' })}`
    
   
    
    let attachment = new MessageAttachment(link, 'wasted.png');
    
       return message.channel.send({
            files: [attachment]
        })
  }
}