import React from 'react';
import {purple600} from 'material-ui/styles/colors';
import {Divider} from "material-ui";
import CollapsedWeek from "./ChoreWeek/CollapsedWeek";
import ExpandedWeek from "./ChoreWeek/ExpandedWeek";

const ChoreWeek = (props) => {
    const {expanded} = props;

    return (
        <div >
            <Divider style={{color: purple600}}/>
            {
                expanded ? <ExpandedWeek {...props} /> : <CollapsedWeek {...props} />
            }
        </div>
    );
}

export default ChoreWeek;