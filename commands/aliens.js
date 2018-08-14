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

  let outputfile = "./output/" + Math.random().toString(36).substr(2, 5) + "sad." + image.getExtension(); // create a random name for the output file
        image.write(outputfile, function () {
          // upload file
          message.channel.sendFile(outputfile).then(function () {
            // delete file
            fs.unlink(outputfile);
            console.log("SUCCESS: " + message.author.username);
          });
        });

  function onBuffer(err, buffer) {
    if (err) throw err;
    console.log("buffer");
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
