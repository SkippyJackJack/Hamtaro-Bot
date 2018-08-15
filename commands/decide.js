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
    
  message.reply("Thinking");
  
  setTimeout(function() {
    message.edit("Thinking.")
  }, 300)
  setTimeout(function() {
    message.edit("Thinking..")
  }, 600)
  setTimeout(function() {
    message.edit("Thinking...")
  }, 900)
  setTimeout(function() {
    message.edit(decideResponse[randomResponse])
  }, 1200)
  
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
