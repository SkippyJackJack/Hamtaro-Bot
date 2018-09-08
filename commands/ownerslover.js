exports.run = (client, message) => {
  
  client.fetchUser(437514679636459520).then(bb => {
    messsage.channel.send( { embed: { color: 0xf45042, description: `My Owner is currently in love with: ${bb}`, thumbnail: { url: bb.avatarURL }, } } );
  })
};

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ownerslover",
  description: "Gives you the person my Owner is currently in love with :3",
  usage: "ownerslover"
};                                          
