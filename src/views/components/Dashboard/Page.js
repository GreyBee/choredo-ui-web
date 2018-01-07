import React from 'react';
import Header from './PageHeader'
import {Grid, Row, Col} from 'react-flexbox-grid';

export default ({title, component}) => (
    <div>
        <Header title={title}/>
        <Grid>
            <Row>
                <Col xs={12} style={{minHeight:800}}>
                    {component}
                </Col>
            </Row>
        </Grid>
    </div>
);
