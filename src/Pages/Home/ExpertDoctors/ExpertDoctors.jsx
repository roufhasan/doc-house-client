import { useEffect } from "react";
import { useState } from "react";
import DoctorCard from "../../../components/DoctorCard/DoctorCard";

const ExpertDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <section className="px-[3%] my-8 md:my-[130px]">
      <div className="text-center">
        <h1 className="text-[30px] font-bold md:text-[40px]">
          Our Expert Doctors
        </h1>
        <p className="max-w-[900px] mx-auto my-4 md:mt-5 md:mb-[50px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-x-6 gap-y-4">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor._id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default ExpertDoctors;
