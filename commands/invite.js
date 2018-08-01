module.exports {
  name: 'invite',
  description: 'Displays link to invite the bot to your discord server',
  args: 'false',
  execute(message) {
    message.channel.send(process.env.INVITE);
    },
};
