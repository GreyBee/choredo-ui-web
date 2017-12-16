import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import ColorPickerButton from './ColorPickerButton'

export default ({child, index, handleChange, handleColorChange, handleAddRow}) => {
    let addBtn = (index === 0)
        ? <IconButton onClick={handleAddRow}>
            <ContentAdd/>
        </IconButton>
        : null;

    return (
        <div>
            <TextField
                hintText="Super Boy"
                floatingLabelText="Child's Name"
                name={'child-'+index}
                style={{width: '80%'}}
                value={child.name}
                onChange={(e) => { handleChange(index, e)}}
            />
            <ColorPickerButton child={child} index={index} onChange={handleColorChange}/>
            {addBtn}
        </div>
    )
};