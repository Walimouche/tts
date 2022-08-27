/* const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "guildMemberRemove",
    once: false,
    async execute(client, member) {
        const leaveEmbed = new MessageEmbed()
            .setColor("#a8dacd")
            .setDescription(`:x: ${member.displayName} a quitté le serveur.\n\`\`${member.user.tag}\`\` | \`\`${member.id}\`\`\n
            **Informations**
            Créé le <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
            Sur le serveur depuis le <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)`)

        const logChannel = client.channels.cache.get("1013024983271874590")
        logChannel.send({ embeds: [leaveEmbed] })
    }
} */