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
                await message.member.roles.add("1012786359288733796")
            } else if (user.level === 4) {
                await message.member.roles.add("1012786372765032448")
            } else if (user.level === 7) {
                await message.member.roles.add("1012786394437009448")
            } else if (user.level === 10) {
                await message.member.roles.add("1012786410643792015")
            } else if (user.level === 20) {
                await message.member.roles.add("1012786429006454824")
            } else if (user.level === 40) {
                await message.member.roles.add("1012786443032219719")
            } else if (user.level === 75) {
                await message.member.roles.add("1012786479220674613")
            }
        }
}}