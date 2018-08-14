module.exports = (client, message, member) => {
	
	if (client.config.welcomeNewMembers == "false")
		return;
		
	const channel = message.guild.channels.find('name', client.config.welcomeChannel)
	
	if (!channel) return console.log("welcomeChannel not found");
	
	channel.send(`Say goodbye to ${member.user.username}, who was just removed from the server!`);
};
