import logo from "../../../assets/icon/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaX } from "react-icons/fa6";
import { useState } from "react";
import Container from "../../../Shared/Container";

const HomeNavbar = () => {
  const [menu, setMenu] = useState(false);

  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 150) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const navOptions = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appoinment">Appointment</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li
        onClick={() => setMenu(false)}
        className="mt-10 cursor-pointer md:hidden"
      >
        <FaX className="mx-auto text-red-500" size={24} />
      </li>
    </>
  );
  return (
    <Container>
      <nav
        className={`${
          colorChange ? "bg-[#07332F] pb-5 md:pb-3" : "bg-transparent"
        } px-[4%] flex items-center justify-between text-white fixed w-full max-w-[1920px] pt-[40px] z-40 `}
      >
        <div className="flex items-center justify-center gap-[10px]">
          <img src={logo} alt="" className="w-9 md:w-[60px]" />
          <h1 className="text-xl font-bold md:text-4xl">
            <span className="text-[#F7A582]">Doc</span> House
          </h1>
        </div>
        <div>
          <ul className="text-lg font-semibold hidden md:flex items-center gap-8">
            {navOptions}
          </ul>
          <FaBars
            onClick={() => setMenu(true)}
            size={24}
            className="cursor-pointer md:hidden"
          />
        </div>
      </nav>
      {/* ----- Hamburger Menu ----- */}
      {menu && (
        <div className="fixed top-0 left-0 text-center h-screen bg-white text-black w-full flex items-center justify-center z-50 md:hidden">
          <ul className="font-semibold flex flex-col gap-4">{navOptions}</ul>
        </div>
      )}
    </Container>
  );
};

export default HomeNavbar;
