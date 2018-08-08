const config = require('../config.json');
module.exports = member => { 
    const channel = member.guild.channels.find('name', config.welcome-channel);
    
    if (!channel) return console.log("welcome-channel not found.");
    	channel.send(`Greetings, ${member}. Welcome to the server!`);
};
