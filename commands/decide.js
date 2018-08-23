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
  
  var decision = args.join(" ");
      
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
   if (decision.includes(" or ")) {
    var options = decision.split(" or ");
    var randomOption = Math.floor(Math.random() * options.length);
     
    sentMessage.edit("**Question:** " + decision + "\n**Answer**: " + options[randomOption])
     
   } else {
     
    sentMessage.edit("**Question:** " + decision + "\n**Answer**: " + decideResponse[randomResponse])
   };
  }, 1180)
  });
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
