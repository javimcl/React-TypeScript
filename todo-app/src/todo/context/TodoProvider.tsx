import { TodoContext } from "./TodoContext"
import { TodoState } from '../interfaces/interfaces';

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id:'1',
            desc:'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id:'2',
            desc:'Piedra del alma',
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
    return (
        <TodoContext.Provider value={{}}>
            {children}
        </TodoContext.Provider>
    )
}
