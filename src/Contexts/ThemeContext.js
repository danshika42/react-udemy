// import React,{Component, createContext} from "react";

// export const ThemeContext = createContext();


// export class ThemeProvider extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isDarkMode:true
//         }
//         this.handleTheme=this.handleTheme.bind(this);
//     }
//     handleTheme(){
//         this.setState({isDarkMode:!this.state.isDarkMode});
//     }
    
//     render() {
//        return(
//         <ThemeContext.Provider value={{...this.state,tastesLikeChicken:true,handleTheme:this.handleTheme}} >
//             {this.props.children}
//         </ThemeContext.Provider>
//        ) 
//     }
// }
import React,{createContext} from "react";
import useToggle from '../hooks_usestate/useToggle'


export const ThemeContext = createContext();


export function ThemeProvider (props){
        const [isDarkMode,handleTheme]=useToggle(false);

       return(
        <ThemeContext.Provider value={{isDarkMode,handleTheme}} >
            {props.children}
        </ThemeContext.Provider>
       ) 
    
}
