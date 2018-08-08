const config = require('../config.json');
exports.run = (client, message, [mention, ...reason]) => {
	
  if (!message.author.hasPermission("KICK_MEMBERS"))
    return message.reply("You do not have permission to kick members.");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.guild.channels.find("name", config.welcome-channel).send("Successfully kicked user");
  })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kick',
    description: 'Kicks a player from the server. Requires mention of user to kick.'
    usage: 'kick [mention of player to kick]'
};
