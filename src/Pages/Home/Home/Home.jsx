import Banner from "../Banner/Banner";
import ExpertDoctors from "../ExpertDoctors/ExpertDoctors";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <section>
      <Banner />
      <Services />
      <InfoCards />
      <Testimonials />
      <ExpertDoctors />
    </section>
  );
};

export default Home;
