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
const commands = bot.commands
let timeout = 86400000;
const attach = new Attachment('https://cdn.discordapp.com/emojis/751813175401250836.gif?v=1')
exports.run = async(client, message, args) => {
  message.channel.send("Megtaláltad az easter egget :D 🥚", attach)
  message.react('748846006673604688')
  console.log(commands)
}
exports.config = {
  aliases: ["pong", "pingpong"]
}
