class DataItem extends HTMLElement{
    constructor(){
        super();
        this.shadDOM = this.attachShadow({mode: "open"})
    }

    set data(meals){
        this._meal = meals;
        this.render();
    }

    render(){
        this.shadDOM.innerHTML=`
        <div class="card" style="width: 18rem;">
            <img src="${this._meal.strMealThumb}" class="card-img-top" alt="${this._meal.strMeal} image">
            <div class="card-body">
                <h5 class="card-title">${this._meal.strMeal}</h5>
                <p class="card-text">How to Make : <br /> ${this._meal.strInstructions}</p>
            </div>
        </div>`;
    }
}

customElements.define("data-item", DataItem);