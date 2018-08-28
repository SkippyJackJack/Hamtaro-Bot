exports.run = (client, message, level) => {
        message.channel.send('Pong!').catch(console.error);
}

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'ping',
  description: 'Pong!',
  usage: 'ping'
};
