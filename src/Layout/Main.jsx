import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Container from "../Shared/Container";

const Main = () => {
  const location = useLocation();

  return (
    <Container>
      {location.pathname !== "/" && <Navbar />}
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Main;
