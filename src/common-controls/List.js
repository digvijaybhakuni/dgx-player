import React, {Component} from 'react';
import './List.sass'

export const DgList = porps => 
<ul className='dg-list'>
    {porps.list && 
        porps.list.map((msg, index)=> <li key={index}>{msg}</li>)
    }
</ul>


export class TheList extends Component {

    constructor(){
        super()
        this.state = {};
    }

    componentWillMount(){
        const list = ['Jon', 'Paul', 'Rube'];
        setTimeout(() => {
            this.setState({list})
        }, 1000);
    }

    render(){
        return <div className='the-list-warp'>
            {this.props.title && <h3>{this.props.title}</h3>}
            {this.state.list && 
            <ul className='the-list'>
                {this.state.list.map((msg, index) => <li key={index}>{msg}</li>)}
            </ul>}
        </div>
    }
}