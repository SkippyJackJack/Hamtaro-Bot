exports.run = (client, message, args) => {

var request = require("request")

var url = "https://random-images-api.herokuapp.com/hoot.html"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        console.log(body) // Print the json response
    }
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "0"
};

exports.help = {
  name: "hoot",
  description: "Hoo-Hoot! ^o,o^",
  usage: "hoot"
};
