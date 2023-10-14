const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Test de fonctionalitées'),
	async execute(interaction) {
        
        let test = interaction.member?.nickname;
        test = test.split(' ')
        const prenom = test[0];
        const nom = test[1];

		await interaction.reply(`prénom : ${prenom}; nom : ${nom}`);
	},
};