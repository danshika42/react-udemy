import React, { Component } from "react";
import './WiseSquare.css'

class WiseSquare extends Component {
  dispenseWisdom() {
    let messages = [ "Hello1","Hello2","Hello3","Hello4"];
    let rIndex = Math.floor(Math.random() * messages.length);
    console.log(messages[rIndex]);
  }

  render() {
    return (
      <div className="WiseSquare"
           onMouseEnter={this.dispenseWisdom}>
        😃
      </div>
    );
  }
}

export default WiseSquare;