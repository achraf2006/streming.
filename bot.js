const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("581310499405168649")
setInterval(function() {
channel.send(`gooooooooooooooood`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
