const botconfig = require("./botconfig.json");
const tokenfile = require("./tokenfile.json");
const Discord = require("discord.js")
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
const { config } = require("process");
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
const ddif1 = require ('return-deep-diff')
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

/*const clientcommands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	clientcommands.set(command.name, command);
}*/

//Command Handler

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

bot.on('guildMemberAdd', async member => {
    //if (!channel) return;
    const reng = member.guild.roles.cache.find(r => r.name === "Muted");
    let ize = db.fetch(`muted${member.guild.id}`, member.id) //.set(`muted${message.guild.id}${mUser.id}`, true))
    var dbid = member.id;
    if (dbid == ize) {
        member.roles.add(reng)
        console.log("Muted login!")
    }
    //var d = db.fetch(`casino${member.id}`)
    //var money = db.set(`casino${member.id}`, 1000)
    money1.set(`user_${member.id}`, 1000)

    const canvas = canvas1.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    const role = member.guild.roles.cache.find(role => role.name === 'Tag');

    const background = await canvas1.loadImage("./back.jpg")
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '40px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Üdvözöllek a szerveren,', canvas.width / 2.5, canvas.height / 3.5);

    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await canvas1.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

    channel1 = await db.fetch(`welcomec_${member.guild.id}`, member.guild.channel);
    console.log(channel1)
    const chanl = member.guild.channels.cache.find(ch => ch.name === channel1);

    chanl.send(attachment);

    member.roles.add(role)
});

bot.on('guildMemberUpdate', async (oldMember, newMember) =>{
    const logize = bot.channels.cache.find(channel => channel.id == "749208668301557810");
    logize.send(`Változott ${oldMember}, ${newMember}`)
})

bot.on('guildMemberRemove', async member => {
    const canvas = canvas1.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');
    const role = member.guild.roles.cache.find(role => role.name === 'Tag');

    const background = await canvas1.loadImage("./back.jpg")
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    ctx.font = '30px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Sajnáljuk hogy kiléptél!,', canvas.width / 2.5, canvas.height / 3.5);

    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await canvas1.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'left-image.png');

    channel2 = await db.fetch(`leftec_${member.guild.id}`, member.guild.channel);
    console.log(channel1)
    const chanl1 = member.guild.channels.cache.find(ch => ch.name === channel2);

    chanl1.send(attachment);

    member.roles.add(role)
});
bot.login(tokenfile.token)
