import React from 'react';
import {grey700} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';


export default ({title}) => (
    <div>
        <h1 style={{color: grey700}}>{title}</h1>
        <Divider/>
    </div>
)
