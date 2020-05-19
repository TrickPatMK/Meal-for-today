class DataControl{
    static async dataSearch(inputan){
        try{
            if(inputan.length = 1){
                searchType = "f";
            } else {
                searchType = "s";
            }
            const myApi = "https://www.themealdb.com/api/json/v1/1";
            const response = await fetch(`${myApi}/search.php?${searchType}=${inputan}`);
            const responseJson = await response.json();
            return responseJson.meals;
        } catch(error){
            return errorState(error);
        }
    }
}

export default DataControl;