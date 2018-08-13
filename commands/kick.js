exports.run = (client, message, [mention, ...reason]) => {
	
  if (!message.author.hasPermission("KICK_MEMBERS"))
    return message.reply("You aren't allowed to kick members though.");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.guild.channels.find("name", client.config.welcomeChannel).send("Successfully kicked user");
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
    description: 'Kicks a player from the server. Kicked players can re-join with a valid invite.',
    usage: 'kick [member] [reason]'
};
