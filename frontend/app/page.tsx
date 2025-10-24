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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Logging in as ${activeRole}:`, { email, password });
    alert(`Logging in as ${activeRole} with email: ${email}`);
    // TODO: Integrate with your backend login API (e.g., POST to /api/auth/login)
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Signing up as ${activeRole}:`, {
      fullName,
      email,
      password,
    });
    alert(`Signing up as ${activeRole} with name: ${fullName}, email: ${email}`);
    // TODO: Integrate with your backend signup API (e.g., POST to /api/auth/signup)
  };

  // --- Helper to reset form fields when toggling ---
  const resetFormFields = () => {
    setEmail("");
    setPassword("");
    setFullName("");
  };

  // --- Render Logic for UI ---

  // Dynamically set the main title based on view
  const mainTitle = isLoginView ? "Login to Your Account" : "Create Your Account";
  
  // Dynamically set the welcome message based on view
  const welcomeMessage = isLoginView ? "Welcome Back" : "Get Started";

  // Dynamically set the form title based on role and view
  let formTitle = "";
  if (isLoginView) {
    formTitle = activeRole === "student" ? "Sign In as Student" : "Sign In as Professor";
  } else {
    formTitle = activeRole === "student" ? "Sign Up as Student" : "Sign Up as Professor";
  }

  return (
    // Main container for the two-column layout
    <div className="min-h-screen flex">
      {/* Left Column - Green background */}
      <div className="hidden lg:flex lg:w-1/2 bg-emerald-800 text-white items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">QUANTUM U</h1>
          <h2 className="text-2xl font-semibold mb-2">{welcomeMessage}</h2>
          <p className="text-lg px-8">
            {isLoginView
              ? "Sign in to create, discover and connect with the global community"
              : "Sign up to create, discover and connect with the global community"}
          </p>
        </div>
      </div>

      {/* Right Column - White background with form */}
      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            {mainTitle}
          </h2>

          {/* Role Selection Toggles */}
          <div className="flex w-full rounded-md bg-gray-100 p-1 mb-6">
            <button
              onClick={() => {
                setActiveRole("student");
                resetFormFields();
              }}
              className={`w-1/2 py-2.5 rounded-md text-lg font-medium transition-all duration-300 ${
                activeRole === "student"
                  ? "bg-emerald-700 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Student
            </button>
            <button
              onClick={() => {
                setActiveRole("professor");
                resetFormFields();
              }}
              className={`w-1/2 py-2.5 rounded-md text-lg font-medium transition-all duration-300 ${
                activeRole === "professor"
                  ? "bg-emerald-700 text-white shadow"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              Professor
            </button>
          </div>

          <h3 className="text-2xl font-medium text-gray-700 mb-6 text-center">
            {formTitle}
          </h3>

          <form onSubmit={isLoginView ? handleLogin : handleSignup} className="space-y-5">
            {/* Full Name field (only for Sign Up) */}
            {!isLoginView && (
              <div>
                <label htmlFor="fullName" className="block text-lg text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-lg"
                />
              </div>
            )}

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-lg"
              />
            </div>

            {/* Password field */}
            <div>
              <label htmlFor="password" className="block text-lg text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-lg"
              />
              {/* Forgot Password link (only for Sign In) */}
              {isLoginView && (
                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-emerald-700 hover:underline text-base"
                  >
                    Forgot password?
                  </a>
                </div>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-md bg-emerald-800 text-white text-xl font-semibold hover:bg-emerald-700 transition-colors duration-300"
            >
              {isLoginView ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Toggle between Sign In / Sign Up */}
          <div className="text-center mt-6">
            {isLoginView ? (
              <p className="text-lg text-gray-600">
                Don't have an account?{" "}
                <button
                  onClick={() => {
                    setIsLoginView(false);
                    resetFormFields();
                  }}
                  className="text-emerald-700 hover:underline font-medium focus:outline-none"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p className="text-lg text-gray-600">
                Already have a account?{" "}
                <button
                  onClick={() => {
                    setIsLoginView(true);
                    resetFormFields();
                  }}
                  className="text-emerald-700 hover:underline font-medium focus:outline-none"
                >
                  Sign In
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

