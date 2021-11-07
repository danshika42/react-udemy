import React, { Component } from 'react'
import NumberItem from './NumberItem'

class NumberList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             num:[1,2,3,4,4,5]
        }
        this.remove=this.remove.bind(this);
    }

    remove(numValue){
        this.setState( 
                currState=>{ 
                    return {num:currState.num.filter(n=>n!==numValue)} 
                    } 
            )
    }

    render() {
        let nums=this.state.num.map((n,idx)=><NumberItem key={idx} value={n} remove={this.remove}/>)
        return (
            <div>
                <h1>Number List</h1>
                <ul>{nums}</ul>
            </div>
        )
    }
}

export default NumberList


