import React, {Component} from 'react';
import Header from '../PageHeader'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Grid, Row, Col} from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import ColorPickerButton from '../../ColorPickerButton'

export default class Children extends Component {

    constructor(props) {
        super(props);

        this.state = {
            children: [
                {
                    name: "Lydia",
                    color: '#9900EF'
                },
                {
                    name: "Matthew",
                    color: "#FF6900"
                },
                {
                    name: "Shawn",
                    color: "#0693E3"
                }
            ]
        }
    }

    handleColorChange = (index, value) => {
        this.setState((prevState) => {
            const newChildren = prevState.children.slice();
            newChildren[index].color = value;
            return {
                ...prevState,
                children: newChildren
            };
        })
    };

    handleChange = (index, event) => {
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

    addNewChild = () => {
        this.setState(prevState => {
            const newChildren = prevState.children.slice();
            newChildren.unshift({
                'name': undefined,
                'color': undefined
            });

            return {
                ...prevState,
                children: newChildren
            };
        })
    };


    render() {

        const buildTitle = (tile, index) => (
            <div>
                <TextField
                    name={tile.name}
                    style={{width: '80%'}}
                    inputStyle={{color: 'white', fontWeight:'bold'}}
                    value={tile.name}
                    onChange={(e) => { this.handleChange(index, e)}}
                />
                <ColorPickerButton
                    child={tile}
                    index={index}
                    onChange={this.handleColorChange}
                    iconStyle={{color: 'white'}}
                    icon={<EditIcon color="white"/>}
                />
            </div>
        );

        return (
            <div>
                <Header title={'Children'}/>
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <GridList cellHeight={180} cols={5}>
                                <GridTile key={'new'} titleBackground="">
                                    <FlatButton
                                        style={{width: 224, height: 180}}
                                        backgroundColor='grey'
                                        onClick={this.addNewChild}
                                    >
                                        <ContentAdd style={{color:'white'}}/>
                                    </FlatButton>
                                </GridTile>
                                {this.state.children.map((tile, index) => (
                                    <GridTile
                                        key={tile.name || 'new'+ Math.random()}
                                        title={buildTitle(tile, index)}
                                        titleBackground=""
                                    >
                                        <div style={{background: tile.color, width: 270, height: 180}}/>
                                    </GridTile>
                                ))}
                            </GridList>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
