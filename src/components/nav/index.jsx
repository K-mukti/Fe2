
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logos from "../../assets/nav/logo-videobelajar.png";
import profile from "../../assets/nav/Avatar.png";
import vector from "../../assets/nav/Vector.png";

const Nav = () => {
  return (
    <div className="flex justify-between items-center w-full hp:px-0 hp:py-4 lg:py-3 lg:px-[100px]">
      {/* Logo */}
      <a href="/">
        <img src={logos} alt="logo-videobelajar" className="cursor-pointer" />
      </a>
    </div>
  );
};

const NavHome = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Mengecek apakah pengguna sudah login
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      setIsLoggedIn(true);
      setUserName(loggedInUser.fullname);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Hapus data login
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 z-50 bg-white flex w-full hp:px-6 hp:py-4 sm:px-[30px] sm:py-3 sm:gap-6 lg:px-[120px] lg:gap-9 shadow-md">
      <div className="flex justify-between items-center w-[1120px]">
        <img src={logos} alt="logo-videobelajar" className="cursor-pointer" />
        <a className="text-home hidden lg:block sm:block hp:hidden" href="#">
          Kategori
        </a>
        <img
          src={vector}
          alt="vector"
          className="block lg:hidden sm:hidden hp:block cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>

      {/* Jika sudah login, tampilkan profil dan tombol logout */}
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <p className="text-gray-700 font-semibold hidden sm:block lg:block">
            {userName}
          </p>
          <img src={profile} alt="profile" className="cursor-pointer hidden hp:hidden sm:block lg:block" />
          <button
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-all"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        // Tombol login hanya muncul jika user belum login
        <button
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-600 transition-all"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      )}

      {isDropdownOpen && (
        <ul className="absolute text-home top-full right-0 bg-white shadow-lg rounded-md py-2 w-[200px]">
          <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Semua Kelas</a></li>
          <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Pemasaran</a></li>
          <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Desain</a></li>
          <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Pengembangan Diri</a></li>
          <li><a className="block py-2 px-4 hover:bg-gray-100 hover:text-orange-500" href="#">Bisnis</a></li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
export { NavHome };