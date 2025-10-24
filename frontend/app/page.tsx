"use client";

import { useState } from "react";

// --- SVG Icon Components ---
// These are simple inline SVGs for demonstration.
// For a real project, you might use a library like lucide-react.

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

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg">
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

// --- Feature Icons ---

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

// --- Social Icons ---

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21.543 7.104c.015.16.015.32.015.48 0 4.9-3.73 10.55-10.55 10.55-2.09 0-4.04-.61-5.68-1.67A7.33 7.33 0 0010.1 14.8c-1.85 0-3.41-1.25-3.95-2.92.26.05.52.07.78.07.38 0 .75-.05 1.1-.15-1.93-.39-3.38-2.1-3.38-4.1v-.05c.57.31 1.21.5 1.89.52C4.82 7.77 4.18 6.6 4.18 5.28c0-.75.2-1.45.55-2.06A7.33 7.33 0 0010.1 7.1a3.9 3.9 0 011.08-3.8A3.7 3.7 0 0115.1 2c1.28 0 2.45.54 3.26 1.4.9-.18 1.75-.5 2.52-1-.3.92-.92 1.7-1.74 2.2.8-.1 1.56-.3 2.28-.6-.55.78-1.25 1.47-2.05 2.06z" />
  </svg>
);

const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.06 20.45H3.53V9h3.53v11.45zM5.29 7.43c-1.11 0-2.01-.9-2.01-2.01s.9-2.01 2.01-2.01 2.01.9 2.01 2.01-.9 2.01-2.01 2.01zM20.45 20.45h-3.53v-5.54c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.63h-3.53V9h3.39v1.56h.05c.47-.89 1.62-1.84 3.34-1.84 3.58 0 4.24 2.36 4.24 5.43v6.3z" />
  </svg>
);

