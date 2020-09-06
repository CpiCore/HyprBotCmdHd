const prefix = "!" 
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
const ddif1 = require ('return-deep-diff')
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

 exports.run = async(bot, message) => {
    bot.on("guildCreate", function (guild) {
        let botlogcsatorna = bot.channels.cache.find(channel => channel.id == "749208668301557810");
        //let invite = guild.createInvite({ temporary: true, reason: 'Just testing' });
        let embed = new Discord.MessageEmbed()
            .setTitle("A bot behívva")
            .setColor("GREEN")
            .addFields(
                { name: "Szerver neve:", value: guild },
                { name: "Szerver ID-je:", value: guild.id },
                { name: "Szerver tulajdonos neve:", value: guild.owner.user.tag },
                { name: "Szerver tulajdonos ID-je:", value: guild.ownerID },
                { name: "A szerveren ennyi tag lett:", value: guild.memberCount },
                { name: "A bot mostmár ennyi szerveren van benn:", value: bot.guilds.cache.size },
                //{name:"Invite:", value:invite},
            )
        botlogcsatorna.send(embed);
        console.log(`A bot be lett hívva a ${guild} szerverre! A szerver tulajdonosa: ${guild.owner.tag}, IDje: ${guild.onwerID}. A szerver ID-je: ${guild.id}. A szerveren ennyi tag van: ${guild.memberCount}`);
    });
  }