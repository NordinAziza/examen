
window.onload = async function(){
  class Chien {
    constructor(img) {
      this.img=img;
    }
  };
  const GetChien= async function(){
    
    const chiens=[];
    for (let i=0; i<3; i++) {
      let result= await fetch('https://dog.ceo/api/breeds/image/random')
    let jsonResult = await result.json();
    console.log(jsonResult)
    chiens.push(new Chien(jsonResult.message));
  }
  return chiens
  }
let tabChien=await GetChien()
tabChien.forEach(chien=>{
  let img = document.createElement("img");
  img.src=chien.img
  document.getElementById("result").appendChild(img)
})
}

//Utilisez l'API "https://dog.ceo/api/breeds/image/random" pour récupérer 3 images de chiens aléatoires et les afficher dans la balise 'result'.