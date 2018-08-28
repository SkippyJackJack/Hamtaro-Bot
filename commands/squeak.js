exports.run = (client, message, args) => {
  
  message.channel.send( { embed: { title: "Have a hamster *Squeak!*", color: 0xf29837, image: { url: client.hamtaroFunctions.getRandomImage("hamster"), }, } } )
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
