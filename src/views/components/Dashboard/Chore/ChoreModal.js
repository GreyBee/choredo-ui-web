import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {deepPurple600, deepPurple300, grey200} from 'material-ui/styles/colors';
import {Grid, Row, Col} from "react-flexbox-grid";
import CheckIcon from 'material-ui/svg-icons/action/check-circle'
import {Avatar, Chip} from "material-ui";
import CustomScheduleToggle from "./CustomScheduleToggle";

export default class ChoreModal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {chore: {}}
    }

    getDefaultState = () => (
        this.state = {
            chore: {
                id: null,
                name: null,
                description: null,
                value: 0,
                frequency: 'daily',
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
    );

    componentWillReceiveProps(props) {
        this.setState(
            {
                chore: props.chore || this.getDefaultState()
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

    handleScheduleChange = (event, index) => {
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

    render() {
        const {open, index, handleClose, handleUpdate, handleSave} = this.props;
        const {chore} = this.state;

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
                onClick={(e, chore) => (chore.id ? handleUpdate(index, chore) : handleSave(chore)) }
                style={{marginRight: 12}}
            />,
        ];

        const title = <h1 style={{
            backgroundColor: deepPurple600,
            color: 'white',
            marginBottom: 16
        }}>{chore.name ? 'Edit Chore' : 'New Chore'}</h1>;

        const getChip = (chore, label, freq) => {
            const active = chore.frequency === freq
            return (<Chip
                backgroundColor={active ? deepPurple600 : grey200}
                labelColor={active ? 'white' : 'black'}
                onClick={(e) => this.handleFrequencyChange(e, freq)}
            >
                {active && <Avatar
                    backgroundColor={deepPurple300}
                    icon={<CheckIcon color={active && deepPurple600}/>}
                />}
                {label}
            </Chip>)
        };

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
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                            }}>
                                <label style={{marginTop: 8, paddingRight: 30}}>Frequency: </label>
                                <br/>
                                {getChip(chore, 'Daily', 'daily')}
                                {getChip(chore, 'Weekly', 'weekly')}
                                {getChip(chore, 'Custom', 'custom')}
                            </div>
                            {
                                chore.frequency === 'custom' &&
                                <div style={{paddingTop: 20}}>
                                    <CustomScheduleToggle
                                        schedule={Object.entries(chore.customSchedule || {})}
                                        onClick={this.handleScheduleChange}
                                    />
                                </div>
                            }
                        </Col>
                    </Row>
                </Grid>
            </Dialog>
        );
    }
}


