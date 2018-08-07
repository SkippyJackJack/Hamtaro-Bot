const config = require("../config.json");
exports.run = (client, message, args) => {
    message.reply("Invite me to your server here: " + config.invite-link);
}
