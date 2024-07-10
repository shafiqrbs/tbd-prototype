import { Box, Tabs } from "@mantine/core";
import React from "react";
import BookingCard from "./BookingCard";
import styles from "../../../../assets/css/BookingIndex.module.css";
import { IconBed, IconFirstAidKit, IconHospital } from "@tabler/icons-react";
import { IconAmbulance } from "@tabler/icons-react";
import { IconActivityHeartbeat } from "@tabler/icons-react";
import { IconReportMedical } from "@tabler/icons-react";
import { IconVaccine } from "@tabler/icons-react";

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
const freeBed = [
  {
    header: "Free bed",
    title: "ICU - 302",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconAmbulance />,
    desc: "Single bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconActivityHeartbeat />,
    desc: "Double bed, no AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconFirstAidKit />,
    desc: "Single bed, no AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconReportMedical />,
    desc: "Double bed, Water Filter",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconVaccine />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    header: "Free bed",
    title: "ICU - 302",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconAmbulance />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconActivityHeartbeat />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconFirstAidKit />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconReportMedical />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconVaccine />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 302",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
];
const booked = [
  {
    header: "booked",
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 304",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
];
const hold = [
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 306",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
];
const maintaince = [
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
];
const reserved = [
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
  {
    title: "ICU - 308",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
  },
];
const all = [
  { ...freeBed },
  { ...booked },
  { ...hold },
  { ...maintaince },
  { ...reserved },
];

const NavTabs = () => {
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
                buttonValue={tabData.buttonValue}
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
            {freeBed.map((data) => {
              return (
                <Box
                  key={data.index}
                  className={
                    freeBed[0]?.header == "Free bed" ? styles.free_bg : ""
                  }>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                  />
                </Box>
              );
            })}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="booked" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {booked.map((data) => {
              return (
                <Box
                  key={data.index}
                  className={
                    booked[0]?.header == "booked"
                      ? styles.booked_bg
                      : styles.free_bg
                  }>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                  />
                </Box>
              );
            })}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="hold" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {hold.map((data) => {
              return (
                <Box className={styles.hold_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                  />
                </Box>
              );
            })}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="maintaince" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {maintaince.map((data) => {
              return (
                <Box className={styles.maintaince_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                  />
                </Box>
              );
            })}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="reserved" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {reserved.map((data) => {
              return (
                <Box className={styles.reserved_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                  />
                </Box>
              );
            })}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value="all" mt={15}>
          <Box className={styles.all_card_wrapper}>
            {freeBed.map((data) => {
              return (
                <Box className={styles.free_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                  />
                </Box>
              );
            })}
            {booked.map((data) => {
              return (
                <Box className={styles.booked_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                  />
                </Box>
              );
            })}
            {hold.map((data) => {
              return (
                <Box className={styles.hold_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                  />
                </Box>
              );
            })}
            {maintaince.map((data) => {
              return (
                <Box className={styles.maintaince_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
                  />
                </Box>
              );
            })}
            {maintaince.map((data) => {
              return (
                <Box className={styles.reserved_bg} key={data.index}>
                  <BookingCard
                    title={data.title}
                    icon={data.icon}
                    price={data.price}
                    desc={data.desc}
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
