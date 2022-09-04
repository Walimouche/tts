const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "guildMemberRemove",
    once: false,
    async execute(client, member) {
        const logChannel = client.channels.cache.get("929671639321432144")
        let logEmbed = new MessageEmbed()
            .setColor("#a8dadc")
            .setTitle("Leave - TrouveTonStaff")
            .setDescription(`<:IconLeaveGuild:1012700184247013497> **${member}** a quitté le serveur !`)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

        await logChannel.send({ embeds: [logEmbed] })
    }
}