const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("핑")
    .setDescription("퐁으로 대답해드려요!"),
  async execute(interaction) {
    await interaction.reply("퐁!");
  },
};

/* ENGLISH VERSION 한국어 제작 시 삭제 가능
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};
*/
