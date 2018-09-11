exports.run = async (client, message, level) => {
  
  const readdir = promisify(require("fs").readdir);
  
  const commandList = await readdir("./");
  
  message.channel.send({embed: {
    color: 0xf29837,
    title: `${client.config.botName} | Release ${client.config.version}`,
    description: "Join my home base [here!](https://discord.gg/dsrRtwZ)",
    fields: [{
        name: "Developer:",
        value: "High-Fox",
        inline: true
      },
      {
        name: "Library:",
        value: "Discord.js",
        inline: true
      },
      {
        name: "Commands:",
        value: `${commandList.length}`
      }          
    ],
    thumbnail: {
      url: client.user.avatarURL
    },
    footer: {
      avatar_url: "http://hamtaro-api.herokuapp.com/assets/images/profile_hd.jpg",
      text: "© High-Fox 2018"
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
