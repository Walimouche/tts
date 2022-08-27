const Levels = require('discord-xp');
const { database } = require('../config.json');

Levels.setURL(database)

module.exports = {
    name: "messageCreate",
    once: false,
    async execute(client, message) {
        if (!message.guild) return;
        if (message.author.bot) return;

        const randomXp = Math.floor(Math.random() * 9) + 1;
        const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);

        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`Félicitations ${message.author} ! Vous êtes maintenant niveau ${user.level} !`);

            if (user.level === 2) {
                await message.member.roles.add("1012645140042620938")
            } else if (user.level === 4) {
                await message.member.roles.add("1012645113438158878")
            } else if (user.level === 7) {
                await message.member.roles.add("1012645091426439188")
            } else if (user.level === 10) {
                await message.member.roles.add("1012645068613623888")
            } else if (user.level === 20) {
                await message.member.roles.add("1012645050703958076")
            } else if (user.level === 40) {
                await message.member.roles.add("1012645002486231081")
            } else if (user.level === 75) {
                await message.member.roles.add("1012644978582900796")
            }
        }
}}