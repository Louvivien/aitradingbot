import React from "react";

import { Img, Line, Text } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="bg-white_A700 border border-gray_300 border-solid flex flex-col md:gap-10 gap-[67px] items-center justify-start sm:pr-5 pr-[30px] py-[30px] w-full">
          <div className="flex flex-row items-center justify-center w-[74%] md:w-full">
            <Img
              src="images/img_logo.png"
              className="h-10 md:h-auto object-cover w-10"
              alt="LOGO"
            />
            <Text
              className="font-bold font-inter ml-1 text-indigo_600 text-left w-auto"
              as="h2"
              variant="h2"
            >
              FirstBank
            </Text>
          </div>
          <div className="flex flex-col gap-[23px] justify-start mb-[294px] w-[92%] md:w-full">
            <div className="flex flex-col items-start justify-start ml-10 md:ml-[0] w-[81%] md:w-full">
              <div className="flex flex-row gap-5 items-start justify-start w-[87%] md:w-full">
                <Img
                  src="images/img_home_25X25.svg"
                  className="h-[25px] w-[25px]"
                  alt="home"
                />
                <Text
                  className="font-inter font-medium mt-1 text-bluegray_400 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-start justify-start mt-10 w-[98%] md:w-full">
                <Img
                  src="defaultNoData.png"
                  className="h-[25px] w-[25px]"
                  alt="transferOne"
                />
                <Text
                  className="font-inter font-medium mt-1 text-bluegray_400 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Transactions
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start mt-10 w-[79%] md:w-full">
                <Img
                  src="images/img_user.svg"
                  className="h-[25px] w-[25px]"
                  alt="user"
                />
                <Text
                  className="font-inter font-medium text-bluegray_400 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Accounts
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-start justify-start mt-10 w-[94%] md:w-full">
                <Img
                  src="images/img_map.svg"
                  className="h-[25px] w-[25px]"
                  alt="map"
                />
                <Text
                  className="font-inter font-medium mt-1 text-bluegray_400 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Investments
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start mt-[41px] w-[96%] md:w-full">
                <Img
                  src="images/img_file.svg"
                  className="h-[25px] w-[25px]"
                  alt="file"
                />
                <Text
                  className="font-inter font-medium text-bluegray_400 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Credit Cards
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start mt-[39px] w-[61%] md:w-full">
                <Img
                  src="images/img_question.svg"
                  className="h-[25px] w-[25px]"
                  alt="question"
                />
                <Text
                  className="font-inter font-medium text-bluegray_400 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Loans
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-start justify-start mt-10 w-3/4 md:w-full">
                <Img
                  src="images/img_service1.svg"
                  className="h-[25px] w-[25px]"
                  alt="serviceOne"
                />
                <Text
                  className="font-inter font-medium mt-1 text-bluegray_400 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  Services
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-end justify-start mt-10 w-full">
                <Img
                  src="images/img_lightbulb.svg"
                  className="h-[25px] w-[25px]"
                  alt="lightbulb"
                />
                <Text
                  className="font-inter font-medium mt-1.5 text-bluegray_400 text-left w-auto"
                  as="h5"
                  variant="h5"
                >
                  My Privileges
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start w-[74%] md:w-full">
              <Line className="bg-indigo_600 h-[60px] rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] w-1.5" />
              <Img
                src="images/img_settings_25X25.svg"
                className="h-[25px] ml-[34px] w-[25px]"
                alt="settings"
              />
              <Text
                className="font-inter font-medium ml-5 text-indigo_600 text-left w-auto"
                as="h5"
                variant="h5"
              >
                Setting
              </Text>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
