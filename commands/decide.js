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
  let decision = args.join(" ");
  
  if (!decision) {
    return message.reply("I can't decide on nothing o-o");
  }
  
  message.channel.startTyping();
  
  message.channel.send("Thinking")
    .then(sentMessage => {  
  setTimeout(function() {
    sentMessage.edit("Thinking.")
  }, 100)
  setTimeout(function() {
    sentMessage.edit("Thinking..")
  }, 500)
  setTimeout(function() {
    sentMessage.edit("Thinking...")
  }, 900)
  setTimeout(function() {
    sentMessage.edit(decideResponse[randomResponse])
  }, 1200)
  });
  
  message.channel.stopTyping();
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
