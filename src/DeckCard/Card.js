import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    img(){
        return this.props.drawn.map(img=>{
            return <img className='card' src={img.image} key={img.id} alt={img.name}/>
        })
    }
    render() {
        return (
            <div>
                {this.img()}
            </div>
        )
    }
}

export default Card
