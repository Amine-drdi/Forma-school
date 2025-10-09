import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineMail, MdOutlineAccountCircle, MdMenu } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { useAppContext } from "../app/context/AppContext";
import { btpCategories } from "../assets/data/categories";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const Header = () => {
  const { activeMenu, setActiveMenu } = useAppContext();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const btpRef = useRef(null);
  const financeRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (btpRef.current && !btpRef.current.contains(e.target)) &&
        (financeRef.current && !financeRef.current.contains(e.target))
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      {/* ✅ VERSION MOBILE (smartphone) */}
      <div className="flex items-center justify-between px-4 py-3 lg:hidden">
        <button onClick={() => setActiveMenu(!activeMenu)}>
          <MdMenu className="text-gray-700 w-7 h-7" />
        </button>
        <NavLink to="/">
          <img src="/images/logoFormaSchool.png" alt="Logo" className="h-10" />
        </NavLink>
      </div>

      {/* ✅ VERSION DESKTOP */}
      <div className="relative flex-col hidden lg:flex">
        {/* Niveau 1 : Contact + Recherche */}
        <div className="flex flex-row items-center justify-between w-full gap-4 px-8 py-3 lg:px-16">
          {/* Espace vide à gauche pour équilibrer le layout */}
          <div className="w-48"></div>
          
          {/* Barre de recherche au centre */}
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Rechercher une formation BTP..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {searchTerm.length > 0 && (
              <div className="absolute z-50 w-full mt-20 overflow-y-auto bg-white border border-orange-200 rounded-lg shadow-md top-full max-h-64">
                {btpCategories
                  .filter((cat) =>
                    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((cat) => (
                    <NavLink
                      key={cat.id}
                      to={`/formations/btp/${cat.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
                      onClick={() => setSearchTerm("")}
                    >
                      {cat.name}
                    </NavLink>
                  ))}

                {btpCategories.filter((cat) =>
                  cat.name.toLowerCase().includes(searchTerm.toLowerCase())
                ).length === 0 && (
                  <p className="px-4 py-2 text-sm italic text-gray-500">Aucune formation trouvée</p>
                )}
              </div>
            )}
          </div>

          {/* Infos contact à droite */}
          <div className="flex flex-row items-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <LiaPhoneVolumeSolid className="w-5 h-5 text-primary" />
              <span className="font-medium">07 56 95 48 03</span>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="w-5 h-5 text-primary" />
              <a href="mailto:contact@formaschool.fr" className="font-medium hover:text-primary hover:underline">contact@formaschool.fr</a>
            </div>
          </div>
        </div>

        {/* Logo positionné entre les deux niveaux */}
        <div className="absolute z-10 -translate-y-1/2 left-8 lg:left-16 top-1/2">
          <NavLink to="/">
            <img 
              src="/images/logoFormaSchool.png" 
              alt="Logo" 
              className="object-contain h-16" 
            />
          </NavLink>
        </div>

        {/* Niveau 2 : Navigation principale */}
        <header className="relative flex items-center justify-center w-full h-16 px-8 bg-white shadow-sm lg:px-16">
          {/* Décalage pour compenser le logo */}
          <div className="w-48"></div>
          
          <nav className="relative flex items-center gap-10 text-sm font-medium">
            <NavLink to="/" className="text-gray-700 hover:text-primary">Accueil</NavLink>

            {/* BTP Dropdown */}
            <div className="relative" ref={btpRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === "btp" ? null : "btp")}
                className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-primary hover:bg-primary/10 transition ${
                  location.pathname.includes("/formations") ? "text-primary" : ""
                }`}
              >
                BTP
                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "btp" ? "rotate-180" : ""}`} />
              </button>

              {openDropdown === "btp" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white border border-gray-200 shadow-xl rounded-xl p-6 w-[90vw] max-w-6xl z-50 ml-36">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">Nos formations BTP</h3>
                  <div className="grid grid-cols-1 gap-4 mr-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {btpCategories.map((cat) => (
                      <NavLink
                        key={cat.id}
                        to={`/formations/btp/${cat.id}`}
                        className="block px-5 py-3 text-sm text-gray-800 transition duration-200 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:bg-primary/10 hover:text-primary"
                      >
                        {cat.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Financements Dropdown */}
            <div className="relative" ref={financeRef}>
              <button
                onClick={() => setOpenDropdown(openDropdown === "finance" ? null : "finance")}
                className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-primary hover:bg-primary/10 transition ${
                  ["/CPF", "/Opco", "/poleEmploi", "/fiphfp", "/agefiph"].some((p) =>
                    location.pathname.includes(p)
                  )
                    ? "text-primary"
                    : ""
                }`}
              >
                Financements
                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === "finance" ? "rotate-180" : ""}`} />
              </button>

              {openDropdown === "finance" && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-white border border-gray-200 shadow-xl rounded-xl p-6 w-[90vw] max-w-6xl z-50 pr-10">
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">Nos solutions de financement</h3>
                  <div className="grid grid-cols-1 gap-4 mr-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {[{ id: "CPF", name: "CPF" }, { id: "Opco", name: "OPCO" }, { id: "poleEmploi", name: "Pôle Emploi" }, { id: "fiphfp", name: "FIPHFP" }, { id: "agefiph", name: "AGEFIPH" }].map((fin) => (
                      <NavLink
                        key={fin.id}
                        to={`/${fin.id}`}
                        className="block px-5 py-3 text-sm text-gray-800 transition duration-200 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:bg-primary/10 hover:text-primary"
                      >
                        {fin.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/a-propos" className="text-gray-700 hover:text-primary">Qui sommes-nous ?</NavLink>
            <NavLink to="/contact" className="text-gray-700 hover:text-primary">Contact</NavLink>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;