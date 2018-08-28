exports.run = async (client, message, args, level) => {

const fs = require('fs');
const Jimp = require('jimp');
    
    message.channel.startTyping();
    
    let image = "https://imgflip.com/s/meme/Ancient-Aliens.jpg";
    
    let text = args.join(" ");
    
    if (!text) {
        return message.reply("But you have to give me text ._.");
    };
    
    Jimp.read(image).then(function (image) {
        
    image.resize(1024, 1024, Jimp.RESIZE_BEZIER);
        
      Jimp.loadFont(Jimp.FONT_SANS_128_WHITE).then(function(font) {
        image.print(font, 240, 578, text.toUpperCase(), Jimp.ALIGN_FONT_CENTER).getBuffer(Jimp.MIME_JPEG, nullFunction)

        let outputfile = "./" + Math.random().toString(15).substr(2, 5) + "." + image.getExtension();
        image.write(outputfile, function () {
          message.channel.send("Nice memeing ~", {
                            files: [{
                                attachment: outputfile,
                                name: "output.jpg"
                            }]
                        }).then(function () {
            fs.unlink(outputfile, (err) => {
                              if (err) throw err;
                              console.log("Image Created");
            });
          });
        });
      });
    }).catch(function (err) {
      console.error(err);
      message.reply(";-; I-I couldn't create the image, sorry.")
    })
    
    function nullFunction(err) {
         if (err) throw err;
    }
    
    message.channel.stopTyping();
};

exports.conf = {
  enabled: true,
  aliases: ['aliensmeme'],
  permLevel: "User"
};

exports.help = {
  name: "aliens",
  description: "Make your own \'Aliens\' meme.",
  usage: "aliens [text]"
};
