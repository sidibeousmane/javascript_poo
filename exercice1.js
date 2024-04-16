function Voiture(model, marque, annee, type, carburant) {
  this.model = model;
  this.marque = marque;
  this.annee = annee;
  this.type = type;
  this.carburant = carburant;
}

const voitures = [
    new Voiture('Clio', 'Renault', 2010, 'Citadine', 'Essence'),
    new Voiture('308', 'Peugeot', 2015, 'Compacte', 'Diesel'),
    new Voiture('Golf', 'Volkswagen', 2018, 'Compacte', 'Essence'),
  ];

  class Hyundai extends Voiture {
    constructor(model, marque, annee, type, carburant, serie, hybride) {
      super(model, marque, annee, type, carburant);
      this.serie = serie;
      this.hybride = hybride;
    }
  
    alarmer() {
      console.log('Alarme de la Hyundai activée !');
    }
  }
  
  class Ford extends Voiture {
    constructor(model, marque, annee, type, carburant, options) {
      super(model, marque, annee, type, carburant);
      this.options = options;
    }
  
    alarmer() {
      console.log('Alarme de la Ford activée !');
    }
  }

  voitures.sort((a, b) => a.annee - b.annee);

voitures.forEach(voiture => {
  console.log(`Modèle : ${voiture.model}, Marque : ${voiture.marque}, Année : ${voiture.annee}, Type : ${voiture.type}, Carburant : ${voiture.carburant}`);
});
console.log(`Modèle : ${voiture.model}, Marque : ${voiture.marque}, Année : ${voiture.annee}, Type : ${voiture.type}, Carburant : ${voiture.carburant}`.toLocaleString('fr-FR'));
