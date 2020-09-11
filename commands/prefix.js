const Discord = require("discord.js")
var path = require('path');
global.appRoot = path.resolve(process.cwd());
// lib/moduleA/component1.js
const botconfig = require(appRoot + '/events/botconfig.json');
const prefix = botconfig.prefix;
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
exports.run = async (client, message, args) => {
    let prefixes = db.fetch(`prefix_${message.guild.id}`);
    if (prefixes == null) {
        db.set(`prefix_${message.guild.id}`, "!")
    }else{
        prefix.prefixes;
    }


    if (message.member.hasPermission("ADMINISTRATOR")) {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Hiba")
                .setDescription(`**${message.author.username}** nem adtál meg **prefixet**`)
                .setColor("RED")
                .setFooter(`HyprBot`)
                .setTimestamp()
            return message.channel.send(embed)
        }
    }
    else if (message.author.id == 477814830598717441) {

    }
    else {
        return message.reply("Nincs jogod ezt a parancsot használni!")
    }

    await db.set(`prefix_${message.guild.id}`, args[0])
    let embed = new Discord.MessageEmbed()
        .setAuthor(`HyprBot`, bot.avatarURL)
        .setTitle("A prefix megvaltoztatva!")
        .setColor("RANDOM")
        .setFooter(`HyprBot`)
        .setTimestamp()
        .setDescription(`A prefix a következőre változott a szerveren : ${args[0]}`)
    message.channel.send(embed)
}
exports.config = {
    aliases: ["pong", "pingpong"]
}