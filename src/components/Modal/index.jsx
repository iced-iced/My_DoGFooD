import React, {useState} from "react";
import "./style.css";
import {Form, Button} from "react-bootstrap";
import {XCircle} from "react-bootstrap-icons";

export default ({isActive, changeActive}) => {
    return <div className={isActive ? "popup-box Active" : "popup-box"}>
        <div className="popup">
            <XCircle className="popup-close" onClick = {e => {changeActive(false)}}></XCircle>
            <Form>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"></Form.Control>
                </Form.Group>
                <Button variant="warning" type="submit">Войти</Button>
            </Form>
        </div>
    </div>
}