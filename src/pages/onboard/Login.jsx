import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import simple from "../../assets/simple.jpg";
import { useLoginMutation } from "../../features/auth/authApi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login, { data, isLoading, isSuccess, isError, error: loginError }] =
    useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    const resetForm = () => {
      setUsername("");
      setPassword("");
      setError("");
    };
    if (isSuccess && !isError && !error && !loginError && data?.token) {
      console.log("data", data);
      toast.success("Login successful!");
      navigate("/");
    } else if (isError) {
      console.log("error", loginError);
      const errorMessage =
        loginError?.data?.message || "Login failed. Please try again.";
      setError(errorMessage);
      toast.error(errorMessage);
      resetForm();
    }
  }, [isSuccess, isError, navigate, data, loginError, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Email and password are required");
    } else {
      setError("");
      login({ username, password });
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white-500">
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        >
          <div className="flex sm:flex-col lg:flex-col md:flex-row gap-2 justify-center items-center mb-4">
            <img
              src={simple}
              alt="logo"
              className="w-32 h-16 object-cover rounded-md"
            />
            <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
          </div>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            autoComplete="username"
            className="w-full mb-3 p-2 border border-gray-200 rounded"
            onChange={(e) => setUsername(e.target.value)}
            // required
          />
          <input
            name="password"
            autoComplete="password"
            type="password"
            placeholder="Password"
            value={password}
            className="w-full mb-4 p-2 border border-gray-200 rounded"
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
          <div className="mb-4 text-center text-sm text-red-500 font-normal flex justify-center items-center gap-2">
            {error && <p className="text-red-500">{error}</p>}
            {isError && <p className="text-red-500">{loginError.data.message}</p>}
            {isLoading && <p className="text-blue-500">Loading...</p>}
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
      <div className="flex md:flex-row flex-col gap-2 justify-center items-center mt-4">
        <p className="text-gray-500">Don't have an account? </p>
        <div>
          <Link
            to="/signup"
            className="w-full text-blue-500 hover:text-blue-700 p-2"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
