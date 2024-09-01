import { Box, Flex, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

const VisitingCardText = ({ title, label }) => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box>
        <Flex align={"center"} justify={"space-between"} gap={10}>
          <Text w={"max-content"} fw={"bold"}>
            {t(title)}:
          </Text>
          <Text ta={"right"}>{label}</Text>
        </Flex>
      </Box>
    </>
  );
};

export default VisitingCardText;
