import "./data-item.js";

class DataList extends HTMLElement{
    constructor(){
        super();
    }

    set data(meals){
        this._meal = meals;
        this.render();
    }

    errorState(pesan){
        pesan.alert('Terjadi Kesalahan');
    };

    render(){
        const structure = this._meal.forEach(data =>{
            const dataCreate = document.createElement("data-item");
            dataCreate.meals = data;
            this.appendChild(dataCreate);
        });
        this.innerHTML =`
        <div class="card-deck">
            ${structure}
        </div>`;
    }
}

customElements.define("data-list", DataList);