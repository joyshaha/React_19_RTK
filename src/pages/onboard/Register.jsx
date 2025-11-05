import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import simple from "../../assets/simple.jpg";
import { useRegisterMutation } from "../../features/auth/authApi";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");

  const [register, { data, isLoading, isSuccess, isError, error: registerError }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !username || !email || !password || !role) {
      setError("All fields are required");
    } else {
      register({ firstName, lastName, username, email, password, role });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("data", data);
      navigate("/");
    } else if (isError) {
      console.log("error", registerError);
    }
  }, [isSuccess, isError, navigate, data, registerError]);

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
              name="username"
              autoComplete="username"
              type="text"
              placeholder="Username"
              value={username}
              className="w-full mb-4 p-2 border border-gray-200 rounded"
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <label htmlFor="role" className="w-full mb-4 p-2 border border-gray-200 rounded">
              <p className="text-gray-500">Role: <span className="text-red-500 font-semibold">*</span></p>
              <select
                name="role"
                id="role"
                className="w-full mb-4 p-2 border border-gray-200 rounded"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              <p className="text-gray-500 font-normal text-sm">You need to select a role</p>
            </label>
          </div>
          <div>
            {error && <p className="text-red-500 text-center mb-2">{error}</p>}
            {registerError && <p className="text-red-500 text-center mb-2">{registerError.data.message}</p>}
            {isLoading && (
              <p className="text-blue-500 text-center mb-2">Loading...</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="w-full bg-amber-300 text-gray-500 py-2 rounded cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
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
