// Le partage d'image marche, maintenant comment récupperer l'emploi du temps

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('temps')
		.setDescription(`affiche une image (pour l'instant)`),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply({ 
            content: `Tiens ton imgage de test.`,
            files: ['/workspaces/Pixel_Bot/media/panda2.jpg'],
            ephemeral: true 
        });
	},
};