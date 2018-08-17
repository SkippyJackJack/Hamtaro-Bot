exports.run = (client, message, args) => {
  
 if (message.author.id !== client.config.ownerId) return message.channel.send("Only my creator may push updates ^-^");
  
 client.fetchUser(client.config.ownerID).then(owner => {
   var ownerAvatar = owner.avatarURL;
 };
                                              
 const embed = new Discord.RichEmbed()
  .setTitle("Hamtoro Bot is now in Maintenance Mode")
  .setAuthor("HighFox", ownerAvatar)
             
  .setColor(0x00AE86)
  .setDescription("**The bot will now be in maintenance mode.**")
  
  .setFooter("Hamtoro Bot © High-Fox 2018", "")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  
  .addField("––––––––––––––––",
    "During this time it will still be able to receive commands and respond to them, but please refrain from doing so.")
  .addBlankField(true)

  message.channel.send({embed});
  };
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pushupdate'],
  permLevel: "0"
};

exports.help = {
  name: "update",
  description: "Deploy an update and change the bot's version.",
  usage: "update"
};
