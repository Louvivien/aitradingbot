import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Switch, Text } from "components";
import Sidebar from "components/Sidebar";

import { CloseSVG } from "../../assets/images";

const SettingPageSecurityPage = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="h-[1024px] md:hidden md:px-5 relative w-[18%] md:w-full" />
          <div className="flex md:flex-1 flex-col gap-[31px] items-center justify-start md:px-5 w-[83%] md:w-full">
            <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
              <Text
                className="ml-5 md:ml-[0] text-gray_900 text-left w-auto"
                as="h1"
                variant="h1"
              >
                Services
              </Text>
              <Input
                value={groupeightvalue}
                onChange={(e) => setGroupeightvalue(e)}
                wrapClassName="flex md:flex-1 md:ml-[0] ml-[482px] md:mt-0 my-[5px] w-[23%] md:w-full"
                className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_400 text-[15px] text-bluegray_400 text-left w-full"
                name="GroupEight"
                placeholder="Search for something"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer ml-[25px] mr-[15px] my-[15px]"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#888ea2"
                    className="cursor-pointer my-auto"
                    onClick={() => setGroupeightvalue("")}
                    style={{
                      visibility:
                        groupeightvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={20}
                    width={20}
                    viewBox="0 0 20 20"
                  />
                }
                shape="srcCircleBorder25"
                size="smSrc"
                variant="srcFillGray101"
              ></Input>
              <Button
                className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] rounded-[50%] w-[50px]"
                size="mdIcn"
                variant="icbFillGray102"
              >
                <Img
                  src="images/img_settings_50X50.svg"
                  className="h-[25px]"
                  alt="settings One"
                />
              </Button>
              <Button
                className="flex h-[50px] items-center justify-center md:ml-[0] ml-[30px] md:mt-0 my-[5px] rounded-[50%] w-[50px]"
                size="mdIcn"
                variant="icbFillGray102"
              >
                <Img
                  src="images/img_notification.svg"
                  className="h-[25px]"
                  alt="notification"
                />
              </Button>
              <Img
                src="images/img_ellipse1.png"
                className="h-[60px] md:h-auto md:ml-[0] ml-[35px] rounded-[50%] w-[60px]"
                alt="EllipseOne"
              />
            </div>
            <div className="bg-white_A700 flex flex-col items-start justify-end p-[30px] sm:px-5 rounded-[25px] w-[94%] md:w-full">
              <div className="flex flex-col justify-start mt-[7px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-4 md:ml-[0] w-2/5 md:w-full">
                  <Text
                    className="common-pointer font-medium text-bluegray_400 text-left w-auto"
                    variant="body1"
                    onClick={() => navigate("/settingeditprofile")}
                  >
                    Edit Profile
                  </Text>
                  <Text
                    className="common-pointer font-medium sm:ml-[0] ml-[72px] text-bluegray_400 text-left w-auto"
                    variant="body1"
                    onClick={() => navigate("/settingpagepreferences")}
                  >
                    Preferences
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start sm:ml-[0] ml-[51px] w-[28%] sm:w-full">
                    <Text
                      className="font-medium text-indigo_600 text-left w-auto"
                      variant="body1"
                    >
                      Security
                    </Text>
                    <Line className="bg-indigo_600 h-[3px] rounded-bl-none rounded-br-none rounded-tl-[10px] rounded-tr-[10px] w-full" />
                  </div>
                </div>
                <Line className="bg-gray_300 h-px w-full" />
              </div>
              <div className="flex flex-col gap-[19px] items-start justify-start mt-[37px] w-[39%] md:w-full">
                <Text
                  className="font-medium text-bluegray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Two-factor Authentication
                </Text>
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                  <Switch value={true} className="w-[14%]" />
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Enable or disable two factor authentication
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start mt-[27px] rounded-[15px] w-[49%] md:w-full">
                <Text
                  className="font-medium text-bluegray_900 text-left w-auto"
                  as="h6"
                  variant="h6"
                >
                  Change Password
                </Text>
                <div className="flex flex-col gap-[11px] items-start justify-start mt-4 rounded-[15px] w-full">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    Current Password
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                    name="Group195"
                    placeholder="Charlene@123"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray300"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start mt-[22px] rounded-[15px] w-full">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-auto"
                    variant="body1"
                  >
                    New Password
                  </Text>
                  <Input
                    wrapClassName="w-full"
                    className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                    name="Group195 One"
                    placeholder="Charlene@123"
                    shape="RoundedBorder15"
                    size="sm"
                    variant="OutlineGray300"
                  ></Input>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[190px] md:ml-[0] ml-[860px] mt-[30px] text-center text-lg text-white_A700 w-auto"
                shape="RoundedBorder15"
                size="lg"
                variant="FillIndigo600"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingPageSecurityPage;
