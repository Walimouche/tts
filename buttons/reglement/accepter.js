module.exports = {
    name: "accepter",
    async execute(interaction) {
        await interaction.member.roles.add("850008206150205466")
        await interaction.reply({ content: "Vous avez bien reçu le rôle membre.", ephemeral: true })
    }
}