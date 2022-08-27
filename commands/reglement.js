const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

const button = new MessageActionRow()
	.addComponents(
		new MessageButton()
			.setCustomId("accepter")
			.setLabel("J'ai lu et j'accepte le règlement")
			.setEmoji("✅")
			.setStyle("SUCCESS"),
	)


module.exports = {
	data: new SlashCommandBuilder()
		.setName('reglement')
		.setDescription('Envoie le règlement du serveur'),
	async execute(interaction) {
		if (interaction.member.permissions.has("ADMINISTRATOR")) {
			let reglement = new MessageEmbed()
				.setColor("#a8dacd")
				.setTitle("<:IconRules:1012700270007955466> Règlement")
				.setDescription("Pour favoriser la bonne ambiance du serveur le règlement doit être lu et accepté par l'ensemble de la communauté. Nul ne peut ignorer ces règles. Ce règlement est non-exhaustif. \n\n<:IconChiffre1:1012655713601990716> Les [Terms of Service](https://discord.com/terms) et les [Guidelines](https://discord.com/guidelines) de Discord sont à respecter sur ce serveur. \n\n<:IconChiffre2:1012655715996942397>  Garder une attitude et un profil approprié. \n\n<:IconChiffre3:1012655718341550120>  Privilégier <@981593935283630120> pour contacter le <@&1012640098518573088> plutôt que les salons publics.\n \n<:IconChiffre4:1012655720182861874> Tout salon a son utilité, respecter les. Les forums de recrutement doivent être utilisés correctement. \n\n<:IconChiffre5:1012655722691035196> Toutes actions contraires à une bonne entente sont prohibées (troll, spam, publicité...).")
				.setFooter({ text: "Interagissez  avec le bouton ci-dessous pour accéder au reste du serveur."})

			interaction.channel.send({ embeds: [reglement], components: [button]});
		} else {
			await interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true })
		}
	}
};