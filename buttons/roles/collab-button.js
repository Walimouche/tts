module.exports = {
    name: "collab-button",
    async execute(interaction) {
        await interaction.member.roles.add("850008206117306431")
        await interaction.reply({ content: "Vous serez notifiés de nos collaborations.", ephemeral: true })
    }
}