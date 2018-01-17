import React from 'react';
import './HOC.sass';

export function toggleable(TheComponent){
    return class extends React.Component{
        state = {hide : false};
        onClick = (ev) => {
            const hide = !this.state.hide
            console.log('clicked on toggleable : ', hide);
            this.setState({hide});
        }
        render() {
            return (
                <div className="the-hoc toggleable" onClick={this.onClick}>
                    <div className={ this.state.hide ? "hidden" : "show" }>
                        <TheComponent {...this.props}>
                            { this.props.children }
                        </TheComponent>
                    </div>
                </div>
            );
        }
    }
}

export const TogglePanel = args => TheComponent => {
    return class TheTogglePanel extends React.Component{
        state = {hide : false};
        onClick = (ev) => {
            const hide = !this.state.hide
            console.log('clicked on toggleable : ', hide);
            this.setState({hide});
        }
        render() {
            return (
            <div className="the-hoc toggleable" onClick={this.onClick}>
                <label className="title">{args}</label>
                <div className={ this.state.hide ? "hidden" : "show" }>
                    <TheComponent {...this.props}>
                        { this.props.children }
                    </TheComponent>
                </div>
            </div>
            );
        }
    }
} 