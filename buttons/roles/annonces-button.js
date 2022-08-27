module.exports = {
    name: "annonces-button",
    async execute(interaction) {
        await interaction.member.roles.add("850008206117306432")
        await interaction.reply({ content: "Vous serez notifiés de nos nouvelles annonces.", ephemeral: true })
    }
}