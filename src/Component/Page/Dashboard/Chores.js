import React, {Component} from 'react';
import Header from '../PageHeader'
import {List, ListItem} from 'material-ui/List';
import {NavLink as Link} from 'react-router-dom';
import {Route} from 'react-router-dom'
import Divider from 'material-ui/Divider';
import Chore from '../../Chore'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';
import ContentAdd from 'material-ui/svg-icons/content/add';


import {Grid, Row, Col} from 'react-flexbox-grid';


export default class Chores extends Component {

    render() {
        const chores = [
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
        ];

        return (
            <div>
                <Header title={'Chores'}/>
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
                                {chores.map((tile, index) => (
                                    <GridTile
                                        key={tile.name || 'new'+ Math.random()}
                                        title={tile.name}
                                        subtitle={tile.description}
                                        titleBackground=""
                                    >
                                        <FlatButton
                                            style={{width: 224, height: 180}}
                                            backgroundColor='blue'
                                            onClick={() => ( alert("YOU CLICKED A THING"))}
                                        >
                                            <ActionCheckCircle color={'white'}/>
                                        </FlatButton>
                                    </GridTile>
                                ))}
                            </GridList>
                        </Col>
                    </Row>
                </Grid>
                {/*<Grid>*/}
                    {/*<Row>*/}
                        {/*<Col xs={2}>*/}
                            {/*<List style={style.paper}>*/}
                                {/*{*/}
                                    {/*chores.map((chore, index) => (*/}
                                        {/*<Link to={'/chores/' + chore.id}*/}
                                              {/*style={{textDecoration: 'none'}}*/}
                                              {/*activeClassName={'active'}*/}
                                              {/*key={index}*/}
                                        {/*>*/}
                                            {/*<ListItem*/}
                                                {/*primaryText={chore.name}*/}
                                                {/*secondaryText={chore.description}*/}
                                            {/*/>*/}
                                            {/*<Divider/>*/}
                                        {/*</Link>*/}
                                    {/*))*/}
                                {/*}*/}
                            {/*</List>*/}
                        {/*</Col>*/}
                        {/*<Col xs={10}>*/}
                            {/*<Route exact path="/chores/:id" render={({match: {params: {id}}}) =>  (<Chore id={id}/>)}/>*/}
                        {/*</Col>*/}
                    {/*</Row>*/}
                {/*</Grid>*/}
            </div>
        );
    }
}
