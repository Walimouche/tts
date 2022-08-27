module.exports = {
    name: "collab-button",
    async execute(interaction) {
        if (interaction.member.roles.cache.has("850008206117306431")) {
            await interaction.member.roles.remove("850008206117306431")
            await interaction.reply({ content: "Vous ne serez plus notifiés de nos collaborations.", ephemeral: true })
        } else {
            await interaction.member.roles.add("850008206117306431")
            await interaction.reply({ content: "Vous serez notifiés de nos collaborations.", ephemeral: true })
        }
    }
}