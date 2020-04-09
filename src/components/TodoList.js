// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';
import TodoForm from './TodoForm';

export default class TodoList extends React.Component {
    render() {
        return(
            <Container>
                {this.props.todos.map(a => <Todo key={a.id} data={a} toggleCompleted={this.props.toggleCompleted}/>)}
                <TodoForm 
                    addTask={this.props.addTask} 
                    clearCompleted={this.props.clearCompleted} 
                />
            </Container>
        )
    }
}

const Container = styled.div`
    width: 24rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #666;
    border: solid 1px black;
    padding: 1rem;
`;