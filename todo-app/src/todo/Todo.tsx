import React from 'react'
import { TodoProvider } from './context/TodoProvider';

export const Todo = () => {
    return (
        <TodoProvider>
            <h2>Todo:</h2>
            <ul>
                <li>Todo 1</li>
                <li>Todo 2</li>
                <li>Todo 3</li>
            </ul>
        </TodoProvider>
    )
}
