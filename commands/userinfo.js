const {RichEmbed} = require("discord.js");
exports.run = (client, message, args) => {
	
 let embed = new Discord.RichEmbed()
  .setTitle("**Username**")
  .setAuthor("User Info")
  .setColor('GREEN')
  .setDescription(`${message.author.username}`)
  .setThumbnail(`${message.author.avatarURL}`)
  .addField('**ID**', `${message.author.ID}`, false)
  .addField('**Account Created**', `${message.author.createdTimestamp}`, true)
  .addField('**Bot Account**', `${message.author.bot}`, true);
  
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
