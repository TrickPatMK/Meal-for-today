import "./data-item.js";

class DataList extends HTMLElement{
    constructor(){
        super();
        this.shadDOM = this.attachShadow({mode: "open"})
    }

    set data(meals){
        this._meal = meals;
        this.render();
    }

    errorState(pesan){
        alert('Terjadi Kesalahan') = pesan;
    };

    render(){
        const structure = this._data.forEach(data =>{
            const dataCreate = document.createElement("data-item");
            dataCreate.data = data;
            this.shadDOM.appendChild(dataCreate);
        });
        this.shadDOM.innerHTML =`
        <div class="card-deck">
            ${structure}
        </div>`;
    }
}

customElements.define("data-list", DataList);