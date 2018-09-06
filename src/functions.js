module.exports = (client) => {
  
  client.permLevel = message => {
    let permlvl = 0;

    const permOrder = client.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

    while (permOrder.length) {
      const currentLevel = permOrder.shift();
      if (message.guild && currentLevel.guildOnly) continue;
      if (currentLevel.check(message)) {
        permlvl = currentLevel.level;
        break;
      }
    }
    return permlvl;
  };
  
  client.getGuildSettings = async (guild) => {
    const def = client.serverConfig.defaultConfig;
    if (!guild) return def;
    const returns = {};
    const overrides = client.serverConfig.get(guild.id) || {};
    for (const key in def) {
      returns[key] = overrides[key] || def[key];
    }
    return returns;
  };
  
  client.awaitReply = async (msg, question, limit = 60000) => {
    const filter = m => m.author.id === msg.author.id;
    await msg.channel.send(question);
    try {
      const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
      return collected.first().content;
    } catch (e) {
      return false;
    }
  };
  
  client.loadCommand = (commandName) => {
    try {
      const props = require(`../commands/${commandName}`);
      const isNewCommand = client.commandList.includes(props.help.name) ? "true" : "false";
      
      // Send message to every guild when a new command is added
      if (isNewCommand == "true") {
       client.guilds.forEach((guild) => {
        const firstTextChannel = client.getDefaultChannel(guild);
         
        firstTextChannel.send( { embed: { title: "Notice of new command!", color: 0xf29837, fields: [{ name: "Name:", value: `${props.help.name}`, inline: true }, { name: "Description:", value: `${props.help.description}`, inline: true } ], } } );
        console.log(`All guilds notified of new command: ${props.help.name}`);
        client.commandList.push(props.help.name);
       })
      };
      
      console.log(`Loading Command: ${props.help.name}`);
      if (props.init) {
        props.init(client);
      }
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
      return false;
    } catch (e) {
      return `Unable to load command ${commandName}: ${e}`;
    }
  };

  client.unloadCommand = async (commandName) => {
    let command;
    if (client.commands.has(commandName)) {
      command = client.commands.get(commandName);
    } else if (client.aliases.has(commandName)) {
      command = client.commands.get(client.aliases.get(commandName));
    }
    if (!command) return `The command \`${commandName}\` doesn"t seem to exist, nor is it an alias.`;
  
    if (command.shutdown) {
      await command.shutdown(client);
    }
    delete require.cache[require.resolve(`../commands/${commandName}.js`)];
    return false;
  };
  
  client.getDefaultChannel = async (guild) => {
    guild.channels.forEach((channel) => {
      if(channel.type == "text") {
        if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
          return channel;
        }
      }
    })
  };
    
  
  String.prototype.toProperCase = function() {
    return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }; 
  
  client.wait = require("util").promisify(setTimeout);
  
};
