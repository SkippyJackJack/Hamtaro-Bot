exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find("name", "" + client.config.modsrole);
  if (!modRole)
    return message.reply("The " + client.config.modsrole + "role does not exist, please use the 'modrole' command to define a role that has moderator privileges.");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You don't have permission to use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Command requires mention of user to kick - e.g. !kick @NaughtyMember");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`Succesfully kicked ${member.user.username}.`);
  });
};
