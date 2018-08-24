exports.run = (client, message, args) => {

  message.channel.send({embed: {
    color: client.config.embedColour,
    title: `Hamtoro Bot »|« Release ${client.config.version} [ALPHA]`,
    description: "High-Fox",
    fields: [{
        name: "Developer:",
        value: "High-Fox"
      },
      {
        name: "Library:",
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
