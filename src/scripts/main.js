import "./component/search-bar.js";
import "./component/data-list.js";
import DataControl from "./data/data-control.js";

const main = () =>{
    const searchBar = document.querySelector("search-bar");
    const dataList = document.querySelector("data-list");

    const onClickButton = async () =>{
        try{
            const nilaiHasil = await DataControl.dataSearch(searchBar.value);
            hasilAkhir(nilaiHasil);
        } catch(pesanError){
            _errorState(pesanError);
        }
    };

    const hasilAkhir = hasil =>{
        dataList.data = hasil;
    };

    const _errorState = pesanError =>{
        dataList.errorState(pesanError);
    };

    searchBar.clickEvent = onClickButton;
}

export default main;