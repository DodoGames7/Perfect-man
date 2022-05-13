const { MessageAttachment } = require('discord.js')

const DIG = require("discord-image-generation");

module.exports = {
  name: "stonks",
  description: "posts the stonks image meme",
    aliases: [""],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
    let avatar = Member.user.displayAvatarURL({ dynamic: false, format: 'png' });
    
    let img = await new DIG.Stonk().getImage(avatar)
    
    let attach = new MessageAttachment(img, 'rip.png')
    
    return message.channel.send({ files: [attach] })
  }
}