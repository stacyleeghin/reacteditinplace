import React, { Component } from 'react';
import NewTodoForm from'./NewTodoForm';
import Todo from'./Todo';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      todos:[
        { id:1,
          content:'water plants',
          priority:'urgent'
        },
        { id:2,
          content:'eat plants',
          priority:'low'
        },
        { id:3,
          content:'plants trees',
          priority:'immediantly'
        },
      ]
    }

  }

  addTodo = (data)=>{

    var newTodo = {
      id: Date.now(),
      ...data
    }

    var newList = [newTodo,...this.state.todos]
    this.setState({
      todos:newList
  })
  }
  removeTodo = ()=>{
    
  }
  updateTodo = ()=>{
    
  }
  render(){

    return (
      <div className="wrap">
        <div className="container">
          <div className="todos">
            {
              this.state.todos.map((todo)=>{

                var todoProps = {
                  key: todo.id,
                  ...todo
                }

                return (
                 
                  <Todo {...todoProps} />
                )
              })
            }
         

            <NewTodoForm addTodo={this.addTodo}/>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
