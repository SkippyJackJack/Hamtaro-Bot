exports.run = (client, message, args) => {
    client.on('guildMemberAdd', member => {
    const newMember = member.guild.channels.find('name', 'welcome-channel');
    if (!channel) return console.log("welcome-channel not found.");
    channel.send(`Greetings, ${newMember}. Welcome to the server!`);
 })
};
