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
    if (message.author.id == 477814830598717441) {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Hiba")
                .setDescription(`**${message.author.username}** nem adtad meg hogy mennyi **pénzt** szeretnél!`)
                .setColor("RED")
                .setFooter(`${bot.user.username}`)
                .setTimestamp()
            return message.channel.send(embed)
        }
        else {
            const money = money1.get(`user_${message.author.id}`)
            const added = money1.set(`user_${message.author.id}`, args[0])
            console.log(`To: ${args[0]} added ${args[1]}`)
        }
    }
}
exports.config = {
  aliases: ["pong", "pingpong"]
}