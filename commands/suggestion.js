exports.run = async (client, message, args) => {

  let suggestionText = args.join(" ");

  // Fetch user via given user id
  let user = client.fetchUser(client.config.ownerID)
   .then(user => {
      // Once promise returns with user, send user a DM
      user.send(`From: ${message.author.username} (${message.author.id})\n` + suggestionText); 
   })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['suggest']
};

exports.help = {
  name: "suggestion",
  description: "Send a suggestion you have to my master! WARNING: If a user uses this command for anything other than suggesting things, future suggestions from this user will be ignored.",
  usage: "suggestion [text]"
};
