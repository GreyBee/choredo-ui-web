import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';

export default ({parent, index, handleChange, handleAddRow}) => {
    let addBtn = (index === 0) ? <IconButton onClick={handleAddRow}>
        <ContentAdd/>
    </IconButton> : null;
    return (
        <div>
            <TextField
                hintText="Super Dad"
                floatingLabelText="Parent's Name"
                name={'parent-name-'+index}
                style={{width: '40%'}}
                value={parent.name}
                onChange={(e) => handleChange(index, 'name', e)}
            />
            <span style={{width: "10%", display: 'inline-block'}}/>
            <TextField
                hintText="superdad@dad.com"
                name={'parent-email-'+index}
                floatingLabelText="Email"
                style={{width: '40%'}}
                value={parent.email}
                onChange={(e) => handleChange(index, 'email', e)}
            />
            {addBtn}
        </div>
    )
};