class SearchBar extends HTMLELement{
    constructor(){
        super();
        this.shadDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadDOM.querySelector("#input-data").value;
    }

    render(){
        this.shadDOM.innerHTML =`
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Cari masakkan apa nih?" id="input-data">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="tombol-cari">Cari</button>
            </div>
        </div>`;

        this.shadDOM.querySelector("#tombol-cari").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);