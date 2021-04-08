import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"

class MyPCService {
    async release() {
        await sandboxApi.delete(ProxyState.encounter.id)
        ProxyState.myPC = ProxyState.myPC.filter(pokemon => pokemon.id !== ProxyState.encounter.id)
        ProxyState.encounter = null
    }
    async catch() {
        let res = await sandboxApi.post('', ProxyState.encounter)
        ProxyState.myPC = [...ProxyState.myPC, new Pokemon(res.data)]
    }
    async getMyPC() {
        let res = await sandboxApi.get()
        ProxyState.myPC = res.data.map(pokemon => new Pokemon(pokemon))
    }

}

export const myPCService = new MyPCService()
