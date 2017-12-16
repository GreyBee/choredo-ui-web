import React from 'react';
import ParentRow from './ParentRow';
import TextField from 'material-ui/TextField';
import {deepPurple600} from 'material-ui/styles/colors';


export default ({user, parents, handleChange, addRow}) => {

    const buildParentRows = (parents) => {
        return parents.map((element, index) => {
            return <ParentRow
                key={index}
                parent={element}
                index={index}
                handleChange={handleChange}
                handleAddRow={addRow}
            />;
        })
    };

    return (
        <div>
            <h3>Invite Parents</h3>
            <span>Invite the other parents in your family.
                        We'll send them an invite so they can help manage your chore board.
                    </span>
            <br/>
            <br/>
            <div>
                <div>
                    <TextField
                        floatingLabelText="Parent's Name"
                        style={{width: '40%'}}
                        inputStyle={{color:deepPurple600}}
                        value={user.firstName + ' ' + user.lastName}
                        underlineShow={false}
                        disabled={true}
                    />
                    <span style={{width: "10%", display: 'inline-block'}}/>
                    <TextField
                        floatingLabelText="Email"
                        style={{width: '40%'}}
                        inputStyle={{color:deepPurple600}}
                        value={user.emailAddress}
                        underlineShow={false}
                        disabled={true}
                    />
                </div>
                {buildParentRows(parents)}
            </div>
        </div>
    );

}