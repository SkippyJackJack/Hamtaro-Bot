exports.run = (client, message, args) => {
  
  if (message.author.id !== client.config.ownerID) return message.channel.send("I-I'm sorry, but you're not allowed to do that ._.");
  
  const downtime = args.join(" ");
  const allGuilds = client.guilds.array();
  
	message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: `**»|** __Maintenance Mode__ **|«**`,
    description: `Hamtaro Bot will now be in maintenance mode in order to add new features, fix some bugs and improve the overall performance.\nDuring this time it will be unable to receive commands and send messages to the server.`,
    fields: [{
        name: "**Maintenance Duration**",
        value: `${downtime}`
      },
      {
        name: "**Changelog**",
        value: "See the full changelog [Here](https://www.google.com)"
      },
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Hamtoro Bot © High-Fox 2018"
    }
  }
})
};
