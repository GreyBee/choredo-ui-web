import React from 'react';
import {grey300, deepPurple600} from "material-ui/styles/colors";
import {Avatar, IconButton} from "material-ui";
import {Col, Row} from "react-flexbox-grid";


const SchedulePicker = (props) => {
    const {schedule, onClick} = props;

    return (
        <Row>
            <Col xs={12}>
                {schedule.map((item) => {
                    const [key, value] = item;
                    const avatarValue = key.charAt(0).toUpperCase();
                    const color = value ? deepPurple600 : grey300;

                    return <IconButton  key={key} onClick={(e) => onClick(e, key)}>
                        <Avatar
                            backgroundColor={color}
                            style={{margin: '0 5px'}}
                        >
                            {avatarValue}
                        </Avatar>
                    </IconButton>
                })}
            </Col>
        </Row>
    )
};

export default SchedulePicker;

