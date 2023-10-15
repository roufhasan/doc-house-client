import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhoneOutgoing } from "react-icons/hi";

const Contact = () => {
  return (
    <section className="px-[3%] my-8 md:my-[130px]">
      <div className="bg-[#07332F] text-white md:flex justify-center gap-6 rounded-[10px] py-8 md:py-[100px]">
        <div className="text-center md:text-left px-6 md:px-0">
          <h1 className="text-[30px] mb-4 md:text-[40px] md:mb-5 capitalize font-bold">
            Contact with us
          </h1>
          <p className="mb-4 md:mb-[30px] max-w-[360px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi.
          </p>
          <div className="flex items-center gap-5 mb-5">
            <HiOutlinePhoneOutgoing size={30} /> <p>+88 01750 14 14 14</p>
          </div>
          <div className="flex items-center gap-5 mb-6 md:mb-0">
            <CiLocationOn size={30} /> <p>Dhanmondi, Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <form>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 px-[34px] md:px-0">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-white bg-opacity-5 w-full p-5 rounded-[10px] border border-transparent focus:border-white outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-white bg-opacity-5 w-full p-5 rounded-[10px] border border-transparent focus:border-white outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="bg-white bg-opacity-5 w-full p-5 rounded-[10px] border border-transparent focus:border-white outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="doctorName"
                  placeholder="Doctor Name"
                  className="bg-white bg-opacity-5 w-full p-5 rounded-[10px] border border-transparent focus:border-white outline-none"
                />
              </div>
              <div>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="bg-white bg-opacity-5 w-full p-5 rounded-[10px] border border-transparent focus:border-white outline-none"
                />
              </div>
              <div>
                <select
                  name="time"
                  className="bg-white bg-opacity-5 w-full p-5 pb-7 rounded-[10px] border border-transparent focus:border-white focus:text-black outline-none"
                >
                  <option value="09:00AM - 10:00AM">09:00 AM - 10:00 AM</option>
                  <option value="10:00AM - 11:00AM">10:00 AM - 11:00 AM</option>
                  <option value="11:00AM - 12:00PM">11:00 AM - 12:00 PM</option>
                </select>
                <input
                  type="submit"
                  value="Book Now"
                  className="bg-[#F7A582] w-full py-5 rounded-[10px] text-xl font-bold mt-4 md:mt-6 md:hidden cursor-pointer"
                />
              </div>
            </div>
            <input
              type="submit"
              value="Book Now"
              className="bg-[#F7A582] w-full py-5 rounded-[10px] text-xl font-bold mt-4 md:mt-6 hidden md:block cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
