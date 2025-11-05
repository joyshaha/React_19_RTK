import { deleted } from "../actions";

const deleteTodo = (todoId) => {
    return async (dispatch) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: "DELETE",
        });
        if (response.ok) {
            dispatch(deleted(todoId));
        }
    }
};

export default deleteTodo;