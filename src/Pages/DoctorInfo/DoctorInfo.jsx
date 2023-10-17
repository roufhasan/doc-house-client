import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container";
import DoctorInfoBanner from "./DoctorInfoBanner";
import DoctorProfile from "./DoctorProfile";

const DoctorInfo = () => {
  const doctorInfo = useLoaderData();

  return (
    <Container>
      <section className="bg-[#F3F3F3]">
        <DoctorInfoBanner />
        <div className="px-[3%]">
          <DoctorProfile doctorInfo={doctorInfo} />
        </div>
      </section>
    </Container>
  );
};

export default DoctorInfo;
