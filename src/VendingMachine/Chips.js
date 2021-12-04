import React, { Component } from 'react'
import { Link} from 'react-router-dom';
import Message from './Message'

class Chips extends Component {
    render() {
        return (
            <div>
                <Message>
                    <h1>Hello I am Chips</h1>
                    <p>Bags Eaten</p>
                    <Link to='/'>Go Back</Link> 
                </Message>    
            </div>
        )
    }
}

export default Chips
