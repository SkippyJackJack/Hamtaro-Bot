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
    
  message.reply("Thinking")
    .then(sentMessage => {  
  setTimeout(function() {
    sentMessage.edit("Thinking.")
  }, 300)
  setTimeout(function() {
    sentMessage.edit("Thinking..")
  }, 600)
  setTimeout(function() {
    sentMessage.edit("Thinking...")
  }, 900)
  setTimeout(function() {
    sentMessage.edit(decideResponse[randomResponse])
  }, 1200)
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
