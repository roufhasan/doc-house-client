import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container";
import DoctorInfoBanner from "./DoctorInfoBanner";
import DoctorProfile from "./DoctorProfile";
import DoctorDetails from "./DoctorDetails";

const DoctorInfo = () => {
  const doctorInfo = useLoaderData();

  return (
    <Container>
      <section className="bg-[#F3F3F3]">
        <DoctorInfoBanner />
        <div className="px-[3%] pb-[130px]">
          <DoctorProfile doctorInfo={doctorInfo} />
          <DoctorDetails />
        </div>
      </section>
    </Container>
  );
};

export default DoctorInfo;
