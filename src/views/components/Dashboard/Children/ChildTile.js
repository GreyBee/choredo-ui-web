import React from 'react';
import {GridTile} from 'material-ui/GridList';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import TextField from 'material-ui/TextField';
import ColorPickerButton from '../../ColorPickerButton'


const ChildTile = (props) => {
    const {child, index, handleChange, handleColorChange} = props;
    const buildTile = (tile, index) => (
        <div>
            <TextField
                name="child-name"
                style={{width: '80%'}}
                inputStyle={{color: 'white', fontWeight: 'bold'}}
                value={tile.name}
                onChange={(e) => {
                    e.persist();
                    handleChange(index, e.target.value)
                }}
            />
            <ColorPickerButton
                color={child.color}
                index={index}
                onChange={(index, color) => handleColorChange(index, color)}
                iconStyle={{color: 'white'}}
                icon={<EditIcon color="white"/>}
            />
        </div>
    );

    return (
        <GridTile title={buildTile(child, index)} titleBackground="">
            <div style={{background: child.color, width: 270, height: 180}}/>
        </GridTile>
    )
};

export default ChildTile;

