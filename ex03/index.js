class Chien {
  constructor(img) {
    this.img="";
  }
};

const chiens=[];
for (let i=0; i<3; i++) {
  chiens.push(new Chien());
  
}
console.log(chiens);

//Utilisez l'API "https://dog.ceo/api/breeds/image/random" pour récupérer 3 images de chiens aléatoires et les afficher dans la balise 'result'.