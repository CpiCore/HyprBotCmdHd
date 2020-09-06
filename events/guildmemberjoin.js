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
    bot.on('guildMemberAdd', async member => {
        //if (!channel) return;
        const reng = member.guild.roles.cache.find(r => r.name === "Muted");
        let ize = db.fetch(`muted${member.guild.id}`, member.id) //.set(`muted${message.guild.id}${mUser.id}`, true))
        var dbid = member.id;
        if (dbid == ize) {
            member.roles.add(reng)
            console.log("Muted login!")
        }
        //var d = db.fetch(`casino${member.id}`)
        //var money = db.set(`casino${member.id}`, 1000)
        money1.set(`user_${member.id}`, 1000)
    
        const canvas = canvas1.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        const role = member.guild.roles.cache.find(role => role.name === 'Tag');
    
        const background = await canvas1.loadImage("./HyprBot/back.jpg")
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
        ctx.font = '40px sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Üdvözöllek a szerveren,', canvas.width / 2.5, canvas.height / 3.5);
    
        ctx.font = applyText(canvas, `${member.displayName}!`);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);
    
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
    
        const avatar = await canvas1.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
        ctx.drawImage(avatar, 25, 25, 200, 200);
    
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
    
        channel1 = await db.fetch(`welcomec_${member.guild.id}`, member.guild.channel);
        console.log(channel1)
        const chanl = member.guild.channels.cache.find(ch => ch.name === channel1);
    
        chanl.send(attachment);
    
        member.roles.add(role)
    });
  }