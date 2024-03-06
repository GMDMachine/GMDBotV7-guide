const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
// ./commands/경로에 있는 모든 명령어 가져오기
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	// ./commands/경로에 있는 모든 명령어 가져오기
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	// SlashCommandBuilder로 명령어 가져오기
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[경고] ${filePath}에 있는 명령어가 작동하지 않습니다!`);
		}
	}
}

// REST 모듈 설정하기
const rest = new REST().setToken(token);

// 명령어 새로고침 시작!
(async () => {
	try {
		console.log(`(${commands.length})개의 슬래시(/)명령어 새로고침을 시작합니다.`);

		// 서버에 명령어 등록하기
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`(${data.length})개의 슬래시(/)명령어 새로고침을 성공했어요!`);
	} catch (error) {
		// 에러 모두 기록하기
		console.error(error);
	}
})();
