import React from 'react';
import ChildRow from './ChildRow';

export default ({children, handleChange, handleColorChange, addRow}) => {

    const buildChildRows = (children) => {
        return children.map((element, index) => {
            return <ChildRow
                key={index}
                child={element}
                index={index}
                handleChange={handleChange}
                handleAddRow={addRow}
                handleColorChange={handleColorChange}
            />;
        })
    };

    return (
        <div>
            <h3>Setup Children</h3>
            <span>
                Add chore-doers to finish your ChoreDo setup!
            </span>
            <br/>
            <div>
                {buildChildRows(children)}
            </div>
        </div>
    );

}