import { Box, Button, Drawer, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../../../../assets/css/BookingIndex.module.css";
import { useTranslation } from "react-i18next";
import PatientSidebar from "./PatientSidebar";
import PatientNavTabs from "./PatientNavTabs";

const PatientInfo = () => {
  const { t, i18n } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        className={`${styles.mantine_offcanvas} ${styles.mantine_header}`}
        transitionProps={{
          transition: "slide-left",
          duration: 500,
          timingFunction: "linear",
        }}
        size={"85vw"}
        h={"100vh"}
        position="right"
        opened={opened}
        onClose={close}
        bg={"#F0F1F9"}
        title={t("PatientInformation")}>
        <Flex align={"flex-start"} gap={10} bg={"#F0F1F9"}>
          <Box
            w={"350px"}
            h={"91vh"}
            p={"15px"}
            mt={5}
            bg={"white"}
            className={`${styles.profile_padding} ${styles.profile_sidebar} ${styles.box_border}`}>
            <PatientSidebar />
          </Box>
          <Box
            w={"100%"}
            className={`${styles.profile_navtabs} ${styles.box_border}`}>
            <PatientNavTabs />
          </Box>
        </Flex>
      </Drawer>
      <Button onClick={open}>Open Drawer</Button>
    </>
  );
};

export default PatientInfo;
