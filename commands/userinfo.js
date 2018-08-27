exports.run = (client, message, args) => {
  
   message.channel.send({
      embed: {
	  color: 0xf29837,
	  author: {
	       name: "__*User Info*__",
	  },
	  thumbnail: {
	       url: `${message.author.avatarURL}`,
	  },
	  fields: [
	      {
		 name: '**Username**',
		 value: `${message.author.username}`,
		 inline: true,
	      },
	      {
		 name: '**ID**',
		 value: `${message.author.id}`,
		 inline: true,
	      },
	      {
		 name: '**Account Creation Date**',
		 value: `${message.author.createdAt}`,
	      },
	      {
		 name: '**Bot Account**',
		 value: `${message.author.bot}`,
	      },
	   ],
        }
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['userinf'],
};

exports.help = {
  name: 'userinfo',
  description: 'Get information about yourself!',
  usage: 'userinfo'
};
