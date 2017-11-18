import React from 'react';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Tooltip from 'material-ui/internal/Tooltip';
import Slider from 'material-ui/Slider';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class SetupFamily extends React.Component {

    state = {
        paymentStrategyToolTip: false,
        completionThresholdToolTip: false
    };

    showTooltipPaymentStrategyTooltip = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                paymentStrategyToolTip: !prevState.paymentStrategyToolTip
            };
        });
    };

    render() {
        return (
            <div>
                <h3>Setup Family </h3>
                <span>Give your family a name, and some intial configuration </span>

                <label style={{marginTop: 16}}>Family Name</label>
                <TextField
                    hintText="The Danger Daniels"
                    name="familyName"
                    onChange={this.props.handleChange}
                    value={this.props.familyName}
                />
                <label style={{marginTop: 16}}>
                    Payment Strategy
                    <IconButton onClick={this.showTooltipPaymentStrategyTooltip}
                                style={{color: "gray", veritcalAlign: "middle", width: 20, height: 20}}
                    >
                        <InfoIcon/>
                        <Tooltip
                            show={this.state.paymentStrategyToolTip}
                            label="How would you like allowance calculated?"
                            style={{fontSize: '14pt'}}
                            horizontalPosition='right'
                            verticalPosition='top'/>
                    </IconButton>
                </label>
                <RadioButtonGroup
                    name="paymentStrategy"
                    defaultSelected={this.props.paymentStrategy}
                    onChange={this.props.handleChange}
                >
                    <RadioButton
                        value="perChild"
                        label="Per Child"
                        checkedIcon={<ActionFavorite/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        style={{marginBottom: 16, width: "50%", display: "inline-block"}}
                    />
                    <RadioButton
                        value="perChore"
                        label="Per Chore"
                        checkedIcon={<ActionFavorite/>}
                        uncheckedIcon={<ActionFavoriteBorder/>}
                        style={{marginBottom: 16, width: "50%", display: "inline-block"}}
                    />
                </RadioButtonGroup>
                <label>
                    Completion Threshold:
                    <IconButton onClick={() => {
                        this.setState(prevState => {
                            return {
                                ...prevState,
                                completionThresholdToolTip: !prevState.completionThresholdToolTip
                            };
                        });
                    }}
                                style={{color: "gray", veritcalAlign: "middle", width: 20, height: 20}}
                    >
                        <InfoIcon/>
                        <Tooltip
                            show={this.state.completionThresholdToolTip}
                            label="What percentage of chores need to be completed to earn allowance?"
                            style={{fontSize: '14pt'}}
                            horizontalPosition='right'
                            verticalPosition='top'/>
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