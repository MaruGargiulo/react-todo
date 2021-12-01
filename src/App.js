import React, { Component } from 'react'
import TodosList from './TodosList'
import AddTodo from './AddTodo'
class App extends Component {

    state = {
        todos: []
    }

    handleDelete = id => {
        const todos = this.state.todos.filter(todo => todo.id !== id)
        this.setState({ todos })
    }

    addTodo = newTodo => {
        newTodo.id = Math.random()
        this.setState({ todos: [ ...this.state.todos, newTodo ] })
        
    }

    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <AddTodo addTodo={this.addTodo}/>
                <TodosList todos={this.state.todos} handleDelete={this.handleDelete} />
            </div>
        );
    }

}

export default App;
