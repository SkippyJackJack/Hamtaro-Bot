exports.run = (client, message, args) => {
  
const bearLinks = [
  "https://media.giphy.com/media/3oeHLrjZGBgnPx5VII/giphy.gif",
  "https://media.giphy.com/media/kNGHx5m4QPra0/giphy.gif",
  "https://media.giphy.com/media/IThjAlJnD9WNO/giphy.gif",
  "https://media.giphy.com/media/JglVCaB0axZ4Y/giphy.gif",
  "https://media.giphy.com/media/uUs14eCA2SBgs/giphy.gif",
  "https://media.giphy.com/media/AaqdLBKYfZl0A/giphy.gif",
  "https://media.giphy.com/media/ia7kRlpGe3IFq/giphy.gif",
  "https://media.giphy.com/media/149c3jrzGk0AtG/giphy.gif",
  "https://media.giphy.com/media/7jdcmQ9zb9Tk4/giphy.gif",
  "https://media.giphy.com/media/anu91JH5LYiVW/giphy.gif",
  "https://media.giphy.com/media/aK4wh0UE3oddS/giphy.gif",
  "https://media.giphy.com/media/XCsuZw0hWj8B2/giphy.gif",
  "https://media.giphy.com/media/Gd3PdO3AtmwWk/giphy.gif",
  "https://media.giphy.com/media/tOWyML1WPzKjm/giphy.gif",
  "https://media.giphy.com/media/3oeHLrjZGBgnPx5VII/giphy.gif",
  "https://media.giphy.com/media/OBpFd1Dat9Vzq/giphy.gif",
  "https://media.giphy.com/media/xUn3CmI6rN5pEUlwNa/giphy.gif",
  "https://media.giphy.com/media/26n6WYBZZRSewlgd2/giphy.gif",
  "https://media.giphy.com/media/Osub6rry9Pu2k/giphy.gif",
  "https://media.giphy.com/media/YCCDVrmnXj8vC/giphy.gif",
  "https://media.giphy.com/media/vYtDDrgTXyrm0/giphy.gif"
];
  
  var randomBearLink = Math.floor(Math.random() * bearLinks.length);
    
  message.channel.send("What do you call a bear that jumps but never lands?\n**A Peter Panda!**", {
    file: bearLinks[randomBearLink]
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "growl",
  description: "Growl Growl! ʕ•ᴥ•ʔ",
  usage: "growl"
};
