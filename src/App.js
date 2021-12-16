// // import './App.css';
// // import React, { Component } from 'react'
// // import About from './Router/About'
// // import Contact from './Router/Contact'
// // import Dog from './Router/Dog'
// // import { Route, Routes , NavLink} from 'react-router-dom';

// // const Hater = () => <h1> I Hate Dog ! </h1>
// // class App extends Component {
// //   getStyle({ isActive }){
// //       return {
// //         color: isActive ? "green" : ""
// //       };
// //   }
// //   render() {
// //     return (
// //       <div className="App">
// //         <nav className='App-nav'>
// //           <NavLink style={this.getStyle} to='/'>About</NavLink>
// //           <NavLink style={this.getStyle} to='/contact'>Contact</NavLink>
// //           <NavLink style={this.getStyle} to='/dog/c'>Dog(c)</NavLink>
// //           <NavLink style={this.getStyle} to='/dog/r'>Dog(r)</NavLink>
// //           {/* <NavLink exact activeClassName='active-link' to='/'>About</NavLink> */}
// //         </nav>
// //         <Routes>
// //             <Route path="/" element={<About/>} />
// //             <Route path='/contact' element={<Contact/>} />
// //             <Route path='/dog/c' element={<Dog name='Muffins'/>} />
// //             <Route path='/dog/r' render={()=><Dog name="Biscuits"/>} />
// //             <Route path='/dog/hater' element={<Hater/>}/>
// //         </Routes>
// //       </div>
// //     )
// //   }
// // }

// // export default App
// // import './App.css';
// // import React, { Component } from 'react'
// // import Chips from './VendingMachine/Chips'
// // import Fish from './VendingMachine/Fish'
// // import Soda from './VendingMachine/Soda'
// // import VendingMachine from './VendingMachine/VendingMachine';
// // import { Route, Routes , NavLink} from 'react-router-dom';
// // class App extends Component {
 
// //   getStyle({isActive}){
// //     return {backgroundColor:isActive?'Pink':'gray'}
// //   }
 
// //   render() {
// //     return (
// //       <div className="App">
// //                <nav>
// //                     <NavLink style={this.getStyle} to='/'>Home</NavLink>||
// //                     <NavLink style={this.getStyle} to='/soda'>Soda</NavLink>||
// //                     <NavLink style={this.getStyle} to='/chips'>Chips</NavLink>||
// //                     <NavLink style={this.getStyle} to='/fish'>Fish</NavLink>
// //                </nav>
// //                   <Routes>
// //                     <Route path='/' element={<VendingMachine/>}/>
// //                     <Route path='/soda' element={<Soda/>} />
// //                     <Route path='/chips' element={<Chips/>} />
// //                     <Route path='/fish' element={<Fish/>} />
// //                   </Routes>
        
// //       </div>
// //     )
// //   }
// // }

// // export default App
// import './App.css';
// import React, { Component } from 'react'
// // import { Route, Routes , NavLink ,useParams} from 'react-router-dom';
// // import Food from './Router/Food'
// // import CounterClass from './Hooks/CounterClass'
// // import CounterHooks from './Hooks/CounterHooks'
// // import Toggler from './Hooks/Toggler'
// // import SimpleFormClass from './Hooks/SimpleFormClass'
// // import SimpleFormHooks from './Hooks/SimpleFormHooks'
// import Swmovies from './Hooks/Swmovies'
// import Clicker from './Hooks/Clicker'
// class App extends Component {
 
//   // getStyle({isActive}){
//   //   return {backgroundColor:isActive?'Pink':'gray'}
//   // }

  
//   render() {
//     console.log(this.props.value)
//     return (
//       <div className="App">
//         {/* <Food name='Kale'/>        
//         <Food name='Chicken'/>        
//         <Food name='Banana'/>         */}
//         {/* <Routes> */}
//           {/* <Route path='/food/banana' element={<Food name='Banana'/>} /> */}
//           {/* <Route path='/food/:name' element={routeProps=> <Food name='egg' stuff={routeProps} />} /> */}
//           {/* <Route path='/food/:name' element={<Food props={...this.props} stuff={this.props.value} />} /> */}
//         {/* </Routes> */}
//         {/* <CounterClass/> */}
//         {/* <CounterHooks/> */}
//         {/* <Toggler/> */}
//         {/* <SimpleFormClass/> */}
//         {/* <SimpleFormHooks/> */}
//         {/* <Clicker/> */}
//         <Swmovies/>
//       </div>
//     )
//   }
// }

// export default App

import React from 'react'
// import TodoApp from './HooksProject/TodoApp'
// import {TodoProvider} from './HooksProjectTodoContext/TodoContext'
// import Navbar from './Context/Navbar'
// import Minipallete from './JSS/Minipallete'
// import Navbar from './Context/Navbar'
// import NavbarHook from './Context/NavbarHook'
// import Form from './Context/Form'
// import FormHook from './Context/FormHook'
// import PageContent from './Context/PageContent'
// import {ThemeProvider} from './Contexts/ThemeContext'
// import {LanguageProvider} from './Contexts/LanguageContext'
import TodoApp from './TodoApp'
import './App.css'

function App(){
  return(
    <div>
      <TodoApp/>
    {/* <Minipallete/> */}
    {/* <ThemeProvider>
      <LanguageProvider>
        <PageContent>
          <NavbarHook/>
          <FormHook/>
        </PageContent>
      </LanguageProvider>
    </ThemeProvider> */}
    
    </div>
  )
}

export default App;