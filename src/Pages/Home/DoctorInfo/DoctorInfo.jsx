import { useLoaderData } from "react-router-dom";

const DoctorInfo = () => {
  const loadDoctor = useLoaderData();
  console.log(loadDoctor);
  return <div></div>;
};

export default DoctorInfo;