// --- Main Page Component ---

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // --- Animation Styles ---
  // We add this <style> tag to define custom animations
  // that Tailwind can then use.
  const animationStyle = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeInUp {
      animation: fadeInUp 0.5s ease-out forwards;
    }

    /* Simple utility to apply animation with a delay */
    .delay-100 { animation-delay: 0.1s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-300 { animation-delay: 0.3s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-500 { animation-delay: 0.5s; }
  `;

  // --- Data for Sections ---
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const features = [
    {
      name: "Course Tracking",
      description:
        "Monitor student progress and course milestones with our intuitive tracking system.",
      icon: <CourseTrackingIcon />,
    },
    {
      name: "Instructor Dashboard",
      description:
        "A dedicated dashboard for instructors to manage courses, students, and content.",
      icon: <DashboardIcon />,
    },
    {
      name: "Student Analytics",
      description:
        "Gain valuable insights into student performance and engagement with detailed analytics.",
      icon: <AnalyticsIcon />,
    },
    {
      name: "Assignment & Grading",
      description:
        "Streamline the entire assignment and grading process, from submission to feedback.",
      icon: <GradingIcon />,
    },
    {
      name: "Real-time Notifications",
      description:
        "Keep everyone informed with instant notifications for announcements, grades, and more.",
      icon: <NotificationIcon />,
    },
    {
      name: "Cloud-based Access",
      description:
        "Access your courses, materials, and data securely from anywhere, on any device.",
      icon: <CloudIcon />,
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "For small teams or individual instructors.",
      features: [
        "Up to 5 Courses",
        "1,000 Students",
        "Basic Analytics",
        "Email Support",
      ],
      buttonLabel: "Choose Basic",
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      description: "For growing institutions and businesses.",
      features: [
        "Up to 50 Courses",
        "10,000 Students",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
      ],
      buttonLabel: "Choose Pro",
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale organizations.",
      features: [
        "Unlimited Courses",
        "Unlimited Students",
        "Custom Analytics",
        "Dedicated Support",
        "SSO & Security",
      ],
      buttonLabel: "Contact Sales",
      isPopular: false,
    },
  ];

  const testimonials = [
    {
      quote:
        "This Course Management System has revolutionized how I run my online school. The analytics are a game-changer!",
      name: "Dr. Jane Smith",
      title: "Professor of Engineering",
      image: "https://placehold.co/100x100/E2E8F0/4A5568?text=JS",
    },
    {
      quote:
        "As a student, I love how easy it is to track my assignments and see my progress. Everything is in one place.",
      name: "Mike Johnson",
      title: "University Student",
      image: "https://placehold.co/100x100/E2E8F0/4A5568?text=MJ",
    },
    {
      quote:
        "The instructor dashboard is incredibly intuitive. I spend less time on admin and more time teaching.",
      name: "Sarah Lee",
      title: "Online Course Creator",
      image: "https://placehold.co/100x100/E2E8F0/4A5568?text=SL",
    },
  ];

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial on our Basic and Pro plans. You can sign up without a credit card and explore all the features.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account dashboard. Changes will be pro-rated.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support on all plans. Our Pro and Enterprise plans include priority support via chat and phone, as well as dedicated account managers for Enterprise clients.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use industry-standard encryption, secure cloud infrastructure, and regular backups to ensure your data is always safe and protected.",
    },
    {
      question: "Can I customize the platform with my own branding?",
      answer:
        "Yes! Our Pro and Enterprise plans allow you to use your own domain name, logo, and custom branding colors to create a seamless experience for your students.",
    },
  ];

  // --- Event Handlers ---

  const handleFaqToggle = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", formData);
    alert("Message sent! We'll get back to you soon.");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* --- Style tag for animations --- */}
      <style>{animationStyle}</style>

      {/* --- Main Container --- */}
      <div className="flex min-h-screen w-full flex-col bg-white text-gray-800">
        
        {/* --- Header & Navigation (Colorful & Centered) --- */}
        <header
          id="home"
          className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-700 to-purple-800 text-white shadow-lg"
        >
          <nav className="container mx-auto flex h-20 flex-wrap items-center justify-between px-4 md:flex-nowrap">
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold transition-transform hover:scale-105"
            >
              CourseHub
            </a>

            {/* Desktop Nav (Centered) */}
            <div className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Sign In / Sign Up */}
            <div className="hidden items-center space-x-4 md:flex">
              <a
                href="#" // Update this to your login page path, e.g., /login
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                Sign In
              </a>
              <a
                href="#" // Update this to your sign-up page path
                className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-700 shadow-md transition-all hover:bg-gray-100 hover:shadow-lg"
              >
                Sign Up
              </a>
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

          {/* --- Mobile Menu --- */}
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-r from-blue-700 to-purple-800 p-4 text-white md:hidden">
              <div className="flex items-center justify-between">
                <a href="#home" className="text-2xl font-bold">
                  CourseHub
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-md p-2 text-gray-200 transition-colors hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-white/10"
                  >
                    {link.name}
                  </a>
                ))}
                
                {/* Mobile Sign In / Sign Up */}
                <div className="border-t border-white/20 pt-4">
                  <a
                    href="#" // Update this to your login page path
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-200 transition-colors hover:bg-white/10"
                  >
                    Sign In
                  </a>
                  <a
                    href="#" // Update this to your sign-up page path
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-2 block w-full rounded-full bg-white px-5 py-3 text-center text-lg font-semibold text-blue-700 shadow-md transition-all hover:bg-gray-100"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* --- Main Content --- */}
        <main className="flex-grow">
          {/* --- Hero Section --- */}
          <section className="bg-gradient-to-b from-white to-blue-50 py-24 md:py-32 lg:py-40">
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
                  href="#pricing"
                  className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </section>

          {/* --- Features Section --- */}
          <section id="features" className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-4">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600">
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

          {/* --- About Section --- */}
          <section id="about" className="bg-blue-50 py-20 md:py-28">
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

          

          {/* --- FAQ Section --- */}
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
                          <MinusIcon className="h-6 w-6 text-blue-600" />
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

          {/* --- Contact Section --- */}
          <section id="contact" className="bg-blue-50 py-20 md:py-28">
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
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    className="block w-full rounded-md border-gray-300 px-4 py-3 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        {/* --- Footer (Colorful) --- */}
        <footer className="bg-gradient-to-r from-blue-700 to-purple-800 text-gray-200">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {/* Logo & Copyright */}
              <div className="col-span-2 md:col-span-1">
                <a
                  href="#home"
                  className="text-2xl font-bold text-white transition-colors hover:text-gray-100"
                >
                  CourseHub
                </a>
                <p className="mt-4 text-sm text-gray-300">
                  &copy; {new Date().getFullYear()} CourseHub.
                  All rights reserved.
                </p>
                <div className="mt-6 flex space-x-5">
                  <a
                    href="#"
                    className="text-gray-300 transition-colors hover:text-white"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors hover:text-white"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 transition-colors hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-300 transition-colors hover:text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Legal
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* Company Links */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Company
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}