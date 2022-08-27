module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(client, member) {
        const welcomeChannel = client.channels.cache.get("850008207690563616")
        welcomeChannel.send({ content: `<:IconJoinGuild:1012700139669954643> Bienvenue sur le serveur ! ${member}` })
    }
}