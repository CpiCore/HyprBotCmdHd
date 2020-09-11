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
exports.run = async(bot, message, args) => {
    bot.guilds.cache.forEach(guild => {
        let embed = new Discord.MessageEmbed()
        .setTitle("Szerverek")
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription(`Szerver neve: **${guild.name}** \n Szerver ID-je: **${guild.id}** \n A szerver tulajdonos neve: **${guild.owner.user.tag}** \n Tagok száma: **${guild.memberCount}**`)
        .setTimestamp()
        .addField(`A bot jelenlegi szervereinek a száma:`, bot.guilds.cache.size)
        .setColor("GREEN")
        .setFooter(bot.user.username, bot.user.displayAvatarURL());
        message.channel.send(embed);
    })
}
exports.config = {
  aliases: ["pong", "pingpong"]
}