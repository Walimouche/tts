module.exports = {
    name: "rs-button",
    async execute(interaction) {
        if (interaction.member.roles.cache.has("1014450986603008050")) {
            await interaction.member.roles.remove("1014450986603008050")
            await interaction.reply({ content: "Vous ne recevrez plus les notifications de nos réseaux sociaux.", ephemeral: true })
        } else {
            await interaction.member.roles.add("1014450986603008050")
            await interaction.reply({ content: "Vous serez notifiés des actualités sur nos réseaux sociaux.", ephemeral: true })
        }
    }
}