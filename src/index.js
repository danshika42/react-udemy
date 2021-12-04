// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {BrowserRouter as Router ,
//         Routes, 
//         Route,
//         Navigate,
//         Link,
//         Outlet,
//         useParams,
//         NavLink,
//         useNavigate,
//         useLocation
//       } from 'react-router-dom'

// ReactDOM.render(
//     <Router>
//       <Routes>
//         {/* <Route path='/' element={<p>Hello</p>}/> */}
//         <Route path='/' element={<Home/>}/>
//         <Route path='/learn' element={<Learn/>}>
//           <Route path='course' element={<Course/>}>
//             <Route path=':courseid' element={<CourseId/>} />
//           </Route>
//           <Route path='bundle' element={<Bundle/>}/>
//         </Route>
//         <Route path='/dashboard' element={<Dashboard/>} />
//         <Route path='/myapps' element={<Navigate replace to='/learn'/>}/>
//       </Routes>
//     </Router>,
//   document.getElementById('root')
// );

// function Home(){
//   return(
//     <div>
//       <h1>Home Route</h1>
//     </div>
//   )
// }

// function Learn(){
//   return(
//     <div>
//       <h1>Learn Route</h1>
//       <p>Get your course here</p> 
//       <Link to='/learn/course'>Courses</Link>|
//       <Link to='/learn/bundle'>Bundles</Link>
//       <Outlet/>
//     </div>
//   )
// }

// function Course(){
//   const courseList=['React','Angular','Vue','Nodejs'];
//   const randomcourse=courseList[Math.floor(Math.random()*courseList.length)];
//   return(
//     <div>
//       <h1>Courses Route</h1>

//       <p>More Test</p>
//       <NavLink 
//         style={({isActive})=>{
//           return{
//             backgroundColor: isActive?'pink':'grey'
//           }
//         }}
//       to={`/learn/course/${randomcourse}`} >
//         {randomcourse}
//       </NavLink>||
//       <NavLink 
//         style={({isActive})=>{
//           return{
//             backgroundColor: isActive?'pink':'grey'
//           }
//         }}
//       to={`/learn/course/test`} >
//         Test
//       </NavLink>
//       <Outlet/>
//     </div>
//   )
// }

// function Bundle(){
//   return(
//     <div>
//       <h1>Bundles Route</h1>
//     </div>
//   )
// }

// function CourseId(){
//   const navigate=useNavigate();
//   const {courseid}=useParams();
//   return(
//     <div>
//       <h1>Course Id Route : {courseid}</h1>
//       <button
//       onClick={()=>{
//         navigate('/dashboard',{state:courseid});
//       }}
//       >Price</button>
//       <Link to='/dashboard' state={'hello'} >Test Link</Link>
//     </div>
//   )
// }

// function Dashboard(){
//   const location=useLocation();
//   return(
//     <div>
//       <h1>Dashboard Route</h1>
//       <p>price for {location.state}</p>
//     </div>
//   )
// }

// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
