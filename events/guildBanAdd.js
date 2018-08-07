module.exports = (guild, user) => {
	client.on("guildBanAdd", member => {
	
	if (client.config.announce-bans == "false")
		return;
		
	const channel = member.guild.channel.find('name', client.config.announceBans-channel)
	
	if (!channel) return console.log("announceBans-channel not found");
		channel.send(`${user} was just banned form the server. Ba-Bye!`);
  })
};
