import { ProxyState } from "../AppState.js"
import { pokedexService } from "../Services/pokedexService.js"


//Private
function _draw() {
  let pokedex = ProxyState.pokedex
  let template = ''
  pokedex.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`

  `
}

//Public
export default class PokedexController {
  constructor() {
    ProxyState.on("pokedex", _draw)

  }

}
