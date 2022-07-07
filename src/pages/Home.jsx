import { useEffect, useContext } from "react";
import TodoForm from "../components/TodoForm";
import { TodoContext } from "../contexts/TodoContext";
import axios from '../api/axios';

const Home = () => {
    const { setTodos } = useContext(TodoContext);

    useEffect(() =>{
        document.title = "Todo App";

        const getTodos = async() =>{
            const { data } = await axios.get('/');
            setTodos(data);
        }

        getTodos();

    }, [setTodos]);

    return ( 
        <div className="home">
            <TodoForm />
        </div>
    );
}
 
export default Home;