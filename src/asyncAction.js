import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

// initial state
const initialState = {
    loading: false,
    posts: [],
    error: null,
};

const fetchPostsRequest = () => {
    return {
        type: "FETCH_POSTS_REQUEST",
    };
};

const fetchPostsSuccess = (posts) => {
    return {
        type: "FETCH_POSTS_SUCCESS",
        payload: posts,
    };
};

const fetchPostsFailure = (error) => {
    return {
        type: "FETCH_POSTS_FAILURE",
        payload: error,
    };
};

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_POSTS_REQUEST":
            return { ...state, loading: true };
        case "FETCH_POSTS_SUCCESS":
            return { ...state, loading: false, posts: action.payload };
        case "FETCH_POSTS_FAILURE":
            return { ...state, loading: false, error: action.payload.message, posts: [] };
        default:
            return state;
    }
};

// thunk
const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostsRequest());
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
            const posts = await response.json();
            dispatch(fetchPostsSuccess(posts));
        }
        catch (error) {
            dispatch(fetchPostsFailure(error));
        }
    }
}

// create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// subscribe to store
store.subscribe(() => {
    console.log("Updated state: ", store.getState());
});

// dispatch action
store.dispatch(fetchPosts());