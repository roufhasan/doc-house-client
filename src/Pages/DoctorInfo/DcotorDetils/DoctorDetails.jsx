import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./DoctorDetails.css";

const DoctorDetails = () => {
  return (
    <div className="md:p-[35px] bg-white rounded-[10px]">
      <Tabs>
        <div className="mb-4 md:mb-[50px]">
          <TabList>
            <Tab>
              <h3 className="text-lg font-bold">Overview</h3>
            </Tab>
            <Tab>
              <h3 className="text-lg font-bold">Locations</h3>
            </Tab>
            <Tab>
              <h3 className="text-lg font-bold">Reviews</h3>
            </Tab>
            <Tab>
              <h3 className="text-lg font-bold">Business Hours</h3>
            </Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="text-left text-[#3B3A3A] p-5 md:p-0">
            <p className="text-xl font-bold mb-[10px]">About Me</p>
            <p className="max-w-[90%] text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="md:flex gap-24 pr-[6%]">
              <div>
                {/* Education */}
                <div>
                  <p className="text-xl font-bold mt-[10px]">Education</p>
                  <ul className="list-disc pl-8">
                    <li className="mt-6">
                      <p className="font-bold">American Dental University</p>
                      <p className="my-1">BDS</p>
                      <p>1998 - 2003</p>
                    </li>
                    <li className="mt-2">
                      <p className="font-bold">American Dental University</p>
                      <p className="my-1">MDS</p>
                      <p>2003 - 2005</p>
                    </li>
                  </ul>
                </div>
                <div>
                  {/* Work & Experience */}
                  <div>
                    <p className="text-xl font-bold mt-10">Work & Experience</p>
                    <ul className="list-disc pl-8">
                      <li className="mt-6">
                        <p className="font-bold">
                          American Dental UniversityGlowing Smiles Family Dental
                          Clinic
                        </p>
                        <p>2010 - Present (5 years)</p>
                      </li>
                      <li className="mt-2">
                        <p className="font-bold">Comfort Care Dental Clinic</p>
                        <p>2007 - 2010 (3 years)</p>
                      </li>
                      <li className="mt-2">
                        <p className="font-bold">Dream Smile Dental Practice</p>
                        <p>2005 - 2007 (2 years)</p>
                      </li>
                    </ul>
                  </div>
                  {/* Services */}
                  <div>
                    <p className="text-xl font-bold mt-10">Services</p>
                    <ul className="list-disc pl-8">
                      <li className="mt-6">
                        <p>Tooth cleaning</p>
                      </li>
                      <lI>
                        <p>Root Canal Therapy</p>
                      </lI>
                      <lI>
                        <p>Implants</p>
                      </lI>
                      <lI>
                        <p>Composite Bonding</p>
                      </lI>
                      <lI>
                        <p>Fissure Sealants</p>
                      </lI>
                      <lI>
                        <p>Surgical Extractions</p>
                      </lI>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                {/* Awards */}
                <div>
                  <p className="text-xl font-bold mt-10 md:mt-[10px]">Awards</p>
                  <ul className="list-disc pl-8 mt-6">
                    <div>
                      <p className="mb-1">July 2019</p>
                      <li className="font-bold">Humanitarian Award</li>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                    <div className="my-10">
                      <p className="mb-1">March 2011</p>
                      <li className="font-bold">
                        Certificate for International Volunteer Service
                      </li>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                    <div>
                      <p className="mb-1">May 2008</p>
                      <li className="font-bold">
                        The Dental Professional of The Year Award
                      </li>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </p>
                    </div>
                  </ul>
                </div>
                {/* Specializations */}
                <div>
                  <p className="text-xl font-bold mt-10">Specializations</p>
                  <ul className="list-disc pl-8">
                    <li className="mt-6">
                      <p>Children Care</p>
                    </li>
                    <lI>
                      <p>Dental Care</p>
                    </lI>
                    <lI>
                      <p>Oral and Maxillofacial Surgery</p>
                    </lI>
                    <lI>
                      <p>Orthodontist</p>
                    </lI>
                    <lI>
                      <p>Periodontist</p>
                    </lI>
                    <lI>
                      <p>Prosthodontics</p>
                    </lI>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="hidden md:inline-block">Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2 className="hidden md:inline-block">Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default DoctorDetails;
