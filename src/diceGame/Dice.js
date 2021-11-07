import React, { Component } from 'react'

class Dice extends Component {
    render() {
        let idclass=`fas fa-dice-${this.props.id} fa-10x`;
        return (
            <div>
                <i className={idclass} ></i>
            </div>
        )
    }
}

export default Dice
