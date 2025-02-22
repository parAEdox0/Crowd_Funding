import React, { useState } from "react";

const LoginSignup = ({ isOpen, onClose, isCreator: initialCreator }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isCreator, setIsCreator] = useState(initialCreator);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null; // Hide if not open

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `${isLogin ? "Login" : "Signup"} as ${isCreator ? "Creator" : "Backer"}`,
      formData
    );
    setFormData({ name: "", email: "", password: "" });
    onClose(); // Close modal on submit
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"} as {isCreator ? "Creator" : "Backer"}
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setIsCreator(false)}
            className={`px-4 py-2 border border-gray-300 rounded-md font-medium text-sm ${
              !isCreator ? "bg-[#FFD37A] text-gray-800" : "bg-white text-black"
            }`}
          >
            Backer
          </button>
          <button
            onClick={() => setIsCreator(true)}
            className={`px-4 py-2 border border-gray-300 rounded-md font-medium text-sm ${
              isCreator ? "bg-[#FFD37A] text-gray-800" : "bg-white text-black"
            }`}
          >
            Creator
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD37A]"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD37A]"
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD37A]"
          />
          <button
            type="submit"
            className="bg-[#FFD37A] p-3 rounded-md font-semibold text-gray-800 hover:bg-[#ffca5a] transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          {isLogin ? "Need an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
