import React, { Component } from 'react'
import Message from './Message'
import { NavLink} from 'react-router-dom';

class VendingMachine extends Component {
    render() {
        return (
            <div>
                <Message>
                    <p>Welcome to Vending Machine</p>
                </Message>
                <Message>
                    <NavLink to='/soda'>Soda</NavLink>||
                    <NavLink to='/chips'>Chips</NavLink>||
                    <NavLink to='/fish'>Fish</NavLink>
                </Message>
            </div>
        )
    }
}

export default VendingMachine
