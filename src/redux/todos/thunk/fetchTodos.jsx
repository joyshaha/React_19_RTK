import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();

    dispatch(loaded(todos));
};

export default fetchTodos;