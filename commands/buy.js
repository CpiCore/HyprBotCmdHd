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
let cost1 = 10000
let cost2 = 20000
let cost3 = 100
let cost4 = 3000
exports.run = async (client, message, args) => {
    var piz = money1.get(`user_${message.author.id}`)
    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setTitle("°Bolt°")
            .setDescription(`**1.** **Shotgun**(10000), **2.** **Desert Eagle**(20000), **3.** **Töltet**(100/db), **4.** **Kard**(3000)`)
            .setColor("RED")
            .setFooter(`HyprBot`)
            .setTimestamp()
        message.channel.send(embed)
    }
    else {
        if (args[0] == 1) {
            if (piz >= cost1) {
                var elso = inv.fetch(`inv1_${message.author.id}`)
                inv.set(`inv1_${message.author.id}`, 'Shotgun')
                const embed = new Discord.MessageEmbed()
                    .setTitle("°Bolt°")
                    .setDescription(`Megvetted ezt : **Shotgun**`)
                    .setColor("GREEN")
                    .setFooter(`HyprBot`)
                    .setTimestamp()
                message.channel.send(embed)
                var levon = Math.floor(piz) - (cost2);
                money1.set(`user_${message.author.id}`, levon)
                console.log(piz)
            } else {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Hiba")
                    .setDescription(`**${message.author.username}** nincs ennyi pénzed!(10000)`)
                    .setColor("RED")
                    .setFooter(`HyprBot`)
                    .setTimestamp()
                message.channel.send(embed)
            }
        }
        if (args[0] == 2) {
            if (piz >= cost2) {
                var masodik = inv.fetch(`inv2_${message.author.id}`)
                inv.set(`inv2_${message.author.id}`, 'Desert Eagle')
                const embed = new Discord.MessageEmbed()
                    .setTitle("°Bolt°")
                    .setDescription(`Megvetted ezt : **Desert Eagle**`)
                    .setColor("GREEN")
                    .setFooter(`HyprBot`)
                    .setTimestamp()
                message.channel.send(embed)
                var levon = Math.floor(piz) - (cost2);
                money1.set(`user_${message.author.id}`, levon)
                console.log(piz)
            } else {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Hiba")
                    .setDescription(`**${message.author.username}** nincs ennyi pénzed!(20000)`)
                    .setColor("RED")
                    .setFooter(`HyprBot`)
                    .setTimestamp()
                message.channel.send(embed)
            }
        }

        if (args[0] == 3) {
            const szorzat = Math.floor(cost3) * (args[1]);
            if (!args[1]) {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Hiba")
                    .setDescription(`**${message.author.username}** nem adtad meg mennyi töltényt szeretnél!(100/db)`)
                    .setColor("RED")
                    .setFooter(`HyprBot`)
                    .setTimestamp()
                return message.channel.send(embed)
            }
            else {
                if (piz >= szorzat) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("°Bolt°")
                        .setDescription(`**${message.author.username}** ennyi töltényt vettél : ${args[1]}`)
                        .setColor("GREEN")
                        .setFooter(`HyprBot`)
                        .setTimestamp()
                    message.channel.send(embed)
                    var levon = Math.floor(piz) - (szorzat);
                    money1.set(`user_${message.author.id}`, levon)
                    var harmadik = inv.fetch(`inv3_${message.author.id}`)
                    inv.add(`inv3_${message.author.id}`, args[1])
                }
            }
        }

        if (args[0] == 4) {
            if (piz >= cost4) {
                var negy = inv.fetch(`inv4_${message.author.id}`)
                inv.set(`inv4_${message.author.id}`, 'Kard')
                const embed = new Discord.MessageEmbed()
                    .setTitle("°Bolt°")
                    .setDescription(`Megvetted ezt : **Kard**`)
                    .setColor("GREEN")
                    .setFooter(`HyprBot`)
                    .setTimestamp()
                message.channel.send(embed)
                var levon = Math.floor(piz) - (cost4);
                money1.set(`user_${message.author.id}`, levon)
                console.log(piz)
            } else {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Hiba")
                    .setDescription(`**${message.author.username}** nincs ennyi pénzed!(3000)`)
                    .setColor("RED")
                    .setFooter(`HyprBot`)
                    .setTimestamp()
                message.channel.send(embed)
            }
        }
    }
}
exports.config = {
    aliases: ["pong", "pingpong"]
}