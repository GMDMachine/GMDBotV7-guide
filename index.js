// discord.js 구성 요소 가져오기
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// 클라이언트 만들기
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//단 한번만 실행되는 함수
client.once(Events.ClientReady, readyClient => {
	console.log(`준비됨! [${readyClient.user.tag}]로 로그인되어 있어요!`);
});

const fs = require('node:fs');
const path = require('node:path');

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
//템플릿 by GMDMachine -- https://github.com/GMDMachine/GMDBotV7-guide/
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[경고] ${filePath}에 있는 명령어가 요청된 데이터를 제공하지 못했습니다.`);
		}
	}
}

client.on(Events.InteractionCreate, interaction => {
	console.log(interaction);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`${interaction.commandName} 이런 커맨드는 없어요!`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: '이 명령어를 실행하는데 오류가 발생했어요!', ephemeral: true });
		} else {
			await interaction.reply({ content: '이 명령어를 실행하는데 오류가 발생했어요!', ephemeral: true });
		}
	}
});

// Log in to Discord with your client's token
client.login(token);
