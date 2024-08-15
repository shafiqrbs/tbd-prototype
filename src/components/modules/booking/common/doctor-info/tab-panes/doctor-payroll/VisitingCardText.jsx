import { Box, Flex, Text } from "@mantine/core";
import React from "react";

const VisitingCardText = ({ title, label }) => {
  return (
    <>
      <Box ta={"right"}>
        <Flex align={"center"} justify={"flex-end"} gap={10} fw={"bold"}>
          {title}:<Text>{label}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default VisitingCardText;
