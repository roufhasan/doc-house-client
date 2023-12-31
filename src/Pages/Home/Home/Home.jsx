import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ExpertDoctors from "../ExpertDoctors/ExpertDoctors";
import HomeNavbar from "../HomeNavbar/HomeNavbar";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <section>
      <HomeNavbar />
      <Banner />
      <Services />
      <InfoCards />
      <Testimonials />
      <ExpertDoctors />
      <Contact />
    </section>
  );
};

export default Home;
