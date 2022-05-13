const { MessageAttachment } = require('discord.js')

const DIG = require("discord-image-generation");

module.exports = {
  name: "rip",
  description: "posts the press f to respect image meme",
    aliases: ["respect"],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
    let avatar = Member.user.displayAvatarURL({ dynamic: false, format: 'png' });
    
    let img = await new DIG.Rip().getImage(avatar)
    
    let attach = new MessageAttachment(img, 'rip.png')
    
    return message.channel.send({ files: [attach] })
  }
}