const Discord = require('discord.js');
const client = new Discord.Client();
       var prefix = "$";
	   
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
      client.user.setGame(`Virex | By : RATE`,'https://www.twitch.tv/TST');
});
  
client.on('message', msg => {
  if (msg.content === '$inv') {
    msg.channel.send(':link: | **Bot Link :** https://discordapp.com/api/oauth2/authorize?client_id=577113302099034113&permissions=8&scope=bot');
msg.react("🔗")
  }
});

client.on('message', msg => {
  if (msg.content === '$help') {
    msg.channel.send('__~~ Virex System ~~__ By: > @!    Virex | RATE#1979');
    msg.channel.send('               :mailbox_closed:**Prefix is** : `$`:mailbox_closed:                  ');
    msg.channel.send(':loudspeaker: | `$bc` **> Send Broadcast To All Members**');
    msg.channel.send(':satellite:  | `$server` **> See All Things About The Server**');
    msg.channel.send(':cancer:   | `$clear` **> To Clear Messages**');
msg.react("✅")
  }
});

client.on("message", message => {
    var prefix = "$"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    }); 
	
client.on("message", message => {
    const prefix = '$';
 
            var args = message.content.substring(prefix.length).split("$");
            if (message.content.startsWith(prefix + "clear")) {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You Dont Have **Permission** To Clear');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done !",
        color: 0x36393e,
        description: "تم تنظيف الشات",
        footer: {
          text: "Virex System."
        }
      }}).then(msg => {msg.delete(50)});
                          }

     
});

  client.on('message', message => {
    var prefix = "$";
    if (message.content.split(' ')[0] == 'bc')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;


           member.send( `${member} ! ` + message.content.substr(3));
                                                      message.delete();
            
                                                    });
            
                                                  });
												  
   client.on("message", message => {
 
             var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "bc")) {
                          if (!message.member.hasPermission("ADMINISTRATOR"))  return;

                          if (!args[1]) {
                            
                                 let embed3 = new Discord.RichEmbed()
                                     .setDescription(":white_check_mark: | تم ارسال رسالة لا يوجد بها شي")
                                       .setColor("#FF00FF")
                                          message.channel.sendEmbed(embed3);
                            
                                        } else {

                            
                                           let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال البرودكاست للجميع')
                                                                .setColor("#99999")
                               
                                                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
                          }
});

client.login(process.env.BOT_TOKEN);
