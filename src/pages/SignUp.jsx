import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../features/auth/authSlice";
import simple from "../assets/simple.jpg";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setError("All fields are required");
    } else {
      setError("");
      setLoading(true);
      dispatch(signUp({ firstName, lastName, email, password }));
      setLoading(false);
      navigate("/");
    }
    // alert("Account created! Please sign in.");
    // navigate("/signin");
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white-500">
      <div>
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
            <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          </div>
          <div className="flex md:flex-row flex-col justify-between items-center gap-2">
            <input
              name="firstName"
              autoComplete="given-name"
              type="text"
              placeholder="First Name"
              value={firstName}
              className="w-full mb-4 p-2 border border-gray-200 rounded"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              name="lastName"
              autoComplete="family-name"
              type="text"
              placeholder="Last Name"
              value={lastName}
              className="w-full mb-4 p-2 border border-gray-200 rounded"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <input
              name="email"
              autoComplete="email"
              type="email"
              placeholder="Email"
              value={email}
              className="w-full mb-4 p-2 border border-gray-200 rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              type="password"
              autoComplete="password"
              placeholder="Password"
              value={password}
              className="w-full mb-4 p-2 border border-gray-200 rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            {error && <p className="text-red-500 text-center mb-2">{error}</p>}
            {loading && (
              <p className="text-blue-500 text-center mb-2">Loading...</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="w-full bg-amber-300 text-gray-500 py-2 rounded cursor-pointer"
              disabled={loading}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex md:flex-row flex-col gap-2 justify-center items-center mt-4">
        <p className="text-gray-500">Already have an account? </p>
        <div>
          <Link
            to="/signin"
            className="w-full text-blue-500 hover:text-blue-700 p-2"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
