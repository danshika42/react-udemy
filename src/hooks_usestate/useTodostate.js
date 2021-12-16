import uuid from 'uuid/v4'
import useLocalstorageState from './useLocalstorageState'


const useTodostate=(initialTodos)=>{
    const [todos,setTodos]=useLocalstorageState("todos",initialTodos);
    return {
        todos,
        addtodo:newtodoText=>{
            setTodos([...todos,{id:uuid(),task:newtodoText,completed:false}])
        },
        done:todoId=>{
            const updatedTodos=todos.map(todo=>{
                if(todo.id===todoId){
                    return {...todo,completed:!todo.completed};
                }else{
                    return todo;
                }
            })
            setTodos(updatedTodos);
        },
        removeTodo:todoId=>{
            const updatedTodo=todos.filter(todo=>todo.id!==todoId);
            setTodos(updatedTodo);
        },
        edit:(id,newTodo)=>{
            const updatedTodo=todos.map(todo=>{
                if(id===todo.id){
                    return {...todo,task:newTodo}
                }else{
                    return todo;
                }
            })
            setTodos(updatedTodo);
        }

    }
}

export default useTodostate;


 