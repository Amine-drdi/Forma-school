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
    <>
      {/* ✅ Niveau 1 : Contact + Recherche + Logo */}
      <div className="w-full bg-white px-4 md:px-8 lg:px-16 py-3 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Logo à gauche */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden" onClick={() => setActiveMenu(!activeMenu)}>
            <MdMenu className="w-7 h-7 text-gray-700" />
          </button>
          <NavLink to="/">
            <img src="/images/logoFormaSchool.png" alt="Logo" className="h-12" />
          </NavLink>
        </div>

        {/* Barre de recherche au centre */}
        <div className="relative w-full lg:max-w-xl">
  <input
    type="text"
    placeholder="Rechercher une formation BTP..."
    className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  {searchTerm.length > 0 && (
    <div className="absolute top-full mt-20 w-full bg-white border border-orange-200 rounded-lg shadow-md z-50 max-h-64 overflow-y-auto">
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
        <p className="px-4 py-2 text-sm text-gray-500 italic">Aucune formation trouvée</p>
      )}
    </div>
  )}
</div>


        {/* Infos contact à droite */}
        <div className="flex flex-col lg:flex-row gap-2 text-sm text-gray-700 items-center">
          <div className="flex items-center gap-2">
            <LiaPhoneVolumeSolid className="text-primary w-5 h-5" />
            <span className="font-medium">07 56 82 86 00</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineMail className="text-primary w-5 h-5" />
            <span className="font-medium">contact@forma-school.fr</span>
          </div>
        </div>
      </div>

      {/* ✅ Niveau 2 : Navigation principale */}
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm px-4 md:px-8 lg:px-16 h-16 flex items-center justify-center">
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium relative">
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
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Nos formations BTP</h3>
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
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Nos solutions de financement</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mr-10">
                  {[{ id: "CPF", name: "CPF" }, { id: "Opco", name: "OPCO" }, { id: "poleEmploi", name: "Pôle Emploi" }, { id: "fiphfp", name: "FIPHFP" }, { id: "agefiph", name: "AGEFIPH" }].map((fin) => (
                    <NavLink
                      key={fin.id}
                      to={`/${fin.id}`}
                      className="block bg-gray-50 hover:bg-primary/10 hover:text-primary text-gray-800 border border-gray-200 px-5 py-3 rounded-lg text-sm transition duration-200 shadow-sm"
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
    </>
  );
};

export default Header;
