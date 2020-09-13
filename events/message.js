const botconfig = require('./botconfig.json')
const prefix = botconfig.prefix
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
const ddif1 = require('return-deep-diff')
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();
const rank = new db.table('ranks')
const prszo = "prefix"


exports.run = async (bot, message, user, username) => {
    var levelxp = 400
    var level = db.fetch(`guild_${message.guild.id}_level_${message.author.id}`)
    var xpNeeded = Math.floor(level) * (levelxp)
    const prefixes = await db.get(`prefix_${message.guild.id}`)
    if (message.author.bot) return;
    if (message.content.startsWith(prefixes)) {

        let messageArray = message.content.split(" "),
            cmd = messageArray[0],
            args = messageArray.slice(1),
            commandfile = bot.commands.get(cmd.slice(prefixes.length)) || bot.aliases.get(cmd.slice(prefixes.length));

        if (!commandfile) return;
        commandfile.run(bot, message, args);

        if (prefixes == null) {
            prefix = "!"
        }else{
            prefix.prefixes;
        }
    }

    function xp(message) {
        if (message.content.startsWith(prefixes)) return;
        else {
            const randomNumber = Math.floor(Math.random() * 10) + 15
            db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber)
            db.add(`guild_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)
            var xp = db.fetch(`guild_${message.author.id}_xp_${message.author.id}`)
            if (xp > xpNeeded) {
                var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
                db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
                const embed = new Discord.MessageEmbed()
                    .setTitle(`${message.author} szintet lépett! ⬆ ‼`)
                    .setDescription(`Jelenlegi szinted: **${newLevel}**`)
                    .setColor("GREEN")
                return message.channel.send(embed)
            }
        }
    }
bot.on("message", async message => {
    xp(message)
    if (prefixes == null) {
        db.set(`prefix_${message.guild.id}`, "!")
    }else{
        prefix.prefixes;
    }
})
}