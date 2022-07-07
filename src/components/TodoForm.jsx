import { MdAddCircle } from 'react-icons/md';
import Todos from './Todos';
import { useState, useContext } from 'react';
import { TodoContext } from "../contexts/TodoContext";
import axios from '../api/axios';

const TodoForm = () => {
    const { setTodos } = useContext(TodoContext);
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(!newTodo) return;

        const { data } = await axios.post('/', {
            name: newTodo
        });

        if(data.success){
            setTodos(data.todos);
        }



        setNewTodo('')
    }

    return ( 
        <div className="container">
            <div className="header">
                <h3>Todo</h3>
                <div className="form-container">
                    <form className='add-form' onSubmit={handleSubmit}>
                        <input className='new-todo-input' type="text" placeholder='Enter new todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                        <button className="add-icon" type="submit"><MdAddCircle /></button>
                    </form>
                </div>
            </div>
            <Todos />
        </div>
    );
}
 
export default TodoForm;