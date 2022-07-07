import { useState } from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import axios from "../api/axios";

const Todos = () => {
    const { todos, setTodos } = useContext(TodoContext);
    const [filterTodos, setFilterTodos] = useState('all');
    let counter = 0;

    const handleClear = async() =>{
        const { data } =  await axios.delete('/');

        if(data.success){
            setTodos(data.todos);
        }
    }

    return ( 
        <>
        {
            todos.length > 0? 
            <>
                <ul>
                {   
                    filterTodos === 'all'?
                    todos.map(todo =>{
                        return(
                            <Todo key={todo.id} todo={todo}/>
                        )
                    })
                    :
                    todos.map(todo =>{
                        if(todo.isCompleted){
                            return(
                                <Todo key={todo.id} todo={todo}/>
                            )
                        }

                    })
                }
                </ul>
                <div className="todo-footer">
                    {
                        filterTodos === 'all' ?
                        todos.forEach(todo => {
                            if(!todo.isCompleted){
                                counter += 1;
                            }
                        })
                        :
                        todos.forEach(todo => {
                            if(todo.isCompleted){
                                counter += 1;
                            }
                        })
                    }
                    <h3>{ filterTodos === 'all' ? `${counter} item/s left` : `${counter} item/s completed` }</h3>
                    <div className="filter-options">
                        <button className={ filterTodos === 'all' ? 'selected-filter' : '' } onClick={() => setFilterTodos('all')}>All</button>
                        <button className={ filterTodos === 'completed' ? 'selected-filter' : '' } onClick={() => setFilterTodos('completed')}>Completed</button>
                    </div>
                    <button className="clear" onClick={handleClear}>Clear Completed</button>
                </div>
            </>
            :
            <p className="empty">You don't have any todo items</p>
        }
        </>
    );
}
 
export default Todos;