module.exports = (client, message) => {
  // Ignore all bots
  if (message.author.bot) return;
  
  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;
  
  if (talkedRecently.has(message.author.id))
  return;

  talkedRecently.add(message.author.id);
  
  setTimeout(() => {
     talkedRecently.delete(message.author.id);
  }, 10000);
  
  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return message.channel.send("I-I don't recognise that command!");

  // Run the command
  cmd.run(client, message, args);
};
