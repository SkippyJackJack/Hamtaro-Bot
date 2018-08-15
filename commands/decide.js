exports.run = (client, message, args) => {

  const decideResponse = [
    'Yes',
    'No',
    'Probably',
    'Probably not',
    'Definitely',
    'I think so',
    'Without a doubt',
    'Doubtful',
    'Possibly',
    'I believe so.
    
  ];
    var randomResponse = Math.floor(Math.random() * decideResponse.length);
    
  message.channel.reply(decideResponse[randomResponse]);
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
    "description": "Got trouble deciding?",
    "usage": "decide [question]"
  };
