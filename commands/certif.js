const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('certif')
		.setDescription('Envoie le panel de certifications'),
	async execute(interaction) {
		if (interaction.member.permissions.has("ADMINISTRATOR")) {
			let embed = new MessageEmbed()
				.setColor("#a8dacd")
				.setTitle("Faites-vous certifier !")
				.setDescription("<:IconHelpCircle:1012700125115711528> Vous et/ou vos projets ont des qualités à mettre en avant ? Alors faites vous évaluer pour bénéficier de cet avantage. \n\nAvec une certification, vous avez la possibilité de faire apparaître vos annonces de recrutement dans vos-profils ou encore vos-projets et être mit en avant par un des rôles <:BadgeProfilsCertifis:1012653784423473152> <@&1011925902357176361> et <:BadgeProjetsCertifis:1012653785925030008> <@&1011925917062414408>.")
				.setFooter({ text: "Cliquez sur ce bouton pour changer toutes vos perceptions du recrutement en vous faisant certifier !"})

			const button = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setStyle("PRIMARY")
						.setLabel("Créer une demande certification")
						.setEmoji("✅")
						.setCustomId("certif"),
				);

			await interaction.channel.send({embeds: [embed], components: [button]})
		} else {
			await interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true })
		}
	},
};