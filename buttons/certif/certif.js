const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "certif",
    async execute(interaction) {
        let channel = await interaction.guild.channels.create(`certif-${interaction.user.username}`, {
            type: "GUILD_TEXT",
        })
        await channel.setParent("1012650720010444870")

        // permissions du membre
        await channel.permissionOverwrites.create(interaction.user, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            ADD_REACTIONS: true,
            EMBED_LINKS: true,
            USE_EXTERNAL_EMOJIS: true

        })

        await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
            VIEW_CHANNEL: false,
            SEND_MESSAGES: false,
            READ_MESSAGE_HISTORY: false,
            ATTACH_FILES: false,
            ADD_REACTIONS: false,
            EMBED_LINKS: false,
            USE_EXTERNAL_EMOJIS: false

        })

        // permissions staff
        await channel.permissionOverwrites.create("1012640098518573088", {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: true,
            ADD_REACTIONS: true,
            EMBED_LINKS: true,
            USE_EXTERNAL_EMOJIS: true,
            MANAGE_MESSAGES: true,
        })

        await interaction.reply({ content: `Votre demande de certification a bien été envoyée dans ${channel} !`, ephemeral: true })

        let embed = new MessageEmbed()
            .setColor("#a8dacd")
            .setTitle("Ticket Évaluation")
            .setTimestamp()
            .setDescription(`${interaction.member} a ouvert une demande de certification.`)

        const button = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setStyle("DANGER")
                    .setLabel("Fermer le ticket")
                    .setEmoji("🔐")
                    .setCustomId("close-certif"),
                new MessageButton()
                    .setStyle("PRIMARY")
                    .setLabel("Demander le transcript")
                    .setEmoji("📤")
                    .setCustomId("transcript-certif")
            )

        await channel.send({embeds: [embed], components: [button]})
    }
}