module.exports = (client) => {

client.getRandomImage = (animal) => {
  
if (animal == "hamster") {
  
const hamsterLinks = [
  "https://media.giphy.com/media/3oeHLrjZGBgnPx5VII/giphy.gif",
  "https://media.giphy.com/media/kNGHx5m4QPra0/giphy.gif",
  "https://media.giphy.com/media/IThjAlJnD9WNO/giphy.gif",
  "https://media.giphy.com/media/JglVCaB0axZ4Y/giphy.gif",
  "https://media.giphy.com/media/uUs14eCA2SBgs/giphy.gif",
  "https://media.giphy.com/media/AaqdLBKYfZl0A/giphy.gif",
  "https://media.giphy.com/media/ia7kRlpGe3IFq/giphy.gif",
  "https://media.giphy.com/media/149c3jrzGk0AtG/giphy.gif",
  "https://media.giphy.com/media/7jdcmQ9zb9Tk4/giphy.gif",
  "https://media.giphy.com/media/anu91JH5LYiVW/giphy.gif",
  "https://media.giphy.com/media/aK4wh0UE3oddS/giphy.gif",
  "https://media.giphy.com/media/XCsuZw0hWj8B2/giphy.gif",
  "https://media.giphy.com/media/Gd3PdO3AtmwWk/giphy.gif",
  "https://media.giphy.com/media/tOWyML1WPzKjm/giphy.gif",
  "https://media.giphy.com/media/3oeHLrjZGBgnPx5VII/giphy.gif",
  "https://media.giphy.com/media/OBpFd1Dat9Vzq/giphy.gif",
  "https://media.giphy.com/media/xUn3CmI6rN5pEUlwNa/giphy.gif",
  "https://media.giphy.com/media/26n6WYBZZRSewlgd2/giphy.gif",
  "https://media.giphy.com/media/Osub6rry9Pu2k/giphy.gif",
  "https://media.giphy.com/media/YCCDVrmnXj8vC/giphy.gif",
  "https://media.giphy.com/media/vYtDDrgTXyrm0/giphy.gif"
];

var randomHamsterLink = Math.floor(Math.random() * hamsterLinks.length);
  
return hamsterLinks[randomHamsterLink];

} else if (animal == "owl") {

const owlLinks = [
  "https://media.giphy.com/media/bz7Lkscqm6mrK/giphy.gif",
  "https://media.giphy.com/media/1hWHUCgi3wKT6/giphy.gif",
  "https://media.giphy.com/media/s68CylvQ9ioRa/giphy.gif",
  "https://media.giphy.com/media/Yl8cYI66NzOuY/giphy.gif",
  "https://media.giphy.com/media/rbIGYBixpnjJm/giphy.gif",
  "https://media.giphy.com/media/eFx8ZIMc7oIFO/giphy.gif",
  "https://media.giphy.com/media/6tsecJ8OyvWUw/giphy.gif",
  "https://media.giphy.com/media/DLz9ryCoP2Vz2/giphy.gif",
  "https://media.giphy.com/media/gtH9aiTG8yeAw/giphy.gif",
  "https://media.giphy.com/media/lPKUVwYQVjeyk/giphy.gif",
  "https://media.giphy.com/media/xeibGDwTHxWs8/giphy.gif",
  "https://media.giphy.com/media/3BEZiwIcLNITm/giphy.gif",
  "https://media.giphy.com/media/B0ArQNmsh2PMk/giphy.gif",
  "https://media.giphy.com/media/I13tgbLk6Uv8Q/giphy.gif",
  "https://media.giphy.com/media/NqManZLZ0Ptza/giphy.gif",
  "https://media.giphy.com/media/jq9qONW8z0uOY/giphy.gif",
  "https://media.giphy.com/media/dDklqSKFX4APC/giphy.gif",
  "https://media.giphy.com/media/5Dr8VvwXGngbe/giphy.gif",
  "https://media.giphy.com/media/3o7bu2wCQjNyFnIcog/giphy.gif",
  "https://media.giphy.com/media/2YoVPwABcYt1e/giphy.gif",
  "https://media.giphy.com/media/CYU7Q6NHVM28o/giphy.gif",
  "https://media.giphy.com/media/iKufnbkSIcliM/giphy.gif",
  "https://media.giphy.com/media/pcdOR27Nteasg/giphy.gif",
  "https://media.giphy.com/media/LmXEue5Ys9rTa/giphy.gif",
  "https://media.giphy.com/media/xwy9AbBlXlIFW/giphy.gif",
  "https://media.giphy.com/media/b7U6l8DbzlKKY/giphy.gif",
  "https://media.giphy.com/media/Mh4j4Y4Lu4boA/giphy.gif",
  "https://media.giphy.com/media/Z5W9H5DtCWN4k/giphy.gif",
  "https://media.giphy.com/media/YwO4nS4NoLWBW/giphy.gif",
  "https://media.giphy.com/media/12mNZ256B87ULm/giphy.gif",
  "https://media.giphy.com/media/IWhdzaaiet9ni/giphy.gif",
  "https://media.giphy.com/media/NBFWQBHEEj1bG/giphy.gif",
  "https://media.giphy.com/media/I1r5jpUvdGra8/giphy.gif",
  "https://tenor.com/view/owl-gif-9233151",
  "https://tenor.com/view/owl-gif-5705190",
  "https://tenor.com/view/boop-owl-gif-10047830",
  "https://tenor.com/view/owl-feather-animal-animals-annoyed-gif-4984224",
  "https://tenor.com/view/funny-animals-owl-birds-brave-dio-brando-gif-12041955",
  "https://tenor.com/view/owl-gif-9623961",
  "https://tenor.com/view/owl-funny-animals-gif-11081718",
  "https://i.imgflip.com/1x39ol.jpg",
  "https://imgur.com/a/ZqFuIoc",
];
  
var randomOwlLink = Math.floor(Math.random() * owlLinks.length);
  
return owlLinks[randomOwlLink];

} else if (animal == "bear") {

const bearLinks = [
  "https://media.giphy.com/media/3oeHLrjZGBgnPx5VII/giphy.gif",
  "https://media.giphy.com/media/kNGHx5m4QPra0/giphy.gif",
  "https://media.giphy.com/media/IThjAlJnD9WNO/giphy.gif",
  "https://media.giphy.com/media/JglVCaB0axZ4Y/giphy.gif",
  "https://media.giphy.com/media/uUs14eCA2SBgs/giphy.gif",
  "https://media.giphy.com/media/AaqdLBKYfZl0A/giphy.gif",
  "https://media.giphy.com/media/ia7kRlpGe3IFq/giphy.gif",
  "https://media.giphy.com/media/149c3jrzGk0AtG/giphy.gif",
  "https://media.giphy.com/media/7jdcmQ9zb9Tk4/giphy.gif",
  "https://media.giphy.com/media/anu91JH5LYiVW/giphy.gif",
  "https://media.giphy.com/media/aK4wh0UE3oddS/giphy.gif",
  "https://media.giphy.com/media/XCsuZw0hWj8B2/giphy.gif",
  "https://media.giphy.com/media/Gd3PdO3AtmwWk/giphy.gif",
  "https://media.giphy.com/media/tOWyML1WPzKjm/giphy.gif",
  "https://media.giphy.com/media/3oeHLrjZGBgnPx5VII/giphy.gif",
  "https://media.giphy.com/media/OBpFd1Dat9Vzq/giphy.gif",
  "https://media.giphy.com/media/xUn3CmI6rN5pEUlwNa/giphy.gif",
  "https://media.giphy.com/media/26n6WYBZZRSewlgd2/giphy.gif",
  "https://media.giphy.com/media/Osub6rry9Pu2k/giphy.gif",
  "https://media.giphy.com/media/YCCDVrmnXj8vC/giphy.gif",
  "https://media.giphy.com/media/vYtDDrgTXyrm0/giphy.gif"
];
  
var randomBearLink = Math.floor(Math.random() * bearLinks.length);
  
return bearLinks[randomBearLink];
  
   }
};
  
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
  
  client.getGuildSettings = (guild) => {
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
  
  process.on("uncaughtException", (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    console.log(`Uncaught Exception: ${errorMsg}`);
    // Always best practice to let the code crash on uncaught exceptions. 
    // Because you should be catching them anyway.
    process.exit(1);
  });

  process.on("unhandledRejection", err => {
    console.log(`Unhandled rejection: ${err}`);
  });
};
