exports.run = (client, message, args) => {
        client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
}

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
