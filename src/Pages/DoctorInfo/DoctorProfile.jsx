import { Rating, Star } from "@smastrom/react-rating";
import "./DoctorProfile.css";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const DoctorProfile = ({ doctorInfo }) => {
  console.log(doctorInfo);
  const { images, name, speciality, rating, address, date, fees, _id } =
    doctorInfo;

  const { allImages } = images;

  const [bigImage, setBigImage] = useState(images.profileImg);

  const ratingStyles = {
    itemShapes: Star,
    activeFillColor: "#F2871D",
    inactiveFillColor: "#ffd0a2",
  };

  const hanldeImages = (index) => {
    setBigImage(allImages[index]);
  };
  return (
    <div className="bg-white mt-[130px] mb-[50px] rounded-[10px] md:flex gap-[30px] p-5 md:p-[35px]">
      <div>
        <img
          src={bigImage}
          alt=""
          className="w-[350px] h-96 object-cover object-top rounded-[10px]"
        />
      </div>
      <div>
        <h1 className="text-[40px] font-bold">{name}</h1>
        <p className="text-lg text-[#6C6B6B]">{speciality}</p>
        <Rating
          style={{ maxWidth: 180 }}
          value={rating}
          itemStyles={ratingStyles}
          readOnly
          className="my-3"
        />
        <div className="text-[#6C6B6B] flex items-center gap-5">
          <CiLocationOn size={19} /> {address}
        </div>
        <div className="flex gap-[15px] my-5">
          {allImages.map((images, index) => (
            <img
              onClick={() => hanldeImages(index)}
              key={_id}
              src={images}
              className={`w-20 h-20 rounded-[10px] object-cover object-top cursor-pointer`}
            />
          ))}
        </div>
        <div className="text-xl font-bold text-[#6C6B6B] flex gap-4 flex-wrap">
          <button className="py-3 px-6 border border-[#6C6B6B] rounded-[10px]">
            Dental Filling
          </button>
          <button className="py-3 px-6 border border-[#6C6B6B] rounded-[10px]">
            Teeth Whitneing
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
