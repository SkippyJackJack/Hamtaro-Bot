module.exports = member => { 
    const channel = member.guild.channels.find('name', client.config.welcome-channel);
    
    if (!channel) return console.log("welcome-channel not found.");
    	channel.send(`Greetings, ${member}. Welcome to the server!`);
};