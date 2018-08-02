exports.run = (client, message, [mention, ...reason]) => {

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("You do not have permission to kick members.");

  const kickMember = message.mentions.members.first();

  kickMember.kick(reason.join(" ")).then(member => {
    message.channel.send(`Succesfully kicked ${member.user.username}.`);
  });
};
