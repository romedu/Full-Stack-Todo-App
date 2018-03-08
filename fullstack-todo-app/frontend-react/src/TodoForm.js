import React, {Component} from "react";

class TodoForm extends Component {
   
   handleChange = (e) => {
      this.props.update(e.target.value);
   }
   
   handleSubmit = (e) => {
      e.preventDefault();
      this.props.submit();
   };
   
   render(){
      return (
         <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.props.value} placeholder="Type in your new Todo" autoComplete="false" onChange={this.handleChange} />
            <button type="submit"> Submit </button>
         </form>
      );
   }
}

export default TodoForm;