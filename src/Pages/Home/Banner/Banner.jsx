import Container from "../../../Shared/Container";
import doctor1 from "../../../assets/home/Doctor1.png";
import doctor2 from "../../../assets/home/Doctor2.png";
import doctor3 from "../../../assets/home/Doctor3.png";
import ellipse from "../../../assets/home/Ellipse1.png";
import smallDots from "../../../assets/home/SmallDots.png";
import vector1 from "../../../assets/home/Vector1.png";
import vector2 from "../../../assets/home/Vector2.png";
import vector3 from "../../../assets/home/Vector3.png";
import vector4 from "../../../assets/home/Vector4.png";

const Banner = () => {
  return (
    <Container>
      <section className="bg-[#07332F] text-white min-h-[670px] md:min-h-[800px]">
        <div className="px-[3%] relative md:flex items-center justify-between">
          <div className="font-semibold text-center flex flex-col justify-center md:text-left md:w-1/2 md:min-h-[800px]">
            <img
              src={vector1}
              alt=""
              className="absolute left-0 top-0 w-20 md:w-[250px]"
            />
            <h1 className="text-[30px] uppercase pt-32 md:text-7xl md:pt-0">
              Your best medical help center
            </h1>
            <p className="text-sm font-normal mt-4 mb-6 max-w-md md:text-lg md:font-semibold md:mt-5 md:mb-7">
              Lorem Ipsum is simply dummy text they are printing typesetting
              hasbeen the industry&apos;s stardard.
            </p>
            <div>
              <button className="text-xl font-bold bg-[#F7A582] rounded-[10px] py-[18px] px-[30px]">
                All Services
              </button>
            </div>
          </div>
          <div className="min-h-[150px] relative grid place-items-center md:w-1/2 md:min-h-[800px]">
            <img
              src={doctor1}
              alt=""
              className="absolute left-[4%] top-[34%] z-10 w-36 object-cover md:w-[280px]"
            />
            <img
              src={doctor2}
              alt=""
              className="absolute left-[25%] top-[76%] z-20 w-36 object-cover md:top-[50%] md:w-[280px]"
            />
            <img
              src={doctor3}
              alt=""
              className="absolute left-[46%] top-[30%] z-30 w-36 object-cover md:left-[47%] md:w-[280px]"
            />
            <img
              src={ellipse}
              alt=""
              className="hidden absolute bottom-[41%] md:inline-block"
            />
            <img
              src={smallDots}
              alt=""
              className="absolute left-[-5%] top-[98%] w-20 md:w-[150px] md:top-[60%]"
            />
            <img
              src={vector2}
              alt=""
              className="hidden absolute left-[-15%] top-[73%] md:inline-block"
            />
            <img
              src={vector3}
              alt=""
              className="hidden absolute left-[-19%] top-[36%] md:inline-block"
            />
            <img
              src={vector4}
              alt=""
              className="hidden absolute left-[-8%] top-[27%] md:inline-block"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Banner;
