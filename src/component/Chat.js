import React, {Component} from 'react';
import {DgButton} from '../common-controls/Button';
import { DgList } from '../common-controls/List';
export  class Chat extends Component {

    state = {
        messages: [],
        text: 'Welcome'
    }

    connection = null;

    componentWillMount() {
        this.connection = new WebSocket('ws://localhost:8501');
        this.connection.onopen = () => {
            this
                .connection
                .send('A Client Connected')
        }

        this.connection.onmessage = msg => {

            if (typeof msg.data === 'string') {
                const {messages} = this.state;
                messages.push(msg.data);
                this.setState({messages});
            }
        }
    }

    send = () => {
        const val = this.state.text;
        if (this.connection) {
            this
                .connection
                .send(val);
        }
    }

    handleChange = (ev) => {
        this.setState({text: ev.target.value});
    }

    render() {
        const {messages, text} = this.state;
        return (
            <div className="chat-wrapper">
                <div className="chat-msg">
                    <DgList list={messages}/>
                </div>
                <div className="chat-textbox">
                    <input ype="text" value={text} onChange={this.handleChange}/>
                    <DgButton text="Send" click={this.send}/>
                </div>
            </div>
        )
    }
}