const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');

const button = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId("annonces-button")
            .setLabel("Annonces")
            .setStyle("PRIMARY"),
        new MessageButton()
            .setCustomId("giveaway-button")
            .setLabel("Giveaways")
            .setStyle("PRIMARY"),
        new MessageButton()
            .setCustomId("collab-button")
            .setLabel("Collaboration")
            .setStyle("PRIMARY"),
        )

const rolesEmbed = new MessageEmbed()
    .setTitle("Rôles de notifications")
    .setDescription("Pour votre confort et afin d'éviter les mentions abusives, nous mettons en place des rôles de notifications.")
    .setColor("#a8dacd")
    .addFields(
        {
            name: "<:IconAnnoucement:1012655693553213451> Annonces",
            value: "Mention des <#850437770808000579> sur le serveur.",
            inline: true
        },
        {
            name: "<:IconGift:1012655743117312060> Giveaway",
            value: "Mention des giveaways.",
            inline: true
        },
        {
            name: "<:IconBadgePartnerProgram:1012655707465728010> Partenaires",
            value: "Mention de nos <#979878673165475850>.",
            inline: true
        }
    )
    .setFooter({ text: "Réagissez sur la/les boutons pour obtenir le rôle de notification souhaité." })
    .setTimestamp()

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roles')
        .setDescription('Affiche le menu de selection des rôles'),
    async execute(interaction) {
        if (interaction.member.permissions.has("ADMINISTRATOR")) {
            await interaction.channel.send({ embeds: [rolesEmbed], components: [button] });
        } else {
            await interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true })
        }
    },
};