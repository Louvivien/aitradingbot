import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CreditCardsPage = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto pb-[30px] w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[250px]">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[364px] mt-[30px] w-full">
            <div className="flex flex-row items-center justify-center w-[65%] md:w-full">
              <Img
                src="images/img_logo_indigo_600.png"
                className="h-10 md:h-auto object-cover w-10"
                alt="LOGO"
              />
              <Text
                className="font-bold ml-1 text-indigo_600 text-left w-auto"
                as="h2"
                variant="h2"
              >
                FirstBank
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[65%] md:w-full">
                  <Img
                    src="images/img_home_25X25.svg"
                    className="h-[25px] w-[25px]"
                    alt="home"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Dashboard
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/transaction")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[73%] md:w-full">
                  <Img
                    src="images/img_glyph.svg"
                    className="h-[25px] w-[25px]"
                    alt="Glyph"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Transactions
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/accounts")}
              >
                <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[59%] md:w-full">
                  <Img
                    src="images/img_user.svg"
                    className="h-[25px] w-[25px]"
                    alt="user"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Accounts
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/investments")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[70%] md:w-full">
                  <Img
                    src="images/img_map.svg"
                    className="h-[25px] w-[25px]"
                    alt="map"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Investments
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-[34px] items-center justify-start w-[78%] md:w-full">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-center justify-start w-4/5">
                  <Img
                    src="images/img_file_1.svg"
                    className="h-[25px] w-[25px]"
                    alt="file"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Credit Cards
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/loan")}
              >
                <div className="flex flex-row gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[45%] md:w-full">
                  <Img
                    src="images/img_question.svg"
                    className="h-[25px] w-[25px]"
                    alt="question"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Loans
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/services")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[56%] md:w-full">
                  <Img
                    src="images/img_service1.svg"
                    className="h-[25px] w-[25px]"
                    alt="serviceOne"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Services
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start p-[17px] w-full">
                <div className="flex flex-row gap-5 items-center justify-center w-3/4 md:w-full">
                  <Img
                    src="images/img_lightbulb.svg"
                    className="h-[25px] w-[25px]"
                    alt="lightbulb"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    My Privileges
                  </Text>
                </div>
              </div>
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/settingeditprofile")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-1/2 md:w-full">
                  <Img
                    src="images/img_settings.svg"
                    className="h-[25px] w-[25px]"
                    alt="settings"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
                    as="h5"
                    variant="h5"
                  >
                    Setting
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
          <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
            <Text
              className="ml-5 md:ml-[0] text-gray_900 text-left w-auto"
              as="h1"
              variant="h1"
            >
              Credit Cards
            </Text>
            <Input
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[429px] md:mt-0 my-[5px] w-[23%] md:w-full"
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
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start w-full">
              <Text
                className="text-bluegray_900 text-left w-auto"
                as="h3"
                variant="h3"
              >
                My Cards
              </Text>
              <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                <div className="bg-indigo_600 flex flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-full">
                  <div className="flex flex-col gap-7 items-start justify-start w-[87%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="not-italic text-left text-white_A700 w-auto"
                          variant="body5"
                        >
                          Balance
                        </Text>
                        <Text
                          className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $5,756
                        </Text>
                      </div>
                      <Img
                        src="images/img_chipcard.png"
                        className="h-[34px] md:h-auto object-cover w-[34px]"
                        alt="ChipCard"
                      />
                    </div>
                    <div className="flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-auto"
                          variant="body5"
                        >
                          CARD HOLDER
                        </Text>
                        <Text
                          className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                          variant="body2"
                        >
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-auto"
                          variant="body5"
                        >
                          VALID THRU
                        </Text>
                        <Text
                          className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                          variant="body2"
                        >
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Input
                    wrapClassName="flex w-full"
                    className="font-normal leading-[normal] md:text-xl not-italic p-0 placeholder:text-white_A700 sm:text-lg text-[22px] text-left text-white_A700 w-full"
                    name="Group319"
                    placeholder="3778 **** **** 1234"
                    suffix={
                      <Img
                        src="images/img_contrast.svg"
                        className="ml-[35px] mr-6 my-5"
                        alt="contrast"
                      />
                    }
                    shape="CustomBorderBL25"
                    size="lg"
                    variant="GradientWhiteA70026WhiteA70026"
                  ></Input>
                </div>
                <div className="bg-indigo_500 flex flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-full">
                  <div className="flex flex-col gap-7 items-start justify-start w-[87%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="not-italic text-left text-white_A700 w-auto"
                          variant="body5"
                        >
                          Balance
                        </Text>
                        <Text
                          className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $5,756
                        </Text>
                      </div>
                      <Img
                        src="images/img_chipcard.png"
                        className="h-[34px] md:h-auto object-cover w-[34px]"
                        alt="ChipCard One"
                      />
                    </div>
                    <div className="flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-auto"
                          variant="body5"
                        >
                          CARD HOLDER
                        </Text>
                        <Text
                          className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                          variant="body2"
                        >
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-auto"
                          variant="body5"
                        >
                          VALID THRU
                        </Text>
                        <Text
                          className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                          variant="body2"
                        >
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Input
                    wrapClassName="flex w-full"
                    className="font-normal leading-[normal] md:text-xl not-italic p-0 placeholder:text-white_A700 sm:text-lg text-[22px] text-left text-white_A700 w-full"
                    name="Group319 One"
                    placeholder="3778 **** **** 1234"
                    suffix={
                      <Img
                        src="images/img_contrast.svg"
                        className="ml-[35px] mr-6 my-5"
                        alt="contrast"
                      />
                    }
                    shape="CustomBorderBL25"
                    size="lg"
                    variant="GradientWhiteA70026WhiteA70026"
                  ></Input>
                </div>
                <div className="bg-indigo_300 border border-gray_103 border-solid flex flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-full">
                  <div className="flex flex-col gap-7 items-start justify-start w-[87%] md:w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="not-italic text-left text-white_A700 w-auto"
                          variant="body5"
                        >
                          Balance
                        </Text>
                        <Text
                          className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                          as="h4"
                          variant="h4"
                        >
                          $5,756
                        </Text>
                      </div>
                      <Img
                        src="images/img_chipcard.png"
                        className="h-[34px] md:h-auto object-cover w-[34px]"
                        alt="ChipCard Two"
                      />
                    </div>
                    <div className="flex flex-row gap-[59px] items-center justify-start ml-0.5 md:ml-[0] w-[76%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-auto"
                          variant="body5"
                        >
                          CARD HOLDER
                        </Text>
                        <Text
                          className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                          variant="body2"
                        >
                          Eddy Cusuma
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="not-italic text-left text-white_A700_b2 w-auto"
                          variant="body5"
                        >
                          VALID THRU
                        </Text>
                        <Text
                          className="font-normal mt-1 not-italic text-left text-white_A700 w-auto"
                          variant="body2"
                        >
                          12/22
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Input
                    wrapClassName="flex w-full"
                    className="font-normal leading-[normal] md:text-xl not-italic p-0 placeholder:text-white_A700 sm:text-lg text-[22px] text-left text-white_A700 w-full"
                    name="Group319 Two"
                    placeholder="3778 **** **** 1234"
                    suffix={
                      <Img
                        src="images/img_contrast.svg"
                        className="ml-[35px] mr-6 my-5"
                        alt="contrast"
                      />
                    }
                    shape="CustomBorderBL25"
                    size="lg"
                    variant="GradientWhiteA70026WhiteA70026"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-[25px] w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Card Expense Statistics
                </Text>
                <div className="bg-white_A700 flex flex-col gap-4 items-center justify-end p-7 sm:px-5 rounded-[25px] w-full">
                  <Img
                    src="images/img_group346chart.svg"
                    className="h-[186px] mt-0.5 w-[64%]"
                    alt="Group346Chart"
                  />
                  <List
                    className="flex-col gap-3.5 grid items-center w-[86%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-center justify-between w-[99%] md:w-full">
                      <div className="flex flex-row gap-3 items-start justify-start w-[39%]">
                        <div className="bg-indigo_100 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-auto"
                          variant="body2"
                        >
                          DBL Bank
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-start w-2/5">
                        <div className="bg-indigo_500 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-auto"
                          variant="body2"
                        >
                          BRC Bank
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row gap-3 items-start justify-start w-[41%]">
                        <div className="bg-indigo_600 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-auto"
                          variant="body2"
                        >
                          ABM Bank
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-start justify-start w-[41%]">
                        <div className="bg-indigo_200 h-[15px] rounded-[50%] w-[15px]"></div>
                        <Text
                          className="font-medium text-bluegray_400 text-left w-auto"
                          variant="body2"
                        >
                          MCP Bank
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Card List
                </Text>
                <List
                  className="flex-col gap-5 grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[26px]"
                        alt="file One"
                      />
                    </Button>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Secondary
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Bank
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        DBL Bank
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start ml-11 md:ml-[0] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        **** **** 5600
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[47px] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        William{" "}
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] text-indigo_500 text-left w-auto"
                      variant="body2"
                    >
                      View Details
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[26px]"
                        alt="file Two"
                      />
                    </Button>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Secondary
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Bank
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        BRC Bank
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[43px] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        **** **** 4300
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[46px] w-auto md:w-full">
                      <Text
                        className="font-medium text-indigo_600 text-left w-auto"
                        variant="body1"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Michel
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] text-indigo_500 text-left w-auto"
                      variant="body2"
                    >
                      View Details
                    </Text>
                  </div>
                  <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_file_1.svg"
                        className="h-[26px]"
                        alt="file Three"
                      />
                    </Button>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start md:ml-[0] ml-[15px] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Secondary
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[43px] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Bank
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        ABM Bank
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start ml-10 md:ml-[0] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        **** **** 7560
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start ml-12 md:ml-[0] w-auto md:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Namain Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Edward
                      </Text>
                    </div>
                    <Text
                      className="font-medium md:ml-[0] ml-[34px] text-indigo_500 text-left w-auto"
                      variant="body2"
                    >
                      View Details
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between mt-6 w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Add New Card
                </Text>
                <div className="bg-white_A700 flex flex-col items-start justify-start p-[27px] sm:px-5 rounded-[25px] w-full">
                  <Text
                    className="font-normal leading-[28.00px] md:ml-[0] ml-[3px] not-italic text-bluegray_400 text-left w-[94%] sm:w-full"
                    variant="body1"
                  >
                    Credit Card generally means a plastic card issued by
                    Scheduled Commercial Banks assigned to a Cardholder, with a
                    credit limit, that can be used to purchase goods and
                    services on credit or obtain cash advances.
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[3px] mt-[29px] rounded-[15px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Card Type
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                        name="Group195"
                        placeholder="Classic"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Name On Card
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                        name="Group195 One"
                        placeholder="My Cards"
                        shape="RoundedBorder15"
                        size="sm"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between md:ml-[0] ml-[3px] mt-[22px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start rounded-[15px] w-[48%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Input
                        wrapClassName="w-full"
                        className="font-normal leading-[normal] not-italic p-0 placeholder:text-bluegray_900 text-[15px] text-bluegray_900 text-left w-full"
                        type="password"
                        name="Group195 Two"
                        placeholder="**** **** **** ****"
                        shape="RoundedBorder15"
                        size="md"
                        variant="OutlineGray300"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[48%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Expiration Date
                      </Text>
                      <SelectBox
                        className="font-normal leading-[normal] not-italic text-[15px] text-bluegray_900 text-left w-full"
                        placeholderClassName="text-bluegray_900"
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="h-6 mr-[19px] w-6"
                            alt="arrow_down"
                          />
                        }
                        size="sm"
                        isSearchable={false}
                        placeholder="25 January 2025"
                        shape="RoundedBorder15"
                        isMulti={false}
                        options={dateOptionsList}
                        name="date"
                        variant="OutlineGray300"
                      />
                    </div>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] mb-[11px] min-w-[160px] md:ml-[0] ml-[3px] mt-[30px] text-center text-lg text-white_A700 w-auto"
                    shape="RoundedBorder10"
                    size="lg"
                    variant="FillIndigo600"
                  >
                    Add Card
                  </Button>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Card Setting
                </Text>
                <List
                  className="bg-white_A700 flex-col gap-5 grid items-center p-[30px] sm:px-5 rounded-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[88%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_videocamera_60X60.svg"
                        className="h-[25px]"
                        alt="videocamera"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Block Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Instantly block your card
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[90%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_lock.svg"
                        className="h-[25px]"
                        alt="lock"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Change Pin Code
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Choose another pin code
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[94%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_google_60X60.svg"
                        className="h-[25px]"
                        alt="google"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Add to Google Pay
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Withdraw without any card
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[94%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_maximize.svg"
                        className="h-[25px]"
                        alt="maximize"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Add to Apple Pay
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Withdraw without any card
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-5 items-center justify-start w-[94%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_maximize.svg"
                        className="h-[25px]"
                        alt="maximize One"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Add to Apple Store
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Withdraw without any card
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditCardsPage;
