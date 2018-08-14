exports.run = (client, message, args) => {

const Jimp = require('jimp');

    let text = args.slice(1).join(" ");
    let image = "https://imgflip.com/s/meme/Ancient-Aliens.jpg";
   
    Jimp.read(image).then(function (image) {

      image.resize(1024, 1024, Jimp.RESIZE_BEZIER);

      Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function(font) { // load font from .fnt file
        image.print(font, 20, 960, text, Jimp.ALIGN_FONT_CENTER).getBuffer(Jimp.MIME_JPEG)

        let outputfile = "./" + Math.random().toString(36).substr(2, 5) + "." + image.getExtension(); // create a random name for the output file
        image.write(outputfile, function () {
          message.channel.send({
                            files: [{
                                attachment: outputfile,
                                name: output.jpg
                            }]
                        }).then(function () {
            fs.unlink(outputfile);
          });
        });
      });
    }).catch(function (err) {
      console.error(err);
      message.reply(";-; I-I couldn't create the image, sorry.")
    })
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aliensmeme'],
  permLevel: "0"
};

exports.help = {
  name: "aliens",
  description: "Make your own \'Aliens\' meme.",
  usage: "aliens [text]"
};
