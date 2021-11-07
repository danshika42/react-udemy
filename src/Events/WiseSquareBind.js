import React, { Component } from 'react'

class WiseSquareBind extends Component {
    constructor(props) {
        super(props)
        // this.dispenseWisdom=this.dispenseWisdom.bind(this);
    }
    
    static defaultProps = {
        messages : [ "Hello1","Hello2","Hello3","Hello4"]
    }

    dispenseWisdom=()=> {
        let {messages}=this.props;
        let rIndex = Math.floor(Math.random() * messages.length);
        console.log(messages[rIndex]);
      }
    
      render() {
        return (
          <div className="WiseSquare"
            //    onMouseEnter={this.dispenseWisdom.bind(this)}>
            //    onMouseEnter={()=>this.dispenseWisdom()}>
               onMouseEnter={this.dispenseWisdom}>
            😃
          </div>
        );
      }
}

export default WiseSquareBind
