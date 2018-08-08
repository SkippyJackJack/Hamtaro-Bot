exports.run = (client, message, args) => {
	message.channel.send(`**Your username:** ${message.author.username}\n**Your ID:** ${message.author.id}`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'userinfo',
  description: 'Displays information about your user.',
  usage: 'userinfo'
};
