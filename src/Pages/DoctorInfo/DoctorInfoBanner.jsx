import { Link } from "react-router-dom";
import vector1 from "../../assets/home/Vector1.png";
import vector3 from "../../assets/home/Vector3.png";
import vector4 from "../../assets/home/Vector4.png";

const DoctorInfoBanner = () => {
  return (
    <div className="bg-[#07332F] py-8 md:py-36 text-white relative">
      <div className="px-[3%]">
        <div className="flex gap-1 justify-center md:justify-start md:text-lg">
          <Link to="/" className="">
            Home /
          </Link>
          <p className="font-semibold"> Doctor Profile</p>
        </div>
        <h1 className="font-bold text-[30px] md:text-[45px] text-center md:text-left">
          Doctor Profile
        </h1>
      </div>
      <img
        src={vector1}
        alt=""
        className="w-20 md:w-52 absolute bottom-[117%] md:rotate-180 md:-bottom-6"
      />
      <img
        src={vector3}
        alt=""
        className="w-[60px] md:w-32 absolute right-[20%] top-[47%] md:right-[11%] md:top-[31%]"
      />
      <img
        src={vector4}
        alt=""
        className="w-[60px] md:w-32 absolute right-[13%] top-[26%] md:right-[7%] md:top-[15%]"
      />
    </div>
  );
};

export default DoctorInfoBanner;
