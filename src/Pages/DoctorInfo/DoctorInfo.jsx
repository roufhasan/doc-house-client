import { useLoaderData } from "react-router-dom";
import Container from "../../Shared/Container";
import DoctorInfoBanner from "./DoctorInfoBanner";

const DoctorInfo = () => {
  const loadDoctor = useLoaderData();
  console.log(loadDoctor);
  return (
    <Container>
      <DoctorInfoBanner />
    </Container>
  );
};

export default DoctorInfo;
