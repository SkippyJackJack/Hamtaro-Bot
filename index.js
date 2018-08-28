// Define variables and libraries needed
const Discord = require("discord.js");
const client = new Discord.Client();

const Enmap = require("enmap");
const EnmapLevel = require("enmap-sqlite");
const fs = require("fs");
const { promisify } = require("util");
const chalk = require("chalk");

client.config = require("./config.js");

require("./src/functions.js")(client);


client.serverConfig = new Enmap({provider: new EnmapLevel({name: "serverConfig"})});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


client.on("ready",() => {
  console.log(chalk.bgCyan.black(`Online and active on ${client.guilds.size} servers.`));
  client.user.setActivity(client.config.prefix + 'help', {type: 'WATCHING'});
});


const init = async () => {
  
  fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

  fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    console.log(`Loading a total of ${files.length} commands.`);
    files.forEach(f => {
      let props = require(`./commands/${f}`);
      console.log(`Loading Command: ${props.help.name}`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });

  client.levelCache = {};
    for (let i = 0; i < client.config.permLevels.length; i++) {
      const thisLevel = client.config.permLevels[i];
      client.levelCache[thisLevel.name] = thisLevel.level;
  } 

  client.login(process.env.TOKEN);

};

init();
