const prefix = "!" 
const Discord = require("discord.js")
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
const { config } = require("process");
const db = require("quick.db")
const canvas1 = require('canvas')
const applyText = (canvas, text) => {
    const ctx = canvas.getContext('2d');
}
const ytdl = require("ytdl-core")
const ffmpeg = require("ffmpeg")
const avconv = require("avconv")
var figlet = require("figlet");
var money1 = new db.table("casino")
const ms = require("parse-ms");
const { Server } = require("http");
const { error } = require("console");
var inv = new db.table("Inventory")
const queue = new Map()
var warn = new db.table("Warns")
const ddif1 = require ('return-deep-diff')
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

 exports.run = async(bot, message) => {
    bot.on('guildMemberRemove', async member => {
        const canvas = canvas1.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        const role = member.guild.roles.cache.find(role => role.name === 'Tag');
    
        const background = await canvas1.loadImage("./back.jpg")
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
        ctx.font = '30px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Sajnáljuk hogy kiléptél!,', canvas.width / 2.5, canvas.height / 3.5);
    
        ctx.font = applyText(canvas, `${member.displayName}!`);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
    
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
    
        const avatar = await canvas1.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 25, 25, 200, 200);
    
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'left-image.png');
    
        channel2 = await db.fetch(`leftec_${member.guild.id}`, member.guild.channel);
        console.log(channel1)
        const chanl1 = member.guild.channels.cache.find(ch => ch.name === channel2);
    
        chanl1.send(attachment);
    
        member.roles.add(role)
    });
  }