import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Testimonials.css";
import profile1Img from "../../../assets/home/profile1.jpg";
import profile2Img from "../../../assets/home/profile2.jpg";
import profile3Img from "../../../assets/home/profile3.jpg";
import profile4Img from "../../../assets/home/profile4.jpg";
import profile5Img from "../../../assets/home/profile5.jpg";

const Testimonials = () => {
  return (
    <section className="px-[3%] my-8 md:my-[130px]">
      <div className="text-center">
        <h1 className="text-[30px] mb-4 md:mb-5 md:text-[40px] font-bold">
          What our Patients Says
        </h1>
        <p className="text-[#3B3A3A] max-w-[900px] mx-auto mb-4 md:mb-[50px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={24}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border border-[#e6e6e6] rounded-[10px] p-7 md:p-[50px] md:pr-11">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <img
                    src={profile1Img}
                    alt=""
                    className="w-16 h-16 rounded-[50%] border border-[#F7A582]"
                  />
                  <div>
                    <h1 className="text-xl font-bold">Awlad Hossain</h1>
                    <p>Product Designer</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="42"
                  viewBox="0 0 54 42"
                  fill="none"
                  className="hidden md:block"
                >
                  <path
                    d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                    fill="#F7A582"
                  />
                  <path
                    d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                    fill="#F7A582"
                  />
                </svg>
              </div>
              <p className="mt-5 mb-5 md:mb-0">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknow printer tool a galley of
                type and scrambled it to make type specimen book has survived
                not only five centurines.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="42"
                viewBox="0 0 54 42"
                fill="none"
                className="block md:hidden"
              >
                <path
                  d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                  fill="#F7A582"
                />
                <path
                  d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                  fill="#F7A582"
                />
              </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#e6e6e6] rounded-[10px] p-7 md:p-[50px] md:pr-11">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <img
                    src={profile3Img}
                    alt=""
                    className="w-16 h-16 rounded-[50%] border border-[#F7A582]"
                  />
                  <div>
                    <h1 className="text-xl font-bold">John Doe</h1>
                    <p>Programmer</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="42"
                  viewBox="0 0 54 42"
                  fill="none"
                  className="hidden md:block"
                >
                  <path
                    d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                    fill="#F7A582"
                  />
                  <path
                    d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                    fill="#F7A582"
                  />
                </svg>
              </div>
              <p className="mt-5 mb-5 md:mb-0">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknow printer tool a galley of
                type and scrambled it to make type specimen book has survived
                not only five centurines.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="42"
                viewBox="0 0 54 42"
                fill="none"
                className="block md:hidden"
              >
                <path
                  d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                  fill="#F7A582"
                />
                <path
                  d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                  fill="#F7A582"
                />
              </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#e6e6e6] rounded-[10px] p-7 md:p-[50px] md:pr-11">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <img
                    src={profile4Img}
                    alt=""
                    className="w-16 h-16 rounded-[50%] border border-[#F7A582]"
                  />
                  <div>
                    <h1 className="text-xl font-bold">Farhana Hossain</h1>
                    <p>Brand Designer</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="42"
                  viewBox="0 0 54 42"
                  fill="none"
                  className="hidden md:block"
                >
                  <path
                    d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                    fill="#F7A582"
                  />
                  <path
                    d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                    fill="#F7A582"
                  />
                </svg>
              </div>
              <p className="mt-5 mb-5 md:mb-0">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknow printer tool a galley of
                type and scrambled it to make type specimen book has survived
                not only five centurines.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="42"
                viewBox="0 0 54 42"
                fill="none"
                className="block md:hidden"
              >
                <path
                  d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                  fill="#F7A582"
                />
                <path
                  d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                  fill="#F7A582"
                />
              </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#e6e6e6] rounded-[10px] p-7 md:p-[50px] md:pr-11">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <img
                    src={profile2Img}
                    alt=""
                    className="w-16 h-16 rounded-[50%] border border-[#F7A582]"
                  />
                  <div>
                    <h1 className="text-xl font-bold">Maurice III</h1>
                    <p>Toy Tester</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="42"
                  viewBox="0 0 54 42"
                  fill="none"
                  className="hidden md:block"
                >
                  <path
                    d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                    fill="#F7A582"
                  />
                  <path
                    d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                    fill="#F7A582"
                  />
                </svg>
              </div>
              <p className="mt-5 mb-5 md:mb-0">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknow printer tool a galley of
                type and scrambled it to make type specimen book has survived
                not only five centurines.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="42"
                viewBox="0 0 54 42"
                fill="none"
                className="block md:hidden"
              >
                <path
                  d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                  fill="#F7A582"
                />
                <path
                  d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                  fill="#F7A582"
                />
              </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-[#e6e6e6] rounded-[10px] p-7 md:p-[50px] md:pr-11">
              <div className="flex justify-between items-center">
                <div className="flex gap-5">
                  <img
                    src={profile5Img}
                    alt=""
                    className="w-16 h-16 rounded-[50%] border border-[#F7A582]"
                  />
                  <div>
                    <h1 className="text-xl font-bold">Siti Aishah</h1>
                    <p>Jungle Queen</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="42"
                  viewBox="0 0 54 42"
                  fill="none"
                  className="hidden md:block"
                >
                  <path
                    d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                    fill="#F7A582"
                  />
                  <path
                    d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                    fill="#F7A582"
                  />
                </svg>
              </div>
              <p className="mt-5 mb-5 md:mb-0">
                Lorem Ipsum has been the industry&apos;s standard dummy text
                ever since the 1500s, when an unknow printer tool a galley of
                type and scrambled it to make type specimen book has survived
                not only five centurines.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="42"
                viewBox="0 0 54 42"
                fill="none"
                className="block md:hidden"
              >
                <path
                  d="M52.418 3.16406H54V0H52.418C41.6106 0 32.7227 8.38055 31.9117 18.9844C31.8716 19.5064 31.8516 20.0338 31.8516 20.5664V41.1328H54V18.9844H35.0863C35.8889 10.1271 43.3561 3.16406 52.418 3.16406Z"
                  fill="#F7A582"
                />
                <path
                  d="M20.5664 3.16406H22.1484V0H20.5664C9.75902 0 0.871172 8.38055 0.0601172 18.9844C0.0200391 19.5064 0 20.0338 0 20.5664V41.1328H22.1484V18.9844H3.23473C4.03734 10.1271 11.5045 3.16406 20.5664 3.16406Z"
                  fill="#F7A582"
                />
              </svg>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
