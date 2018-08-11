module.exports = (guild, user) => {
	
	if (client.config.announceBans == "false")
		return;
		
	const channel = member.guild.channel.find('name', client.config.announceBansChannel)
	
	if (!channel) return console.log("announceBansChannel not found");
		channel.send(`${user.username} was just banned form the server. Ba-Bye!`);
};
