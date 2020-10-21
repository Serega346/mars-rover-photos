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
                    <Col lg={4} md={4}>
                        <div className="text-center text-lg-left text-md-left">
                            <h1 className={style.h1}>Mars Explorer</h1>
                            <button onClick={scrollToSection} className={style.btn}>Explore</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )

}