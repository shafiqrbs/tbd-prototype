import React from "react";
import { Box, Text } from "@mantine/core";
import styles from "../../../../assets/css/BookingIndex.module.css";

const BookingCard = (props) => {
  const { title, icon, price, desc } = props;
  return (
    <>
      <Box
        className={`${styles.card_wrapper} ${styles.card_inner_style}`}
        h={150}>
        <Text>{title}</Text>
        <Box>{icon}</Box>
        <Text fz={"12px"}>{desc}</Text>
        <Text fw={"bold"} fz={"lg"} mt={5}>
          {price}
        </Text>
      </Box>
    </>
  );
};

export default BookingCard;
