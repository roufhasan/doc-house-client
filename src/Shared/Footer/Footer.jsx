import { Link } from "react-router-dom";
import footerLogo from "../../assets/icon/footerLogo.png";

const Footer = () => {
  return (
    <footer className="px-[3%] py-8 md:pt-[130px] md:pb-[50px] bg-[#F3F3F3] text-center md:text-left">
      <div className="grid md:grid-cols-4 md:gap-[98px] gap-7">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-[10px]">
            <img
              src={footerLogo}
              alt="Doc house logo"
              className="w-[61px] h-[61px] object-cover"
            />
            <h1 className="text-[35px] text-[#F7A582] font-bold capitalize">
              doc <span className="text-[#07332F]">house</span>
            </h1>
          </div>
          <p className="my-6 md:my-[30px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. has been since the printer took.
          </p>
          <Link
            to="/"
            className="text-xl inline-block font-bold text-[#F7A582] border border-[#F7A582] rounded-[10px] py-[14px] px-[24px] hover:bg-[#f7a582] hover:text-white transition-all"
          >
            Appoinment
          </Link>
        </div>
        <div>
          <h3 className="mb-5 text-[25px] font-bold">Quick links</h3>
          <div className="flex flex-col gap-4 text-lg text-[#6C6B6B] font-semibold">
            <Link to="/">About Us</Link>
            <Link to="/">Service</Link>
            <Link to="/">Doctors</Link>
            <Link to="/">Departments</Link>
            <Link to="/">Online Payment</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">My Account</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-[25px] font-bold">Doc House Services</h3>
          <div className="flex flex-col gap-4 text-lg text-[#6C6B6B] font-semibold">
            <Link to="/">Pediatric Clinic</Link>
            <Link to="/">Diagnosis Clinic</Link>
            <Link to="/">Cardiac Clinic</Link>
            <Link to="/">Laboratory Analysis</Link>
            <Link to="/">Gynecological Clinic</Link>
            <Link to="/">Personal Counseling</Link>
            <Link to="/">Dental Clinic</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-[25px] font-bold">Working Hours</h3>
          <div className="flex flex-col gap-4 text-lg text-[#6C6B6B] font-semibold">
            <p>Monday - 10 am to 7 pm</p>
            <p>Tuesday - 10 am to 7 pm</p>
            <p>Wednesday - 10 am to 7 pm</p>
            <p>Thursday - 10 am to 7 pm</p>
            <p>Friday - 10 am to 7 pm</p>
            <p>Saturday - 10 am to 7 pm</p>
            <p>Sunday - 10 am to 7 pm</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#CECECE] my-8 md:mt-[70px] md:mb-[50px]"></div>
      <p className="text-[#6C6B6B] text-center text-lg">
        Copyright &copy; 2023 - All right reserved by Doc House Ltd
      </p>
    </footer>
  );
};

export default Footer;
