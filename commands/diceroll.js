exports.run = (client, message, args) => {
  
  const sides = [ "1", "2", "3", "4", "5", "6" ];
  
  var randomSide = Math.floor(Math.random() * sides.length);
  
  message.channel.send(side[randomSide]);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolldice']
};

exports.help = {
  name: "diceroll",
  description: "Rolls a six-sided dice ^-^",
  usage: "diceroll"
};
  
