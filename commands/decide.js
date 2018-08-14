exports.run = (client, message, args) => {

  const decideResponse = [
    'Yes',
    'No',
    'Probably',
    'Probably not'
  ];
    var randomResponse = Math.floor(Math.random() * decideResponse.length);
    
  message.channel.send(decideResponse[randomResponse]);
    // TO DO: Create 'Thinking...' event.
    // .then(sentMessage => sentMessage.edit("Thinking."))
    // .then(sentMessage => sentMessage.edit("Thinking.."))
    // .then(sentMessage => sentMessage.edit("Thinking..."))
    // .then(sentMessage => sentMessage.edit(randomResponse));
 };
  
  exports.conf = {
    "enabled": "true",
    "guildOnly": "false",
    "aliases": [],
    "permLevel": "0"
  };
  
  exports.help = {
    "name": "decide",
    "description": "Decides whether or not you should do something.",
    "usage": "decide [question]"
  };
