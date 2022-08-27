const transcript = require("discord-html-transcripts")

module.exports = {
    name: "transcript-certif",
    async execute(interaction) {
        if (interaction.member.permissions.has("KICK_MEMBERS")) {
            await interaction.reply({ content: `Voici le transcript du ticket ${interaction.member}.`, files: [await transcript.createTranscript(interaction.channel)], ephemeral: true })
        } else {
            await interaction.reply({ content: "Vous n'avez pas la permission d'utiliser cette commande.", ephemeral: true })
        }
    }
}