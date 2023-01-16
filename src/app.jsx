import React, {useState, useEffect} from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Product from "./pages/product"
import Catalogue from "./pages/Catalogue";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Main from "./components/Main";

const App =() => {
        const [goods, setGoods] = useState([]);
        const [token, setToken] = useState(localStorage.getItem("shopUser"));

        useEffect(() => {
                fetch("https://api.react-learning.ru/products", {
                        headers: {
                                "Authorization": `Bearer ${token}`
                        }
                })
        }, []);

        console.log(token)
        return  <div className="wrapper">
                <Header products={goods} update={setGoods}/>
                <Catalogue goods={goods}/>
                <Footer/>    
        </div> 
}

export default App;