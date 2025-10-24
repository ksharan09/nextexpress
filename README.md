# nextexpress

Course Management System (Next.js + Express)

This project is a full-stack course management platform. It includes a Next.js frontend and an Express.js backend.

Tech Stack

Frontend: Next.js, React, TypeScript, Tailwind CSS

Backend: Express.js, Node.js

 # Project Structure

This is a monorepo containing both the frontend and backend applications.

nextexpress/
├── backend/     # Express.js API server
└── frontend/    # Next.js web application


 Getting Started

To run this project, you will need two terminals open at the same time: one for the backend and one for the frontend.

1. Run the Backend (Terminal 1)

# Go into the backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
# (You may need to create this "dev" script in your backend package.json)
npm run dev
# Or run the main file directly (e.g., node index.js)


The backend server will be running on http://localhost:5000 (or your configured port).

2. Run the Frontend (Terminal 2)

# Go into the frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend dev server
npm run dev


The frontend application will be running on http://localhost:3000.

# ✨ Current Status & Features

The project's work is divided into branches.

main Branch

Contains the initial project setup and boilerplate for the Next.js (frontend) and Express.js (backend) applications.

 # feature/auth Branch

This branch contains the complete Authentication UI for the platform.

Role-Based Forms: Includes a unified interface for both Login and Sign Up.

Role Selection: Users can toggle between "Student" and "Professor" roles, and the form title and submit logic will update accordingly.

Password Recovery: A "Forgot password?" link is included on the login view.

Styling: Fully responsive and custom-styled using Tailwind CSS, featuring a modern, centered-card design.

 # feature/landing-page Branch

This branch contains the complete, professional public-facing website for the "Course Management System".

This is a full, multi-section page that includes:

Colorful Navigation Bar: A sticky, gradient-background navbar with centered links and "Sign In" / "Sign Up" buttons.

Hero Section: A large introductory banner with a "Get Started" call-to-action.

Features Section: A 6-card grid highlighting key features (e.g., "Course Tracking," "Instructor Dashboard").

About Section: A brief description of the platform's mission.

FAQ Section: A collapsible accordion for common questions.

Contact Form: A functional contact form with Name, Email, and Message fields.

Colorful Footer: A matching gradient footer with quick links and social media icons.
