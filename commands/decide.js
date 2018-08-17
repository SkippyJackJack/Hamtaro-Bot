exports.run = (client, message, args) => {

  const decideResponse = [
    'Yes',
    'No',
    'Most likely',
    'Plz no ;-;',
    'Definitely',
    'I think so',
    'Without a doubt',
    'Doubtful',
    'Possibly',
    'NO!! (╯°□°）╯︵ ┻━┻)'
  ];
  
  var randomResponse = Math.floor(Math.random() * decideResponse.length);
  
  let decision = args.join(" ");
  
  if (!decision) {
    return message.reply("I can't decide on nothing o-o");
  }
  
  message.channel.startTyping();
  
  message.channel.send(".")
   .then(sentMessage => {  
  setTimeout(function() {
    sentMessage.edit("Thinking")
  }, 10)
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
    sentMessage.edit("**Your question:** " + decision + "\n**Answer**: " + decideResponse[randomResponse])
  }, 1180)
  });

  message.channel.stopTyping();
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['decision']
  };
  
  exports.help = {
    name: "decide",
    description: "Got trouble deciding? I can help with that ^-^",
    usage: "decide [text]"
  };
