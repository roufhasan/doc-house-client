import doctor4 from "../../../assets/home/Doctor4.png";
import teeth from "../../../assets/home/teeth.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Services.css";

const Services = () => {
  return (
    <section className="px-[3%] my-8 md:my-[130px] md:flex justify-between gap-6">
      <img src={doctor4} alt="" className="md:w-1/2 object-cover" />
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h1 className="font-bold text-[40px] text-center md:text-left">
          Our Services
        </h1>
        <p className="text-[#3B3A3A] max-w-md my-4 text-center md:text-left md:mt-5 md:mb-8">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <Tabs>
          <div className="mb-4 md:mb-[50px]">
            <TabList>
              <Tab>
                <h3 className="text-lg font-bold">Cavity Protection</h3>
              </Tab>
              <Tab>
                <h3 className="text-lg font-bold">Cosmetic Dentisty</h3>
              </Tab>
              <Tab>
                <h3 className="text-lg font-bold">Oral Surgery</h3>
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <div className="text-center md:text-left">
              <img src={teeth} alt="" className="w-full" />
              <p className="text-[30px] font-bold mt-8 mb-5">
                Electro Gastrology Therapy
              </p>
              <p className="text-[#3B3A3A] mb-[10px] max-w-[558px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inve ntore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error
              </p>
              <p className="text-[#3B3A3A] max-w-[558px]">
                Sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>
              <button className="text-[#F7A582] text-xl font-bold py-3 px-7 border border-[#F7A582] rounded-[10px] mt-5 hover:bg-[#F7A582] hover:text-white transition-all">
                More Details
              </button>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="hidden md:inline-block">Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
