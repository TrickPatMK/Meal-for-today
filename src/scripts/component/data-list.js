import "./data-item.js";

class DataList extends HTMLElement{
    constructor(){
        super();
    }

    set data(meals){
        this._meal = meals;
        this.render();
    }

    errorState(pesan = "Terjadi Kesalahan"){
        alert(pesan);
    };

    render(){

        this.innerHTML = `
        <div class="card" id="data-list">
            <div class="card-body">
                <div class="card-deck"></div>
            </div>
        </div>`;

        const output = this.querySelector(".card-deck");
        Array.from(this._meal).forEach(datas =>{
            const dataCreate = document.createElement("data-item");
            dataCreate.data = datas;
            output.appendChild(dataCreate)
        })
    }
}

customElements.define("data-list", DataList);