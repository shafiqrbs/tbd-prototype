import { Box, Flex, Text } from "@mantine/core";

const VisitingCardText = ({ title, label }) => {
  return (
    <>
      <Box>
        <Flex align={"center"} justify={"space-between"} gap={10}>
          <Text w={"max-content"} fw={"bold"}>
            {title}:
          </Text>
          <Text ta={"right"}>{label}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default VisitingCardText;
