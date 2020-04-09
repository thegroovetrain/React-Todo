import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {

    super();
    this.state = {
      todos: []
    }
    this.addTask=this.addTask.bind(this);
    this.toggleCompleted=this.toggleCompleted.bind(this);
    this.clearCompleted=this.clearCompleted.bind(this);

  }

  addTask(event, task) {

    event.preventDefault();
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({todos: [...this.state.todos, newTask]});

  }

  toggleCompleted(event, taskid) {

    event.preventDefault();
    const update = this.state.todos.map(a => {
      return {
        task: a.task,
        id: a.id,
        completed: a.id == taskid ? !a.completed : a.completed
      }
    });
    this.setState({todos: update});

  }

  clearCompleted(event) {
    
    event.preventDefault();
    this.setState({todos: this.state.todos.filter(a => a.completed == false)});
  
  }
  
  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todos={this.state.todos} 
          addTask={this.addTask} 
          toggleCompleted={this.toggleCompleted} 
          clearCompleted={this.clearCompleted} 
        />
      </div>
    );

  }

}

export default App;
