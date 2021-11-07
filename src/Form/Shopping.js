import React, { Component } from 'react'
import ShoppingForm from './ShoppingForm'
import uuid from 'uuid/v4'

class Shopping extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             items:[
                 { name: "Milk" ,qty:"2 gallons", id:uuid() },
                 { name: "Bread" ,qty:"2 loaves", id:uuid()}
             ]
        }
        this.addItem=this.addItem.bind(this);
    }

    addItem(item){
        let newItem={...item,id:uuid()};
        this.setState( 
            currState=>(
                {items:[...currState.items,newItem]}
            )
        )
    }
    
    renderItems(){
        return(
            <ul>
                {this.state.items.map(item=>(
                    <li key={item.id}>
                        {item.name}:{item.qty}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <ShoppingForm addItem={this.addItem}/>
            </div>
        )
    }
}

export default Shopping
