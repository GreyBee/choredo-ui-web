import React from 'react';
import {connect} from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ChildTile from "../components/Dashboard/Children/ChildTile";
import {childActions, childSelectors} from '../../store/Children';

const ChildGrid = (props) => (
    <GridList cellHeight={180} cols={5}>
        <GridTile key={'new'} titleBackground="">
            <FlatButton
                style={{width: 224, height: 180}}
                backgroundColor='grey'
                onClick={props.addNewChild}
            >
                <ContentAdd style={{color: 'white'}}/>
            </FlatButton>
        </GridTile>
        {props.children.map((child, index) => (
            <ChildTile
                key={index}
                child={child}
                index={index}
                handleChange={props.updateChildName}
                handleColorChange={props.updateChildColor}
            />
        ))}
    </GridList>
);


const mapStateToProps = (state) => {
    return ({
        children: childSelectors.getChildren(state)
    })
};

const mapDispatchToProps = dispatch => {
    return ({
        addNewChild: () => dispatch(childActions.addChild()),
        updateChildName: (index, name) => dispatch(childActions.updateChildName(index, name)),
        updateChildColor: (index, color) => dispatch(childActions.updateChildColor(index, color)),
    })
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChildGrid)