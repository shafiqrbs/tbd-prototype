import { Box, Button, Flex, Text } from "@mantine/core";
import React from "react";
import styles from "../../../../assets/css/BookingIndex.module.css";
import { IconBed } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const bookingAllData = [
  {
    icon: <IconBed />,
    header: "Balance",
    totalBalance: 1001150,
    buttonValue: "More",
  },
  {
    icon: <IconBed />,
    header: "Expense",
    totalBalance: 1001150,
    buttonValue: "More",
  },
  {
    icon: <IconBed />,
    header: "Diagnostic",
    totalBalance: 1001150,
    buttonValue: "More",
  },
  {
    icon: <IconBed />,
    header: "Admission",
    totalBalance: 1001150,
    buttonValue: "More",
  },
];

const DashboardCards = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box>
        <Box className={styles.grid_2}>
          {bookingAllData.map((data) => (
            <Box key={data.index} mb={"10px"}>
              <DashboardCard
                icon={data.icon}
                title={data.header}
                price={data.totalBalance}
                buttonValue={data.buttonValue}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export const DashboardCard = (props) => {
  const { title, icon, price, buttonValue } = props;
  return (
    <>
      <Box
        className={`${styles.dashboard_card_style}`}
        h={{ xl: 220, lg: 190 }}>
        <Flex
          className={styles.dashboard_card_header}
          w={"100%"}
          gap={"5px"}
          justify="center"
          align="flex-start"
          direction="row"
          bg={"#ff6b6b"}
          c={"white"}>
          <Text fz={{ xl: "h3", lg: "h5" }} fw={"bold"}>
            {title}
          </Text>
        </Flex>

        <Text fw={"bold"} className={styles.dashboard_icon}>
          {icon}
        </Text>
        <Text fw={"bold"} fz={{ xl: "h3", lg: "h6" }} mt={5} ta={"center"}>
          Total Balance: {price} BDT
        </Text>

        <Box ta={"center"}>
          <Button
            bg={"#40C057"}
            fz={{ xl: "h6", lg: "12px" }}
            px={5}
            mt={5}
            display={"inline-block"}>
            {buttonValue} ≫
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DashboardCards;