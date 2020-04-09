import React from 'react';

export default class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    setTask(task) {
        this.setState({task: task});
    }

    handleSubmit(event) {
        //event.preventDefault();
        this.props.addTask(event, this.state.task);
        this.setTask('');
    }

    handleClear(event) {
        this.props.clearCompleted(event);
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input 
                    name="task" 
                    id="task"
                    type="text"
                    value={this.state.task}
                    onChange={event => this.setTask(event.target.value)}
                />
                <button type="submit">Add</button>
                <button onClick={event => this.handleClear(event)}>Clear</button>
            </form>
        )
    }
}