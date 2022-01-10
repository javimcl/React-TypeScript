import { TodoContext } from "./TodoContext"
import { TodoState } from '../interfaces/interfaces';
import { useReducer } from "react";
import { todoReducer } from './TodoReducer';

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false
        },
    ],
    completed: 0,
    pending: 2
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    const toggleTodo = (id: string) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
function reducer(reducer: any, initialState: any, init: any): [any, any] {
    throw new Error("Function not implemented.");
}

