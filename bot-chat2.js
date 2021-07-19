/**
 * @INFO
 * ( Documentation NpmJS)
 * - Discord-Chatbot: https://npmjs.com/package/discord-cha...
 * - Discord-Reply: https://npmjs.com/package/discord-reply
 * - Discord.js: https://npmjs.com/package/discord.js
 */


 const Discord = require('discord.js')
 require('discord-reply');
 const client = new Discord.Client();
 const bot = require('discord-chatbot');
 const chatbot = new bot({ name: "NAME BOT"});
 const channelID = "CHANNEL ID";
 
 client.on('ready', () => {
     console.log(`${client.user.tag} is ready`);
 });
 client.on('message', async (message) => {
     if (
         message.author.bot &&
         message.channel.id === channelID &&
         message.author.id === client.user.id
     ) {
         setTimeout(async () => {
             const text = await chatbot.chat(message.content);
             message.lineReply(text);
         }, 5000);
     }
 });
 
 client.login('TOKEN HERE')