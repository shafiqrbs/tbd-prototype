import { Box, Flex, Text } from "@mantine/core";
import styles from "../../../../assets/css/BookingIndex.module.css";

const DoctorCard = ({ align, title, subTitle, subTitle2, icon }) => {
  return (
    <>
      <Box className={styles.box_border} p={10} w={"100%"} bg={"#ffeded"}>
        <Flex align={align} justify={"space-between"} gap={10}>
          <Box>
            <Text fw={"bold"} fz={"h5"}>
              {title}
            </Text>
            <Text>{subTitle}</Text>
            <Text display={subTitle2 ? "block" : "none"}>{subTitle2}</Text>
          </Box>
          <Box>{icon}</Box>
        </Flex>
      </Box>
    </>
  );
};

const DoctorCardWithButton = ({ align, title, subTitle, subTitle2, icon }) => {
  return (
    <>
      <Box>
        <Flex align={align} justify={"space-between"} gap={10}>
          <Box>
            <Text>{title}</Text>
            <Text>{subTitle}</Text>
            <Text display={subTitle2 ? "block" : "none"}>{subTitle2}</Text>
          </Box>
          <Box>{icon}</Box>
        </Flex>
      </Box>
    </>
  );
};

export default DoctorCard;
export { DoctorCardWithButton };
