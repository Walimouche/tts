/* const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "messageUpdate",
    once: false,
    async execute(client, oldMessage, newMessage) {
        const editEmbed = new MessageEmbed()
            .setColor("#a8dacd")
            .setTitle(`:x: Modification d'un message`)
            .setDescription(`De \`\`${oldMessage.author.tag}\`\` | \`\`${oldMessage.author.id}\`\``)
            .addField("Avant", `\`\`${oldMessage.content}\`\``, true)
            .addField("Après", `\`\`${newMessage.content}\`\``, true)
            .setTimestamp()

        const logChannel = client.channels.cache.get("1013024983271874590")
        logChannel.send({ embeds: [editEmbed] })
    }
} */