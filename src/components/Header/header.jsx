import React from 'react'
import {scroller} from "react-scroll"

import {Col, Container, Row} from "react-bootstrap";
import style from "./style.module.css"

export const Header = (props) => {

    const scrollToSection = () => {
        scroller.scrollTo("main", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuint",
        });
    };

    return (
        <header className={style.header}>
            <Container>
                <Row>
                    <Col xl={5} lg={5} md={5} sm={7} xs={12}>
                            <h1 className={style.h1}>Mars Explorer</h1>
                            <button onClick={scrollToSection} className={style.btn}>Explore</button>
                    </Col>
                </Row>
            </Container>
        </header>
    )

}