import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";
import {
  decrementByValue,
  incrementByValue,
} from "../features/counter/dynamicCounterSlice";

function About() {
  const username = useSelector((state) => state.auth.username);
  const counter = useSelector((state) => state.counter.counter);
  const dynamicCounter = useSelector((state) => state.dynamicCounter.counter);

  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    e.preventDefault();
    dispatch(increment());
  };
  const handleDecrement = (e) => {
    e.preventDefault();
    dispatch(decrement());
  };

  const handleIncrementByValue = (e) => {
    e.preventDefault();
    dispatch(incrementByValue(5));
  };
  const handleDecrementByValue = (e) => {
    e.preventDefault();
    dispatch(decrementByValue(2));
  };

  const totalCount = counter + dynamicCounter;

  return (
    <>
      <div className="mt-2 mb-12">
        <h2 className="text-xl font-semibold mb-2">Welcome, {username}!</h2>
        <p className="text-gray-500">This is your protected about page.</p>
      </div>
      <div className="w-full mx-auto p-4 flex md:flex-row flex-col justify-center items-center gap-4">
        <div className="mx-auto p-4 border border-gray-100 shadow-lg rounded-md flex flex-col gap-4">
          <p className="text-gray-500 text-center font-semibold text-pretty text-xl">
            Counter: {counter}
          </p>
          <div className="flex gap-4">
            <button
              className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
              onClick={handleDecrement}
            >
              Decrement
            </button>
          </div>
        </div>
        <div className="mx-auto p-4 border border-gray-100 shadow-md rounded-[100%] flex flex-col justify-center items-center gap-4">
          <p className="text-xl text-gray-600 text-center font-semibold text-pretty">
            Total Count: {totalCount}
          </p>
        </div>
        <div className="mx-auto p-4 border border-gray-100 shadow-lg rounded-md flex flex-col gap-4">
          <p className="text-gray-500 text-center font-semibold text-pretty text-xl">
            Counter: {dynamicCounter}
          </p>
          <div className="flex gap-4">
            <button
              className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
              onClick={handleIncrementByValue}
            >
              +5 (Increment By Value)
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded-md cursor-pointer"
              onClick={handleDecrementByValue}
            >
              -2 (Decrement By Value)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
