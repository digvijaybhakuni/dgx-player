import React, {Component} from 'react';
import './Button.sass';

export const DgButton = (props) => 
    <button className="dg-button" onClick={props.click}>
        {props.text} {props.children && 
            <span>
                {props.children}
            </span>
        }
    </button>

export class TheButton extends Component {
    constructor(){
        super();
        this.state = {counter : 0};
    }

    buttonClick(){
        const counter = this.state.counter + 1;
        this.setState({counter});
        this.props.click();
    }

    render() {
        return (
            <button className="the-button" onClick={this.buttonClick.bind(this)}>
                {this.props.children} {this.props.text} Click Count {this.state.counter}
            </button>
        )
    }
}