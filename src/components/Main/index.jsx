import React, {useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import {Container, Col, Row, Figure, Table, ButtonGroup, Button, Alert} from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import Logo from "../logo";
import Product from "../../pages/product";



export default () => {
    return <div className="wrapper">
        <Header/>
        <Container>
        <Stack gap={5}>
                <Col xs={12} md={12} className="d-flex justify-content-center">
                    <img src="https://media.istockphoto.com/vectors/dog-food-bag-vector-id510289171?k=20&m=510289171&s=612x612&w=0&h=wvyYHa7Bg4FxD4nGdV1Xf5jRqMaqwKTIYgJzUlWu6II=" alt="" />
                </Col>
                <Col className="d-flex justify-content-center">
                    <img src="https://fun-cats.ru/wp-content/uploads/f/b/e/fbe8200bec825f682a0daf049cf6b30c.jpeg" width="400px" alt="" /></Col>
                <Col className="d-flex justify-content-center"><Logo/></Col>
                <Col className="d-flex justify-content-center"><Logo/></Col>
                <Col className="d-flex justify-content-center"><Logo/></Col>
                <Col className="d-flex justify-content-center"><Logo/></Col>
        </Stack>
        </Container>
        <Footer/>
        </div>
}