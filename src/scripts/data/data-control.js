class DataControl{
    static async dataSearch(inputan){
        if(inputan.length > 1){
            this.searchType = "s";
        } else {
            this.searchType = "f";
        }
        const myApi = "https://www.themealdb.com/api/json/v1/1/search.php?";
        return fetch(`${myApi}${this.searchType}=${inputan}`)
        .then(data =>{
            return data.json()
        })
        .then(convertedData =>{
            if(convertedData.meals){
                return Promise.resolve(convertedData.meals);
            } else{
                return Promise.reject(`${inputan} is not found or somethings error`);
            }
        });
    }
}

export default DataControl;