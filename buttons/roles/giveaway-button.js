module.exports = {
    name: "giveaway-button",
    async execute(interaction) {
        await interaction.member.roles.add("850008206117306433")
        await interaction.reply({ content: "Vous serez notifiés des nouveaux giveaways.", ephemeral: true })
    }
}