import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login logic
    if (username === "admin" && password === "password") {
      onLogin(true); // Admin login
      navigate("/appointments"); // Redirect to appointments
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-20 p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
