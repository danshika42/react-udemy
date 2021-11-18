import './App.css'
import React, { Component } from 'react'
import About from './Router/About'
import Contact from './Router/Contact'
import Dog from './Router/Dog'


class FakeRouting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       page:'about'
    }
   }

  changePage(newPage){
    this.setState({page:newPage});
  }

  renderPage(){
    if(this.state.page==='about')
    return <About/>
    else if(this.state.page==='dog')
    return <Dog/>
    else
    return <Contact/>
  }

  render() {
   
    
    return (
      <div className="FakeRouting">
      <nav>
        <a onClick={()=>this.changePage('about')}>About</a>
        <a onClick={()=>this.changePage('dog')}>Dog</a>
        <a onClick={()=>this.changePage('contact')}>Contact</a>
      </nav>
      {this.renderPage()}
    </div>
    )
  }
}

export default FakeRouting
