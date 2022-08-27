const { SlashCommandBuilder } = require('@discordjs/builders');
const Levels = require('discord-xp');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('leaderboard')
		.setDescription("Envoie le classement du serveur."),
	async execute(interaction) {
		const rawLeaderboard = await Levels.fetchLeaderboard(interaction.guild.id, 10);
		if (rawLeaderboard.length < 1) {
			return interaction.reply('Aucun membre dans le leaderboard.');
		}

		const leaderboard = Levels.computeLeaderboard(interaction.client, rawLeaderboard);
		const lb = leaderboard.map(e => `${e.position}. ${e.username} - Niveau ${e.level} (${e.xp.toLocaleString()} xp)`)

		interaction.reply({content: lb.join('\n\n'), ephemeral: true});
	},
};