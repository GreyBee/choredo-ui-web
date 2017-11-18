import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {deepPurple600} from 'material-ui/styles/colors';

import OnboardingForm from './OnboardingForm';

export default class extends React.Component {

    state = {
        finished: false,
        stepIndex: 0,
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handleFinish = () => {
        alert("CONGRATS. YOU'RE DONE");
        this.props.handleClose();
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.handleClose}
            />,
            <FlatButton
                label="Back"
                disabled={this.state.stepIndex === 0}
                onClick={this.handlePrev}
                style={{marginRight: 12}}
            />,
            <RaisedButton
                label={this.state.stepIndex === 2 ? 'Finish' : 'Next'}
                primary={true}
                onClick={this.state.stepIndex === 2 ? this.handleFinish : this.handleNext}
            />
        ];

        let title = <h1 style={{
            backgroundColor: deepPurple600,
            color: 'white',
            textAlign: 'center',
            marginBottom: 16
        }}>Getting Started</h1>;

        return (
            <div>
                <Dialog
                    title={title}
                    actions={actions}
                    modal={true}
                    open={this.props.open}
                    autoDetectWindowHeight={true}
                >
                    <OnboardingForm stepIndex={this.state.stepIndex}/>
                </Dialog>
            </div>
        );
    }
}


