import "./component/search-bar.js";
import "./component/data-list.js";
import DataControl from "./data/data-control.js";

const main = () =>{
    const searchBar = document.querySelector("search-bar");
    const dataList = document.querySelector("data-list");

    const onClickButton = () =>{
        DataControl.dataSearch(searchBar.value)
        .then(hasilAkhir)
        .catch(_errorState)
    };

    const hasilAkhir = hasil =>{
        dataList.data = hasil;
    };

    const _errorState = pesan =>{
        dataList.errorState(pesan);
    };

    searchBar.clickEvent = onClickButton;
}

export default main;