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
    const dataContainer = document.querySelector('#character_card').cloneNode(true);
    dataContainer.querySelector(".Card__name").innerText = "POURQUOI CA NE MARCHE PAS?";
    document.querySelector(".CharactersList").appendChild(dataContainer);
  }
}

const dataFetcher = new DataFetcher('https://rickandmortyapi.com/api/character');
dataFetcher.fetchData().then(data => {
  const dataRenderer = new DataRenderer(data);
  dataRenderer.renderData();
});
