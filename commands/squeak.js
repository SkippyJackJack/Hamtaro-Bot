const hamsterLinks = require("../src/imageArrays/squeak.json");
exports.run = (client, message, args) => {
  
  var randomHamsterLink = Math.floor(Math.random() * hamsterLinks.length);
  
  message.channel.send( { embed: { title: "Have a hamster *Squeak!*", color: 0xf29837, image: { url: hamsterLinks[randomHamsterLink], }, } } )
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "squeak",
  description: "Squee-Squeek! 🐹",
  usage: "squeak"
};
