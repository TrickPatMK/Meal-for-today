import $ from 'jquery';

class DataItem extends HTMLElement{
    constructor(){
        super();
    }

    set data(meals){
        this._meal = meals;
        this.render();
    }

    render(){
        const tag = "";
        this.tag = tag;
        if(this._meal.strTags == null){
            this._meal.strTags = this.tag;
        }
        this.innerHTML=`

        <style>
        ._toModal_layer{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            visibility: hidden;
            display: flex;
            opacity: 0;
            align-items: center;
            justify-content: center;
            background-color:rgba(139, 139, 139, 0.4);
            transition: opacity 0.2s, visibility 0.2s;
        }
        
        .col-md-4:hover ._toModal_layer{
            visibility: visible;
            opacity: 1;
            transition: ease-in-out 0.4s;
        }
        
        ._toModal{
            transition: ease-in-out 0.4s;
            transform: translateX(2em);
            text-decoration: none;
            color: #ffffff;
        }
        
        .col-md-4:hover ._toModal{
            transform: translateX(0);
            text-decoration: none;
            color: #ffffff;
        }
        </style>

        <div class="card mb-3" id="items" style="max-width: 515px;">
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="${this._meal.strMealThumb}" class="card-img" alt="${this._meal.strMeal} image">
                    <a href="#" data-toggle="modal" class="_toModal_layer" data-target="#myModal${this._meal.idMeal}">
                        <p class="_toModal">How To Make?</p>
                    </a>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this._meal.strMeal}</h5>
                        <p class="card-text">Category : ${this._meal.strCategory}<br />Cuisine : ${this._meal.strArea}</p>
                        <p class="card-text"><small class="text-muted">${this._meal.strTags}</small></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="myModal${this._meal.idMeal}" tabindex="-1" role="dialog" aria-labelledby="${this._meal.strMeal}Instruction" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">${this._meal.strMeal}</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <center><img src="${this._meal.strMealThumb}" width="200px" /></center>
                        <h5 align="center">Instruction</h5>
                        <p>${this._meal.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>`;
        
        // Modal Part

        const options = {
            'backdrop': 'true',
            'keyboard': 'true'
        };
        const myModal = document.querySelector("#myModal"+this._meal.idMeal);
        const trigg = document.querySelector("._toModal_layer");

        $(myModal).modal(options);
        $(myModal).on('shown.bs.modal', function(){
            $(trigg).trigger('focus');
        });
    }
}

customElements.define("data-item", DataItem);