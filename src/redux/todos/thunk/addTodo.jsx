import { added } from "../actions";

const addTodo = async (dispatch, todoText) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({ title: todoText, completed: false }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const todo = await response.json();
  dispatch(added(todo.title));
};

export default addTodo;
