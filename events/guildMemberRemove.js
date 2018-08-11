module.exports = (client, message, guild, user) => {
	
	if (client.config.welcome-newMembers == "false")
		return;
		
	const channel = message.guild.channels.find('name', client.config.announceBans-channel)
	
	if (!channel) return console.log("welcome-channel not found");
	
	channel.send(`${user} was just removed form the server. Bye!`);
};
