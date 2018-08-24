exports.run = (client, message, args) => {
  
const owlLinks = [
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
  "https://media.giphy.com/media/IWhdzaaiet9ni/giphy.gif",
  "https://media.giphy.com/media/NBFWQBHEEj1bG/giphy.gif",
  "https://media.giphy.com/media/I1r5jpUvdGra8/giphy.gif",
  "https://tenor.com/view/owl-gif-9233151",
  "https://tenor.com/view/owl-gif-5705190",
  "https://tenor.com/view/boop-owl-gif-10047830",
  "https://tenor.com/view/owl-feather-animal-animals-annoyed-gif-4984224",
  "https://tenor.com/view/funny-animals-owl-birds-brave-dio-brando-gif-12041955",
  "https://tenor.com/view/owl-gif-9623961",
  "https://tenor.com/view/owl-funny-animals-gif-11081718",
  "https://i.imgflip.com/1x39ol.jpg",
  "https://favim.com/orig/201106/03/animal-bird-cute-funny-owl-photography-Favim.com-65193.jpg",
  "https://imgur.com/a/ZqFuIoc",
  "http://informationcommunicationtechnology.com/wp-content/uploads/2018/06/Cute-Owl-Wallpaper.jpg"
];
  
  var randomOwlLink = Math.floor(Math.random() * owlLinks.length);
    
  message.channel.send( { embed: { title: `Special Delivery for ${message.author.username}!`, image: { url: owlLinks[randomOwlLink], }, } } )
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "hoot",
  description: "H-Hoot! H-Hoot! ^o,o^",
  usage: "hoot"
};
