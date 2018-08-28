exports.run = (client, message, args) => {
  
  var randomOwlLink = Math.floor(Math.random() * owlLinks.length);
    
  message.channel.send( { embed: { title: `Special Delivery for ${message.author.username}!`, color: 0xf29837, image: { url: client.getRandomImage("owl"), }, } } )
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "hoot",
  description: "H-Hoot! H-Hoot! ^o,o^",
  usage: "hoot"
};
