module.exports = (client, message, guild, user) => {
	
	if (client.config.announceBans == "false") return;
		
	const channel = message.guild.channels.find('name', client.config.announceBansChannel)
	
	if (!channel) return console.log("announceBansChannel not found");
		channel.send(`${user.username} was just banned form the server!`);
};
