import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"

class MyPCService {
    async releaseAll() {
        await ProxyState.myPC.forEach(pokemon => {
            sandboxApi.delete(pokemon.id)
        })
        ProxyState.myPC = []
        ProxyState.team = null
    }

    team() {
        if (!ProxyState.team) {
            ProxyState.team = []
        }
        if (ProxyState.team.length <= 5) {
            ProxyState.team = [ProxyState.encounter, ...ProxyState.team]
        } else {
            ProxyState.team = [ProxyState.encounter, ...ProxyState.team].slice(0, 6)
        }
    }

    encounter(id) {
        let encounter = ProxyState.myPC.find(pokemon => pokemon.id === id)
        ProxyState.encounter = encounter
    }

    async release() {
        await sandboxApi.delete(ProxyState.encounter.id)
        ProxyState.myPC = ProxyState.myPC.filter(pokemon => pokemon.id !== ProxyState.encounter.id)
        ProxyState.encounter = null
    }

    async catch() {
        let res = await sandboxApi.post('', ProxyState.encounter)
        ProxyState.myPC = [...ProxyState.myPC, new Pokemon(res.data)]
        this.team()
        ProxyState.encounter = null
    }

    async getMyPC() {
        let res = await sandboxApi.get()
        ProxyState.myPC = res.data.map(pokemon => new Pokemon(pokemon))
    }

}

export const myPCService = new MyPCService()
