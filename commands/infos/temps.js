// Le partage d'image marche, maintenant comment récupperer l'emploi du

const { SlashCommandBuilder, Options } = require('discord.js');
const { captureScreenshot } = require('./../../functions/captureScreenshot');
const { getDate } = require('../../functions/getDate');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('temps')
		.setDescription(`Affiche l'emploi du temps`)
        .addStringOption(Option =>
            Option
                .setName('date')
                .setDescription(`La date au format jour/mois/année (ex: 15/10/2023), le mois et l'année sont facultatifs.`)
                .setRequired(false)
        ),
	async execute(interaction) {
		///// Génération de la capture d'écran
        // Extraction du nom et prenom de l'utilisateur pour le mettres dans l'URL
        let test = interaction.member?.nickname;
        test = test.split(' ')
        const prenom = test[0];
        const nom = test[1];
        
        // Réccupération de la date
        let date = interaction.options.getString('date'); //--- Date qui sera transformée au format EN pour l'url

        date = date ? date : getDate(); //--- Vérification qu'une date est rentrée en option, sinon date du jour
        date = date.split('/');
        const day = date[0];
        const month = date[1] ? date[1] : new Date().getMonth() + 1;
        const year = date[2] ? date[2] : new Date().getFullYear();

        date = `${month}/${day}/${year}`;

        // On va chercher la page
        const screenshot = await captureScreenshot(prenom, nom, date);

        // Affichage de la réponse
		await interaction.reply({ 
            content: `Emploi du temps de la semaine du ${day}/${month}/${year}.`,
            files: [{
            attachment: screenshot,
            name: `emploi_du_temps_${day}_${month}_${year}.png`    
            }],
            ephemeral: true 
        });
	},
};