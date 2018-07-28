exports.run = (client, message, args) => {
   let newPlayStatus = message.content.split(" ").slice(1, 2)[0];
   client.user.setActivity('' + newPlayStatus, {type: 'PLAYING'}); 
  }
