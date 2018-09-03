exports.run = (client, message, level) => {

const responses = ["Forever!", "Never!" ];

const randomResponse = Math.floor(Math.random() * responses.length);

        message.channel.send(responses[randomResponse]).catch(console.error);
}

exports.conf = {
  enabled: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: 'friend',
  description: 'Are we friends?',
  usage: 'friend'
};
