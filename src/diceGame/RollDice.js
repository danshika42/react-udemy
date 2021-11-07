import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'
class RollDice extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             num1:'one',
             num2:'one',
             clicked:false,
             msg:'Roll Dice'
        }
        this.run=this.run.bind(this);
    }
   
    run(){
        let randarr=['one','two','three','four','five','six'];
        let index1=Math.floor(Math.random()*6);
        let index2=Math.floor(Math.random()*6);
        this.setState({clicked:true,msg:'Rolling...',num1:randarr[index1],num2:randarr[index2]})
        setTimeout(()=>{
            this.setState({clicked:false,msg:'Roll Dice'})  
        },1000)
    }
   
    render() {
        // let btn=document.querySelector('.btn');
        // btn.disabled=this.state.clicked?true:false;
        
        return (
            <div className="RollDice">
                <h1>Game</h1>
                
                <div className="RollDice-Dice">
                    <Dice id={this.state.num1}/>
                    <Dice id={this.state.num2}/>
                </div>
               
                <button className="btn" onClick={this.run} disabled={this.state.clicked}>{this.state.msg}</button>
            </div>
        )
    }
}

export default RollDice
