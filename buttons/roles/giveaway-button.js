module.exports = {
    name: "giveaway-button",
    async execute(interaction) {
        if (interaction.member.roles.cache.has("850008206117306433")) {
            await interaction.member.roles.remove("850008206117306433")
            await interaction.reply({ content: "Vous ne serez plus notifiés de nos giveaways.", ephemeral: true })
        } else {
            await interaction.member.roles.add("850008206117306433")
            await interaction.reply({ content: "Vous serez notifiés des nouveaux giveaways.", ephemeral: true })
        }
    }
}