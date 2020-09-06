const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json");
const Discord = require("discord.js")
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
const { config, chdir } = require("process");
const canvas1 = require('canvas')
const db = require('quick.db')
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

bot.on("ready", async () => {
    let statuses = [`👩‍💻${bot.guilds.cache.size} Szerveren fut👩‍💻`, `🟢Online a szervereden🟢`, `Version 1️⃣.6️⃣`, `🇭🇺 Egy magyar bot! 🇭🇺`, `Linkért írj privátban ! :)`, `${bot.users.cache.size} felhasználó használja a botot!`];
    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "WATCHING" })
    }, 5000)
    console.log(`${bot.guilds.cache.size} Szerveren fut! `, `Online a szervereden!`, `Version 1️.6!`, `🇭🇺 Egy magyar bot! 🇭🇺!`)
})

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded ✅  " + file)
        let commandName = file.split(".")[0];
        bot.commands.set(commandName, props);
    });
});
//Events "handler"
fs.readdir('./events/', (err, files) => {
    if (err) console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./events/${file}`);
        console.log("Successfully loaded ✅ " + file)
        let eventName = file.split(".")[0];
        bot.on(eventName, (...args) => eventFunc.run(bot, ...args));
    });
});

bot.on("message", async message => {
    if (message.author.bot) return
    xp(message)
})

function xp(message) {
    if (message.content.startsWith("!")) return;
    else {
        const randomNumber = Math.floor(Math.random() * 10) + 15
        db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomNumber)
        db.add(`guild_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)
        var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`)
        var xp = db.get(`guild_${message.author.id}_xp_${message.author.id}`)
        var xpNeeded = level * 200
        if (xpNeeded < xp) {
            var newLevel = db.add(`guild_${message.guild.id}_level_${message.author.id}`, 1)
            db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
            const embed = new Discord.MessageEmbed()
                .setTitle(`${message.author} szintet lépett! ⬆ ‼`)
                .setDescription(`Jelenlegi szinted: **${newLevel}**`)
                .setColor("GREEN")
            return message.channel.send(embed)
        }
    }
}
bot.login(tokenfile.token)
