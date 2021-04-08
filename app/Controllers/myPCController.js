import { ProxyState } from "../AppState.js"
import { myPCService } from "../Services/myPCService.js"


//Private
function _draw() {
  let myPC = ProxyState.myPC
  let template = ''
  myPC.forEach(pokemon => {
    template += `<li class="action hover-action" onclick="app.myPCController.wildGrass('${pokemon.id}')"><h5>${pokemon.name.toUpperCase()}<h5></li>`
  })
  document.getElementById("my-pc").innerHTML = template
}

function _drawTeam() {
  let team = ProxyState.team
  let template = ''
  team.forEach(pokemon => {
    template += `<div class="col-2 p-1">
                      <div class="card shadow py-2">
                          <p><strong>${pokemon.name.toUpperCase()}</strong></p>
                          <img class="img-fluid" src="${pokemon.img}" alt="">
                      </div>
                  </div>`
  })
  document.getElementById("team").innerHTML = template

}
//Public
export default class MyPCController {
  constructor() {
    ProxyState.on("myPC", _draw)
    ProxyState.on("team", _drawTeam)

    _drawTeam()
    this.getMyPC()
  }

  async getMyPC() {
    try {
      await myPCService.getMyPC()
    } catch (error) {
      console.error(error)
    }
  }

  wildGrass(id) {
    myPCService.wildGrass(id)
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

}
