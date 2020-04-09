// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

export default class TodoList extends React.Component {
    render() {
        return(
            <div className="todolist">
                {this.props.todos.map(a => <Todo data={a} />)}
                <TodoForm addTask={this.props.addTask} />
            </div>
        )
    }
}