import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MainDashboardPage = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto pb-[30px] w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[250px]">
          <div className="flex flex-col gap-[50px] items-center justify-start mb-[364px] mt-[30px] w-full">
            <Img
              src="images/img_logo.png"
              className="h-10 md:h-auto object-cover w-[65%]"
              alt="Logo"
            />
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-[34px] items-center justify-start w-[72%] md:w-full">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-center justify-start w-[78%]">
                  <Img
                    src="images/img_home.svg"
                    className="h-[25px] w-[25px]"
                    alt="home"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-auto"
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
              <div
                className="common-pointer flex flex-col items-start justify-start p-[17px] w-full"
                onClick={() => navigate("/creditcards")}
              >
                <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[23px] w-[72%] md:w-full">
                  <Img
                    src="images/img_file.svg"
                    className="h-[25px] w-[25px]"
                    alt="file"
                  />
                  <Text
                    className="font-medium text-bluegray_400 text-left w-auto"
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
              Overview
            </Text>
            <Input
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[471px] md:mt-0 my-[5px] w-[23%] md:w-full"
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
          <div className="flex flex-col gap-6 items-center justify-start w-[94%] md:w-full">
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-bluegray_900 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      My Cards
                    </Text>
                    <Text
                      className="common-pointer font-semibold text-bluegray_900 text-left w-auto"
                      as="h6"
                      variant="h6"
                      onClick={() => navigate("/creditcards")}
                    >
                      See All
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                    <div className="bg-indigo_600 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full">
                      <div className="flex flex-col gap-[29px] items-start justify-start w-[87%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="font-lato not-italic text-left text-white_A700 w-auto"
                              variant="body5"
                            >
                              Balance
                            </Text>
                            <Text
                              className="font-inter font-normal mt-1 not-italic text-left text-white_A700 w-auto"
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
                    <div className="bg-indigo_500 flex md:flex-1 flex-col gap-[33px] items-center justify-end pt-6 rounded-[25px] w-[48%] md:w-full">
                      <div className="flex flex-col gap-[29px] items-start justify-start w-[87%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="font-lato not-italic text-left text-white_A700 w-auto"
                              variant="body5"
                            >
                              Balance
                            </Text>
                            <Text
                              className="font-inter font-normal mt-1 not-italic text-left text-white_A700 w-auto"
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
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Recent Transaction
                </Text>
                <List
                  className="bg-white_A700 flex-col gap-2.5 grid items-center p-6 sm:px-5 rounded-[25px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button
                      className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_videocamera.svg"
                        className="h-7"
                        alt="videocamera"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[17px] w-auto">
                      <Text
                        className="font-medium text-bluegray_600 text-left w-auto"
                        variant="body1"
                      >
                        Deposit from my Card
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        28 January 2021
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[13px] text-left text-red_700 w-auto"
                      variant="body1"
                    >
                      -$850
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button
                      className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_link.svg"
                        className="h-7"
                        alt="link"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-center justify-start ml-[17px] w-auto">
                      <Text
                        className="font-medium text-bluegray_600 text-left w-auto"
                        variant="body1"
                      >
                        Deposit Paypal
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        25 January 2021
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-[46px] text-green_600 text-left w-auto"
                      variant="body1"
                    >
                      +$2,500
                    </Text>
                  </div>
                  <div className="flex flex-1 flex-row items-center justify-start w-full">
                    <Button
                      className="flex h-[55px] items-center justify-center rounded-[50%] w-[55px]"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_clock.svg"
                        className="h-7"
                        alt="clock"
                      />
                    </Button>
                    <div className="flex flex-col gap-[7px] items-start justify-start ml-[17px] w-auto">
                      <Text
                        className="font-medium text-bluegray_600 text-left w-auto"
                        variant="body1"
                      >
                        Jemi Wilson
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        21 January 2021
                      </Text>
                    </div>
                    <Text
                      className="font-medium ml-12 text-green_600 text-left w-auto"
                      variant="body1"
                    >
                      +$5,400
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[66%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Weekly Activity
                </Text>
                <div className="bg-white_A700 flex flex-col gap-[22px] items-end justify-start p-7 sm:px-5 rounded-[25px] w-full">
                  <div className="flex flex-row gap-[30px] items-center justify-end ml-auto w-[30%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[38%]">
                      <div className="bg-indigo_200 h-[15px] rounded-[50%] w-[15px]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Diposit
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[47%]">
                      <div className="bg-indigo_600 h-[15px] rounded-[50%] w-[15px]"></div>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Withdraw
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mr-0.5 w-[99%] md:w-full">
                    <div className="flex flex-col gap-[9px] justify-start w-full">
                      <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start w-auto md:w-full">
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-auto"
                            variant="body4"
                          >
                            500
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-auto"
                            variant="body4"
                          >
                            400
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-auto"
                            variant="body4"
                          >
                            300
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-auto"
                            variant="body4"
                          >
                            200
                          </Text>
                          <Text
                            className="font-normal not-italic text-bluegray_400 text-left w-auto"
                            variant="body4"
                          >
                            100
                          </Text>
                          <Text
                            className="font-normal ml-3.5 md:ml-[0] not-italic text-bluegray_400 text-left w-auto"
                            variant="body4"
                          >
                            0
                          </Text>
                        </div>
                        <Img
                          src="images/img_group899.svg"
                          className="h-[186px] w-auto"
                          alt="Group899"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-end ml-auto w-[84%] md:w-full">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          Sat
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[67px] not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          Sun
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[65px] not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          Mon
                        </Text>
                        <Text
                          className="font-normal sm:ml-[0] ml-[65px] not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          Tue
                        </Text>
                        <Text
                          className="font-normal ml-16 sm:ml-[0] not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          Wed
                        </Text>
                        <Text
                          className="font-normal ml-16 sm:ml-[0] not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          Thu
                        </Text>
                        <Text
                          className="font-normal h-4 sm:ml-[0] ml-[70px] not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          Fri
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[32%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Expense Statistics
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[31px] sm:px-5 rounded-[25px] w-full">
                  <div className="md:h-[186px] h-[259px] relative w-[94%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[129px] items-center justify-start left-[7%] p-[33px] sm:px-5 top-[0] w-auto"
                      style={{
                        backgroundImage: "url('images/img_group900.svg')",
                      }}
                    >
                      <Text
                        className="font-medium leading-[18.00px] mb-[22px] text-center text-white_A700"
                        variant="body4"
                      ></Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col h-[189px] items-center justify-start left-[0] p-3.5 w-auto"
                      style={{
                        backgroundImage: "url('images/img_group903.svg')",
                      }}
                    >
                      <Text
                        className="font-medium leading-[18.00px] my-[59px] text-center text-white_A700"
                        variant="body4"
                      ></Text>
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[102px] items-end justify-end p-1.5 right-[0] top-[11%] w-auto"
                      style={{
                        backgroundImage: "url('images/img_group901.svg')",
                      }}
                    >
                      <Text
                        className="font-medium leading-[18.00px] mr-[19px] mt-12 text-center text-white_A700"
                        variant="body4"
                      ></Text>
                    </div>
                    <div className="absolute bg-indigo_200 bottom-[0] flex flex-col h-[119px] items-center justify-start p-[23px] sm:px-5 right-[12%] w-[119px]">
                      <Text
                        className="font-medium leading-[18.00px] mb-[33px] text-center text-white_A700"
                        variant="body4"
                      ></Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[41%] md:w-full">
                <Text
                  className="text-bluegray_800 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Quick Transfer
                </Text>
                <div className="bg-white_A700 flex flex-col gap-[29px] items-center justify-center p-[25px] sm:px-5 rounded-[25px] w-full">
                  <div className="flex sm:flex-col flex-row gap-[33px] items-center justify-between mt-2.5 w-full">
                    <List
                      className="sm:flex-col flex-row gap-[30px] grid grid-cols-3 w-auto"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-full">
                        <Img
                          src="images/img_ellipse18.png"
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          alt="EllipseEighteen"
                        />
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="font-bold text-indigo_700 text-left w-auto"
                            variant="body1"
                          >
                            Livia Bator
                          </Text>
                          <Text
                            className="font-bold mt-[5px] text-bluegray_400 text-left w-auto"
                            variant="body2"
                          >
                            CEO
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-full">
                        <Img
                          src="images/img_ellipse19.png"
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          alt="EllipseNineteen"
                        />
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-auto"
                            variant="body1"
                          >
                            Randy Press
                          </Text>
                          <Text
                            className="font-normal mt-[5px] not-italic text-bluegray_400 text-left w-auto"
                            variant="body2"
                          >
                            Director
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[15px] items-center justify-start sm:ml-[0] w-full">
                        <Img
                          src="images/img_ellipse17.png"
                          className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                          alt="EllipseSeventeen"
                        />
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="font-normal not-italic text-bluegray_800 text-left w-auto"
                            variant="body1"
                          >
                            Workman
                          </Text>
                          <Text
                            className="font-normal mt-[5px] not-italic text-bluegray_400 text-left w-auto"
                            variant="body2"
                          >
                            Designer
                          </Text>
                        </div>
                      </div>
                    </List>
                    <Button
                      className="flex h-[50px] items-center justify-center mb-9 sm:mt-0 mt-[41px] rounded-[50%] w-[50px]"
                      size="mdIcn"
                      variant="icbOutlineGray300cc"
                    >
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="h-6"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between mb-2.5 w-full">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Write Amount
                    </Text>
                    <div className="bg-gray_102 flex sm:flex-1 flex-row items-center justify-between sm:pl-5 pl-[30px] rounded-[25px] w-[68%] sm:w-full">
                      <Text
                        className="font-bold text-indigo_700 text-left w-auto"
                        variant="body1"
                      >
                        525.50
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[125px] text-base text-center text-white_A700 w-auto"
                        shape="CircleBorder25"
                        size="lg"
                        variant="OutlineGray300cc"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-[58%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Balance History
                </Text>
                <div className="bg-white_A700 md:h-[205px] h-[276px] sm:h-[349px] p-5 relative rounded-[25px] w-full">
                  <Img
                    src="images/img_group.svg"
                    className="h-[185px] ml-auto mr-[5px] mt-[15px] w-[87%]"
                    alt="Group"
                  />
                  <div className="absolute md:h-[205px] h-[216px] sm:h-[349px] inset-[0] justify-center m-auto w-[93%] sm:w-full">
                    <div className="absolute flex flex-col items-start justify-start left-[0] pl-[3px] top-[0] w-[8%]">
                      <div className="flex flex-row gap-2 items-end justify-between ml-auto w-[95%] md:w-full">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          800
                        </Text>
                        <div className="bg-bluegray_400 h-px my-1 w-[16%]"></div>
                      </div>
                      <div className="flex flex-row gap-2 items-end justify-between ml-auto mt-[35px] w-[95%] md:w-full">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          600
                        </Text>
                        <div className="bg-bluegray_400 h-px my-1 w-[16%]"></div>
                      </div>
                      <div className="flex flex-row gap-2 items-end justify-between ml-auto mt-9 w-[98%] md:w-full">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          400
                        </Text>
                        <div className="bg-bluegray_400 h-px my-1 w-[16%]"></div>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-between ml-auto mt-[35px] w-[93%] md:w-full">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          200
                        </Text>
                        <div className="bg-bluegray_400 h-px my-[5px] w-[17%]"></div>
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-end ml-auto mt-[34px] w-[56%] md:w-full">
                        <Text
                          className="not-italic text-bluegray_400 text-left w-auto"
                          variant="body5"
                        >
                          0
                        </Text>
                        <div className="bg-bluegray_400 h-px my-1 w-[28%]"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-col items-start justify-start right-[0] w-[93%]">
                      <Img
                        src="images/img_vector.png"
                        className="h-[177px] md:h-auto object-cover w-full"
                        alt="Vector Five"
                      />
                      <div className="flex flex-col items-center justify-start mt-1 w-[91%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[95%] md:w-full">
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-1 w-[1%]"
                              alt="Group One"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-1 sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Two"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-1 sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Three"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-1 sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Four"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-1 sm:ml-[0] ml-[79px] w-[1%]"
                              alt="Group Five"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-1 sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Six"
                            />
                            <Img
                              src="images/img_group_bluegray_400.svg"
                              className="h-1 sm:ml-[0] ml-[78px] w-[1%]"
                              alt="Group Seven"
                            />
                          </div>
                          <div className="flex flex-row items-center justify-between mt-[3px] w-full">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body3"
                            >
                              Jul
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body3"
                            >
                              Aug
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body3"
                            >
                              Sep
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body3"
                            >
                              Oct
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body3"
                            >
                              Nov{" "}
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body3"
                            >
                              Dec
                            </Text>
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-auto"
                              variant="body3"
                            >
                              Jan
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboardPage;
