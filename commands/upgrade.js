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
const ddif1 = require('return-deep-diff');
const { ifError } = require("assert");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();
let timeout = 86400000;
exports.run = async (client, message, args) => {
  const s2 = ["1", "2"]
  const s3 = ["1", "2", "3"];
  const r2 = s2[Math.floor(Math.random() * s2.length)];
  const r3 = s3[Math.floor(Math.random() * s3.length)];
  const levonhozzad = money1.fetch(`user_${message.author.id}`)
  var win2 = Math.floor(args[1]) * (2)
  const levonas = Math.floor(levonhozzad) - (args[1])
  win2 = parseInt(win2)
  var win3 = Math.floor(args[1]) * (3)
  win3 = parseInt(win3)
  if (!args[0] || !args[1]) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Hiba")
      .setDescription(`**${message.author.username}** nem adtad meg **mennyit** és **hányszor** akarod **szorozni**!`)
      .setColor("RED")
      .setFooter(`HyprBot`)
      .setTimestamp()
    return message.channel.send(embed)
  } else {
    if (args[1] > levonhozzad) {
      message.reply(`Nincs ennyi pénzed! Neked ennyi pénzed van: ${levonhozzad}`)
    } else {
      if (args[0] == 2) {
        money1.set(`user_${message.author.id}`, levonas)
        console.log(levonas)
        if (r2 == 2) {
          money1.add(`user_${message.author.id}`, win2)
          const embed = new Discord.MessageEmbed()
            .setTitle(`Sikeresen dupláztad ezt a pénzt: ${args[1]} , **${message.author.username}**`)
            .setDescription(`**${message.author.username}** ennyi pénzt szereztél: **${win2}**`)
            .setColor("RED")
            .setFooter(`HyprBot`)
            .setTimestamp()
          return message.channel.send(embed)
        } else {
          money1.set(`user_${message.author.id}`, levonas)
          const embed = new Discord.MessageEmbed()
            .setTitle(`Elvesztettél ennyi pénzt: **${args[1]}**`)
            .setDescription(`**${message.author.username}** ennyi pénzt vesztett: ${args[1]}`)
            .setColor("RED")
            .setFooter(`HyprBot`)
            .setTimestamp()
          return message.channel.send(embed)
        }
      }
      else if (args[0] == 3) {
        money1.set(`user_${message.author.id}`, levonas)
        console.log(levonas)
        if (r3 == 3) {
          money1.add(`user_${message.author.id}`, win3)
          const embed = new Discord.MessageEmbed()
            .setTitle(`Sikeresen tripláztad ezt a pénzt: ${args[1]} , **${message.author.username}**`)
            .setDescription(`**${message.author.username}** ennyi pénzt szereztél: **${win3}**`)
            .setColor("YELLOW")
            .setFooter(`HyprBot`)
            .setTimestamp()
          return message.channel.send(embed)
        } else {
          money1.set(`user_${message.author.id}`, levonas)
          const embed = new Discord.MessageEmbed()
            .setTitle(`Elvesztettél ennyi pénzt: **${args[1]}**`)
            .setDescription(`**${message.author.username}** ennyi pénzt vesztett: ${args[1]}`)
            .setColor("RED")
            .setFooter(`HyprBot`)
            .setTimestamp()
          return message.channel.send(embed)
        }
      }
      else {
        const embed = new Discord.MessageEmbed()
          .setTitle("Hiba")
          .setDescription(`**@${message.author.username}** csak **kétszerezeni** vagy **háromszorozni** lehet`)
          .setColor("RED")
          .setFooter(`HyprBot`)
          .setTimestamp()
        return message.channel.send(embed)
      }
    }
  }
}
exports.config = {
  aliases: ["up", "upg"]
}
