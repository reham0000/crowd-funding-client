import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/banner logo.jpg";
import { Fade, Slide } from "react-awesome-reveal";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import "./navbar.css";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/allcampaign", name: "All Campaign" },
    { path: "/newcampaign", name: "New Campaign" },
    { path: "/mycampaign", name: "My Campaign" },
    { path: "/mydonation", name: "My Donations" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-lg bg-gradient-to-r from-[#2ec4b6] to-[#3a86ff]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Fade triggerOnce delay={100}>
            <div className="flex items-center space-x-2">
              <img
                className="w-16 h-16 rounded-full border-2 border-white shadow-md hover:scale-105 transition-transform"
                src={logo}
                alt="Logo"
              />
            </div>
          </Fade>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Slide direction="down" triggerOnce cascade damping={0.1} delay={200}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/20 transition-all ${
                      isActive ? "bg-white/10 font-bold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </Slide>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-6">
            {/* Theme Toggle */}
            <Fade delay={300}>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={theme === "dark"}
                  onChange={handleToggle}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-7 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gray-700"></div>
                <span className="ml-3 text-sm font-medium text-white">
                  {theme === "dark" ? "🌙" : "☀️"}
                </span>
              </label>
            </Fade>

            {/* User/Auth Section */}
            <Fade delay={400}>
              {user?.email ? (
                <div className="flex items-center space-x-4">
                  <div className="group relative">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform"
                      src={user?.photoURL}
                      alt={user?.displayName}
                    />
                    {user?.displayName && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-gray-800 text-xs font-semibold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                        {user?.displayName}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-white text-[#2ec4b6] rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/signin"
                  className="px-4 py-2 bg-white text-[#2ec4b6] rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
                >
                  Login
                </Link>
              )}
            </Fade>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <Slide direction="down" triggerOnce>
            <div className="lg:hidden mt-4 pb-4 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20 transition-all ${
                      isActive ? "bg-white/10 font-bold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </Slide>
        )}
      </div>
    </header>
  );
};

export default Navbar;