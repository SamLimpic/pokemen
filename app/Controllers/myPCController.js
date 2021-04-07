import { ProxyState } from "../AppState.js"
import { myPCService } from "../Services/myPCService.js"


//Private
function _draw() {
  let myPC = ProxyState.myPC
  let template = ''
  myPC.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`

  `
}

//Public
export default class MyPCController {
  constructor() {
    ProxyState.on("myPC", _draw)

  }

}
