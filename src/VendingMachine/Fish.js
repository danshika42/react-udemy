import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Message from './Message'

class Fish extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Hello I am Fish</h1>
                    <Link to='/'>Go Back</Link>
                </Message>
            </div>
        )
    }
}

export default Fish
