import React from 'react';
import styled from 'styled-components';

export default class Todo extends React.Component {

    handleClick(event) {
        this.props.toggleCompleted(event, this.props.data.id);
    }

    render() {
        return (
            <Task 
                completed={this.props.data.completed} 
                onClick={event => this.handleClick(event)}
            >
                {this.props.data.task}
            </Task>
        )
    }
}

const Task = styled.div`
    background: ${ props => props.completed ? '#6f6' : '#f66' };
    border: solid 1px black;
    width: calc(100% - 2rem);
    padding: 1rem;
    margin-bottom: 1rem;
`;