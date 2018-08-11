exports.run = async (client, message, args) => {

   const canvas = Canvas.createCanvas(700, 250);
   const ctx = canvas.getContext('2d');
   const background = await Canvas.loadImage('../images/aliens.jpg');
  
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

    channel.send(`Special delivery for $(message.author.user)!`, attachment);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "0"
};

exports.help = {
  name: "\'Aliens\'",
  description: "Make your own \'Aliens\' meme.",
  usage: "aliens [text]"
};
