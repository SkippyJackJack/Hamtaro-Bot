exports.run = (client, message, [mention, ...reason]) => {
  const modRole = message.guild.roles.find("name", process.env.MODSROLE);
  if (!modRole)
    return message.reply("The " + process.env.MODSROLE + "role does not exist, please edit the MODSROLE environment variable to define a role that has moderator privileges.");

  if (!message.member.roles.has(modRole.id))
    return message.reply("You do not have permission to use this command.");

  if (message.mentions.members.size === 0)
    return message.reply("Command requires mention of user to kick \n e.g. !kick @NaughtyMember");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("You do not have permission to kick members.");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`Succesfully kicked ${member.user.username}.`);
  });
};
