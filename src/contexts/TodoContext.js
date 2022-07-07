import { createContext, useState } from "react";

export const TodoContext = createContext(null);

export const TodoContextProvider = ({ children }) =>{
    const [todos, setTodos] = useState([{ id: 1, name: 'First Todo', isCompleted: false, createdAt: '10/20/2000' }]);

    return(
        <TodoContext.Provider value={{ todos, setTodos }}>
            { children }
        </TodoContext.Provider>
    )
}