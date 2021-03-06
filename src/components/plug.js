import React from "react";
import { useRef } from "react";

import { Col, Container, Form, Row, FloatingLabel } from "react-bootstrap"
import { BsArrowRight, BsFillPlugFill } from "react-icons/bs";

import ParticleMenu from "./particle";
export default function PlugMenu() {
    const userIDRef = useRef();
    const getlink = () => {
        var userID=userIDRef.current.value
        console.log(userID.trim())
        if (userID==null || userID.trim()==""){
            console.log("No userid provided")
            userID="488688724948025357"
        }
        console.log("Attempting to redirect")
        window.location.replace(`https://api.bakerie.gq/theme-1/${userID}`)
    }
    return <Container fluid>
        <Row className="hero justify-content-center" align="center">
            <BsFillPlugFill className="mb-4" size={60}/>
            <h1 id="plug-title">
                Enter your Discord User ID 
            </h1>
            <Col xs={3} >
                <FloatingLabel controlId="floatingInputGrid">
                    <Form.Control ref={userIDRef} className="fm-input" type="email" placeholder="name@example.com" />
                </FloatingLabel>
            </Col>
            <Col xs={1}>
                <button onClick={getlink} className="create-btn btn-variant-gray pulse"><BsArrowRight size={30}/></button>
            </Col>
            <ParticleMenu/>
        </Row>
  </Container>
};