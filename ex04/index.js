class DataFetcher {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchData() {
    try {
      const response = await fetch(this.apiUrl);
      const data = await response.json();
      
      return data;
    } catch (error) {
      throw error;
    }
  }
}

class DataRenderer {
  constructor(data) {
    this.data = data;
  }

  renderData() {
    //duplicate node
    let character=this.data.results[0]
    const dataContainer = document.querySelector('#character_card');
    dataContainer.querySelector(".Card__name").innerText=character.name;
    document.querySelector(".CharactersList").appendChild(dataContainer);
    document.querySelector(".Card__image").src=character.image
    document.querySelector(".Card__text").innerText=character.species
    document.querySelector(".location").innerText=character.location.name
    document.querySelector(".origin").innerText=character.origin.name

    character.episode.forEach(element => {
      let episode=document.createElement("li")
      episode.innerText=element
      document.querySelector(".episode").appendChild(episode)
    });

    
  }
}

const dataFetcher = new DataFetcher('https://rickandmortyapi.com/api/character');
dataFetcher.fetchData().then(data => {
  const dataRenderer = new DataRenderer(data);
  dataRenderer.renderData();
});
