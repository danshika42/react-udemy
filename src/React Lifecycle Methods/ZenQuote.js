import React, { Component } from 'react'
import axios from 'axios'
import './ZenQuote.css'

class ZenQuote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quote:'',
             loaded:false
        }
        console.log("cons")
    }
    
    componentDidMount(){
        axios.get("https://api.github.com/zen").then(response=>{
            setTimeout(
                function () {
                    this.setState({quote:response.data,loaded:true})
                }.bind(this),
            3000)
        });

        console.log("componentmount")

    }
    componentDidUpdate(){
        console.log('Update');
    }
    render() {
        console.log("render")

        return (
            <div>
                {this.state.loaded?(
                    <div>
                        <p>Always remember</p>
                        <h1>{this.state.quote}</h1>
                    </div>
                ):(
                    <div className='loader'></div>
                )}
                
            </div>
        )

    }
}

export default ZenQuote
