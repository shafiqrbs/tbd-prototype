import { Box, Tabs } from "@mantine/core";
import React from "react";
import BookingCard from "../common/BookingCard";
import styles from "../../../../assets/css/BookingIndex.module.css";
import { IconBed, IconFirstAidKit, IconHospital } from "@tabler/icons-react";
import { IconAmbulance } from "@tabler/icons-react";
import { IconActivityHeartbeat } from "@tabler/icons-react";
import { IconReportMedical } from "@tabler/icons-react";
import { IconVaccine } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const tabName = [
  {
    tabValue: "free",
    buttonValue: "Free",
  },
  {
    tabValue: "booked",
    buttonValue: "Booked",
  },
  {
    tabValue: "hold",
    buttonValue: "Hold",
  },
  {
    tabValue: "maintaince",
    buttonValue: "Maintaince",
  },
  {
    tabValue: "reserved",
    buttonValue: "Reserved",
  },
  {
    tabValue: "all",
    buttonValue: "All",
  },
];

const bookingAllData = [
  {
    title: "ICU - 301",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconAmbulance />,
    desc: "Single bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 303",
    icon: <IconActivityHeartbeat />,
    desc: "Double bed, no AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 304",
    icon: <IconFirstAidKit />,
    desc: "Single bed, no AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 305",
    icon: <IconReportMedical />,
    desc: "Double bed, Water Filter",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 306",
    icon: <IconVaccine />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "OT - 307",
    icon: <IconBed />,
    desc: "Single bed with AC",
    price: "700 taka",
    status: "Booked",
  },
  {
    title: "ICU - 308",
    icon: <IconAmbulance />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 309",
    icon: <IconActivityHeartbeat />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 310",
    icon: <IconFirstAidKit />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 311",
    icon: <IconReportMedical />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 312",
    icon: <IconVaccine />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 401",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    header: "booked",
    title: "ICU - 402",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Hold",
  },
  {
    title: "ICU - 403",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Maintaince",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Booked",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Booked",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Booked",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Booked",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Booked",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Booked",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Booked",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Hold",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Hold",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Hold",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Hold",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Hold",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Hold",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Hold",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Maintaince",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Maintaince",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Maintaince",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Maintaince",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Maintaince",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Reserved",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Reserved",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Reserved",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Reserved",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Reserved",
  },
  {
    title: "ICU - 312",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 312",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 312",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Hold",
  },
  {
    title: "ICU - 312",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Maintaince",
  },
  {
    title: "ICU - 312",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "hold",
  },
];

const NavTabs = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Tabs keepMounted={false} defaultValue="free">
        <Tabs.List
          className={`${styles.flex_box} ${styles.sticky_top_position}`}>
          {tabName.map((tabData) => {
            return (
              <TabButton
                key={tabData.index}
                tabValue={tabData.tabValue}
                buttonValue={t(`${tabData.buttonValue}`)}
                conditionalStyle={
                  tabData.tabValue === "free"
                    ? styles.free_bg
                    : tabData.tabValue === "booked"
                    ? styles.booked_bg
                    : tabData.tabValue === "hold"
                    ? styles.hold_bg
                    : tabData.tabValue === "maintaince"
                    ? styles.maintaince_bg
                    : tabData.tabValue === "reserved"
                    ? styles.reserved_bg
                    : ""
                }
              />
            );
          })}
        </Tabs.List>

        <Tabs.Panel value="free" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {bookingAllData
              .filter(
                (data) => data.status === "Free" || data.status === "free"
              )
              .map((data) => (
                <Box className={styles.free_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                    status={data.status}
                  />
                </Box>
              ))}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="booked" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {bookingAllData
              .filter(
                (data) => data.status === "Booked" || data.status === "booked"
              )
              .map((data) => {
                return (
                  <Box key={data.index} className={styles.booked_bg}>
                    <BookingCard
                      title={data.title}
                      icon={data.icon}
                      price={data.price}
                      desc={data.desc}
                      status={data.status}
                    />
                  </Box>
                );
              })}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="hold" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {bookingAllData
              .filter(
                (data) => data.status === "Hold" || data.status === "hold"
              )
              .map((data) => (
                <Box className={styles.hold_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                    status={data.status}
                  />
                </Box>
              ))}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="maintaince" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {bookingAllData
              .filter(
                (data) =>
                  data.status === "Maintaince" || data.status === "maintaince"
              )
              .map((data) => (
                <Box className={styles.maintaince_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                    status={data.status}
                  />
                </Box>
              ))}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="reserved" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {bookingAllData
              .filter(
                (data) =>
                  data.status === "Reserved" || data.status === "reserved"
              )
              .map((data) => (
                <Box className={styles.reserved_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                    status={data.status}
                  />
                </Box>
              ))}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="all" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {bookingAllData.map((data) => {
              return (
                <Box
                  className={
                    data.status == "Free" || data.status === "free"
                      ? styles.free_bg
                      : data.status == "Booked" || data.status === "booked"
                      ? styles.booked_bg
                      : data.status == "Hold" || data.status === "hold"
                      ? styles.hold_bg
                      : data.status == "Maintaince" ||
                        data.status === "maintaince"
                      ? styles.maintaince_bg
                      : data.status == "Reserved" || data.status === "reserved"
                      ? styles.reserved_bg
                      : ""
                  }
                  key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                    status={data.status}
                  />
                </Box>
              );
            })}
          </Box>
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

export const TabButton = (props) => {
  const { tabValue, buttonValue, conditionalStyle } = props;
  return (
    <Tabs.Tab value={tabValue} m={0} p={3} fz={14}>
      <button
        type="button"
        className={`${styles.button_style} ${conditionalStyle}`}>
        {buttonValue}
      </button>
    </Tabs.Tab>
  );
};

export default NavTabs;
