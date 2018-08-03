exports.run = (client, message, args) => {
   let newWatchStatus = args.slice(1).join(" ");
   client.user.setActivity('' + newWatchStatus, {type: 'WATCHING'}); 
}
