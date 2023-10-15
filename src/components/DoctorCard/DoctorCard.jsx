import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { CiLocationOn, CiCalendar, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./DoctorCard.css";

const DoctorCard = ({ doctor }) => {
  const ratingStyles = {
    itemShapes: Star,
    activeFillColor: "#F2871D",
    inactiveFillColor: "#ffd0a2",
  };
  const { profileImg, name, speciality, rating, address, date, fees, _id } =
    doctor;
  return (
    <div className="border border-[#E6E6E6] rounded-[10px] p-5">
      <img
        src={profileImg}
        alt=""
        className="rounded-[10px] h-[190px] md:h-[258px] w-full object-cover object-top"
      />
      <h3 className="text-xl font-bold mt-5">{name}</h3>
      <p className="text-[#6C6B6B] mb-[10px]">{speciality}</p>
      <Rating
        style={{ maxWidth: 180 }}
        value={rating}
        itemStyles={ratingStyles}
        readOnly
      />
      <div className="w-full h-[1px] bg-[#F3F3F3] my-5"></div>
      <div>
        <div className="flex items-center gap-5 text-[#6C6B6B]">
          <CiLocationOn size={24} /> <p>{address}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5 text-[#6C6B6B] my-[10px]">
          <CiCalendar size={24} /> <p>{date}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-5 text-[#6C6B6B]">
          <CiDollar size={24} /> <p>{fees}</p>
        </div>
      </div>
      <Link
        to={`/doctors/${_id}`}
        className="text-xl font-bold text-[#F7A582] py-[14px] border border-[#F7A582] rounded-[10px] block text-center mt-5 hover:bg-[#F7A582] hover:text-white transition-all"
      >
        View Profile
      </Link>
    </div>
  );
};

export default DoctorCard;
