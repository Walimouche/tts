/* const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(client, member) {
        const joinEmbed = new MessageEmbed()
            .setColor("#a8dacd")
            .setTitle(`:x: Bienvenue sur le serveur ${member.displayName}`)
            .setDescription(`:x: ${member.displayName} a rejoint le serveur.\n\`\`${member.user.tag}\`\` | \`\`${member.id}\`\`\n
            **Informations**
            Créé le <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)`)

        const welcomeChannel = client.channels.cache.get("929671639321432144")
        welcomeChannel.send({ embeds: [joinEmbed] })
    }
} */