const transcript = require("discord-html-transcripts")

module.exports = {
    name: "close-certif",
    async execute(interaction) {
        // const channel = interaction.client.channels.cache.get("929677287488630804")

        interaction.reply("Le ticket va être fermé dans quelques secondes.")

        // await channel.send({ content: `Voici le transcript du dernier ticket fermé.`, files: [await transcript.createTranscript(interaction.channel)] })

        await interaction.channel.delete()
    }
}