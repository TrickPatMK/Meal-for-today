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
        this._meal.forEach(datas =>{
            const dataCreate = document.createElement("data-item");
            dataCreate.data = datas;
            this.appendChild(dataCreate)
        }); 
    }
}

customElements.define("data-list", DataList);