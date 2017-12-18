import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {Grid, Row, Col} from 'react-flexbox-grid';


export default class Chore extends Component {
    constructor(props){
        super(props);

        const {id} = this.props;
        this.state = {
            ...this.getChore(id)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.getChore(nextProps.id)})
    }

    getChore = (id) => {
        const chore = [
            {
                id: 123,
                name: "Take out the trash",
                description: "Trash trash trashity trash",
                value: 100,
                duration: '10min',
                frequency: 'daily'
            },
            {
                id: 456,
                name: "Dishes",
                description: "Wash wash washity wash",
                value: 100,
                duration: '30min',
                frequency: 'daily'
            },
            {
                id: 678,
                name: "Bathroom",
                description: "It's nasty, I know",
                value: 100,
                duration: '30min',
                frequency: 'weekly'
            }
        ].find((element) => (element.id === parseInt(id)));

        return Object.assign({}, chore);
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

    render() {
        return (<Grid>
            <Row end="xs">
                <Col xs>
                    <h3>Edit Chore </h3>
                </Col>
            </Row>
            <Row>
                <Col xs={5} xsOffset={1}>
                    <TextField
                        name="name"
                        hintText="Chore Name"
                        floatingLabelText="Chore Name"
                        value={this.state.name}
                        floatingLabelFixed
                        onChange={this.handleChange}
                    />
                </Col>
                <Col xs={4}>
                    <TextField
                        name="description"
                        floatingLabelText="Description"
                        floatingLabelFixed
                        value={this.state.description}
                        rowsMax={4}
                        multiLine
                        onChange={this.handleChange}
                    />
                </Col>
            </Row>
        </Grid>)
    }
}
