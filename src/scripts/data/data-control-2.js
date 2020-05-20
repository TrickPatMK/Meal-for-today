class DiffDataControl{
    static async findData(inputedWord){
        const apiLoad = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
        try{
            const data = await fetch(`${apiLoad}${inputedWord}`);
            const convert = await data.json();
            return convert.meals;
        } catch(error){
            
        }
    }
}

export default DiffDataControl;