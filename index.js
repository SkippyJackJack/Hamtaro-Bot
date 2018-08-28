// Define variables and libraries needed
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const { promisify } = require("util");
const chalk = require("chalk");
const client = new Discord.Client();

const config = require("./config.json");
const functions = require("./src/functions.js");

client.hamtaroFunctions = functions;
client.config = config;


client.on("ready",() => {
  console.log(chalk.bgCyan.black(`Online and active on ${client.guilds.size} servers.`));
  client.user.setActivity(client.config.prefix + 'help', {type: 'WATCHING'});
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
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

client.login(process.env.TOKEN);
