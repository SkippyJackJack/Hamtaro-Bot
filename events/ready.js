const chalk = require('chalk');
exports.run = client => {
  console.log(chalk.bgCyan.black.bold(`Online and active on ${client.guilds.size} servers.`));
  client.user.setActivity(client.config.prefix + 'help', {type: 'WATCHING'});
};
