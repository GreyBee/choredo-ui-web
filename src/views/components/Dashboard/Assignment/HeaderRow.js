import React from 'react';
import {Col, Row} from "react-flexbox-grid";

const HeaderRow = ({days}) => (
    <Row between="xs">
        <Col xs={2}/>
        {
            days.map((day) => (
                <Col key={day} xs>
                    <h4 style={{textAlign: 'center'}}>
                        {day.charAt(0).toUpperCase() + day.slice(1)}
                    </h4>
                </Col>
            ))
        }
    </Row>
);

export default HeaderRow;