import MyPCController from "./Controllers/myPCController.js"
import PokedexController from "./Controllers/pokedexController.js"

class App {
  pokedexController = new PokedexController()
  myPCController = new MyPCController()
}

window["app"] = new App()