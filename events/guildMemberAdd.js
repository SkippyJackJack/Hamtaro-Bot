module.exports = (client, message, member) => { 
    
    if (client.config.welcomeNewMembers == "false") return;
        
    const channel = message.guild.channels.find('name', client.config.welcomeChannel);
    
    if (!channel) return console.log("welcomeChannel not found.");
    	channel.send(`Greetings, ${member}. Welcome to the server!`);
};
