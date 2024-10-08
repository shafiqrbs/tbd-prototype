import { Box, Flex, Text } from "@mantine/core";
import React from "react";

const VisitingCardText = ({ justify, title, label }) => {
  return (
    <>
      <Box ta={"right"}>
        <Flex align={"center"} justify={justify} gap={10} fw={"bold"}>
          {title}:<Text>{label}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default VisitingCardText;
