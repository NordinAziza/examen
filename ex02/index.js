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

class Moto extends Vehicule {
  // Constructeur
  constructor(marque, modele, vitesseMax, nombreDeRoues) {
    // Appeler le constructeur parent
    Vehicule.constructor(marque, modele, vitesseMax);

    // Initialiser la propriété spécifique à la moto
    this.nombreDeRoues = nombreDeRoues;
  }

  // Méthode pour afficher les détails de la moto
  afficherDetails() {
    // Appeler la méthode afficherDetails() du parent
    Vehicule.afficherDetails();
    // Afficher la propriété spécifique à la moto
    console.log(`Nombre de roues : ${nombreDeRoues}`);
  }
}

const maMoto = new Moto("Harley-Davidson", "Iron 883", 180, 2);
maMoto.afficherDetails();
maMoto.mettreAJourVitesseMax(200);
maMoto.afficherDetails();