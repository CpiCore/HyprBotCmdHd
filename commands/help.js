const Discord = require("discord.js")
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
const { config } = require("process");
const db = require('quick.db')
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
const ddif1 = require('return-deep-diff')
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();
let timeout = 86400000;
exports.run = async(client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("Segítség")
    .setDescription("Itt az összes parancsot megtalálod")
    .addField("MODERÁTOR PARANCSOK")
    .addField(` 1. !kick [név] [indok]`)
    .addField(` 2.  !userinfo [név]`)
    .addField(` 3.  !clear [mennyiség]`)
    .addField(` 4. !mute [név]`)
    .addField(` 5. !unmute [név]`)
    .addField(` 6. !ban [név]`)
    .addField(` 7. !unban [név]`)
    .addField("FUN PARANCSOK")
    .addField(` 1.  !lottó [szám amire tippelsz]`)
    .addField(` 2.  !say [szöveg]`)
    .addField(` 3.  !kérdés [kérdésed]`)
    .addField("ALAP PARANCSOK")
    .addField(` 1.  !ping`)
    .addField(` 2  !idő`)
    .addField(` 3.  !serverinfo`)
    .addField(` 4.  !botinfo`)
    .addField(` 5.  !avatar [név]`)
    .addField("PREFIX PARANCSOK")
    .addField(` 1.  !prefix [új prefix]`)
    .addField(` 2.  !resetpr (visszaállítja az az alap prefixet: !)`)
    .addField(` 3.    !prefixhelp (kiirja a jelenlegi prefixet!)`)
    .setColor("#02dbc9")
    .setFooter("Bot by F4ll1ng")
    .setTimestamp()
    message.channel.send(embed)
}
exports.config = {
  aliases: ["pong", "pingpong"]
}