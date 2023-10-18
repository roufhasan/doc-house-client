import Container from "../Container";
import logo from "../../assets/icon/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaX } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // Log out
  const logOutUser = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };

  // This is a testing code for fixing github contibuiton display settings.

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
        {user ? (
          <Link onClick={() => logOutUser()}>Log out</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
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
      <nav className=" px-[4%] bg-[#07332F] pb-5 md:pb-3 flex items-center justify-between text-white w-full max-w-[1920px] pt-[40px] z-40">
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

export default Navbar;
