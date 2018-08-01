module.exports = {
    name: 'ping',
    description: 'Returns with "pong!"',
    execute(message) {
        message.channel.send('pong!');
    },
};
