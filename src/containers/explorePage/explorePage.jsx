import React from "react";

import {Col, Container, Row} from "react-bootstrap";

import style from "./style.module.css"
import {RoverCard} from "../../components/RoverCard/roverCard";
import {SearchForm} from "../../components/Form/form";

export const ExplorePage = (props) => {

    return (
        <div className={style.bg}>
            <Container>
                <h1>{props.name}</h1>
                <Row>
                    <Col lg={3} md={3}>
                        <RoverCard name={props.name}/>
                    </Col>
                    <Col lg={6} md={6}>
                        <SearchForm name={props.name}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
