import React from 'react';
import IconButton from 'material-ui/IconButton';
import ColorIcon from 'material-ui/svg-icons/image/color-lens';
import Popover from 'material-ui/Popover';
import {TwitterPicker} from 'react-color';
import _ from 'lodash';


export default class ColorPickerButton extends React.Component {

    constructor(props) {
        super(props);

        const colors = [
            '#FF6900',
            '#FCB900',
            '#7BDCB5',
            '#00D084',
            '#8ED1FC',
            '#0693E3',
            '#ABB8C3',
            '#EB144C',
            '#F78DA7',
            '#9900EF'
        ];

        this.state = {
            open: false,
            color: this.props.child.color || _.sample(colors)
        }
    }

    componentWillMount(){
        this.props.onChange(this.props.index, this.state.color)
    }

    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    handleChangeComplete = (color, event) => {
        this.setState({color: color.hex});
        this.props.onChange(this.props.index, this.state.color)
    };

    render() {
        return (
            <span>
                <IconButton
                    onClick={this.handleClick}
                    iconStyle={{color: this.state.color}}
                >
                    <ColorIcon/>
                </IconButton>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <TwitterPicker onChangeComplete={this.handleChangeComplete}/>
                </Popover>
            </span>
        );
    }
}