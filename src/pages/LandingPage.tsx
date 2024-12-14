import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-indigo-600 min-h-screen flex flex-col items-center justify-center text-white">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-bold">PlanSave</div>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center lg:space-x-12 px-6 text-center lg:text-left">
        {/* Left Side Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Manage Your Budget <br /> <span className="text-yellow-300">Smartly</span> with PlanSave
          </h1>
          <p className="text-lg mt-4">
            PlanSave helps you track expenses, set budgets, and achieve financial goals. Start now and take control of your finances!
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4">
            <a
              href="/register"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="bg-white hover:bg-gray-200 text-blue-600 font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Log In
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-8 lg:mt-0">
          <img
            src="/assets/finance-hero.png"
            alt="Finance Illustration"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-sm text-gray-300">
        © {new Date().getFullYear()} PlanSave. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;