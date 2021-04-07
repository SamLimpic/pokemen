export default class Value {
    constructor({ id, name, img, sprites, weight, height, types }) {
        this.id = id
        this.name = name
        this.img = img || sprites.other['official-artwork'].front_default
        this.weight = weight
        this.height = height
        this.types = types
    }

    get Template() {

        return /*html*/`

        `
    }
}
