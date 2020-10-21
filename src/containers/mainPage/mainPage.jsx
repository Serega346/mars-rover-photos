import React from "react";

import {Col, Container, Row} from "react-bootstrap";

import style from "./style.module.css"
import {Link} from "react-router-dom";



export const Main = (props) => {
    return (
        <main className={`${style.main} main`}>
            <Container>
                <h1 className={style.h1}>Choose a Rover to Explore</h1>
                <Row>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Link to='/spirit'>
                            <div className={style.roverCard}>
                                <img className={style.roverPhoto} src="Spirit.jpg" alt="Spirit"/>
                                <div className={style.roverName}>
                                    <p>Spirit</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Link to='/opportunity'>
                            <div className={style.roverCard}>
                                <div>
                                    <img className={style.roverPhoto} src="Opportunity.jpg" alt="Opportunity"/>
                                </div>
                                <div className={style.roverName}>
                                    <p>Opportunity</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Link to='/curiosity'>
                            <div className={style.roverCard}>
                                <div>
                                    <img className={style.roverPhoto} src="Curiosity.jpg" alt="Curiosity"/>
                                </div>
                                <div className={style.roverName}>
                                    <p>Curiosity</p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </main>
    )

}