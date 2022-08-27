const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection } = require('discord.js');
require('dotenv').config()
const mongoose = require('mongoose')

const client = new Client({ intents: 3276799 });

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
	console.log("Connected to MongoDB");
}).catch(err => {
	console.log(err);
});

["commands", "buttons", "selects"].forEach(x => client[x] = new Collection());
["ButtonUtil", "SelectUtil"].forEach(handler => { require(`./utils/handlers/${handler}`)(client) });

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args))
	} else {
		client.on(event.name, (...args) => event.execute(client, ...args))
	}
}

client.on('interactionCreate', async interaction => {
	if (interaction.isCommand() || interaction.isContextMenu()) {
		const command = client.commands.get(interaction.commandName);

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	} else if (interaction.isSelectMenu()) {
		const selectMenu = client.selects.get(interaction.customId);

		try {
			await selectMenu.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	} else if (interaction.isButton()) {
		const button = client.buttons.get(interaction.customId);

		try {
			await button.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}

});

process.on("exit", code => { console.log(`Process stopped with code : ${code} !`) })
process.on("uncaughtException", (error, origin) => {
	console.error(`UNCAUGHT_EXCEPTION - ${error}`)
	console.error(`Origin : ${origin}`)
})
process.on("unhandledRejection", (reason, promise) => {
	console.warn(`UNHANDLED_REJECTION - ${reason}`)
	console.log(promise)
})
process.on("warning", (...args) => console.warn(...args))

client.login(process.env.TOKEN);