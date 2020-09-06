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
const ddif1 = require ('return-deep-diff')
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();
let timeout = 86400000;
exports.run = async (client, message, args) => {
	const nagyobb = money1.get(`user_${message.author.id}`)
        if (!args[0], !args[1]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Hiba")
                .setDescription(`**${message.author.username}** nem adtad meg milyen **számra** és **mennyit** raksz!`)
                .setColor("RED")
                .setFooter(`HyprBot`)
                .setTimestamp()
            return message.channel.send(embed)
        }
        else if (args[0] > 35) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Hiba")
                .setDescription(`**${message.author.username}** 35 vagy 35-nél kisebb számra tippelj!`)
                .setColor("RED")
                .setFooter(`HyprBot`)
                .setTimestamp()
            return message.channel.send(embed)
        }

        else if (args[1] > nagyobb) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Hiba")
                .setDescription(`**${message.author.username}** nincs ennyi pénzed!`)
                .setColor("RED")
                .setFooter(`${bot.user.username}`)
                .setTimestamp()
            return message.channel.send(embed)
        }
        else if (args[1] > 100000) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Hiba")
                .setDescription(`**${message.author.username}** maximum **100000** pénzt tudsz felrakni!`)
                .setColor("RED")
                .setFooter(`${bot.user.username}`)
                .setTimestamp()
            return message.channel.send(embed)
        }
        else {
            let szamok = Math.floor(Math.random() * 35) + 1;
            const money = money1.get(`user_${message.author.id}`)
            const ize = Math.floor(money) - (args[1]);
            const winned = Math.floor(money) + (args[1]) * 2;
            const nyeremeny = Math.floor(args[1] * 2)
            await money1.set(`user_${message.author.id}`, ize)
            if (args[0] == szamok) {
                console.log("Nyert!")
                const set = money1.set(`user_${message.author.id}`, winned)
                const embed = new Discord.MessageEmbed()
                    .setTitle(`Nyertél - ${message.author.username}`)
                    .setDescription(`A tipped : ${args[0]} volt ezzel nyertél ${nyeremeny} pénzt`)
                message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                    .setTitle(`Vesztettél - ${message.author.username}`)
                    .setDescription(`A tipped : ${args[0]} volt ezzel vesztettél ${args[1]} pénzt`)
                message.channel.send(embed)
            }
        }
  }
  exports.config = {
	aliases: ["roulette", "roulet"]
  }