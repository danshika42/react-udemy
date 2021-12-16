// import React , {Component, createContext, useContext} from 'react'

// export const LanguageContext=createContext();

// export class LanguageProvider extends Component{

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              language:'spanish'
//         }
//         this.handleLanguage=this.handleLanguage.bind(this);
//     }
//     handleLanguage(e){
//         this.setState({language:e.target.value});
//     }

//     render(){
//         return(
//         <LanguageContext.Provider value={{...this.state,handleLanguage:this.handleLanguage}} >
//             {this.props.children}
//         </LanguageContext.Provider>
//         )
//     }
// }


// export const withLanguageContext = Component=>props=>(
//     <LanguageContext.Consumer>
//         {value=><Component languageContext={value} {...props} /> }
//     </LanguageContext.Consumer>
// );

import React , {useState, createContext, useContext} from 'react'

export const LanguageContext=createContext();

export function LanguageProvider(props){
    const [language,setLanguage]=useState("spanish");
    const handleLanguage=(e)=>{
        setLanguage(e.target.value);
    }
    return(
        <LanguageContext.Provider value={{language,handleLanguage}} >
            {props.children}
        </LanguageContext.Provider>
    )
    
}


