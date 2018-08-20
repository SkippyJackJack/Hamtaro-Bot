exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.send(`${client.commands.map(c => `${client.config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)}: ${c.help.description}`).join('\n')}`, "ascii");
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(`n${command.help.name}\n${command.help.description}\nUsage: ${command.help.usage}`, "ascii");
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h']
};

exports.help = {
  name: 'help',
  description: 'Gives you all of my commands :3',
  usage: 'help [command]'
};
