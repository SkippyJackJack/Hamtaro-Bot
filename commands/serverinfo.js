exports.run = (client, message, args) => {
	message.channel.send({embed: {
		color: 0xf29837,
		author: {
		  name: message.guild.name,
      		  icon_url: message.guild.iconURL
		},
		title: `Info for ${message.guild.name}`,
		description: "Here is some information about the current server.",
		fields: [{
		    name: "Members",
		    value: `${message.guild.memberCount}`
		},
		{
		    name: "Created on:",
		    value: `${message.guild.createdAt}`
		},
		{
		    name: "Owner:",
		    value: `${message.guild.owner}`
		}	
	   ],	
      }
   })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['serverinf'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Displays information about the current server.',
  usage: 'serverinfo'
};
