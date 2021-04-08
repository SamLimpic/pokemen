import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokedexApi } from "./AxiosService.js"

class PokedexService {
    tallGrass() {
        let num = Math.floor(Math.random() * 150)
        let name = ProxyState.pokedex[num].name
        this.getPokemon(name)
    }

    async getPokemon(name) {
        let res = await pokedexApi.get(name)
        ProxyState.encounter = new Pokemon(res.data)
    }

    async getPokedex() {
        let res = await pokedexApi.get('?offset=0&limit=151')
        ProxyState.pokedex = res.data.results
        console.log(ProxyState.pokedex)
    }

}

export const pokedexService = new PokedexService()

