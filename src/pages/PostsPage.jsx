import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import fetchTodos from "../redux/todos/thunk/fetchTodos";
import addTodo from "../redux/todos/thunk/addTodo";
import deleteTodo from "../redux/todos/thunk/deleteTodo";
import { fetchPosts } from "../features/posts/postSlice";

function PostsPage() {
  const todos = useSelector((state) => state.todos);
  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchTodos());
  //   }, [dispatch]);

  //   useEffect(() => {
  //     dispatch(fetchPosts());
  //   }, [dispatch]);
  const fetchPostsHandler = (e) => {
    e.preventDefault();
    dispatch(fetchPosts());
  };

  return (
    <div>
      <div className="flex flex-col gap-4 mx-auto">
        <h1 className="text-xl font-semibold text-balance inline-block">
          Redux Thunk - Not Working - (createStore is deprecated)
        </h1>
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Todos</h1>
          {!todos ? (
            <h1 className="text-gray-500">No todos found</h1>
          ) : (
            <div>
              <input type="text" placeholder="Add a new todo" />
              <button
                className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
                onClick={() => dispatch(addTodo("Buy a new car"))}
              >
                Add
              </button>
            </div>
          )}
          <ul>
            {todos?.map((todo) => (
              <li key={todo.id}>
                {todo.title} -
                <div>
                  <button
                    className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Posts</h1>
          <div className="flex gap-2">
            <button
              className="bg-teal-500 hover:bg-teal-800 text-white p-2 rounded-md cursor-pointer"
              onClick={fetchPostsHandler}
            >
              Fetch Posts
            </button>
            <p className="text-gray-500 text-sm self-center">
              Click the button to fetch posts
            </p>
          </div>
          <div className="mt-4">
            {posts.loading && <h1>Loading...</h1>}
            {posts.error && <h1>Error: {posts.error}</h1>}
            {posts.posts.length === 0 && (
              <h1 className="text-gray-500">No posts found</h1>
            )}
            {posts.posts.length > 0 && (
              <ul>
                {posts.posts.map((post) => (
                  <li key={post.id}>
                    {post?.id} - {post?.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsPage;
