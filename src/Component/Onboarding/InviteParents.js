import React from 'react';
import ParentRow from './ParentRow';

export default ({parents, handleChange, addRow}) => {

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
            <div>
                {buildParentRows(parents)}
            </div>
        </div>
    );

}