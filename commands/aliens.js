exports.run = (client, message, args) => {

const Jimp = require('jimp');

var url = message.author.avatarURL;

    Jimp.read(url).then(function (image) {

      image.resize(1024, 1024, Jimp.RESIZE_BEZIER);


      Jimp.loadFont(doRandomSize()).then(function (font) { // load font from .fnt file
        // print a message on an image
        //image.print(font, 2, 2, args.join(" "), Jimp.ALIGN_FONT_CENTER); // print a message on an image with text wrapped at width


        image.greyscale()


        /**image.greyscale()**/
        image.print(font, 20, 960, args.join(" "), Jimp.ALIGN_FONT_CENTER).getBuffer(Jimp.MIME_JPEG, onBuffer)

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
