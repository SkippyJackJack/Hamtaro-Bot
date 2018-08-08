exports.run = (client, message, args) => {
	message.channel.send({embed: {
		color: 3447003,
		author: {
		  name: client.user.username,
      		  icon_url: client.user.avatarURL
		},
		title: `${client.guild.iconURL} **Info for ${message.guild.name}**`,
		description: "Here is some information about the current server.",
		fields: [{
		    name: "**Members**",
		    value: `${message.guild.memberCount}`
		},
		{
		    name: "**Created on:**",
		    value: `${message.guild.createdAt}`
		},
		{
		    name: "**Owner:**",
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
