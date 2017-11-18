import React from 'react';
import SetupFamily from './SetupFamily';
import InviteParents from './InviteParents';
import SetupChildren from './SetupChildren';

export default class OnboardingForm extends React.Component {

    state = {
        familyName: undefined,
        paymentStrategy: 'perChild',
        completionThreshold: 0,
        parents: [
            {
                'email': undefined,
                'name': undefined
            }
        ],
        children: [
            {
                'name': undefined
            }
        ]
    };

    handleChange = (event) => {
        event.persist();
        this.setState(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };

    handleParentChange = (index, field, event) => {
        event.persist();
        this.setState((prevState) => {
            const newParents = prevState.parents.slice();
            newParents[index][field] = event.target.value;
            return {
                ...prevState,
                parents: newParents
            };
        })
    };

    handleChildChange = (index, event) => {
        event.persist();
        this.setState((prevState) => {
            const newChildren = prevState.children.slice();
            newChildren[index].name = event.target.value;
            return {
                ...prevState,
                children: newChildren
            };
        })
    };

    addParentRow = () => {
        this.setState(prevState => {
            const newParents = prevState.parents.slice();
            newParents.push({
                'email': undefined,
                'name': undefined
            });
            return {
                ...prevState,
                parents: newParents
            };
        });
    };

    addChildRow = () => {
        this.setState(prevState => {
            const newChildren = prevState.children.slice();
            newChildren.push({
                'name': undefined
            });

            return {
                ...prevState,
                children: newChildren
            };
        })
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <SetupFamily
                    handleChange={this.handleChange}
                    familyName={this.state.familyName}
                    paymentStrategy={this.state.paymentStrategy}
                    completionThreshold={this.state.completionThreshold}
                    updateCompletionThreshold={(e, v) => {
                        this.setState({completionThreshold: v})
                    }}
                />;
            case 1:
                return <InviteParents
                    parents={this.state.parents}
                    handleChange={this.handleParentChange}
                    addRow={this.addParentRow}
                />;
            case 2:
                return <SetupChildren
                    children={this.state.children}
                    handleChange={this.handleChildChange}
                    addRow={this.addChildRow}
                />
        }
    };

    render() {
        this.getStepContent = this.getStepContent.bind(this);
        return (
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <div>
                    <form id="family-form">
                        {this.getStepContent(this.props.stepIndex)}
                    </form>
                </div>
            </div>
        );
    }
}


