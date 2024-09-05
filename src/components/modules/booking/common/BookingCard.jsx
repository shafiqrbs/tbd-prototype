import React from "react";
import { Box, Button, Text } from "@mantine/core";
import styles from "../../../../assets/css/BookingIndex.module.css";

const BookingCard = (props) => {
  const { title, icon, price, desc, status, onclick, button_bg, disabled } =
    props;
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
        <Button
          disabled={disabled}
          onClick={onclick}
          fw={"bold"}
          fz={"xs"}
          mt={5}
          bg={button_bg}
          c={"white"}
          p={"2px 20px"}>
          {status}
        </Button>
      </Box>
    </>
  );
};

export default BookingCard;
