exports.run = (client, message, args) => {

const http = require('http');

let options = {
    host: 'random-images-api.herokuapp.com',
    path: '/hoot.html'
}
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(data);

    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
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
