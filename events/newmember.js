exports.run = (client, member) => {
    client.on('guildMemberAdd', member => {
    const member = member.guild.channels.find('name', 'welcome-channel');
    if (!channel) return console.log("welcome-channel not found.");
    channel.send(`Greetings, ${member}. Welcome to the server!`);
 })
};
