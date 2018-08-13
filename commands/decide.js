exports.run = (client, message, args) => {

  const decideResponse = [
    'Yes',
    'No',
    'Probably',
    'Probably not'
  ];
    var randomResponse = Math.floor(Math.random()*response.length);
    
    function thinking1() {
      sentMessage.edit("Thinking.");
    }
    function thinking2() {
      sentMessage.edit("Thinking..");
    }
    function thinking3() {
      sentMessage.edit("Thinking...");
    }
    function sendResponse() {
      sentMessage.edit(randomResponse);
    }
    
    
  message.channel.send("Thinking").then((sentMessage) => {
    setTimeout(thinking1, 300)
    setTimeout(thinking2, 300)
    setTimeout(thinking3, 300)
    setTimeout(sendResponse, 500)
   })
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
