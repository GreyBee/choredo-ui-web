import React from 'react';
import AssignableChild from "./AssignableChild";
import {Col, Row} from "react-flexbox-grid";
import {Avatar, Chip, IconButton, Paper} from "material-ui";
import {red800, grey200, deepOrange800, blue400, green400} from "material-ui/styles/colors";
import DeleteAll from 'material-ui/svg-icons/content/delete-sweep';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';


const AssignableChildren = ({children, deleteAll, expandAll, collapseAll}) => (
    <Paper style={{background: grey200}}>
        <Row between="xs" top="xs" style={{paddingTop: 20, paddingBottom: 20}}>
            <Col xsOffset={1} xs={6}>
                {
                    children.map((child, index) => (
                        <AssignableChild
                            child={child}
                            type='child'
                            key={index}
                        />
                    ))
                }
            </Col>
            <Col xs={4}>
                <Chip
                    style={{display: 'inline-flex'}}
                    backgroundColor={red800}
                    labelColor={'white'}
                    onClick={() => {
                        deleteAll()
                    }}>
                    <Avatar
                        backgroundColor={deepOrange800}
                        icon={<DeleteAll color={deepOrange800}/>}
                    />
                    Remove All
                </Chip>
                <IconButton
                    disableTouchRipple
                    onClick={() => {
                        collapseAll()
                    }}
                >
                    <Avatar
                        backgroundColor={blue400}
                        icon={<ExpandLess/>}
                        size={30}
                    />
                </IconButton>
                <IconButton
                    disableTouchRipple
                    onClick={() => {
                        expandAll()
                    }}
                >
                    <Avatar
                        backgroundColor={green400}
                        icon={<ExpandMore/>}
                        size={30}
                    />
                </IconButton>
            </Col>
        </Row>
    </Paper>
);

export default AssignableChildren;