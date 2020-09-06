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
            .setColor('#00bd29')
            .setTitle(`${message.guild.name} szerver statisztikái`)
            .addFields(
                {
                    name: "Tulaj: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "Szerver neve",
                    value: message.guild.name,
                    inline: true
                },
                {
                    name: "Tagok: ",
                    value: `${message.guild.memberCount} tag van a szerveren`,
                    inline: true
                },
                {
                    name: "Felhasználók elérhetőek: ",
                    value: `${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} online!`,
                    inline: true
                },
                {
                    name: "Összes bot: ",
                    value: `${message.guild.members.cache.filter(m => m.user.bot).size} bot van a szerveren!`,
                    inline: true
                },
                {
                    name: "Létrehozás dátuma: ",
                    value: message.guild.createdAt.toLocaleDateString("hu"),
                    inline: true
                },
                {
                    name: "Rangok száma: ",
                    value: `${message.guild.roles.cache.size} rang van a szerveren.`,
                    inline: true,
                },
                {
                    name: `Elfogadott: `,
                    value: message.guild.verified ? 'A szerver el van fogadva' : `A szerver nincsen elfogadva!`,
                    inline: true
                },
                {
                    name: 'Boostolok: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `${message.guild.premiumSubscriptionCount} boostoló` : `Nincsenek boostolók`,
                    inline: true
                },
                {
                    name: "Emojik: ",
                    value: message.guild.emojis.cache.size >= 1 ? `${message.guild.emojis.cache.size} emoji!` : 'Nincsenek emojik :(',
                    inline: true
                },
                {
                    name: "Server id",
                    value: message.guild.id,
                    inline: true
                },
                {
                    name: "Csatornák száma",
                    value: message.guild.channels.cache.size,
                    inline: true
                }

            )
        message.channel.send(embed)
}
exports.config = {
    aliases: ["info", "server"]
}