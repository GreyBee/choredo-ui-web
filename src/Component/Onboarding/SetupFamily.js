import React from 'react';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import {deepOrangeA400, deepPurple600} from 'material-ui/styles/colors';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class SetupFamily extends React.Component {

    render() {
        const avatar = (label, color) => {
            return <Avatar backgroundColor={color}>{label}</Avatar>
        };

        const dayOfWeekIcon = (value) => {
            const avatarValue = value.charAt(0).toUpperCase();
            return <RadioButton
                value={value}
                checkedIcon={avatar(
                    avatarValue,
                    deepOrangeA400
                )}
                uncheckedIcon={avatar(
                    avatarValue,
                    deepPurple600
                )}
                style={{marginBottom: 16, width: "7%", display: "inline-block"}}
            />
        };
        return (
            <div>
                <h3>Setup Family </h3>
                <span>Give your family a name, and some intial configuration </span>

                <div width={'50%'}>
                    <label style={{marginTop: 16}}>Family Name</label>
                    <TextField
                        hintText="The Danger Daniels"
                        name="familyName"
                        onChange={this.props.handleChange}
                        value={this.props.familyName}
                    />
                </div>
                <div width={'50%'}>
                    <label style={{marginTop: 16}}>
                        Week Start Date
                    </label>
                    <RadioButtonGroup name="weekStartDay"
                                      defaultSelected={this.props.weekStartDay}
                                      onChange={this.props.handleChange}
                    >
                        {dayOfWeekIcon('sunday')}
                        {dayOfWeekIcon('monday')}
                        {dayOfWeekIcon('tuesday')}
                        {dayOfWeekIcon('wednesday')}
                        {dayOfWeekIcon('thursday')}
                        {dayOfWeekIcon('friday')}
                        {dayOfWeekIcon('saturday')}
                    </RadioButtonGroup>
                </div>
                <label style={{marginTop: 16}}>
                    Payment Strategy
                    <IconButton
                        tooltip={<span>How would you like allowance calculated?</span>}
                        tooltipStyles={{fontSize: 14}}
                    >
                        <InfoIcon/>
                    </IconButton>
                </label>
                <RadioButtonGroup
                    name="paymentStrategy"
                    defaultSelected={this.props.paymentStrategy}
                    onChange={this.props.handleChange}
                >
                    <RadioButton
                        value="per_child"
                        label="Per Child"
                        checkedIcon={<ActionFavorite/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        style={{marginBottom: 16, width: "50%", display: "inline-block"}}
                    />
                    <RadioButton
                        value="per_chore"
                        label="Per Chore"
                        checkedIcon={<ActionFavorite/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        style={{marginBottom: 16, width: "50%", display: "inline-block"}}
                    />
                </RadioButtonGroup>
                <label>
                    Completion Threshold:
                    <IconButton
                        tooltip={<span>What percentage of chores need to be completed to earn allowance?</span>}>
                        <InfoIcon/>
                    </IconButton>


                </label>
                <div>
                    <div style={{
                        width: '15%',
                        float: 'left',
                        display: 'inline-block',
                        color: "gray",
                        fontSize: 30,
                        textAlign: 'right',
                        paddingTop: 20,
                        fontWeight: 'bold'
                    }}>
                        {this.props.completionThreshold}%
                    </div>
                    <div style={{width: '80%', float: 'right', display: 'inline-block'}}>
                        <Slider
                            min={0}
                            max={100}
                            step={1}
                            value={this.props.completionThreshold}
                            onChange={this.props.updateCompletionThreshold}/>
                    </div>
                </div>

            </div>)
    };
}