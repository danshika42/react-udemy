import React, { Component } from 'react'

class ButtonList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             color:'cyan'
        }
    }

    static defaultProps={
        colors:["#e856fd","#eb4d4b","#badc58","#f0932b"]
    };

    changeColor=(newColor)=>this.setState({color:newColor})
    
    
    render() {
        return (
            <div className='ButtonList' style={ {   backgroundColor:this.state.color,
                                                    display:'flex',
                                                    justifyContent:'space-evenly'  } }>
                {this.props.colors.map(c=>
                            <button onClick={this.changeColor.bind(this,c)} 
                                   style={{ backgroundColor : c}}>
                            Click Me</button>
                )}
                
            </div>
        ) 
    }
}

export default ButtonList
