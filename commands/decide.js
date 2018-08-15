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
    'Possibly'    
  ];
    var randomResponse = Math.floor(Math.random() * decideResponse.length);
    
  message.channel.send("Thinking")
    .then(sentMessage => {  
  setTimeout(function() {
    sentMessage.edit("Thinking.")
  }, 400)
  setTimeout(function() {
    sentMessage.edit("Thinking..")
  }, 700)
  setTimeout(function() {
    sentMessage.edit("Thinking...")
  }, 1000)
  setTimeout(function() {
    sentMessage.edit(decideResponse[randomResponse])
  }, 1300)
  });
};
  exports.conf = {
    "enabled": "true",
    "guildOnly": "false",
    "aliases": ['decision'],
    "permLevel": "0"
  };
  
  exports.help = {
    "name": "decide",
    "description": "Got trouble deciding? I can help with that ^-^",
    "usage": "decide [decision]"
  };
