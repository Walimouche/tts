const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('saymp')
		.setDescription('Envoie du texte à un utilisateur précis')
		.addStringOption(option =>
			option.setName('texte')
				.setDescription('Le texte à dire')
				.setRequired(true))
		.addUserOption(option =>
			option.setName("membre")
				.setDescription("Le membre à qui le message va être envoyé")
				.setRequired(true)),
	async execute(interaction) {
		if (interaction.member.roles.cache.has("1012640098518573088")) {
			const text = interaction.options.getString("texte")
			const member = interaction.options.getMember("membre")
			const embed = new MessageEmbed()
				.setColor("#a8dacd")
				.setTitle("Nouveau message de TrouveTonStaff")
				.setDescription(text)
			await member.send({ embeds: [embed] })
			await interaction.reply("Message envoyé.")
		} else {
			await interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true })
		}
	},
};