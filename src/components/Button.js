import React, { Component } from 'react'

class Button extends Component{
    render(){
        return(
            <button onClick={function () {
                alert("You Clicked");
            }}>Click Me!</button>
        )
    }
}

export default Button;