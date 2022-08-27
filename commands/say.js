const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Envoie du texte dans un salon spécifique')
		.addStringOption(option =>
			option.setName('texte')
				.setDescription('Le texte à dire')
				.setRequired(true)),
	async execute(interaction) {
		if (interaction.member.roles.cache.has("1012640098518573088")) {
			const text = interaction.options.getString("texte")
			const embed = new MessageEmbed()
				.setColor("#a8dacd")
				.setDescription(text)
			await interaction.reply({ embeds: [embed]})
		} else {
			await interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true })
		}
	},
};