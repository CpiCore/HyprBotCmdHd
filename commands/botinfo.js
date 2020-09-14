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
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setThumbnail()
        .setColor('RANDOM')
        .setTitle(`HyprBot bot statisztikái`)
        .addFields(
            {
                name: "Bot Tulaj: ",
                value: "@F4||1ng ☄#2370",
                inline: true
            },
            {
                name: "Felhasználók akik a botot használják: ",
                value: `${bot.users.cache.size}`,
                inline: true
            },
            {
                name: "Bot neve",
                value: 'HyprBot',
                inline: true
            },
            {
                name: "Bot link",
                value: "Invite link: https://discord.com/api/oauth2/authorize?client_id=745904881725866024&permissions=8&scope=bot",
                inline: true
            }
        )
    message.channel.send(embed)
}
exports.config = {
    aliases: ["pong", "pingpong"]
}
