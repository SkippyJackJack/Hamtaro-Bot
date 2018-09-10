exports.run = (client, message, args) => {
  
  const text = args.join(" ");
  
  message.channel.send(text);

};

exports.conf = {
    enabled: true,
    aliases: [],
    permLevel: "Bot Owner"
  };
  
  exports.help = {
    name: "say",
    description: "Ill say what you want",
    usage: "say [text]"
  };
