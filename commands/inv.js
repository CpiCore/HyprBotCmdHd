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
    var elso = inv.get(`inv1_${message.author.id}`)
    var masodik = inv.get(`inv2_${message.author.id}`)
    var három = inv.get(`inv3_${message.author.id}`)
    var négy = inv.get(`inv4_${message.author.id}`)
    console.log(elso, masodik, három, négy)
    if(elso == "null"  || masodik == "null" || három == "null" || négy == "null"){
        inv.set(`inv1_${message.author.id}`, "Nincs")
        inv.set(`inv2_${message.author.id}`, "Nincs")
        inv.set(`inv3_${message.author.id}`, "Nincs")
        inv.set(`inv4_${message.author.id}`, "Nincs")
    }
    const embed = new Discord.MessageEmbed()
        .setTitle("_-Inventory-_")
        .setDescription(`Ez van az inventorydba: \n**${elso}**\n**${masodik}**\n**${három} töltény**\n**${négy}**`)
        .setColor("YELLOW")
        .setFooter(`HyprBot`)
        .setTimestamp()
    message.channel.send(embed)
}
exports.config = {
  aliases: ["pong", "pingpong"]
}