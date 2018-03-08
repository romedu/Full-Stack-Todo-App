import React, {Component} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import * as apiCall from "./apiCalls";

class TodoApp extends Component {
   constructor(props){
      super(props);
      this.state = {
         formValue: "",
         todos: []
      };
      this.updateForm   = this.updateForm.bind(this);
      this.createTodo   = this.createTodo.bind(this);
      this.refreshTodos = this.refreshTodos.bind(this);
      this.updateTodo   = this.updateTodo.bind(this);
      this.deleteTodo   = this.deleteTodo.bind(this);
   }
   
   componentDidMount(){
      this.refreshTodos();
   }
   
   updateForm(formValue){
      this.setState({formValue});
   }
   
   async createTodo(){
      await apiCall.createTodo(this.state.formValue);
      this.refreshTodos();
   }
   
   async updateTodo(id, value){
      await apiCall.updateTodo(id, value);
      this.refreshTodos();
   }
   
   async deleteTodo(id){
      await apiCall.deleteTodo(id);
      this.refreshTodos();
      
   }
   
   async refreshTodos(){
      let todos = await apiCall.getTodos();
      this.setState({todos, formValue: ""});
   }
   
   render(){
      let {todos, formValue} = this.state,
          display = <div> Loading.... </div>;
      
      if(todos.length){
         display = todos.map(todo => {
            return <Todo name={todo.name} completed={todo.completed} key={todo._id} id={todo._id} update={this.updateTodo} delete={this.deleteTodo} />;
         });
      }
      
      return (
         <div>
            <h1> FullStack Todo App </h1>
            <TodoForm value={formValue} update={this.updateForm} submit={this.createTodo}/>
            <ul>
               {display}
            </ul>
         </div>   
      );
   }
}

export default TodoApp;