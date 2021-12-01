import React from 'react'

const Todo = ({ content, handleDelete }) => {

    return(
        <div className="collection-item">
            <p>{ content }</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default Todo