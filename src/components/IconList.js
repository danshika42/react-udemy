import React, { Component } from 'react'

class IconList extends Component {
    static defaultProps = {
        Options:[
            "angry",
            "anchor",
            "archive",
            "at",
            "archway",
            "baby",
            "bell",
            "bolt",
            "bone",
            "car",
            "city",
            "cloud",
            "couch"
        ]
    }

    constructor(props) {
        super(props)
    
        this.state = {
             icons:["heart"]
        }
        this.addIcon=this.addIcon.bind(this);
    }
    
    addIcon(){
        let index=Math.floor(Math.random()*this.props.Options.length);
        let newicons=this.props.Options[index];
        let icons=this.state.icons;
        // icons.push(newicons);
        // this.setState({icons:icons});
        this.setState({icons:[...this.state.icons,newicons]})
    }
   
    render() {
        let divIcon=this.state.icons.map(p=><i className={`fas fa-${p}`}></i>)
        return (
            <div>
                <h1>Icon : {divIcon}</h1>
                <button onClick={this.addIcon}>Add Icon</button>
            </div>
        )
    }
}

export default IconList
