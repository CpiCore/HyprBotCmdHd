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
exports.run = async(client, message, args) => {
    var ammocount = inv.get(`inv3_${message.author.id}`)
    var elso = inv.get(`inv1_${message.author.id}`)
    var masodik = inv.get(`inv2_${message.author.id}`)
    var három = inv.get(`inv3_${message.author.id}`)
    var négy = inv.get(`inv4_${message.author.id}`)
    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Hiba")
            .setDescription(`**${message.author.username}** nem adtad meg mit akarsz **eladni**!`)
            .setColor("RED")
            .setFooter(`HyprBot`)
            .setTimestamp()
        message.channel.send(embed)
        const embed1 = new Discord.MessageEmbed()
            .setTitle("_-Inventory-_")
            .setDescription(`Ez van az inventorydba: \n1.**${elso}**\n2.**${masodik}**\n3.**${három} töltény**\n4.**${négy}**\n **Add meg mit akarsz eladni!**`)
            .setColor("YELLOW")
            .setFooter(`HyprBot`)
            .setTimestamp()
        message.channel.send(embed1)
    } else {
        if (args[0] == 1) {
            inv.delete(`inv1_${message.author.id}`)
            const embed = new Discord.MessageEmbed()
                .setTitle("Siker")
                .setDescription(`**${message.author.username}** eladtad ezt a tárgyat: ${elso}!`)
                .setColor("GREEN")
                .setFooter(`HyprBot`)
                .setTimestamp()
            message.channel.send(embed)
            money1.add(`user_${message.author.id}`, cost1)
        }
        if (args[0] == 2) {
            inv.delete(`inv2_${message.author.id}`)
            const embed = new Discord.MessageEmbed()
                .setTitle("Siker")
                .setDescription(`**${message.author.username}** eladtad ezt a tárgyat: ${masodik}!`)
                .setColor("GREEN")
                .setFooter(`HyprBot`)
                .setTimestamp()
            message.channel.send(embed)
            money1.add(`user_${message.author.id}`, cost2)
        }
        if (args[0] == 3) {
            if (!args[1]) {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Hiba")
                    .setDescription(`**${message.author.username}** nem adtad meg mennyi töltényt akarsz eladni!`)
                    .setColor("RED")
                    .setFooter(`HyprBot`)
                    .setTimestamp()
                return message.channel.send(embed)
            }
            else {
                if (ammocount >= args[1]) {
                    const szorzat = Math.floor(args[1]) * (100);
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Siker")
                        .setDescription(`**${message.author.username}** eladtál a töltenyeidből ennyit: ${args[1]}!`)
                        .setColor("GREEN")
                        .setFooter(`HyprBot`)
                        .setTimestamp()
                    message.channel.send(embed)
                    money1.add(`user_${message.author.id}`, szorzat)
                    inv.delete(`inv3_${message.author.id}`, szorzat)
                }
                else {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Hiba")
                        .setDescription(`**${message.author.username}** nincs ennyi töltényed!`)
                        .setColor("RED")
                        .setFooter(`HyprBot`)
                        .setTimestamp()
                    return message.channel.send(embed)
                }
            }
        }

        if (args[0] == 4) {
            inv.delete(`inv4_${message.author.id}`)
            const embed = new Discord.MessageEmbed()
                .setTitle("Siker")
                .setDescription(`**${message.author.username}** eladtad ezt a tárgyat: ${négy}!`)
                .setColor("GREEN")
                .setFooter(`HyprBot`)
                .setTimestamp()
            message.channel.send(embed)
            money1.add(`user_${message.author.id}`, cost4)
        }
    }
}
exports.config = {
  aliases: ["pong", "pingpong"]
}