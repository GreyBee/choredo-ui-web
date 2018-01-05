import React from 'react';
import {GridTile} from 'material-ui/GridList';
import {FlatButton} from "material-ui";
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';


const ChoreTile = (props) => {
    const {chore, index, onClick} = props;

    return (
        <GridTile
            title={chore.name}
            subtitle={chore.description}
            titleBackground=""
        >
            <FlatButton
                style={{width: 224, height: 180}}
                backgroundColor='blue'
                onClick={ () => { onClick(index, chore) } }
            >
                <ActionCheckCircle color={'white'}/>
            </FlatButton>
        </GridTile>
    )
};

export default ChoreTile;

