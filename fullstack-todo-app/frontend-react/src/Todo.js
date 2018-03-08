import React, {Component} from "react";
import "./App.css";

class Todo extends Component {
   
   completeTodo = () => this.props.update(this.props.id, !this.props.completed);
   deleteTodo = e => {
      e.stopPropagation();
      this.props.delete(this.props.id);
   }
   
   render(){
      let {name, completed} = this.props;
      
      return(
         <li onClick={this.completeTodo} className={completed ? "completed" : null} > 
            {name}
            <span style={{color: "red"}} onClick={this.deleteTodo}> X </span>
         </li>   
      );
   }
}

export default Todo;