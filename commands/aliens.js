module.exports = (client, message, args) => {

const canvas = Canvas.createcanvas(500,436);
const background = await Canvas.loadImage('../images/aliens.jpg');

ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
const attachment = new Discord.Attachment(canvas.toBuffer(), 'aliens.jpg');

message.channel.send(`Welcome to the server, ${member}!`, attachment);

};
