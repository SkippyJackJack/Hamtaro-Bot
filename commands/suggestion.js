exports.run = async (client, message, args, level) => {

  let suggestionText = args.join(" ");

  // Fetch user via given user id
  let user = client.fetchUser(client.config.ownerID)
   .then(user => {
      // Once promise returns with user, send user a DM
      user.send(`**From:** ${message.author.username} (ID: ${message.author.id})\n**Text: **` + suggestionText); 
   })
};

exports.conf = {
  enabled: true,
  aliases: ['suggest'],
  permLevel: "User"
};

exports.help = {
  name: "suggestion",
  description: "Send a suggestion you have to my master! WARNING: If a user uses this command for anything other than suggesting things, future suggestions from this user will be ignored.",
  usage: "suggestion [text]"
};
