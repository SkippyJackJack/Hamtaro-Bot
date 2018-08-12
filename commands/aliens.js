exports.run = async (client, message, args) => {

   const canvas = Canvas.createCanvas(700, 250);
   const ctx = canvas.getContext('2d');

  // Since the image takes time to load, you should await it
   const background = await Canvas.loadImage('./wallpaper.jpg');
  // This uses the canvas dimensions to stretch the image onto the entire canvas
   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  // Use helpful Attachment class structure to process the file for you
   const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

   channel.send(`Here:`, attachment);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "0"
};

exports.help = {
  name: "Aliens",
  description: "Make your own \'Aliens\' meme.",
  usage: "aliens [text]"
};
