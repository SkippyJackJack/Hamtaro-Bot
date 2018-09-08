exports.run = (client, message) => {

    message.channel.send( { embed: { color: 0xf45042, description: `My Owner is currently in love with: <@437514679636459520>`, thumbnail: { url: "https://images-ext-2.discordapp.net/external/68uAi5MBRxWbZ6zOaFK2lQPe1qMCFfTpsElgyCcQm0c/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/437514679636459520/2e9013977612d4ae3d1049f914cf1ee5.png" }, } } );
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
