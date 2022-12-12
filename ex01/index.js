class Vehicule {
    // Constructeur
    constructor(marque, modele, vitesseMax) {
      this.marque = marque;
      this.modele = modele;
      this.vitesseMax = vitesseMax;
    }
  
    // Méthode pour afficher les détails du véhicule
    afficherDetails() {
      console.log(`Marque : ${marque}`);
      console.log(`Modèle : ${modele}`);
      console.log(`Vitesse maximale : ${vitesseMax}`);
    }
  
    // Méthode pour mettre à jour la vitesse maximale
    mettreAJourVitesseMax(nouvelleVitesseMax) {
      this.nouvelleVitesseMax = vitesseMax;
    }
  }

const monVehicule = new Vehicule("Tesla", "Model S", 250);
monVehicule.afficherDetails();
monVehicule.mettreAJourVitesseMax("280");
monVehicule.afficherDetails();