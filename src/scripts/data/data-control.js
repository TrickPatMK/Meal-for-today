class DataControl{
    static async dataSearch(inputan){
        try{
            if(inputan.length > 1){
                this.searchType = "s";
            } else {
                this.searchType = "f";
            }
            const myApi = "https://www.themealdb.com/api/json/v1/1/search.php?";
            const response = await fetch(`${myApi}${this.searchType}=${inputan}`);
            const responseJson = await response.json();
            return responseJson.meals;
        } catch(error){
            return errorState(error);
        }
    }
}

export default DataControl;