exports.run = (client, message, args) => {
    message.reply("My master gave me this special invite link: " + client.config.inviteLink);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['inv', 'invitelink', 'invlink'],
    permLevel: 0
};

exports.help ={
    name: 'invite',
    description: 'Get my master\'s secret invite link...',
    usage: 'invite'
};
