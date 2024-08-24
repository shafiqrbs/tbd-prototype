import { Box, Flex, Text } from "@mantine/core";

const LeavesDetailsText = ({ justify, title, label }) => {
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

export default LeavesDetailsText;
