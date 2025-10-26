"use client";

import { useState, useRef, useEffect } from "react";

// --- SVG Icon Components ---
// (Keep all the SVG icon components from the previous version here)
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Updated FeatureIcon to use teal
const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700 text-white shadow-lg">
    {children}
  </div>
);

const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

const CourseTrackingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
    />
  </svg>
);

const DashboardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 8.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6A2.25 2.25 0 0115.75 3.75h2.25A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75A2.25 2.25 0 0115.75 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    />
  </svg>
);

const AnalyticsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
    />
  </svg>
);

const GradingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
    />
  </svg>
);

const NotificationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
    />
  </svg>
);

const CloudIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
    />
  </svg>
);

// --- User Dropdown Icon ---
const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);
const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

// --- Simple Dropdown Component ---
const DropdownMenu = ({
  trigger,
  children,
  title, // Added title prop for the dropdown
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: string; // Optional title
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        {trigger}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          {title && <div className="px-4 py-2 text-xs font-semibold uppercase text-gray-500">{title}</div>}
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownMenuItem = ({
  children,
  onClick,
  highlighted = false, // Added highlighted prop
}: {
  children: React.ReactNode;
  onClick?: () => void;
  highlighted?: boolean;
}) => (
  <button
    onClick={onClick}
    className={`block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 ${
      highlighted ? "bg-gray-100 font-semibold" : "" // Apply highlight style
    }`}
  >
    {children}
  </button>
);


// --- Main Page Component ---

// Define the type for the Professor Dashboard view state
type ProfessorView = 'myCourses' | 'addCourse' | 'analytics';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'professor' | null>(null); // Track user role
  const [showRoleSelection, setShowRoleSelection] = useState(false); // To show role selection modal
  const [currentView, setCurrentView] = useState<'dashboard' | 'editProfile' | 'landing'>('landing'); // Manage main views
  
  // NEW: State for Professor Dashboard sub-views, moved to App component
  const [currentProfView, setCurrentProfView] = useState<ProfessorView>('myCourses');


  // Simulate login
  const handleLogin = (role: 'student' | 'professor') => {
    console.log(`Simulating Login for ${role}...`);
    setIsLoggedIn(true);
    setUserRole(role);
    setCurrentView('dashboard'); // Go to dashboard after login
    // Reset professor view to default when logging in
    if (role === 'professor') {
      setCurrentProfView('myCourses');
    }
    setShowRoleSelection(false);
  };

  // Simulate logout
  const handleLogout = () => {
    console.log("Simulating Logout...");
    setIsLoggedIn(false);
    setUserRole(null);
    setCurrentView('landing');
  };

  // --- Student Profile Edit Component ---
  const StudentProfileEdit = () => {
    const [profileData, setProfileData] = useState({
      name: "Rahul",
      email: "rahul123@gmail.com",
      studentId: "S12345",
      preferredLearningStyle: "Visual",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Student Profile Updated:", profileData);
      alert("Student profile updated successfully!");
      setCurrentView('dashboard'); // Go back to dashboard after update
    };

    return (
      <main className="flex-grow bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Edit Student Profile</h1>
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">Student ID</label>
                <input
                  type="text"
                  name="studentId"
                  id="studentId"
                  value={profileData.studentId}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="preferredLearningStyle" className="block text-sm font-medium text-gray-700">Preferred Learning Style</label>
                <select
                  name="preferredLearningStyle"
                  id="preferredLearningStyle"
                  value={profileData.preferredLearningStyle}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                >
                  <option value="Visual">Visual</option>
                  <option value="Auditory">Auditory</option>
                  <option value="Kinesthetic">Kinesthetic</option>
                  <option value="Reading/Writing">Reading/Writing</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setCurrentView('dashboard')}
                  className="rounded-full border border-gray-300 px-6 py-2 text-base font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-teal-600 px-6 py-2 text-base font-semibold text-white shadow-md transition-colors hover:bg-teal-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  };

  // --- Professor Profile Edit Component ---
  const ProfessorProfileEdit = () => {
    const [profileData, setProfileData] = useState({
      name: "Dr. Sachin Kumar",
      email: "sachin.k@university.edu",
      department: "Computer Science",
      researchInterests: "AI, Machine Learning, Data Privacy",
      bio: "Dr. Sachin Kumar is a dedicated educator and researcher with over 8 years of experience in teaching and academic development. Their work focuses on advancing knowledge in Computer Science, Artificial Intelligence, or Data Analytics , with a strong passion for mentoring students and fostering innovation.",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setProfileData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Professor Profile Updated:", profileData);
      alert("Professor profile updated successfully!");
      setCurrentView('dashboard'); // Go back to dashboard after update
    };

    return (
      <main className="flex-grow bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Edit Professor Profile</h1>
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={profileData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                <input
                  type="text"
                  name="department"
                  id="department"
                  value={profileData.department}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="researchInterests" className="block text-sm font-medium text-gray-700">Research Interests</label>
                <textarea
                  name="researchInterests"
                  id="researchInterests"
                  rows={3}
                  value={profileData.researchInterests}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                ></textarea>
              </div>
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Biography</label>
                <textarea
                  name="bio"
                  id="bio"
                  rows={5}
                  value={profileData.bio}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setCurrentView('dashboard')}
                  className="rounded-full border border-gray-300 px-6 py-2 text-base font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-teal-600 px-6 py-2 text-base font-semibold text-white shadow-md transition-colors hover:bg-teal-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  };

  // --- Stats Section Component ---
  const StatsSection = () => {
    const stats = [
      { count: "200+", label: "Courses" },
      { count: "50+", label: "Professors" },
      { count: "900+", label: "Students", highlight: true }, // Highlight this one
      { count: "10+", label: "AI Avatar" },
      { count: "9+", label: "different Voices" },
      { count: "12+", label: "Languages" },
    ];

    return (
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Achievements
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Numbers that speak for themselves, showcasing our commitment to excellence.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center rounded-xl p-6 shadow-sm transition-all duration-300 ${
                  stat.highlight ? "bg-teal-950 text-white" : "bg-gray-50 text-gray-900 hover:bg-gray-100"
                }`}
              >
                <p className="text-5xl font-extrabold">{stat.count}</p>
                <p className={`mt-2 text-lg font-medium ${stat.highlight ? "text-gray-300" : "text-gray-600"}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };


  // --- Landing Page Content Component ---
  const LandingPageContent = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });

    const animationStyle = `
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fadeInUp { animation: fadeInUp 0.5s ease-out forwards; }
      .delay-100 { animation-delay: 0.1s; }
      .delay-200 { animation-delay: 0.2s; }
      .delay-300 { animation-delay: 0.3s; }
      .delay-400 { animation-delay: 0.4s; }
      .delay-500 { animation-delay: 0.5s; }
    `;

    const features = [
      { name: "Course Tracking", description: "Monitor student progress and course milestones.", icon: <CourseTrackingIcon />, },
      { name: "Instructor Dashboard", description: "Manage courses, students, and content easily.", icon: <DashboardIcon />, },
      { name: "Student Analytics", description: "Gain insights into student performance.", icon: <AnalyticsIcon />, },
      { name: "Assignment & Grading", description: "Streamline the assignment and grading process.", icon: <GradingIcon />, },
      { name: "Real-time Notifications", description: "Keep everyone informed instantly.", icon: <NotificationIcon />, },
      { name: "Cloud-based Access", description: "Access securely from anywhere, any device.", icon: <CloudIcon />, },
    ];

    const programs = [
      { title: "Full-Stack Web Development", description: "Master React, Node.js, and Express.", image: "https://placehold.co/600x400/14B8A6/FFFFFF?text=Web+Dev", }, // Updated color
      { title: "Data Science & Machine Learning", description: "Learn Python, Pandas, and Scikit-learn.", image: "https://placehold.co/600x400/059669/FFFFFF?text=Data+Science", }, // Updated color
      { title: "UX/UI Design Fundamentals", description: "Go from idea to prototype with Figma.", image: "https://placehold.co/600x400/0D9488/FFFFFF?text=UX/UI+Design", }, // Updated color
    ];

    const blogPosts = [
      { title: "The Future of E-Learning", date: "Oct 24, 2025", excerpt: "Explore upcoming trends in online education...", image: "https://placehold.co/600x400/EC4899/FFFFFF?text=Blog+1", },
      { title: "10 Tips for Online Teaching", date: "Oct 20, 2025", excerpt: "Keep students engaged with proven strategies...", image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=Blog+2", },
      { title: "Why Student Analytics Matter", date: "Oct 15, 2025", excerpt: "Learn how data improves outcomes...", image: "https://placehold.co/600x400/6366F1/FFFFFF?text=Blog+3", },
    ];

    const faqs = [
      { question: "Is there a free trial?", answer: "Yes, we offer a 14-day free trial on Basic and Pro plans.", },
      { question: "Can I switch plans later?", answer: "Absolutely. Upgrade, downgrade, or cancel anytime.", },
      { question: "What support do you offer?", answer: "Email support on all plans. Pro/Enterprise get priority chat/phone.", },
      { question: "Is my data secure?", answer: "Security is our top priority. We use industry-standard encryption and backups.", },
    ];

    const handleFaqToggle = (index: number) => {
      setActiveFaq(activeFaq === index ? null : index);
    };
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Contact Form Submitted:", formData);
      alert("Message sent! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    };

    return (
      <>
        <style>{animationStyle}</style>
        <main className="flex-grow">
          {/* --- Hero Section (Updated Background) --- */}
          <section className="bg-gradient-to-b from-white to-teal-50 py-24 md:py-32 lg:py-40">
            <div className="container mx-auto px-4 text-center">
              <h1 className="animate-fadeInUp text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                The All-in-One Course Management System
              </h1>
              <p className="animate-fadeInUp delay-100 mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
                Build, manage, and scale your online education platform with one
                simple, powerful solution.
              </p>
              <div className="animate-fadeInUp delay-200 mt-10">
                <a
                  href="#programs"
                  className="rounded-full bg-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-teal-700 hover:shadow-xl" // Updated color
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </section>

          {/* --- Stats Section --- */}
          <StatsSection />

          {/* --- Features Section (Updated Accent) --- */}
          <section id="features" className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="text-base font-semibold uppercase tracking-wider text-teal-700"> {/* Updated color */}
                  Features
                </h2>
                <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Everything you need to succeed
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Our platform is packed with features designed to help
                  instructors and students thrive.
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                  <div
                    key={feature.name}
                    className="animate-fadeInUp rounded-lg bg-white p-6 opacity-0 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-4">
                      {/* FeatureIcon already updated to teal */}
                      <FeatureIcon>{feature.icon}</FeatureIcon>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- All Programs Section (Updated Background & Accent) --- */}
          <section id="programs" className="bg-teal-50 py-20 md:py-28"> {/* Updated background */}
            <div className="container mx-auto px-4">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                 <h2 className="text-base font-semibold uppercase tracking-wider text-teal-700"> {/* Updated color */}
                   Our Programs
                 </h2>
                 <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                   Explore Our Popular Courses
                 </p>
                 <p className="mt-4 text-lg text-gray-600">
                   Find the perfect program to advance your skills and career.
                 </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {programs.map((program, index) => (
                  <div
                    key={program.title}
                    className="animate-fadeInUp flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl opacity-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      className="h-56 w-full object-cover"
                      src={program.image}
                      alt={program.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x400/gray/white?text=Image+Error";
                      }}
                    />
                    <div className="flex-grow p-6">
                      <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                        {program.title}
                      </h3>
                      <p className="text-gray-600">
                        {program.description}
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <a href="#" className="font-semibold text-teal-600 transition-colors hover:text-teal-700"> {/* Updated color */}
                        Learn More &rarr;
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- Blogs Section (Updated Accent) --- */}
          <section id="blogs" className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                 <h2 className="text-base font-semibold uppercase tracking-wider text-teal-700"> {/* Updated color */}
                   From the Blog
                 </h2>
                 <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                   Latest News & Insights
                 </p>
                 <p className="mt-4 text-lg text-gray-600">
                   Stay updated with the latest in e-learning and platform updates.
                 </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post, index) => (
                  <div
                    key={post.title}
                    className="animate-fadeInUp flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl opacity-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <img
                      className="h-56 w-full object-cover"
                      src={post.image}
                      alt={post.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x400/gray/white?text=Image+Error";
                      }}
                    />
                    <div className="flex-grow p-6">
                      <p className="mb-2 text-sm font-medium text-gray-500">{post.date}</p>
                      <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="text-gray-600">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <a href="#" className="font-semibold text-teal-600 transition-colors hover:text-teal-700"> {/* Updated color */}
                        Read Full Post &rarr;
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- About Section (Updated Background) --- */}
          <section id="about" className="bg-teal-50 py-20 md:py-28"> {/* Updated background */}
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We believe that education should be accessible, engaging, and
                  effective for everyone. Our mission is to provide instructors
                  and institutions with the tools they need to create
                  world-class learning experiences. From small workshops to
                  university-wide programs, our Course Management System is built
                  to scale with your vision and support your students every step
                  of the way.
                </p>
              </div>
            </div>
          </section>

          {/* --- FAQ Section (Updated Accent) --- */}
          <section id="faq" className="bg-white py-20 md:py-28">
            <div className="container mx-auto max-w-4xl px-4">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 shadow-sm">
                {faqs.map((faq, index) => (
                  <div key={faq.question} className="p-6">
                    <button
                      onClick={() => handleFaqToggle(index)}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-4">
                        {activeFaq === index ? (
                          <MinusIcon className="h-6 w-6 text-teal-600" /> /* Updated color */
                        ) : (
                          <PlusIcon className="h-6 w-6 text-gray-500" />
                        )}
                      </span>
                    </button>
                    {activeFaq === index && (
                      <div className="animate-fadeInUp mt-4 pr-12 text-base text-gray-600 opacity-0">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- Contact Section (Updated Background & Button) --- */}
          <section id="contact" className="bg-teal-50 py-20 md:py-28"> {/* Updated background */}
            <div className="container mx-auto max-w-4xl px-4">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Have questions? We'd love to hear from you.
                </p>
              </div>

              <form
                onSubmit={handleFormSubmit}
                className="grid grid-cols-1 gap-y-6 rounded-2xl bg-white p-8 shadow-2xl"
              >
                <div>
                  <label htmlFor="name" className="sr-only"> Name </label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleFormChange} required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500" /* Updated focus */
                    placeholder="Full Name" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only"> Email </label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleFormChange} required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500" /* Updated focus */
                    placeholder="Email Address" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only"> Message </label>
                  <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleFormChange} required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500" /* Updated focus */
                    placeholder="Your Message"></textarea>
                </div>
                <div>
                  <button type="submit"
                    className="w-full rounded-full bg-teal-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"> {/* Updated color */}
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </>
    );
  };


  // --- Student Dashboard Content Component ---
  const StudentDashboardContent = () => {
    // Placeholder data for courses
    const myCourses = [
      { id: 1, title: "Introduction to Web Development", instructor: "Dr. Smith", progress: 75, image: "https://placehold.co/600x400/14B8A6/FFFFFF?text=Web+Dev+101" }, // Teal
      { id: 2, title: "Advanced Data Structures", instructor: "Prof. Lee", progress: 30, image: "https://placehold.co/600x400/059669/FFFFFF?text=Data+Structures" }, // Green
      { id: 3, title: "UX Design Principles", instructor: "Ms. Evans", progress: 95, image: "https://placehold.co/600x400/0D9488/FFFFFF?text=UX+Design" }, // Darker Teal
    ];

    return (
      <main className="flex-grow bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">My Courses</h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {myCourses.map(course => (
              <div key={course.id} className="overflow-hidden rounded-xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
                 <img
                      className="h-48 w-full object-cover"
                      src={course.image}
                      alt={course.title}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x400/gray/white?text=Course";
                      }}
                    />
                <div className="p-6">
                  <h2 className="mb-2 text-xl font-semibold text-gray-900">{course.title}</h2>
                  <p className="mb-4 text-sm text-gray-600">Instructor: {course.instructor}</p>
                  <div className="mb-2 h-2 w-full rounded-full bg-gray-200">
                     <div
                        className="h-2 rounded-full bg-teal-600" // Updated color
                        style={{ width: `${course.progress}%` }}>
                     </div>
                  </div>
                  <p className="text-right text-sm font-medium text-teal-700">{course.progress}% Complete</p> {/* Updated color */}
                  <a href="#" className="mt-4 inline-block rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-200"> {/* Updated color */}
                    Continue Course
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  };

  // --- Professor Dashboard Content Component (Updated Theme) ---
  const ProfessorDashboardContent = ({
    currentView, // Accept currentProfView state from parent
    setView, // Accept setCurrentProfView function from parent
  }: {
    currentView: ProfessorView;
    setView: (view: ProfessorView) => void;
  }) => {

    const MyProfessorCourses = () => (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">My Teaching Courses</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { id: 1, title: "Advanced React Patterns", students: 45, image: "https://placehold.co/600x400/0F766E/FFFFFF?text=React+Patterns" },
            { id: 2, title: "Introduction to Quantum Computing", students: 22, image: "https://placehold.co/600x400/0D9488/FFFFFF?text=Quantum+Comp" },
            { id: 3, title: "Ethical AI Design", students: 38, image: "https://placehold.co/600x400/047857/FFFFFF?text=Ethical+AI" },
          ].map(course => (
            <div key={course.id} className="rounded-xl bg-white p-6 shadow-lg">
              <img src={course.image} alt={course.title} className="h-40 w-full object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
              <p className="text-gray-600">Students Enrolled: {course.students}</p>
              <div className="mt-4 flex space-x-2">
                <button className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 hover:bg-teal-200">Manage</button>
                <button
                  onClick={() => setView('analytics')} // Use the passed-in setView function
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  View Analytics
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

    const AddNewCourse = () => {
      const [newCourse, setNewCourse] = useState({ title: '', description: '', category: 'Development', image: '' });
      const handleAddChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewCourse(prev => ({ ...prev, [name]: value }));
      };
      const handleAddSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("New Course Added:", newCourse);
        alert(`Course "${newCourse.title}" added successfully!`);
        setNewCourse({ title: '', description: '', category: 'Development', image: '' });
        setView('myCourses'); // Use the passed-in setView function
      };

      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Add New Course</h2>
          <form onSubmit={handleAddSubmit} className="rounded-xl bg-white p-8 shadow-lg grid grid-cols-1 gap-y-6 max-w-2xl mx-auto">
             <div>
                <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700">Course Title</label>
                <input type="text" name="title" id="courseTitle" value={newCourse.title} onChange={handleAddChange} required
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
             </div>
             <div>
                <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea name="description" id="courseDescription" rows={4} value={newCourse.description} onChange={handleAddChange}
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"></textarea>
             </div>
             <div>
                <label htmlFor="courseCategory" className="block text-sm font-medium text-gray-700">Category</label>
                <select name="category" id="courseCategory" value={newCourse.category} onChange={handleAddChange}
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500">
                   <option value="Development">Development</option>
                   <option value="Design">Design</option>
                   <option value="Data Science">Data Science</option>
                   <option value="Business">Business</option>
                </select>
             </div>
             <div>
                <label htmlFor="courseImage" className="block text-sm font-medium text-gray-700">Image URL (Optional)</label>
                <input type="url" name="image" id="courseImage" value={newCourse.image} onChange={handleAddChange}
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500" />
             </div>
             <div className="flex justify-end space-x-4">
                <button type="button" onClick={() => setView('myCourses')} // Use passed-in setView
                   className="rounded-full border border-gray-300 px-6 py-2 text-base font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50">Cancel</button>
                <button type="submit"
                   className="rounded-full bg-teal-600 px-6 py-2 text-base font-semibold text-white shadow-md transition-colors hover:bg-teal-700">Add Course</button>
             </div>
          </form>
        </div>
      );
    };

    const CourseAnalytics = () => (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Course Analytics</h2>
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <p className="text-gray-700">Detailed analytics for your courses will appear here, showing student engagement, performance trends, popular modules, and completion rates.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">Engagement Overview</h3>
              <p className="text-gray-600">Average time spent per student: 45 min/day</p>
              <p className="text-gray-600">Active students last week: 80%</p>
            </div>
            <div className="border border-gray-200 rounded-md p-4 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800">Completion Rates</h3>
              <p className="text-gray-600">Advanced React Patterns: 65%</p>
              <p className="text-gray-600">Introduction to Quantum Computing: 40%</p>
            </div>
            {/* Placeholder for charts/graphs */}
            <div className="col-span-1 md:col-span-2 mt-4 h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
              [Placeholder for Charts/Graphs]
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <main className="flex-grow bg-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">Professor Dashboard</h1>

          {/* Navigation for Professor Dashboard (uses passed-in state & setter) */}
          <div className="mb-8 flex space-x-4 border-b border-gray-200">
            <button
              onClick={() => setView('myCourses')}
              className={`pb-3 text-lg font-medium ${
                currentView === 'myCourses'
                  ? 'border-b-2 border-teal-600 text-teal-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              My Courses
            </button>
            <button
              onClick={() => setView('addCourse')}
              className={`pb-3 text-lg font-medium ${
                currentView === 'addCourse'
                  ? 'border-b-2 border-teal-600 text-teal-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Add Course
            </button>
            <button
              onClick={() => setView('analytics')}
              className={`pb-3 text-lg font-medium ${
                currentView === 'analytics'
                  ? 'border-b-2 border-teal-600 text-teal-700'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Analytics
            </button>
          </div>

          {/* Conditional rendering of content based on passed-in state */}
          {currentView === 'myCourses' && <MyProfessorCourses />}
          {currentView === 'addCourse' && <AddNewCourse />}
          {currentView === 'analytics' && <CourseAnalytics />}
        </div>
      </main>
    );
  };


  // --- Reworked Footer Component ---
  const Footer = () => {
    // Keep the existing QuantumU footer links
    const aboutLinks = [
      { name: "Who we are", href: "#" },
      { name: "Blog", href: "#blogs" },
      { name: "Moodle Themes", href: "#" }, // Placeholder link
      { name: "Contact Us", href: "#contact" },
    ];
    const supportLinks = [
      { name: "Help", href: "#" }, // Placeholder link
      { name: "FAQs", href: "#faq" },
      { name: "Terms of Service", href: "#" }, // Placeholder link
      { name: "Privacy Policy", href: "#" }, // Placeholder link
    ];

    return (
     <footer className="bg-teal-950 text-gray-300"> {/* Use the dark teal color */}
       <div className="container mx-auto px-8 py-16">
         <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
           {/* Logo Section */}
           <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col justify-between items-start">
             <div>
               <a href="#home" className="text-3xl font-bold text-white">
                 QuantumU
               </a>
               <p className="mt-4 text-sm text-gray-400">
                 &copy; {new Date().getFullYear()} QuantumU.
                 All rights reserved.
               </p>
             </div>
           </div>

           {/* Vertical Divider (only for large screens) */}
           <div className="hidden lg:flex items-center justify-center relative">
             <div className="absolute h-full w-px bg-gray-700"></div>
           </div>

           {/* About Us */}
           <div className="col-span-1">
             <h3 className="text-lg font-semibold text-white mb-6">About us</h3>
             <ul className="space-y-4">
               {aboutLinks.map(link => (
                 <li key={link.name}><a href={link.href} className="text-base text-gray-400 hover:text-white transition-colors">{link.name}</a></li>
               ))}
             </ul>
           </div>

           {/* Support */}
           <div className="col-span-1">
             <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
             <ul className="space-y-4">
               {supportLinks.map(link => (
                 <li key={link.name}><a href={link.href} className="text-base text-gray-400 hover:text-white transition-colors">{link.name}</a></li>
               ))}
             </ul>
           </div>

           {/* Get in touch */}
           <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <h3 className="text-lg font-semibold text-white mb-6">Get in touch</h3>
             <p className="text-gray-400 text-sm mb-6 max-w-xs">
               Have questions or need support? Our team is here to help you with any queries about our courses, platform, or partnerships.
Reach out and we’ll get back to you as soon as possible.
             </p>
             <div className="space-y-4">
               <p className="text-base text-gray-400">0800 123 45678</p>
               <a href="mailto:ansh@quddle.ai" className="text-base text-gray-400 hover:text-white transition-colors">ansh@quddle.ai</a>
             </div>
             <div className="mt-8 flex space-x-4">
               <button className="rounded-full border border-gray-600 px-4 py-2 text-sm text-gray-400 hover:border-white hover:text-white transition-colors">social handle</button>
               <button className="rounded-full border border-gray-600 px-4 py-2 text-sm text-gray-400 hover:border-white hover:text-white transition-colors">social handle</button>
             </div>
           </div>
         </div>
       </div>
     </footer>
    );
  };

  // --- Shared Header Component (Updated Theme & Logic) ---
  const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
      { name: "Home", href: "#home" },
      { name: "Features", href: "#features" },
      { name: "All Programs", href: "#programs" },
      { name: "Blogs", href: "#blogs" },
      { name: "About", href: "#about" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ];
    return (
      <header
          id="home"
          className="sticky top-0 z-50 w-full bg-teal-950 text-white shadow-lg" // Updated background
        >
          <nav className="container mx-auto flex h-20 flex-wrap items-center justify-between px-4 md:flex-nowrap relative">
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold transition-transform hover:scale-105"
            >
              QuantumU {/* Updated Logo to match footer */}
            </a>

            {/* Desktop Nav (Centered) */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:space-x-1">
              {/* Render navLinks only if user is NOT logged in */}
              {!isLoggedIn && navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right side Actions: Login/Signup OR User Menu */}
            <div className="hidden items-center space-x-4 md:flex">
              {isLoggedIn ? (
                // --- User Dropdown Menu ---
                userRole === 'student' ? (
                  <DropdownMenu
                    trigger={
                      <span className="flex items-center space-x-2 rounded-full p-1 transition-colors hover:bg-white/10">
                        <UserCircleIcon className="h-8 w-8 text-gray-200" />
                        <span className="text-sm font-medium text-gray-200">My Account</span>
                        <ChevronDownIcon className="h-4 w-4 text-gray-300" />
                      </span>
                    }
                    title="My Account"
                  >
                    <DropdownMenuItem onClick={() => setCurrentView('editProfile')}>Edit Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setCurrentView('dashboard')}>My Courses</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                  </DropdownMenu>
                ) : (
                  // Professor Dropdown Menu
                  <DropdownMenu
                    trigger={
                      <span className="flex items-center space-x-2 rounded-full p-1 transition-colors hover:bg-white/10">
                        <UserCircleIcon className="h-8 w-8 text-gray-200" />
                        <span className="text-sm font-medium text-gray-200">Account</span>
                        <ChevronDownIcon className="h-4 w-4 text-gray-300" />
                      </span>
                    }
                    title="Account"
                  >
                    {/* Pass setCurrentProfView down */}
                    <DropdownMenuItem onClick={() => setCurrentView('editProfile')} highlighted={currentView === 'editProfile'}>Edit Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setCurrentView('dashboard'); setCurrentProfView('myCourses'); }}>My course</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => { setCurrentView('dashboard'); setCurrentProfView('addCourse'); }}>Add course</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                  </DropdownMenu>
                )
              ) : (
                // --- Sign In / Sign Up Buttons (now open role selection) ---
                <>
                  <button
                    onClick={() => setShowRoleSelection(true)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowRoleSelection(true)}
                    className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-teal-800 shadow-md transition-all hover:bg-gray-100 hover:shadow-lg" // Updated text color
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="rounded-md p-2 text-gray-200 transition-colors hover:bg-white/10"
                aria-label="Open menu"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </nav>

          {/* --- Mobile Menu (Updated Theme & Logic) --- */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-[100] flex flex-col bg-teal-950 p-4 text-white md:hidden"> {/* Updated background */}
              <div className="flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold">
                  QuantumU {/* Updated Logo */}
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md p-2 text-gray-200 transition-colors hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flex flex-col space-y-2 overflow-y-auto">
                 {/* Show navLinks if NOT logged in */}
                {!isLoggedIn && navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-white/10"
                  >
                    {link.name}
                  </a>
                ))}

                {/* Mobile Account Actions */}
                <div className="border-t border-white/20 pt-4 mt-4">
                  {isLoggedIn ? (
                    userRole === 'student' ? (
                      <>
                        <button onClick={() => { setCurrentView('editProfile'); setIsMenuOpen(false); }} className="block w-full text-left rounded-lg px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-white/10"> Edit Profile </button>
                        <button onClick={() => { setCurrentView('dashboard'); setIsMenuOpen(false); }} className="block w-full text-left rounded-lg px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-white/10"> My Courses </button>
                        <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left rounded-lg px-4 py-3 text-lg font-medium text-red-300 transition-colors hover:bg-red-500/20 hover:text-red-200"> Logout </button>
                      </>
                    ) : ( // Professor mobile menu
                      <>
                        <button onClick={() => { setCurrentView('editProfile'); setIsMenuOpen(false); }} className="block w-full text-left rounded-lg px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-white/10"> Edit Profile </button>
                        <button onClick={() => { setCurrentView('dashboard'); setCurrentProfView('myCourses'); setIsMenuOpen(false); }} className="block w-full text-left rounded-lg px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-white/10"> My course </button>
                        <button onClick={() => { setCurrentView('dashboard'); setCurrentProfView('addCourse'); setIsMenuOpen(false); }} className="block w-full text-left rounded-lg px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-white/10"> Add course </button>
                        <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="block w-full text-left rounded-lg px-4 py-3 text-lg font-medium text-red-300 transition-colors hover:bg-red-500/20 hover:text-red-200"> Logout </button>
                      </>
                    )
                  ) : (
                    <>
                     <button onClick={() => { setShowRoleSelection(true); setIsMenuOpen(false); }} className="block w-full text-left rounded-lg px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-white/10"> Sign In </button>
                     <button onClick={() => { setShowRoleSelection(true); setIsMenuOpen(false); }} className="mt-2 block w-full rounded-full bg-white px-5 py-3 text-center text-lg font-semibold text-teal-800 shadow-md transition-all hover:bg-gray-100"> {/* Updated text color */}
                       Sign Up
                     </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </header>
    );
  };

  // --- NEW: Role Selection Modal ---
  const RoleSelectionModal = () => (
    <div className="fixed inset-0 z-[101] flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-xl text-center">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Choose Your Role</h2>
        <p className="mb-8 text-gray-700">Are you a student or a professor?</p>
        <div className="space-y-4">
          <button
            onClick={() => handleLogin('student')}
            className="w-full rounded-full bg-teal-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-teal-700"
          >
            I am a Student
          </button>
          <button
            onClick={() => handleLogin('professor')}
            className="w-full rounded-full border border-teal-600 px-6 py-3 text-lg font-semibold text-teal-700 shadow-md transition-colors hover:bg-teal-50"
          >
            I am a Professor
          </button>
        </div>
        <button
          onClick={() => setShowRoleSelection(false)}
          className="mt-8 text-sm text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );


  // --- Render the main App ---
  const renderMainContent = () => {
    if (!isLoggedIn) {
      return <LandingPageContent />;
    }

    if (currentView === 'editProfile') {
      return userRole === 'student' ? <StudentProfileEdit /> : <ProfessorProfileEdit />;
    }

    // Default to dashboard for respective roles
    // Pass down the current professor view state and setter
    return userRole === 'student'
      ? <StudentDashboardContent />
      : <ProfessorDashboardContent currentView={currentProfView} setView={setCurrentProfView} />;
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white text-gray-800">
      <Header />
      {renderMainContent()}
      <Footer />
      {showRoleSelection && <RoleSelectionModal />}
    </div>
  );
}

