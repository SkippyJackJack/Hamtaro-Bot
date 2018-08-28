exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.send("```" + `\nUse ${client.config.prefix}help [commandName] for usage information ~\n${client.commands.map(c => `${client.config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)}: ${c.help.description}`).join('\n')}` + "```");
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send("```" + `\n**Name:** ${command.help.name}\n**Description:** ${command.help.description}\n**Usage:** ${command.help.usage}\n` + "```");
    }
  }
};

exports.conf = {
  enabled: true,
  aliases: ['h'],
  permLevel: "User"
};

exports.help = {
  name: 'help',
  description: 'Gives you all of my commands :3',
  usage: 'help [command]'
};
