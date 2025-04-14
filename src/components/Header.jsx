import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineAccountCircle, MdMenu } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { useAppContext } from "../app/context/AppContext";
import { btpCategories } from "../assets/data/categories";

const Header = () => {
  const { activeMenu, setActiveMenu } = useAppContext();
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md px-4 md:px-8 lg:px-16 h-16 flex items-center justify-between">
      {/* Logo + Burger */}
      <div className="flex items-center gap-4">
        <button className="lg:hidden" onClick={() => setActiveMenu(!activeMenu)}>
          <MdMenu className="w-7 h-7 text-gray-700" />
        </button>
        <NavLink to="/">
          <img src="/images/logoFormaSchool.png" alt="Logo" className="h-10" />
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-10 text-sm font-medium relative">
        <NavLink to="/" className="text-gray-700 hover:text-primary">Accueil</NavLink>

        {/* BTP Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-primary hover:bg-primary/10 transition ${
              location.pathname.includes("/formations") ? "text-primary" : ""
            }`}
          >
            BTP
            <HiChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white border border-gray-200 shadow-xl rounded-xl p-6 w-[90vw] max-w-6xl z-50 pr-10"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Nos formations BTP
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mr-10">
                {btpCategories.map((cat) => (
                  <NavLink
                    key={cat.id}
                    to={`/formations/btp/${cat.id}`}
                    className="block bg-gray-50 hover:bg-primary/10 hover:text-primary text-gray-800 border border-gray-200 px-5 py-3 rounded-lg text-sm transition duration-200 shadow-sm"
                  >
                    {cat.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>

        <NavLink to="/a-propos" className="text-gray-700 hover:text-primary">Qui sommes-nous ?</NavLink>
        <NavLink to="/contact" className="text-gray-700 hover:text-primary">Contact</NavLink>
        <NavLink
          to="/connexion"
          className="px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary hover:text-primary transition"
        >
          Connexion
        </NavLink>
      </nav>

      {/* Mobile Account */}
      <div className="lg:hidden">
        <NavLink to="/connexion">
          <MdOutlineAccountCircle className="w-7 h-7 text-gray-700" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
