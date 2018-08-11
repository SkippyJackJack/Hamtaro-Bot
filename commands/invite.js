exports.run = (client, message, args) => {
    message.reply("Invite me to your server here: " + client.config.inviteLink);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['inv', 'invitelink', 'invlink'],
    permLevel: 0
};

exports.help ={
    name: 'invite',
    description: 'Displays a link that will allow you to invite me to your server!',
    usage: 'invite'
};
