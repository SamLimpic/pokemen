import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";


export function saveState() {
    localStorage.setItem('myTeam', JSON.stringify({
        myTeam: ProxyState.team
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('myTeam'))
    if (data) {
        ProxyState.team = data.myTeam
    }
}