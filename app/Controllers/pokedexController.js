import { ProxyState } from "../AppState.js"
import { pokedexService } from "../Services/pokedexService.js"


//Private
function _draw() {
  let pokedex = ProxyState.pokedex
  let template = ''
  pokedex.forEach(pokemon => {
    template += `<li class="action hover-action" onclick="app.pokedexController.getPokemon('${pokemon.name}')"><h5>${pokemon.name.toUpperCase()}<h5></li>`
  })
  document.getElementById("pokedex").innerHTML = template
}

function _drawEncounter() {
  document.getElementById('encounter').innerHTML = ProxyState.encounter ? ProxyState.encounter.Template : ""
}

//Public
export default class PokedexController {

  constructor() {
    ProxyState.on("pokedex", _draw)
    ProxyState.on("encounter", _drawEncounter)

    this.getPokedex()
  }

  async getPokedex() {
    try {
      await pokedexService.getPokedex()
    } catch (error) {
      console.error(error)
    }
  }

  async getPokemon(name) {
    try {
      await pokedexService.getPokemon(name)
    } catch (error) {
      console.error(error)
    }
  }

  tallGrass() {
    pokedexService.tallGrass()
  }

}
