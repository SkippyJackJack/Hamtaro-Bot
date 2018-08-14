exports.run = (client, message, args) => {

const Jimp = require('jimp');

    function doRandomSize() {
    var rand = [Jimp.FONT_SANS_64_BLACK]
    return rand[Math.floor(Math.random() * rand.length)];
  }

    let testingtxt = "hello";

    message.channel.startTyping()
    var url = message.author.avatarURL;

    Jimp.read(url).then(function (image) {

      image.resize(1024, 1024, Jimp.RESIZE_BEZIER);

      Jimp.loadFont(doRandomSize()).then(function (font) { // load font from .fnt file
        // print a message on an image
        //image.print(font, 2, 2, args.join(" "), Jimp.ALIGN_FONT_CENTER); // print a message on an image with text wrapped at width

        /**image.greyscale()**/
        image.print(font, 20, 960, testingtxt, Jimp.ALIGN_FONT_CENTER).getBuffer(Jimp.MIME_JPEG, onBuffer)

        //image.mask(image, 100, 100).getBuffer(Jimp.MIME_JPEG, onBuffer);
        let outputfile = "./" + Math.random().toString(36).substr(2, 5) + "." + image.getExtension(); // create a random name for the output file
        image.write(outputfile, function () {
          // upload file
          message.channel.sendFile(outputfile).then(function () {
            // delete file
            fs.unlink(outputfile);
            console.log("SUCCESS: " + user.username);
            message.channel.stopTyping()
          });
        });
      });
    }).catch(function (err) {
      console.error(err);
      message.reply("Error, Could be that your avatar is invalid OR your avatar has something like <>.")
    })

    function onBuffer(err, buffer) {
      if (err) throw err;

      console.log(buffer);

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
