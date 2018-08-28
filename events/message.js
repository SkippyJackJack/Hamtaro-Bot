module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
  
  // Get the guild's settings
  const guildConf = message.serverConf = client.getGuildSettings(message.guild);
  
  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;
  
  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // If the message is just "?", ignore it
  if (!command) return;
  
  // Grab the command or alias data from the client.commands Enmap
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

  // If that command doesn't exist send message
  if (!cmd) return message.channel.send("I-I don't recognise that command!");

  // Run the command
  cmd.run(client, message, args);
};
