module.exports = {
  name: "cats",
 description: "posts a random facts about cats",
    aliases: ["cat-facts"],
  permissions: [],
  cooldown: 3000,
  run: async (client, message, args) => {
    const fetch = require('node-fetch')
    
    fetch('https://some-random-api.ml/facts/cat')
       .then(res => res.json())
    .then(json => { 
      return message.channel.send(json.fact);
      
      
    });
  }
}