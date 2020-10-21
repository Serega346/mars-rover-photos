import React from "react";

import {Col, Container, Row} from "react-bootstrap";

import style from "./style.module.css"
import {RoverCard} from "../../components/RoverCard/roverCard";
import {SearchForm} from "../../components/Form/form";

export const ExplorePage = (props) => {

    return (
        <div className={style.bg}>
            <Container>
                <Row>
                    <Col xl={3} lg={3} md={4} sm={12} xs={12} >
                        <RoverCard name={props.name}/>
                    </Col>
                    <Col xl={9} lg={9} md={8} sm={12} xs={12}>
                        <SearchForm name={props.name}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
