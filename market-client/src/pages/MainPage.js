import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MainPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">TechStore</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/developers" 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Developers
              </Link>
              <Link 
                to="/freelance-mode" 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Freelance Mode
              </Link>
              <Link 
                to="/projects" 
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Projects
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="py-2 space-y-1">
                <Link
                  to="/developers"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Developers
                </Link>
                <Link
                  to="/freelance-mode"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Freelance Mode
                </Link>
                <Link
                  to="/projects"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Projects
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-blue-50 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to the Future of Tech Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover top tech talent, innovative projects, and freelance opportunities all in one place.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for developers, projects, or services..."
                className="w-full px-6 py-3 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Developers Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Developers</h2>
              <p className="text-gray-600 mb-4">
                Connect with skilled developers ready to bring your projects to life.
              </p>
              <Link 
                to="/developers"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Freelance Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Freelance Mode</h2>
              <p className="text-gray-600 mb-4">
                Start your freelancing journey and find exciting opportunities.
              </p>
              <Link 
                to="/freelance-mode"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Projects Card */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse Projects</h2>
              <p className="text-gray-600 mb-4">
                Explore innovative projects and contribute to amazing solutions.
              </p>
              <Link 
                to="/projects"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;