exports.run = async (client, message, args, level) => {

const fs = require('fs');
const Jimp = require('jimp');
    
    let text = args.join(" ");
    
    if (!text) {
        return message.reply("But you have to give me text ._.");
    };
    
    message.channel.startTyping();
    
    Jimp.read('https://pm1.narvii.com/6763/81ea6408b036dddef541463ef9d46bf5783ff129v2_hq.jpg').then(function (image) {     
        
        Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function(font) {
          image.print(font, 141, 292, text.toUpperCase()).getBufferAsync(Jimp.MIME_JPEG);

        let outputfile = "./" + Math.random().toString(15).substr(2, 5) + "." + image.getExtension();
            image.write(outputfile, function () {
                
                message.channel.send("Nice memeing ~", { files: [{ attachment: outputfile, name: "output.jpg" }]}).then(function () {
                    
                    fs.unlink(outputfile, (err) => {
                        if (err) throw err;
                        console.log("Image Created");
                        message.channel.stopTyping();
            });
          });
        });
      });
    }).catch(function (err) {
      console.error(err);
      message.channel.send(";-; I-I couldn't create the image, sorry.")
        
      message.channel.stopTyping();
    })
    
    message.channel.stopTyping();
};

exports.conf = {
  enabled: true,
  aliases: ['changemind'],
  permLevel: "User"
};

exports.help = {
  name: "changemymind",
  description: "Make your own Steven Crowder \'Change My Mind\' sign!",
  usage: "changemymind [text]"
};
