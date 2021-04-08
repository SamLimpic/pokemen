import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokedexApi } from "./AxiosService.js"

class PokedexService {

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

