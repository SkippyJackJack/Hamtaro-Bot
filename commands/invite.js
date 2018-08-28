exports.run = (client, message, level) => {
    message.reply("My master gave me this special invite link: " + client.config.inviteLink);
};

exports.conf = {
    enabled: true,
    aliases: ['inv', 'invitelink', 'invlink'],
    permLevel: "User"
};

exports.help ={
    name: 'invite',
    description: 'Get my master\'s secret invite link...',
    usage: 'invite'
};
