exports.run = (client, message, args) => {

  message.channel.send({embed: {
    color: 3447003,
    title: `Hamtoro Bot ∞ Version ${client.config.version}`,
    description: "High-Fox",
    fields: [{
        name: "Developer:",
        value: "High-Fox"
      },
      {
        name: "Library",
        value: "Discord.js"
      },
      {
        name: "My server!",
        value: "INSERT SERVER LINK HERE"
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "© High-Fox 2018"
    }
  }
})
};

exports.conf = {
  enabled: true,
  aliases: ['info', 'inf']
};

exports.help = {
  name: "about",
  description: "Info about me :D",
  usage: "about"
};
