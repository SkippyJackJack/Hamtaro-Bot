exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  client.clean = async (client, text) => {
    if (text && text.constructor.name == "Promise")
      text = await text;
    if (typeof evaled !== "string")
      text = require("util").inspect(text, {depth: 1});

    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
      .replace(client.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");

    return text;
  };
  
  if (message.author.id !== client.config.ownerID) return;
  
  const code = args.join(" ");
  client.wait = require("util").promisify(setTimeout);
  
  try {
    const evaled = eval(code);
    const clean = await client.clean(client, evaled);
    
    message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
    
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
};

exports.help = {
  name: "eval",
  description: "Executes arbitrary javascript. Only usable by the Bot Owner.",
  usage: "eval [...code]"
};
