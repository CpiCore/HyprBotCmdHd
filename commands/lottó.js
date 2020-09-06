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
    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Hiba")
            .setDescription(`**${message.author.username}** nem adtad meg melyik számra *tippelsz**!`)
            .setColor("RED")
            .setFooter(`${bot.user.username}`)
            .setTimestamp()
        return message.channel.send(embed)
    }
    else if (args[0] > 10) {
        return message.reply("10 vagy 10nél kisebb számot adj meg!")
    }
    else {
        const money = money1.get(`user_${message.author.id}`)
        message.delete()
        let szamok = Math.floor(Math.random() * 10) + 1;
        if (args[0] == szamok) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Eltaláltad :)")
                .setFooter(`Egyvenleged : ${money}`)
                .setDescription(`A szám amit ki kellet találni a ${szamok} volt! A te tipped: ${args[0]} ezzel kaptál 500 pénzt!`)
                .setTimestamp()
                .setColor("#08cc53")
            message.channel.send(embed)
            const izeid = message.author.id
            money1.add(`user_${message.author.id}`, 500)
        } else {
            const embed = new Discord.MessageEmbed()
                .setTitle("Másik szám volt az :)")
                .setFooter(message.author.username, message.author.avatarURL)
                .setDescription(`A szám amit ki kellet találni a ${szamok} volt! A te tipped : ${args[0]}`)
                .setTimestamp()
                .setColor("#e63200")
            message.channel.send(embed)
        }
    }
}
exports.config = {
  aliases: ["pong", "pingpong"]
}