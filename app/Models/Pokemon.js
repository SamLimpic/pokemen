export default class Pokemon {
    constructor({ id, name, img, sprites, weight, height, types, stats }) {
        this.id = id || null
        this.name = name
        this.img = img || sprites.other['official-artwork'].front_default
        this.weight = weight
        this.height = height
        this.types = types
        this.stats = stats
    }

    get Template() {

        return /*html*/`
                <div class="row justify-content-around align-items-center bg-info">
                    <div class="col-8">
                        <img class="img-fluid" src="${this.img}" alt="">
                    </div>
                    <div class="col-4">
                        <div>
                            <h2><u>${this.name.toUpperCase()}</u></h2>
                            <h4>Primary: <strong>${this.types[0].type.name.toUpperCase()}</strong></h4>
                            <h4>Secondary: <strong>${this.types[1] ? this.types[1].type.name.toUpperCase() : "NONE"}</strong></h4>
                            <div class="pl-3">
                                <h5>Height: <strong>${this.height}</strong></h5>
                                <h5>Weight: <strong>${this.weight}</strong></h5>
                                <div class="pl-3">
                                    <h6>Health: <strong>${this.stats[0]['base_stat']}</strong></h6>
                                    <h6>Attack: <strong>${this.stats[1]['base_stat']}</strong></h6>
                                    <h6>Defense: <strong>${this.stats[2]['base_stat']}</strong></h6>
                                    <h6>Special: <strong>${this.stats[3]['base_stat']}</strong></h6>
                                    <h6>Speed: <strong>${this.stats[5]['base_stat']}</strong></h6>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                        <button class="shadow btn btn-success m-3" onclick="app.myPCController.catch()"><strong>CATCH</strong></button>
                        <button class="shadow btn btn-danger m-3" onclick="app.myPCController.release()"><strong>RELEASE</strong></button>
                        </div>
                    </div>
                </div>
        `
    }
}
