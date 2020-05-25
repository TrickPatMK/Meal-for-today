class SearchBar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector("#input-data").value;
    }

    render(){
        this.innerHTML =`
        <style>
        .input-group{
            box-shadow: 0 6px 8px -6px black;
        }
        </style>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Cari masakkan apa nih?" id="input-data">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="tombol-cari">Cari</button>
            </div>
        </div>`;

        this.querySelector("#tombol-cari").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);