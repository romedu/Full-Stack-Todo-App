import qwest from "qwest";

qwest.base = "/api/todo";

export async function getTodos(){
   return qwest.get("/")
            .then(xhr => JSON.parse(xhr.response))
            .catch(error => console.log(error));
}

export async function createTodo(name){
   return qwest.post("/", {name})
            .catch(error => console.log(error));
}

export async function updateTodo(id, value){
   return qwest.put(`/${id}`, {completed: value})
            .catch(error => console.log(error));
}

export async function deleteTodo(id){
   return qwest.delete(`/${id}`)
            .catch(error => console.log(error));
}