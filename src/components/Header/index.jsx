import React, {useState} from "react";
import Logo from "../logo";
import "./style.css";
import {ReactComponent as FavIcon} from "./img/ic-favorites.svg"
import {ReactComponent as CartIcon} from "./img/ic-cart.svg"
import {ReactComponent as ProfileIcon} from "./img/ic-profile.svg"


export default ({products, update, openPopup}) => {
    const [text, changeText] = useState("");
    const [count, setCount] = useState(0);
    const handler = e => {
        changeText(e.target.value)
        const result = products.filter((el => el.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1));
        setCount(result.length);
        if (!text) {
            update(products);
        }else{
            update(result)
        }
    }
    return <>
    <header>
        <Logo/>
        <input type="search" value={text} onChange={handler}/>
        <nav>
            <a href=""><FavIcon/></a>
            <a href=""><CartIcon/></a>
            <a href="" onClick={e => {e.preventDefault(); openPopup(true)}}><ProfileIcon/></a>
        </nav>
    </header>
    <div>
        {text ? `По запросу ${text} найдено ${count} позиций` : "Поиск..."}
    </div>
    </>
}