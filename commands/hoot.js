exports.run = (client, message, args) => {

var request = require("request")

var url = "http://developer.cumtd.com/api/v2.2/json/GetStop?" +
    "key=d99803c970a04223998cabd90a741633" +
    "&stop_id=it"

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
