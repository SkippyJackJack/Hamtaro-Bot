exports.run = async (client, message, args) => {

  let client = message.channel.client;
  let suggestionText = args.join(" ");

  // Fetch user via given user id
  let user = client.fetchUser(client.config.ownerID)
   .then(user => {
      // Once promise returns with user, send user a DM
      user.send(suggestionText); 
   })
};
