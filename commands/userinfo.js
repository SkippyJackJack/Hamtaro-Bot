exports.run = (client, message, args) => {
	message.channel.send(`**Your username:** ${message.author.username}\n**Your ID:** ${message.author.id}`);
}
