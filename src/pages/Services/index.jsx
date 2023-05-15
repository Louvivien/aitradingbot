import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const ServicesPage = () => {
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
              <div className="flex flex-row gap-[34px] items-center justify-start w-[64%] md:w-full">
                <Line className="bg-indigo_600 h-[60px] rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] w-1.5" />
                <div className="flex flex-row gap-5 items-center justify-start w-3/4">
                  <Img
                    src="images/img_call.svg"
                    className="h-[25px] w-[25px]"
                    alt="call"
                  />
                  <Text
                    className="font-medium text-indigo_600 text-left w-auto"
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
          <div className="flex flex-col gap-6 items-center justify-start w-[94%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-[82%] md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_location.svg"
                      className="h-[30px]"
                      alt="location"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-semibold text-indigo_600 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Life Insurance
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Unlimited protection
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-3/4 md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_bag_70X70.svg"
                      className="h-[30px]"
                      alt="bag"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-semibold text-indigo_600 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Shopping
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      Buy. Think. Grow.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-start justify-start sm:ml-[0] p-[25px] sm:px-5 rounded-[25px] w-full">
                <div className="flex flex-row gap-[22px] items-center justify-start w-3/4 md:w-full">
                  <Button
                    className="flex h-[70px] items-center justify-center rounded-[50%] w-[70px]"
                    size="xlIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[30px]"
                      alt="checkmark"
                    />
                  </Button>
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="font-semibold text-indigo_600 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Safety
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body1"
                    >
                      We are your allies
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="flex flex-col gap-7 items-start justify-start w-full">
              <Text
                className="text-bluegray_900 text-left w-auto"
                as="h3"
                variant="h3"
              >
                Bank Services List
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
                      src="images/img_question_60X60.svg"
                      className="h-[25px]"
                      alt="question One"
                    />
                  </Button>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Business loans
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] text-[15px] text-center text-indigo_500 w-auto"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    View Details
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="icbRoundedBorder20"
                    size="lgIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_bag.svg"
                      className="h-[25px]"
                      alt="bag One"
                    />
                  </Button>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Checking accounts
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] text-[15px] text-center text-indigo_500 w-auto"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    View Details
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="icbRoundedBorder20"
                    size="lgIcn"
                    variant="icbFillGray102"
                  >
                    <Img src="images/img_graph1.svg" className="" alt="Group" />
                  </Button>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Savings accounts
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] text-[15px] text-center text-indigo_500 w-auto"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    View Details
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="icbRoundedBorder20"
                    size="lgIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_user_70X70.svg"
                      className="h-[25px]"
                      alt="user One"
                    />
                  </Button>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Debit and credit cards
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[73px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] text-[15px] text-center text-indigo_500 w-auto"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    View Details
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="icbRoundedBorder20"
                    size="lgIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_checkmark_60X60.svg"
                      className="h-[25px]"
                      alt="checkmark One"
                    />
                  </Button>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Life Insurance
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] text-[15px] text-center text-indigo_500 w-auto"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    View Details
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[15px] rounded-[20px] w-full">
                  <Button
                    className="flex h-[60px] items-center justify-center w-[60px]"
                    shape="icbRoundedBorder20"
                    size="lgIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_question_60X60.svg"
                      className="h-[25px]"
                      alt="question Two"
                    />
                  </Button>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start ml-5 md:ml-[0] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Business loans
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      It is a long established{" "}
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[85px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[82px] w-auto md:w-full">
                    <Text
                      className="font-medium text-bluegray_900 text-left w-auto"
                      variant="body1"
                    >
                      Lorem Ipsum
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-auto"
                      variant="body2"
                    >
                      Many publishing
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[150px] ml-20 md:ml-[0] text-[15px] text-center text-indigo_500 w-auto"
                    shape="RoundedBorder17"
                    size="sm"
                    variant="OutlineIndigo500"
                  >
                    View Details
                  </Button>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
