import { Box, Tabs } from "@mantine/core";
import BookingCard from "../common/BookingCard";
import styles from "../../../../assets/css/BookingIndex.module.css";
import { IconBed, IconFirstAidKit } from "@tabler/icons-react";
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
    title: "ICU - 302",
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
    title: "ICU - 302",
    icon: <IconActivityHeartbeat />,
    desc: "Double bed, no AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconFirstAidKit />,
    desc: "Single bed, no AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconReportMedical />,
    desc: "Double bed, Water Filter",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconVaccine />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconAmbulance />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconActivityHeartbeat />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconFirstAidKit />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconReportMedical />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconVaccine />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    title: "ICU - 302",
    icon: <IconBed />,
    desc: "Double bed with AC",
    price: "550 taka",
    status: "Free",
  },
  {
    header: "booked",
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
          className={`${styles.flex_box} ${styles.sticky_top_position} ${styles.z20}`}>
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

        {/* Render room cards based on selected tab */}
        {["free", "booked", "hold", "maintaince", "reserved", "all"].map(
          (tabValue) => (
            <Tabs.Panel key={tabValue} value={tabValue} mt={15}>
              <Box
                className={`${styles.all_card_wrapper} ${styles.tab_grid_2}`}>
                {bookingAllData
                  .filter((data) =>
                    tabValue === "all"
                      ? true
                      : data.status.toLowerCase() === tabValue
                  )
                  .map((data, index) => (
                    <Box
                      className={styles[data.status.toLowerCase() + "_bg"]}
                      key={index}
                      style={{
                        cursor:
                          data.status === "Free" ? "pointer" : "not-allowed",
                      }}>
                      <BookingCard
                        title={data.title}
                        icon={data.icon}
                        price={data.price}
                        desc={data.desc}
                        status={data.status}
                        button_bg={data.status === "Free" ? "#FF6B6B" : "gray"}
                        disabled={data.status !== "Free"}
                      />
                    </Box>
                  ))}
              </Box>
            </Tabs.Panel>
          )
        )}
      </Tabs>
    </>
  );
};

export const TabButton = (props) => {
  const { tabValue, buttonValue, conditionalStyle } = props;
  return (
    <Tabs.Tab value={tabValue} m={0} p={3}>
      <button
        type="button"
        className={`${styles.button_style} ${conditionalStyle} ${styles.tab_button}`}>
        {buttonValue}
      </button>
    </Tabs.Tab>
  );
};

export default NavTabs;
