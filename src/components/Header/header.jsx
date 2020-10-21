import React from "react";

import {Col, Container, Row} from "react-bootstrap";
import style from "./style.module.css"

export const Header = () => {

    return (
        <header className={style.header}>
            <Container>
                <Row>
                    <Col lg={4} md={4} className="align-content-center">
                        <h1 className={style.h1}>Mars Explorer</h1>
                        <button className={style.btn}>Explore</button>
                    </Col>
                </Row>
            </Container>
        </header>
    )

}