import './App.css';
import React, { Component } from 'react'
import About from './Router/About'
import Contact from './Router/Contact'
import Dog from './Router/Dog'
import { Route, Routes , NavLink} from 'react-router-dom';

const Hater = () => <h1> I Hate Dog ! </h1>
class App extends Component {
  getStyle({ isActive }){
      return {
        color: isActive ? "green" : ""
      };
  }
  render() {
    return (
      <div className="App">
        <nav className='App-nav'>
          <NavLink style={this.getStyle} to='/'>About</NavLink>
          <NavLink style={this.getStyle} to='/contact'>Contact</NavLink>
          <NavLink style={this.getStyle} to='/dog/c'>Dog(c)</NavLink>
          <NavLink style={this.getStyle} to='/dog/r'>Dog(r)</NavLink>
          {/* <NavLink exact activeClassName='active-link' to='/'>About</NavLink> */}
        </nav>
        <Routes>
            <Route path="/" element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/dog/c' element={<Dog name='Muffins'/>} />
            <Route path='/dog/r' render={()=><Dog name="Biscuits"/>} />
            <Route path='/dog/hater' element={<Hater/>}/>
        </Routes>
      </div>
    )
  }
}

export default App
