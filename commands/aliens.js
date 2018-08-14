exports.run = (client, message, args) => {

const Jimp = require('jimp');

const url = 'https://www.w3schools.com/w3css/img_lights.jpg';

Jimp.read(url)
  .then(image => {
    image.greyscale().getBuffer(Jimp.MIME_JPEG, onBuffer);
  })
  .catch(err => {
    console.error(err);
  });

  function onBuffer(err, buffer) {
    if (err) throw err;
    const attachment = new Discord.Attachment(buffer, 'aliens.jpg');
    message.channel.send('Here:', attachment);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "0"
};

exports.help = {
  name: "aliens",
  description: "Make your own \'Aliens\' meme.",
  usage: "aliens [text]"
};
