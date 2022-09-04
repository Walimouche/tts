const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "messageDelete",
    once: false,
    async execute(client, message) {
        const logChannel = client.channels.cache.get("929671690777141269")
        const deleteEmbed = new MessageEmbed()
            .setColor("#a8dacd")
            .setTitle(`:x: Suppression d'un message`)
            .setDescription(`De \`\`${message.member.user.tag}\`\` | \`\`${message.member.user.id}\`\`\nContenu : \`\`${message.content}\`\``)
            .setTimestamp()
        await logChannel.send({ embeds: [deleteEmbed] })
    }
}