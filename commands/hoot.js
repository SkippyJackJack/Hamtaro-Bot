exports.run = (client, message, args) => {
  
const talkedRecently = new Set();

if (talkedRecently.has(message.author.id))
  return;

talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 10000);
  
const links = [
  "https://media.giphy.com/media/bz7Lkscqm6mrK/giphy.gif",
  "https://media.giphy.com/media/1hWHUCgi3wKT6/giphy.gif",
  "https://media.giphy.com/media/s68CylvQ9ioRa/giphy.gif",
  "https://media.giphy.com/media/Yl8cYI66NzOuY/giphy.gif",
  "https://media.giphy.com/media/rbIGYBixpnjJm/giphy.gif",
  "https://media.giphy.com/media/eFx8ZIMc7oIFO/giphy.gif",
  "https://media.giphy.com/media/6tsecJ8OyvWUw/giphy.gif",
  "https://media.giphy.com/media/DLz9ryCoP2Vz2/giphy.gif",
  "https://media.giphy.com/media/gtH9aiTG8yeAw/giphy.gif",
  "https://media.giphy.com/media/lPKUVwYQVjeyk/giphy.gif",
  "https://media.giphy.com/media/xeibGDwTHxWs8/giphy.gif",
  "https://media.giphy.com/media/3BEZiwIcLNITm/giphy.gif",
  "https://media.giphy.com/media/B0ArQNmsh2PMk/giphy.gif",
  "https://media.giphy.com/media/I13tgbLk6Uv8Q/giphy.gif",
  "https://media.giphy.com/media/NqManZLZ0Ptza/giphy.gif",
  "https://media.giphy.com/media/jq9qONW8z0uOY/giphy.gif",
  "https://media.giphy.com/media/dDklqSKFX4APC/giphy.gif",
  "https://media.giphy.com/media/5Dr8VvwXGngbe/giphy.gif",
  "https://media.giphy.com/media/3o7bu2wCQjNyFnIcog/giphy.gif",
  "https://media.giphy.com/media/2YoVPwABcYt1e/giphy.gif",
  "https://media.giphy.com/media/CYU7Q6NHVM28o/giphy.gif",
  "https://media.giphy.com/media/iKufnbkSIcliM/giphy.gif",
  "https://media.giphy.com/media/pcdOR27Nteasg/giphy.gif",
  "https://media.giphy.com/media/LmXEue5Ys9rTa/giphy.gif",
  "https://media.giphy.com/media/xwy9AbBlXlIFW/giphy.gif",
  "https://media.giphy.com/media/b7U6l8DbzlKKY/giphy.gif",
  "https://media.giphy.com/media/Mh4j4Y4Lu4boA/giphy.gif",
  "https://media.giphy.com/media/Z5W9H5DtCWN4k/giphy.gif",
  "https://media.giphy.com/media/YwO4nS4NoLWBW/giphy.gif",
  "https://media.giphy.com/media/12mNZ256B87ULm/giphy.gif",
  "https://media.giphy.com/media/IWhdzaaiet9ni/giphy.gif"
];
  
  var randomLink = Math.floor(Math.random() * links.length);
    
  message.channel.send(links[randomLink]);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "hoot",
  description: "Hoo-Hoot! ^o,o^",
  usage: "hoot"
};
