import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {deepPurple600} from 'material-ui/styles/colors';
import SetupFamily from './SetupFamily';
import InviteParents from './InviteParents';
import SetupChildren from './SetupChildren';
import axios from 'axios';

export default class OnboardingModal extends React.Component {

    state = {
        finished: false,
        stepIndex: 0,
        familyName: undefined,
        paymentStrategy: 'perChild',
        completionThreshold: 0,
        weekStartDay: 'sunday',
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

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handleFinish = () => {
        const {
            familyName,
            paymentStrategy,
            completionThreshold = 0,
            parents = [],
            children = [],
            weekStartDay
        } = this.state;
        const {user} = this.props;

        const body = {
            data: {
                id: 'new',
                type: 'accounts',
                attributes: {
                    email: user.emailAddress,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: user.token,
                    avatarUri: user.avatarUri
                },
                relationships: {
                    family: {
                        data: {
                            id: 'new',
                            type: 'families'
                        }
                    }
                }
            },
            included: [
                {
                    id: 'new',
                    type: 'families',
                    attributes: {
                        name: familyName,
                        paymentStrategy: paymentStrategy,
                        completionThreshold: completionThreshold,
                        weekStartDay: weekStartDay
                    },
                    relationships: {
                        invitedParents: {
                            data: parents.filter((parent) => {
                                return parent.name && parent.email;
                            }).map((element, index) => {
                                return {
                                    id: 'new ' + index,
                                    type: 'invitedParents'
                                }
                            })
                        },
                        children: {
                            data: children.filter((child) => {
                                return child.name;
                            }).map((element, index) => {
                                return {

                                    id: 'new ' + index,
                                    type: 'children'
                                }

                            })
                        }
                    },
                },
                ...parents.filter((parent) => {
                    return parent.name && parent.email;
                }).map((parent, index) => {
                    return {
                        id: 'new ' + index,
                        type: 'invitedParents',
                        attributes: {
                            email: parent.email,
                            name: parent.name
                        }
                    }
                }),
                ...children.filter((child) => {
                    return child.name;
                }).map((child, index) => {
                    return {
                        id: 'new ' + index,
                        type: 'children',
                        attributes: {
                            name: child.name
                        }

                    }
                }),

            ]
        };

        axios.post('http://localhost:8080/register', JSON.stringify(body))
            .then((response) => {
                console.log(response);
            });
        this.props.handleClose();
    }
    ;

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
                    weekStartDay={this.state.weekStartDay}

                />;
            case 1:
                return <InviteParents
                    parents={this.state.parents}
                    handleChange={this.handleParentChange}
                    addRow={this.addParentRow}
                    user={this.props.user}
                />;
            case 2:
                return <SetupChildren
                    children={this.state.children}
                    handleChange={this.handleChildChange}
                    addRow={this.addChildRow}
                />
        }
    }
    ;

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
                    <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                        <div>
                            <form id="family-form">
                                {this.getStepContent(this.state.stepIndex)}
                            </form>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}


