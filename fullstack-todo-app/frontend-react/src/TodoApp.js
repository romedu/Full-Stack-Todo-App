import React, {Component} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import qwest from "qwest";

qwest.base = "/api/todo";

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
   
   createTodo(){
      qwest.post("/", {name: this.state.formValue})
      .then(newTodo => this.refreshTodos())
      .catch(error => console.log(error));
   }
   
   updateTodo(id, value){
      qwest.put(`/${id}`, {completed: value})
      .then(editedTodo => this.refreshTodos())
      .catch(error => console.log(error));
   }
   
   deleteTodo(id){
      qwest.delete(`/${id}`)
      .then(deletedTodo => this.refreshTodos())
      .catch(error => console.log(error));
   }
   
   refreshTodos(){
      qwest.get("/")
      .then(xhr => JSON.parse(xhr.response))
      .then(todos => {this.setState({todos, formValue: ""})})
      .catch(error => console.log(error));
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