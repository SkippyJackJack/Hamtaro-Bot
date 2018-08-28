module.exports = (client, guild) => {
let defaultChannel = "";
guild.channels.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})
defaultChannel.send(`*Squeak!* Thanks for inviting me to your server! H-Here's some info about me, if you're interested. ◕ ◡ ◕`, {
embed:{
    title: 'Hamtaro Bot',
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    color: 0x2471a3, 
    description: "Use ?help to see my commands! ^-^",
    fields: [
        {
            name: '**My Master:**',
            value: 'High-Fox'
        },     
        {
            name: 'My Code:',
            value: '[GitHub Source Code](https://github.com/High-Fox/Hamtoro-Bot/)'
        },
        {
            name: 'My Home:',
            value: '[INSERT SERVER LINK HERE]'
        } 
    ],
    footer: {
        text: 'Hamtaro Bot © High-Fox 2018'
    }
   }
 })
};
