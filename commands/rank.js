const { MessageAttachment } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Levels = require('discord-xp');
const canvacord = require('canvacord');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rank')
		.setDescription('Envoie votre rang sur le serveur.'),
	async execute(interaction) {
		const user = await Levels.fetch(interaction.member.id, interaction.guild.id);
		const neededXP = Levels.xpFor(parseInt(user.level) + 1);

		if (!user) {
			return interaction.reply('Cet utilisateur n\'a pas encore de niveau.');
		} else {
			const rank = new canvacord.Rank()
				.setAvatar(interaction.member.user.displayAvatarURL({ dynamic: false, format: 'png' }))
				.setCurrentXP(user.xp)
				.setRequiredXP(neededXP)
				.setStatus(interaction.member.presence.status)
				.setProgressBar("#a8dacd", "COLOR")
				.setUsername(interaction.member.user.username)
				.setDiscriminator(interaction.member.user.discriminator)
			rank.build()
				.then(data => {
					const attachment = new MessageAttachment(data, 'rank.png');
					interaction.reply({ files: [attachment] });
				})
		}
	},
};