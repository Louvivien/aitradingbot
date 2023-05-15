import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const InvestmentsPage = () => {
  const navigate = useNavigate();

  const [groupeightvalue, setGroupeightvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <aside className="flex flex-col md:hidden justify-start md:px-5 w-[250px]">
          <div className="bg-white_A700 flex flex-col gap-[50px] items-center justify-start py-[30px] w-full">
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
            <div className="flex flex-col items-start justify-start mb-[334px] w-full">
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
              <div className="flex flex-row gap-[34px] items-center justify-start w-[77%] md:w-full">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-center justify-start w-4/5">
                  <Img
                    src="images/img_upload.svg"
                    className="h-[25px] w-[25px]"
                    alt="upload"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-auto"
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
        <div className="flex flex-1 flex-col gap-[31px] items-center justify-start md:px-5 w-full">
          <div className="bg-white_A700 border border-gray_300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-5 w-full">
            <Text
              className="ml-5 md:ml-[0] text-gray_900 text-left w-auto"
              as="h1"
              variant="h1"
            >
              Investments
            </Text>
            <Input
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[433px] md:mt-0 my-[5px] w-[23%] md:w-full"
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
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[85%] md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_contrast_70X70.svg"
                      className="h-[31px]"
                      alt="contrast"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Total Invested Amount
                    </Text>
                    <Text
                      className="font-semibold text-indigo_600 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      $150,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[88%] md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_minimize.svg"
                      className="h-[30px]"
                      alt="minimize"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Number of Investments
                    </Text>
                    <Text
                      className="font-semibold text-indigo_600 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      1,250
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[65%] md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_reply.svg"
                      className="h-[30px]"
                      alt="reply"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Rate of Return
                    </Text>
                    <Text
                      className="font-semibold text-indigo_600 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      +5.80%
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <List
              className="sm:flex-col flex-row gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Yearly Total Investment
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[26px] sm:px-5 rounded-[25px] w-full">
                  <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-start mb-0.5 w-[99%] md:w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $40,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $30,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $20,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $10,000
                      </Text>
                      <Text
                        className="font-normal h-4 md:ml-[0] ml-[35px] not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $0
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:mt-0 mt-3.5 w-[88%] sm:w-full">
                      <div className="border border-dashed border-gray_103 h-px w-full"></div>
                      <div className="h-[161px] md:h-[167px] mt-1.5 relative w-full">
                        <div className="absolute bottom-[14%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                          <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                            <div className="border border-dashed border-gray_103 h-px w-full"></div>
                            <div className="border border-dashed border-gray_103 h-px w-full"></div>
                            <div className="border border-dashed border-gray_103 h-px w-full"></div>
                          </div>
                        </div>
                        <Img
                          src="images/img_statistics.svg"
                          className="absolute h-[161px] inset-[0] justify-center m-auto w-[92%]"
                          alt="Statistics"
                        />
                      </div>
                      <div className="border border-dashed border-gray_103 h-px mt-[22px] w-full"></div>
                      <div className="flex flex-row items-center justify-between mt-[7px] w-[96%] md:w-full">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2016
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2017
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2018
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2019
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2020
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2021
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Monthly Revenue
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[26px] sm:px-5 rounded-[25px] w-full">
                  <div className="flex sm:flex-col flex-row gap-[9px] items-start justify-start mb-0.5 w-[99%] md:w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $40,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $30,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $20,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[3px] not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $10,000
                      </Text>
                      <Text
                        className="font-normal ml-9 md:ml-[0] not-italic text-bluegray_400 text-left w-auto"
                        variant="body4"
                      >
                        $0
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start sm:mt-0 mt-3.5 w-[88%] sm:w-full">
                      <div className="border border-dashed border-gray_103 h-px w-full"></div>
                      <div className="h-[111px] md:h-[136px] mt-[25px] relative w-full">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[20%] w-full">
                          <div className="flex flex-col gap-[47px] items-center justify-start w-full">
                            <div className="border border-dashed border-gray_103 h-px w-full"></div>
                            <div className="border border-dashed border-gray_103 h-px w-full"></div>
                          </div>
                        </div>
                        <Img
                          src="images/img_vector6.svg"
                          className="absolute h-[111px] inset-[0] justify-center m-auto w-full"
                          alt="VectorSix"
                        />
                      </div>
                      <div className="border border-dashed border-gray_103 h-px mt-[7px] w-full"></div>
                      <div className="border border-dashed border-gray_103 h-px mt-[45px] w-full"></div>
                      <div className="flex flex-row items-center justify-between mt-[7px] w-[97%] md:w-full">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2016
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2017
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2018
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2019
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2020
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-auto"
                          variant="body4"
                        >
                          2021
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[58%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  My Investment
                </Text>
                <List
                  className="flex-col gap-[15px] grid items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img src="images/img_eye.svg" className="" alt="eye" />
                    </Button>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start ml-5 sm:ml-[0] w-auto sm:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Apple Store
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        E-commerce, Marketplace
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start ml-14 sm:ml-[0] w-auto sm:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $54,000
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Envestment Value
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start ml-11 sm:ml-[0] w-auto sm:w-full">
                      <Text
                        className="font-medium text-green_600 text-left w-auto"
                        variant="body1"
                      >
                        +16%
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Return Value
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_google.svg"
                        className=""
                        alt="google"
                      />
                    </Button>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start ml-5 sm:ml-[0] w-auto sm:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Samsung Mobile
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        E-commerce, Marketplace
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start ml-14 sm:ml-[0] w-auto sm:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $25,300
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Envestment Value
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start ml-11 sm:ml-[0] w-auto sm:w-full">
                      <Text
                        className="font-medium text-left text-red_700 w-auto"
                        variant="body1"
                      >
                        -4%
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Return Value
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center w-[60px]"
                      shape="icbRoundedBorder20"
                      size="lgIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_signal.svg"
                        className="h-[25px]"
                        alt="signal"
                      />
                    </Button>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start ml-5 sm:ml-[0] w-auto sm:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Tesla Motors
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Electric Vehicles
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start sm:ml-[0] ml-[127px] w-auto sm:w-full">
                      <Text
                        className="font-medium text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $8,200
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Envestment Value
                      </Text>
                    </div>
                    <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start ml-11 sm:ml-[0] w-auto sm:w-full">
                      <Text
                        className="font-medium text-green_600 text-left w-auto"
                        variant="body1"
                      >
                        +25%
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-auto"
                        variant="body2"
                      >
                        Return Value
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[41%] md:w-full">
                <Text
                  className="text-bluegray_900 text-left w-auto"
                  as="h3"
                  variant="h3"
                >
                  Trending Stock
                </Text>
                <div className="bg-white_A700 flex flex-col gap-[13px] items-start justify-end p-[25px] sm:px-5 rounded-[25px] w-full">
                  <div className="flex flex-col gap-2 items-start justify-start md:ml-[0] ml-[5px] mt-0.5 w-[98%] md:w-full">
                    <div className="flex flex-row items-center justify-start w-[96%] md:w-full">
                      <Text
                        className="font-medium text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        SL No
                      </Text>
                      <Text
                        className="font-medium ml-9 text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Name
                      </Text>
                      <Text
                        className="font-medium ml-[86px] text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Price
                      </Text>
                      <Text
                        className="font-medium ml-[65px] text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Return
                      </Text>
                    </div>
                    <Line className="bg-gray_103 h-px w-full" />
                  </div>
                  <List
                    className="flex-col gap-7 grid md:ml-[0] ml-[5px] w-[91%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        01.
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Trivago
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $520
                      </Text>
                      <Text
                        className="font-medium text-green_600 text-left w-auto"
                        variant="body1"
                      >
                        +5%
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        02.
                      </Text>
                      <Text
                        className="font-normal ml-[58px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Canon
                      </Text>
                      <Text
                        className="font-normal ml-[82px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $480
                      </Text>
                      <Text
                        className="font-medium ml-[63px] text-green_600 text-left w-auto"
                        variant="body1"
                      >
                        +10%
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[97%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        03.
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Uber Food
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $350
                      </Text>
                      <Text
                        className="font-medium text-left text-red_700 w-auto"
                        variant="body1"
                      >
                        -3%
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start w-[98%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        04.
                      </Text>
                      <Text
                        className="font-normal ml-[57px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Nokia
                      </Text>
                      <Text
                        className="font-normal ml-[88px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $940
                      </Text>
                      <Text
                        className="font-medium ml-[63px] text-green_600 text-left w-auto"
                        variant="body1"
                      >
                        +2%
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-start w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        05.
                      </Text>
                      <Text
                        className="font-normal ml-[58px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        Tiktok
                      </Text>
                      <Text
                        className="font-normal ml-[84px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $670
                      </Text>
                      <Text
                        className="font-medium ml-16 text-left text-red_700 w-auto"
                        variant="body1"
                      >
                        -12%
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestmentsPage;
