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
    if (!args.join(" ")) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Hiba")
            .setDescription(`**${message.author.username}** nem adtad meg a **kérdésed**!`)
            .setColor("RED")
            .setFooter(`${bot.user.username}`)
            .setTimestamp()
        return message.channel.send(embed)
    }
    else {
        let valaszok = ['Sose :D', 'Persze', 'Holnap', 'Ma', 'Nem', 'Kicsit']

        let valasz = valaszok[Math.floor(Math.random() * valaszok.length)];
        const embed = new Discord.MessageEmbed()
            .setTitle("Kérdés - Válasz")
            .setColor("RANDOM")
            .addFields(
                {
                    name: `${args.join(" ")}`,
                    value: "Kérdés",
                    inline: false
                },
                {
                    name: `${valasz}`,
                    value: `Válasz`,
                    inline: false
                }
            )
        //.setDescription(`Válasz: ${valasz}`)

        message.channel.send(embed)
    }
}
exports.config = {
  aliases: ["pong", "pingpong"]
}