"use client";

import { useState } from "react";

export default function AuthPage() {
  // 'student' or 'professor' - Determines which role's form is active
  const [activeRole, setActiveRole] = useState("student");
  // true for login, false for signup - Determines if login or signup form is shown
  const [isLoginView, setIsLoginView] = useState(true);

  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // For signup

  // --- Form Submission Handlers ---

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Logging in as ${activeRole}:`, { email, password });
    alert(`Logging in as ${activeRole} with email: ${email}`);
    // TODO: Integrate with your backend login API based on `activeRole`
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Signing up as ${activeRole}:`, { fullName, email, password });
    alert(`Signing up as ${activeRole} with name: ${fullName}, email: ${email}`);
    // TODO: Integrate with your backend signup API based on `activeRole`
  };

  // --- Reset form fields when changing view or role ---
  const resetFormFields = () => {
    setEmail("");
    setPassword("");
    setFullName("");
  };

  // --- Render Logic for UI ---

  // Decide form title
  const formTitle = isLoginView
    ? `Sign In as ${activeRole === "student" ? "Student" : "Professor"}`
    : `Sign Up as ${activeRole === "student" ? "Student" : "Professor"}`;

  // Decide main action button text
  const mainButtonText = isLoginView ? "Sign In" : "Sign Up";

  return (
    // Background gradient for a fresh look
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 via-blue-100 to-green-100 p-4">
      
      {/* --- Main Auth Card --- */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6 border border-gray-200">
        
        {/* --- Header & Role Selection --- */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">CourseHub</h1>
          <p className="text-lg text-gray-600 mb-6">
            {isLoginView ? "Access your learning journey" : "Join our community"}
          </p>

          {/* Role selection buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => { setActiveRole("student"); resetFormFields(); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeRole === "student"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Student
            </button>
            <button
              onClick={() => { setActiveRole("professor"); resetFormFields(); }}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${activeRole === "professor"
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Professor
            </button>
          </div>

          <h2 className="text-2xl font-bold text-gray-700">{formTitle}</h2>
        </div>

        {/* --- Form Section --- */}
        <form onSubmit={isLoginView ? handleLogin : handleSignup} className="space-y-5">
          {/* Full Name field (only for Sign Up) */}
          {!isLoginView && (
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              />
            </div>
          )}

          {/* Email field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Password field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className={`w-full py-2.5 rounded-md text-white text-lg font-semibold transition-all duration-300 shadow-lg
              ${isLoginView
                ? (activeRole === "student" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700")
                : (activeRole === "student" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700")
              }`}
          >
            {mainButtonText}
          </button>
        </form>

        {/* --- Footer Links --- */}
        <div className="text-center text-sm mt-6">
          {isLoginView && ( // Only show Forgot Password on Login view
            <a href="#" className="text-gray-500 hover:text-blue-600 hover:underline transition-colors block mb-2">
              Forgot password?
            </a>
          )}
          
          <button
            onClick={() => { setIsLoginView(!isLoginView); resetFormFields(); }}
            className="text-gray-600 hover:text-blue-600 hover:underline transition-colors focus:outline-none"
          >
            {isLoginView ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}