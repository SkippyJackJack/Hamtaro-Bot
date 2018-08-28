exports.run = (client, message, level) => {

  message.channel.send({embed: {
    color: 0xf29837,
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
  aliases: ['info', 'inf'],
  permLevel: "User"
};

exports.help = {
  name: "about",
  description: "Info about me :D",
  usage: "about"
};
