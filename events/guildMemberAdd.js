const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(client, member) {
        const welcomeChannel = client.channels.cache.get("850008207690563616")
        welcomeChannel.send({ content: `<:IconJoinGuild:1012700139669954643> Bienvenue sur le serveur ! ${member}` })

        const logChannel = client.channels.cache.get("929671639321432144")
        let logEmbed = new MessageEmbed()
            .setColor("#a8dadc")
            .setTitle("Join - TrouveTonStaff")
            .setDescription(`<:IconJoinGuild:1012700139669954643> **${member}** a rejoint le serveur !`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

        await logChannel.send({ embeds: [logEmbed] })
    }
}