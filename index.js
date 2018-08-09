// Define variables and libraries needed
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const moment = require("moment");
const jimp = require("jimp);

const client = new Discord.Client();
const config = require("./config.json");
require("./util/eventloader.js")(client);

client.config = config;

client.on('ready', () => {
    // Log to Heroku console
    console.log("---> STATUS: Butler-Bot Online <---");
    client.user.setActivity("for messages", {type: 'WATCHING'}); 
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`Loading Command: ${props.help.name}. 👌`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.login(process.env.TOKEN);
