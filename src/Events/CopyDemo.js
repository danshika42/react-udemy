import React, { Component } from 'react'

class CopyDemo extends Component {
    handelCopy(){
        alert("Stop Copy!!")
    }
    render() {
        return (
            <div>
                <p onCopy={this.handelCopy}> Lorem ipsum dolor sit amet consectetur, adip
                    isicing elit. Non libero ipsa distinctio, praes
                    entium nam natus soluta eaque ipsum quam quidem.
                     Dignissimos dolorum sequi nihil eos omnis animi o
                     dio nostrum possimus? 
                </p>
            </div>
        )
    }
}

export default CopyDemo
