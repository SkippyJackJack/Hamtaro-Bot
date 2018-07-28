exports.run = (client, command, args) => {
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  client.config.prefix = newPrefix;
  fs.writeFile(client.config, JSON.stringify(client.config), (err) => console.error);
}
