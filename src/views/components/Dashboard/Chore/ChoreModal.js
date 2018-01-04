import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {deepPurple600} from 'material-ui/styles/colors';
import {Grid, Row, Col} from "react-flexbox-grid";
import ScheduleControl from "./ScheduleControl";

export default class ChoreModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {chore: {}}
    }

    componentWillReceiveProps(props) {
        this.setState(
            {
                chore: props.chore
            }
        );
    }

    handleChange = (event) => {
        event.persist();
        this.setState(prevState => {
            return {
                chore: {
                    ...prevState.chore,
                    [event.target.name]: event.target.value,
                }
            };
        });
    };

    handleFrequencyChange = (event, value) => {
        event.persist();
        this.setState(prevState => {
            return {
                chore: {
                    ...prevState.chore,
                    frequency: value,
                }
            };
        });
    };

    handleCustomScheduleChange = (event, index) => {
        event.persist();
        this.setState(prevState => ({
                chore: {
                    ...prevState.chore,
                    customSchedule: {
                        ...prevState.chore.customSchedule,
                        [index]: !prevState.chore.customSchedule[index]
                    },
                }
            }
        ));
    };

    handleWeeklyScheduleChange = (event, index) => {
        event.persist();
        this.setState(prevState => ({
                chore: {
                    ...prevState.chore,
                    customSchedule: {
                        sunday: false,
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false,
                        saturday: false,
                        [index]: true
                    }
                }
            }
        ));
    };

    clearSchedule = () => {
        this.setState(prevState => ({
                chore: {
                    ...prevState.chore,
                    customSchedule: {
                        sunday: false,
                        monday: false,
                        tuesday: false,
                        wednesday: false,
                        thursday: false,
                        friday: false,
                        saturday: false,
                    }
                }
            }
        ));
    };

    render() {
        const {open, index, handleClose, handleUpdate, handleSave} = this.props;
        const { chore } = this.state;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={(e) => {
                    handleClose(e)
                }}
            />,
            <RaisedButton
                label="Save"
                primary
                onClick={(e) => {
                    chore.id ? handleUpdate(index, chore) : handleSave(chore);
                    handleClose(e);
                }}
                style={{marginRight: 12}}
            />,
        ];

        const title = <h1 style={{
            backgroundColor: deepPurple600,
            color: 'white',
            marginBottom: 16
        }}>{chore.name ? 'Edit Chore' : 'New Chore'}</h1>;

        return (
            <Dialog modal={false}
                    onRequestClose={(e) => {
                        handleClose(e)
                    }}
                    title={title}
                    actions={actions}
                    open={open}
                    autoDetectWindowHeight
                    autoScrollBodyContent
            >
                <Grid>
                    <Row>
                        <Col md={5}>
                            <TextField
                                floatingLabelText={"Name"}
                                name="name"
                                onChange={this.handleChange}
                                value={chore.name || ''}
                            />
                            <div/>
                            <TextField
                                floatingLabelText={"Description"}
                                name="description"
                                onChange={this.handleChange}
                                value={chore.description || ''}
                                multiLine
                            />
                            <div/>
                            <TextField
                                floatingLabelText={"Value"}
                                name="value"
                                type={'number'}
                                onChange={this.handleChange}
                                value={(chore.value || 0 / 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
                                multiLine
                            />
                        </Col>
                        <Col md={7}>
                            <ScheduleControl
                                chore={chore}
                                weeklyChange={this.handleWeeklyScheduleChange}
                                customChange={this.handleCustomScheduleChange}
                                frequencyChange={this.handleFrequencyChange}
                                clearSchedule={this.clearSchedule}
                            />
                        </Col>
                    </Row>
                </Grid>
            </Dialog>
        );
    }
}


