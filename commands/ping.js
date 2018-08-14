exports.run = (client, message, args) => {
        message.channel.send('Pong!').catch(console.error);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pong!',
  usage: 'ping'
};
