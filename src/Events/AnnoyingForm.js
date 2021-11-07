import React, { Component } from 'react'

class AnnoyingForm extends Component {
    handleKeyUp(evt){
        if(evt.keyCode ===56){
            alert("*****");
        }else{
            alert("Not Star");
        }
        console.log(evt);

    }
    render() {
        return (
            <div>
                <h3>Try Typing Here : </h3>
                <textarea onKeyUp={this.handleKeyUp}></textarea>
            </div>
        )
    }
}

export default AnnoyingForm
