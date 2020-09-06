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
    var mUser = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (message.member.hasPermission("MANAGE_MESSAGES") || message.author.id == 477814830598717441) {
        if (!args[0]) {
            const embed = new Discord.MessageEmbed()
                .setTitle("Hiba")
                .setDescription(`**${message.author.username}** nem adtad meg kit akarsz **muteolni**!`)
                .setColor("RED")
                .setFooter(`${bot.user.username}`)
                .setTimestamp()
            return message.channel.send(embed)
        }

        else {
            const mutedr = message.guild.roles.cache.find(role => role.name == 'Muted')
            const remover = message.guild.roles.cache.find(role => role.name == 'Tag')
            if (mutedr) {
                mutedr.setPermissions([0])
                db.set(`muted${message.guild.id}`, mUser.id)
                mUser.roles.add(mutedr)
                mUser.roles.remove(remover)
                var rangs = message.guild.roles.cache.size;
                let muteEmbed = new Discord.MessageEmbed()
                    .setDescription("~Muteolás~")
                    .setColor("#e30000")
                    .addField(`Muteolva ${args[0]} ID: ${mUser.id}`)
                    .addField(`Muteolta : <@${message.author.username}> ID: ${message.author.id}`, inline = true)
                    .addField("Muteolva: ", `${message.channel}`, inline = true)
                    .addField(`Idő : ${message.createdAt}`, inline = true)
                message.channel.send(muteEmbed);
            }
            else {
                const mutedr = message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        color: 'BLUE',

                    },
                    reason: '',
                })
                    .then(console.log)
                    .catch(console.error);
            }
            mutedr.setPermissions([0])
            mutedr.setPosition(rangs)
        }
    }
    else {
        return message.reply("Nincs jogod ezt a parancsot használni!")
    }
}
exports.config = {
    aliases: ["pong", "pingpong"]
}