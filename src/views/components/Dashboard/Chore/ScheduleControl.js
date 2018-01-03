import React from 'react';
import {deepPurple600, deepPurple300, grey300} from 'material-ui/styles/colors';
import CheckIcon from 'material-ui/svg-icons/action/check-circle'
import {Avatar, Chip} from "material-ui";
import SchedulePicker from "./SchedulePicker";


const ScheduleControl = (props) => {
    const {
        chore,
        weeklyChange,
        customChange,
        frequencyChange,
        clearSchedule
    } = props;

    let scheduleAction;

    if (chore.frequency === 'custom'){
        scheduleAction = customChange;
    }

    if (chore.frequency === 'weekly'){
        scheduleAction = weeklyChange;
    }

    const showSchedule = chore.frequency === 'custom' || chore.frequency === 'weekly';

    const getChip = (chore, label, freq) => {
        const active = chore.frequency === freq
        return (<Chip
            backgroundColor={active ? deepPurple600 : grey300}
            labelColor={active ? 'white' : 'black'}
            onClick={(e) => {
                clearSchedule();
                frequencyChange(e, freq)
            }}
        >
            {active && <Avatar
                backgroundColor={deepPurple300}
                icon={<CheckIcon color={active && deepPurple600}/>}
            />}
            {label}
        </Chip>)
    };

    const chipsDiv = <div style={{
        display: 'flex',
        flexWrap: 'wrap',
    }}>
        <label style={{marginTop: 8, paddingRight: 30}}>Frequency: </label>
        <br/>
        {getChip(chore, 'Daily', 'daily')}
        {getChip(chore, 'Weekly', 'weekly')}
        {getChip(chore, 'Custom', 'custom')}
    </div>;

        const scheduleDiv =  showSchedule &&
            <div style={{paddingTop: 20}}>
                <SchedulePicker
                    schedule={Object.entries(chore.customSchedule || {})}
                    onClick={(event, index) => {
                        scheduleAction(event, index);
                    }}
                />
            </div>;

    return ( [chipsDiv, scheduleDiv ])
};

export default ScheduleControl;

