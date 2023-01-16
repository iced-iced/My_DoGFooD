import React, {useState, useEffect} from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Product from "./pages/product"
import Catalogue from "./pages/Catalogue";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
// import Main from "./components/Main";

const App =() => {
        const [goods, setGoods] = useState([]);
        const [data, setData] = useState([]);
        const [token, setToken] = useState(localStorage.getItem("shopUser"));
        const [popupActive, changePopupActive] = useState(true);

        useEffect(() => {
                fetch("https://api.react-learning.ru/products", {
                        headers: {
                                "Authorization": `Bearer ${token}`
                        }
                })
                .then(res => res.json())
                .then(data => {
                        setGoods(data.products)
                        setData(data.products)       
                });
        }, []);

        return  <>
        <div className="wrapper">
                <Header products={data} update={setGoods} openPopup={changePopupActive}/>
                <Catalogue goods={goods}/>
                <Footer/>    
        </div> 
        <Modal isActive={popupActive} changeActive={changePopupActive}/>      
        </>  
}

export default App;