import React from 'react';

export default class Todo extends React.Component {

    constructor(props) {
        super();
        this.state = {
            id: props.id,
            task: props.task,
            completed: props.completed
        };
    }

    render() {
        return ('test')
    }
}