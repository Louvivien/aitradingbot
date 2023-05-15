import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LoanPage = () => {
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
              <div className="flex flex-row gap-[34px] items-center justify-start w-[55%] md:w-full">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-start justify-start w-[71%]">
                  <Img
                    src="images/img_question_25X25.svg"
                    className="h-[25px] w-[25px]"
                    alt="question"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-auto"
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
              Loan
            </Text>
            <Input
              value={groupeightvalue}
              onChange={(e) => setGroupeightvalue(e)}
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[533px] md:mt-0 my-[5px] w-[23%] md:w-full"
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
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-[99%] md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_user_70X70.svg"
                      className="h-[30px]"
                      alt="user One"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Personal Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      $50,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[21px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start my-1 w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_bag.svg"
                      className="h-[30px]"
                      alt="bag"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Corporate Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      $100,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_graph1.svg"
                      className="h-[30px]"
                      alt="graphOne"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Business Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      $500,000
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[21px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-3 items-center justify-start my-1 w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_airplane.svg"
                      className="h-[30px]"
                      alt="airplane"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Custom Loans
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_900 text-left w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Choose Money
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
              <Text
                className="text-bluegray_900 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Active Loans Overview
              </Text>
              <div className="bg-white_A700 flex flex-col gap-3 items-start justify-end p-[21px] sm:px-5 rounded-[25px] w-full">
                <List
                  className="flex-col gap-[15px] grid items-center md:ml-[0] ml-[9px] w-[99%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[94%] md:w-full">
                      <Text
                        className="font-medium text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        SL No
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[54px] text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Loan Money
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[74px] text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Left to repay
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[76px] text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Duration
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[105px] text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Interest rate
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[53px] text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Installment
                      </Text>
                      <Text
                        className="font-medium md:ml-[0] ml-[87px] text-bluegray_400 text-left w-auto"
                        variant="body1"
                      >
                        Repay
                      </Text>
                    </div>
                    <Line className="bg-gray_103 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        01.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[78px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $100,000
                      </Text>
                      <Text
                        className="font-normal ml-24 md:ml-[0] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        8 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[117px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-auto"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        02.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $500,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[94px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $250,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[100px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        36 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[89px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        10%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[116px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $8,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-auto"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        03.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[75px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $900,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[94px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        12 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[92px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[117px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $5,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-auto"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        04.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[75px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $50,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[104px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        25 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[90px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        5%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[124px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-auto"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        05.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $50,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[104px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $40,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[109px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        5 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        16%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[116px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $10,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[49px] text-[15px] text-center text-indigo_500 w-auto"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        06.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $80,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[104px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $25,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[110px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        14 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[91px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        8%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[124px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $2,000 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[57px] text-[15px] text-center text-indigo_500 w-auto"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        07.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[78px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $12,000
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[106px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $5,500
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[120px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        9 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        13%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[116px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $500 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[71px] text-[15px] text-center text-indigo_500 w-auto"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_105 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start rounded-[17.5px] w-[99%] md:w-full">
                      <Text
                        className="font-normal not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        08.
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[76px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $160,000
                      </Text>
                      <Text
                        className="font-normal ml-24 md:ml-[0] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $100,800
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[102px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        3 Months
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[99px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        12%
                      </Text>
                      <Text
                        className="font-normal md:ml-[0] ml-[117px] not-italic text-bluegray_900 text-left w-auto"
                        variant="body1"
                      >
                        $900 / month
                      </Text>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[100px] md:ml-[0] ml-[70px] text-[15px] text-center text-indigo_500 w-auto"
                        shape="RoundedBorder17"
                        size="sm"
                        variant="OutlineIndigo500"
                      >
                        Repay
                      </Button>
                    </div>
                    <Line className="bg-gray_103 h-px w-full" />
                  </div>
                </List>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[9px] mr-auto w-[84%] md:w-full">
                  <Text
                    className="font-medium text-left text-red_700 w-auto"
                    variant="body1"
                  >
                    Total
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[62px] text-left text-red_700 w-auto"
                    variant="body1"
                  >
                    $125,0000
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[85px] text-left text-red_700 w-auto"
                    variant="body1"
                  >
                    $750,000
                  </Text>
                  <Text
                    className="font-medium md:ml-[0] ml-[417px] text-left text-red_700 w-auto"
                    variant="body1"
                  >
                    $50,000 / month
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanPage;
