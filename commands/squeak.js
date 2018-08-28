exports.run = (client, message, level) => {
  
  message.channel.send( { embed: { title: "Have a hamster *Squeak!*", color: 0xf29837, image: { url: client.hamtaroFunctions.getRandomImage("hamster"), }, } } )
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "squeak",
  description: "Squee-Squeek! 🐹",
  usage: "squeak"
};
