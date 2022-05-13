const { Discord, MessageAttachment } = require('discord.js');



module.exports = {
  name: "jail",
  description: "posts the jail meme image",
   aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
let link = `https://some-random-api.ml/canvas/jail/?avatar=${Member.user.displayAvatarURL({ format: 'png' })}`
    
   
    
    let attachment = new MessageAttachment(link, 'jail.png');
    
       return message.channel.send({
            files: [attachment]
        })
  }
}