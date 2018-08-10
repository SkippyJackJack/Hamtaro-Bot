exports.run = async (client, message, args) => {
        client.emit('guildMemberAdd', message.member;)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'join',
  description: 'Activates the \'guildMemberAdd\' event.',
  usage: 'join'
};
