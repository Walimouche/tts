/* const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "messageDelete",
    once: false,
    async execute(client, message) {
        const deleteEmbed = new MessageEmbed()
            .setColor("#a8dacd")
            .setTitle(`:x: Suppression d'un message`)
            .setDescription(`De \`\`${message.member.user.tag}\`\` | \`\`${message.member.user.id}\`\`\nContenu : \`\`${message.content}\`\``)
            .setTimestamp()

        const logChannel = client.channels.cache.get("1013024983271874590")
        logChannel.send({ embeds: [deleteEmbed] })
    }
} */