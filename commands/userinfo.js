exports.run = (client, message, args) => {
	
 let embed = new Discord.RichEmbed()
  .setAuthor("User Info")
  .setTitle("**Username**")
  .setDescription(message.author.username)
  .addField('**ID**', messagel.author.ID, false)
  .addField('**Account Created**', message.author.createdTimestamp, true)
  .addField('**Bot Account**', message.author.bot, true)
  .setThumbnail(message.author.avatarURL)
  .setColor('GREEN')
 
 message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['userinf'],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Get information about yourself!',
  usage: 'userinfo'
};
