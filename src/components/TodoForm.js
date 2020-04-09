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
        event.preventDefault();
        console.log(this.state.task);
        this.props.addTask(this.state.task);
        this.setTask('');
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
            </form>
        )
    }
}