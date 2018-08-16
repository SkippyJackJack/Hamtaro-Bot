exports.run = (client, message, args) => {
	message.channel.send(`Info for ${message.author.username}:\n**ID:** ${message.author.id}\n**Created on:** ${message.author.createdTimestamp}\n **Avatar:** ${message.author.avatarURL}`);
}

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
