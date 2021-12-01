import React from 'react'
import Todo from './Todo'

const TodosList = ({ todos, handleDelete }) => {

    return (
        <div className="todos collection">
            {!todos.length
                ? <p className="center">No todo's left</p>
                : todos.map(todo => (
                    <Todo
                        key={todo.id}
                        content={todo.content}
                        handleDelete={() => handleDelete(todo.id)}
                    />
                ))
            }
        </div>
    )

}

export default TodosList