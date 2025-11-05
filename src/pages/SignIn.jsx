import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../features/auth/authSlice";
import simple from "../assets/simple.jpg";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
    } else {
      setError("");
      setLoading(true);
      dispatch(signIn({ email, password }));
      setLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white-500">
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p className="text-blue-500">Loading...</p>}
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
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            autoComplete="email"
            className="w-full mb-3 p-2 border border-gray-200 rounded"
            onChange={(e) => setEmail(e.target.value)}
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
          <button className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer" disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
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
