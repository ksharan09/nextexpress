"use client";

import { useState } from "react";

export default function AuthPage() {
  // --- Core State ---
  const [activeRole, setActiveRole] = useState("student"); // 'student' or 'professor'
  const [isLoginView, setIsLoginView] = useState(true); // true for login, false for signup

  // --- Form Field State ---
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // For signup

  // --- API State ---
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; content: string } | null>(null);

  // --- Backend API URL ---
  // Assuming your backend is running on port 5000
  const API_URL = "http://localhost:5000/api/auth";

  // --- Form Submission Handlers ---

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    console.log(`Logging in as ${activeRole}:`, { email, password });

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role: activeRole }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', content: 'Login successful! Redirecting...' });
        // In a real app, you would save the token (data.token) and redirect.
        // For now, just show a success message.
        console.log("Login Success:", data);
        // alert("Login successful!"); // We now use the message state
      } else {
        setMessage({ type: 'error', content: data.message || 'Invalid credentials. Please try again.' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage({ type: 'error', content: 'Could not connect to the server. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    console.log(`Signing up as ${activeRole}:`, {
      fullName,
      email,
      password,
    });

     try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: fullName, email, password, role: activeRole }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', content: 'Signup successful! Please log in.' });
        setIsLoginView(true); // Switch to login view
        resetFormFields();
      } else {
        setMessage({ type: 'error', content: data.message || 'Could not create account. Please try again.' });
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessage({ type: 'error', content: 'Could not connect to the server. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  // --- Helper to reset form fields when toggling ---
  const resetFormFields = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setMessage(null); // Also clear messages
  };

  // --- Render Logic for UI ---
  const mainTitle = isLoginView ? "Login to Your Account" : "Create Your Account";
  const welcomeMessage = isLoginView ? "Welcome Back" : "Get Started";

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
            {/* --- API Message Display --- */}
            {message && (
              <div
                className={`w-full p-4 rounded-md text-center font-medium ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {message.content}
              </div>
            )}

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
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-lg disabled:bg-gray-50"
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
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-lg disabled:bg-gray-50"
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
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500 text-lg disabled:bg-gray-50"
              />
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
              disabled={isLoading}
              className="w-full py-3.5 rounded-md bg-emerald-800 text-white text-xl font-semibold hover:bg-emerald-700 transition-colors duration-300 disabled:bg-emerald-900 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading
                ? (isLoginView ? 'Signing In...' : 'Signing Up...')
                : (isLoginView ? "Sign In" : "Sign Up")}
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
                  disabled={isLoading}
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p className="text-lg text-gray-600">
                Already have an account?{" "}
                <button
                  onClick={() => {
                    setIsLoginView(true);
                    resetFormFields();
                  }}
                  className="text-emerald-700 hover:underline font-medium focus:outline-none"
                  disabled={isLoading}
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