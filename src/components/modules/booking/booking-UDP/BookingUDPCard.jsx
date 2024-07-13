import React from "react";
import { Box, Text } from "@mantine/core";
import styles from "../../../../assets/css/BookingUDPIndex.module.css";

const BookingUDPCard = (props) => {
  const { title, icon, price, desc, status } = props;
  return (
    <>
      <Box
        className={`${styles.card_wrapper} ${styles.card_inner_style}`}
        h={170}>
        <Text fz={"md"}>{title}</Text>
        <Box>{icon}</Box>
        <Text fz={"12px"}>{desc}</Text>
        <Text fw={"bold"} fz={"md"} mt={5}>
          {price}
        </Text>
        <Text
          fw={"bold"}
          fz={"xs"}
          mt={5}
          bg={"rgb(100 116 139)"}
          c={"white"}
          p={"2px 10px"}>
          {status}
        </Text>
      </Box>
    </>
  );
};

export default BookingUDPCard;
