import { FaRegClock } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";

const InfoCards = () => {
  return (
    <section className="text-white px-[3%] grid md:grid-cols-3 gap-6">
      <div className="bg-[#07332F] rounded-[10px] flex justify-center gap-x-5 p-[30px] md:p-[50px] md:pr-[35px]">
        <FaRegClock className="text-[50px]" />
        <div>
          <p className="text-[25px] font-bold">Opening Hours</p>
          <p className="text-xl mt-[10px]">Open 9.00 am to 5.00pm Everyday</p>
        </div>
      </div>
      <div className="bg-[#F7A582] rounded-[10px] flex justify-center gap-x-5 p-[30px] md:p-[50px] md:pr-[35px]">
        <CiLocationOn className="text-[75px]" />
        <div>
          <p className="text-[25px] font-bold">Our Locations</p>
          <p className="text-xl mt-[10px]">
            Dhanmondi 17, Dhaka -1200, Bangladesh
          </p>
        </div>
      </div>
      <div className="bg-[#07332F] rounded-[10px] flex justify-center gap-x-5 p-[30px] md:p-[50px] md:pr-[35px]">
        <HiOutlinePhoneOutgoing className="text-[50px]" />
        <div>
          <p className="text-[25px] font-bold">Contact Us</p>
          <p className="text-xl mt-[10px]">+88 01750 00 00 00</p>
          <p className="text-xl">+88 01750 00 00 00</p>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
