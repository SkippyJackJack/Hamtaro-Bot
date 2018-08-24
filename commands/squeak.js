const { RichEmbed } = require("discord.js");
exports.run = (client, message, args) => {
  
const hamsterLinks = [
  "https://media.giphy.com/media/w2fjYsGvjDF3a/giphy.gif",
  "https://media.giphy.com/media/7Z71Z76pCC8Za/giphy.gif",
  "https://media.giphy.com/media/Yv0Bwwlcnplu/giphy.gif",
  "https://media.giphy.com/media/pPrUNsOY8CDS0/giphy.gif",
  "https://media.giphy.com/media/YUx07ixq8GCSA/giphy.gif",
  "https://media.giphy.com/media/wZ2SI2e3t1gR2/giphy.gif",
  "https://media.giphy.com/media/p3wMMqkPBFqsEGI32T/giphy.gif",
  "https://media.giphy.com/media/d1E2IByItLUuONMc/giphy.gif",
  "https://media.giphy.com/media/E0KmHELTpq9pK/giphy.gif",
  "https://media.giphy.com/media/mTRpdks4k5sgo/giphy.gif",
  "https://media.giphy.com/media/jU2ZYjA8ngdKU/giphy.gif",
  "https://media.giphy.com/media/GXnaqmGcg1CTu/giphy.gif",
  "https://media.giphy.com/media/xT0BKDIwzgPHWRFDm8/giphy.gif",
  "https://78.media.tumblr.com/42120f9738c3c8bb2e20754c3606cca6/tumblr_pb1k13a0JZ1tf2doho1_500.gif",
  "https://media.giphy.com/media/JdCz7YXOZAURq/giphy.gif",
  "https://media.giphy.com/media/ETTzs1c6mS36g/giphy.gif",
  "https://media.giphy.com/media/ncU3bkZ5ghDlS/giphy.gif",
  "https://media.giphy.com/media/TkUZUZ9E6KhJC/giphy.gif",
  "https://media.giphy.com/media/L2vRqCV1lPTq0/giphy.gif",
  "https://media.giphy.com/media/uTIZmj69qCjCM/giphy.gif",
  "https://media.giphy.com/media/M4trH1uta8OPu/giphy.gif"
];
  
  var randomHamsterLink = Math.floor(Math.random() * hamsterLinks.length);
    
  const hamsterEmbed = new RichEmbed()
    .setAuthor(client.user.username, client.user.avatarURL)
    .setTitle("Have a hamster (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
    .setImage(hamsterLinks[randomHamsterLink]);
  
  message.channel.send({hamsterEmbed});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "squeak",
  description: "Squee-Squeek! 🐹",
  usage: "squeak"
};
