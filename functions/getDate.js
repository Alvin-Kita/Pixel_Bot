// Fonction pour réccuperer la date du jour au format jour/mois/année

function getDate() {
    const currentDate = new Date(); //--- Construit la valeur "date du jour"
    
    const day = String(currentDate.getDate()).padStart(2, '0'); //--- Obtient le jour
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); //--- Obtient le mois (+1 car les mois commence à 0)
    const year = currentDate.getFullYear(); //--- Obtient l'année

    return `${day}/${month}/${year}`;
};

module.exports = {
    getDate,
};