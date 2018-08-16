exports.run = (client, message, args) => {
  
  if (message.author.id !== client.config.ownerId) return message.channel.send("Only my master can update me, sorry.");
  
 const embed = new Discord.RichEmbed()
  .setTitle("Hamtoro Bot is now in Maintenance Mode")
  .setAuthor("Hamtoro Bot", client.user.AvatarURL)
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription("The bot will now be in maintenance mode. While it will still be able to receive commands and respond to them, please refrain from doing so.")
  .setFooter("This is the footer text, it can hold 2048 characters", "")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 2048 characters.")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("Inline Field", "They can also be inline.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

  message.channel.send({embed});
  };
