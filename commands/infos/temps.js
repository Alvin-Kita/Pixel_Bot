// Le partage d'image marche, maintenant comment récupperer l'emploi du

const { SlashCommandBuilder } = require('discord.js');
const { captureScreenshot } = require('./../../functions/captureScreenshot');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('temps')
		.setDescription(`affiche une image (pour l'instant)`),
	async execute(interaction) {
		// Génération de la capture d'écran
        // Extraction du nom et prenom de l'utilisateur pour le mettres dans l'URL
        let test = interaction.member?.nickname;
        test = test.split(' ')
        const prenom = test[0];
        const nom = test[1];
        
        // On va chercher la page
        const screenshot = await captureScreenshot(prenom, nom);

        // On affiche la réponse
		await interaction.reply({ 
            content: `Tiens ton imgage de test.`,
            files: [{
            attachment: screenshot,
            name: 'emploi_du_temps.png'    
            }],
            ephemeral: true 
        });
	},
};