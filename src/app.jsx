import React, {useState} from "react";
// import Catalogue from "./pages/Catalogue";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./pages/product"

const App =() => {
    // const st = {
    //     height: "50px",
    //     backgroundColor: "silver",
    //     border: "1px solid darkorchid"
    // }
        // return <Container style={{height: "600px", backgroundColor: "darkorchid"}}>
        //     <Row>
        //         <Col md={12} style={st}/>
        //         <Col md={3} xs={6} style={st}/>
        //         <Col md={3} xs={6} style={st}/>
        //         <Col md={3} xs={6} style={st}/>
        //         <Col md={3} xs={6} style={st}/>
        //         <Col md={12} style={st}/>
        //         <Col md={6} style={st}/>
        //         <Col md={6} style={st}/>
        //         <Col md={12} style={st}/>
        //     </Row>
        //     </Container>
        return <Product/>
}

export default App;