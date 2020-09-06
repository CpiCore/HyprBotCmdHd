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
exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author
    var level = db.get(`guild_${message.guild.id}_level_${user.id}`) || 0
    level = level.toString()
    let xp = db.get(`guild_${message.guild.id}_xp_${user.id}`) || 0
    var xpNeeded = level * 500 + 500
    let every = db
        .all()
        .filter(i => i.ID.startsWith(`guild_${message.guild.id}_xptotal_`))
        .sort((a, b) => b.data - a.data)
    var rank = db.get(`guild_${message.guild.id}_xptotal_${user.id}`) + 1
    rank = rank.toString()
    /*var img = await canvas10.rank({
        username: user.username,
        discrim: user.discriminator,
        status: user.presence.status,
        currentXP: xp.toString(),
        neededXP: xpNeeded.toString(),
        rank,
        level,
        avatarUrl: user.displayAvatarUrl({ format: "png" }),
        color: "white"
    })
    return message.channel.send(new Discord.MessageAttachment(img, "rank.png"))*/
    message.channel.send(level)
}
exports.config = {
    aliases: ["pong", "pingpong"]
}