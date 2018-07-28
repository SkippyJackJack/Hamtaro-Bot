exports.run = (client, message, args) => {
   let newWatchStatus = message.content.split(" ").slice(1, 2)[0];
   client.user.setActivity('' + newWatchStatus, {type: 'WATCHING'}); 
}
