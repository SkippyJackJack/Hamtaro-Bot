const { inspect } = require("util");

// This command is to modify/edit guild configuration. Perm Level 3 for admins
// and owners only. Used for changing prefixes and role names and such.
exports.run = async (client, message, [action, key, ...value], level) => {

  // Retrieve current guild settings (merged) and overrides only.
  const settings = message.serverConfig;
  const overrides = client.serverConfig.get(message.guild.id);
  
  // Edit an existing key value
  if (action === "edit") {
    // User must specify a key.
    if (!key) return message.reply("Please specify a key to edit");
    // User must specify a key that actually exists!
    if (!settings[key]) return message.reply("This key does not exist in my settings");
    // User must specify a value to change.
    if (value.length < 1) return message.reply("Please specify a new value for the key");
    // User must specify a different value than the current one.
    if (value.join(" ") === settings[key]) return message.reply("This setting already has that value!");
    
    // If the guild does not have any overrides, initialize it.
    if (!client.serverConfig.has(message.guild.id)) client.serverConfig.set(message.guild.id, {});

    // setProp is an enmap feature, it defines a single property of an object in an enmap key/value pair.
    client.serverConfig.setProp(message.guild.id, key, value.join(" "));

    // Confirm everything is fine!
    message.reply(`${key} successfully edited to ${value.join(" ")}`);
  } else
  
  // Resets a key to the default value
  if (action === "reset") {
    if (!key) return message.reply("Please specify a key to reset.");
    if (!settings[key]) return message.reply("This key does not exist in the settings");
    if (!overrides[key]) return message.reply("This key does not have an override and is already using defaults.");
    
    // Good demonstration of the custom awaitReply method in `./modules/functions.js` !
    const response = await client.awaitReply(message, `Are you sure you want to reset ${key} to the default value? **Respond with Yes or No**`);

    // If they respond with y or yes, continue.
    if (["y", "yes"].includes(response.toLowerCase())) {
      // We delete the `key` here.
      delete overrides[key];
      client.serverConfig.set(message.guild.id, overrides);
      message.reply(`${key} was successfully reset.`);
    } else
    // If they respond with n or no, we inform them that the action has been cancelled.
    if (["n","no","cancel"].includes(response)) {
      message.reply("Action cancelled.");
    }
  } else
  
  if (action === "view") {
    if (!key) return message.reply("Please specify a key to view");
    if (!settings[key]) return message.reply("This key does not exist in the settings");
    const isDefault = !overrides[key] ? "\nThis is the default global default value." : "";
    message.reply(`The value of ${key} is currently ${settings[key]}${isDefault}`);
  } else {
    message.channel.send(inspect(settings), {code: "json"});
  }
};

exports.conf = {
  enabled: true,
  aliases: ["setting", "settings", "conf"],
  permLevel: "Administrator"
};

exports.help = {
  name: "setconf",
  description: "View or change settings for your server.",
  usage: "setconf [view/edit/reset] <key> <value>"
};
