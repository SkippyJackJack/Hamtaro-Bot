module.exports = (guild, user) => {
	
	if (client.config.announce-bans == "false")
		return;
		
	const channel = member.guild.channel.find('name', client.config.announceBans-channel)
	
	if (!channel) return console.log("announceBans-channel not found");
		channel.send(`${user} was just un-banned form the server. Welcome back! Don't make the same mistake you were banned for.`);
};
