exports.run = (client, message, args) => {
	
 const embed = new Discord.RichEmbed()
  .setAuthor("User Info")
  .setTitle("**Username**")
  .setDescription(`${message.author.username}`)
  .addField('**ID**', `${message.author.ID}`, false)
  .addField('**Account Created**', `${message.author.createdTimestamp}`, true)
  .addField('**Bot Account**', `${message.author.bot}`, true)
  .setThumbnail(`${message.author.avatarURL}`)
  .setColor('GREEN')
 
 message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['userinf'],
};

exports.help = {
  name: 'userinfo',
  description: 'Get information about yourself!',
  usage: 'userinfo'
};
