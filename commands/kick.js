module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	guildOnly: true,
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('I need a mention of a user to kick.');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};
