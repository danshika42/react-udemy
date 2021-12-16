import React,{createContext} from 'react'
import useTodostate from '../hooks_usestate/useTodostate'

export const TodoContext=createContext();

const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: true }
];

export function TodoProvider(props){
    const todostuff=useTodostate(defaultTodos);
    return(
        <TodoContext.Provider value={todostuff}>
            {props.childern}
        </TodoContext.Provider>
    )
}





 
