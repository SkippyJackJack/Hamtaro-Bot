exports.run = (client, message, [mention, ...reason]) => {
	
  if (!message.author.hasPermission("KICK_MEMBERS"))
    return message.reply("You do not have permission to kick members.");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.guild.channels.find("name", client.config.welcome-channel).send("Successfully kicked user");
);
  });
};
