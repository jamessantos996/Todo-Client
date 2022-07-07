import { useContext } from 'react';
import { AiOutlineUndo, AiFillDelete, AiOutlineCheck } from 'react-icons/ai';
import axios from '../api/axios';
import { TodoContext } from '../contexts/TodoContext';


const Todo = ({ todo }) => {
    const { setTodos } = useContext(TodoContext);

    const handleUpdate = async(id) =>{
        const { data } =  await axios.patch(`/${todo.id}`, {
            isCompleted: !todo.isCompleted
        });

        if(data.success){
            return setTodos(data.todos)
        }
    }

    const handleDelete = async(id) =>{
        const { data } =  await axios.delete(`/${todo.id}`);

        if(data.success){
            return setTodos(data.todos)
        }
    }

    return ( 
        <li className={`todo ${todo.isCompleted ? 'completed' : ''}`}>
            <div className="todo-details">
                <h4 className={'todo-name'}>{ todo.name }</h4>
                <h6>{todo.createdAt}</h6>
            </div>
            <ul className="todo-actions">
                {
                    todo.isCompleted?
                    <li><button onClick={() => handleUpdate(todo.id)}><AiOutlineUndo /></button></li>
                    :
                    <li><button onClick={() => handleUpdate(todo.id)}><AiOutlineCheck /></button></li>
                }    
                <li><button onClick={() => handleDelete(todo.id)}><AiFillDelete /></button></li>                               
            </ul>
        </li>
    );
}
 
export default Todo;