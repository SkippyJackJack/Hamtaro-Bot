module.exports = (client, member) => {

  const serverConfig = client.getGuildSettings(member.guild);
  
  if (serverConfig.announceNewMembers !== "true") return;
  
  const welcomeMessage = serverConfig.newMemberAnnouncementMessage.replace("{{member}}", member.user.tag);
  
  member.guild.channels.find("name", serverConfig.newMemberAnnouncementChannel).send(welcomeMessage).catch(console.error);
};
