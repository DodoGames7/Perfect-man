const { Discord, MessageAttachment } = require('discord.js');


module.exports = {
  name: "triggered",
  description: "posts the triggered meme image",
   aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
let link = `https://some-random-api.ml/canvas/triggered/?avatar=${message.author.avatarURL({ format: 'png' })}`
    
   
    
    let attachment = new MessageAttachment(link, 'triggered.gif');
    
       return message.channel.send({
            files: [attachment]
        })
  }
}