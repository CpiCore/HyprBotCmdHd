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
exports.run = async(client, message, args) => {
    if (message.author.id == 477814830598717441) {

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        await message.channel.bulkDelete(deleteAmount, true);
        const embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`Sikeresen törölve ${deleteAmount} üzenet`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('#f2f2f2')
        await message.channel.send(embed)
    }
    if (!message.member.permissions.has("MANAGE_MESSAGES")) // sets the permission
        return message.channel.send(
            `Nincs jogod ezt a parancsot használni, ${message.author.username}` // returns this message to user with no perms
        );
    if (!args[0]) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Hiba")
            .setDescription(`**${message.author.username}** nem adtad meg a törlendő üzenetek **számát**!`)
            .setColor("RED")
            .setFooter(`${bot.user.username}`)
            .setTimestamp()
        return message.channel.send(embed)
    }
  }
  exports.config = {
	aliases: ["pong", "pingpong"]
  }