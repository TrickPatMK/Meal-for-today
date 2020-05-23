class DataItem extends HTMLElement{
    constructor(){
        super();
    }

    set data(meals){
        this._meal = meals;
        this.render();
    }

    render(){
        this.innerHTML=`
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${this._meal.strMealThumb}" class="card-img" alt="${this._meal.strMeal} image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this._meal.strMeal}</h5>
                        <p class="card-text">Category : ${this._meal.strCategory}</p>
                        <p class="card-text">Cuisine : ${this._meal.strArea}</p>
                        <p class="card-text"><small class="text-muted">${this._meal.strTags}</small></p>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

customElements.define("data-item", DataItem);