import { ProxyState } from "../AppState.js"
import { myPCService } from "../Services/myPCService.js"

//Private
function _draw() {
  let myPC = ProxyState.myPC
  let template = ''
  myPC.forEach(pokemon => {
    template += `<li class="action hover-action" onclick="app.myPCController.encounter('${pokemon.id}')"><h5>${pokemon.name.toUpperCase()}<h5></li>`
  })
  document.getElementById("my-pc").innerHTML = template
}

function _drawTeam() {
  let template = ''
  ProxyState.team ? ProxyState.team.forEach(pokemon => {
    template += `<div class="col-2 p-1">
                      <div class="bg-transparent py-2">
                          <button class="btn btn-light" disabled><strong>${pokemon.name.toUpperCase()}</strong></button>
                          <img class="img-fluid team-card" src="${pokemon.img}" alt="">
                      </div>
                  </div>`
  })
    : template = `
      <div class="col-2 p-1">
          <div class="bg-transparent py-2" style="opacity: 0">
              <button class="btn btn-light" disabled><strong>POKEMON</strong></button>
              <img class="img-fluid team-card" src="//placehold.it/130x130" alt="">
          </div>
      </div>
    `
  document.getElementById("team").innerHTML = template
}

//Public
export default class MyPCController {
  constructor() {
    ProxyState.on("myPC", _draw)
    ProxyState.on("team", _drawTeam)

    this.getMyPC()
  }

  async getMyPC() {
    try {
      await myPCService.getMyPC()
    } catch (error) {
      console.error(error)
    }
  }

  encounter(id) {
    myPCService.encounter(id)
  }

  team() {
    myPCService.team()
  }

  async catch() {
    try {
      await myPCService.catch()
    } catch (error) {
      console.error(error)
    }
  }

  async release() {
    try {
      await myPCService.release()
    } catch (error) {
      console.error(error)
    }
  }

  async releaseAll() {
    try {
      await myPCService.releaseAll()
    } catch (error) {
      console.error(error)
    }
  }

}
