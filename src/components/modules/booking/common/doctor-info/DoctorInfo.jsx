import { Box, Button, Drawer, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../../../../assets/css/BookingIndex.module.css";
import DoctorSidebar from "./DoctorSidebar";
import DoctorNavTabs from "./DoctorNavTabs";
import { useTranslation } from "react-i18next";

const DoctorInfo = () => {
  const { t, i18n } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        className={`${styles.mantine_offcanvas} ${styles.mantine_header}`}
        size={"85vw"}
        h={"100vh"}
        position="right"
        opened={opened}
        onClose={close}
        bg={"#F0F1F9"}
        title={t("DoctorInformation")}>
        <Flex align={"flex-start"} gap={10} bg={"#F0F1F9"}>
          <Box
            w={"350px"}
            h={"91.5vh"}
            p={"15px"}
            mt={5}
            bg={"white"}
            className={`${styles.profile_padding} ${styles.profile_sidebar}`}>
            <DoctorSidebar />
          </Box>
          <Box w={"100%"} className={styles.profile_navtabs}>
            <DoctorNavTabs />
          </Box>
        </Flex>
      </Drawer>
      <Button onClick={open}>Open Drawer</Button>
    </>
  );
};

export default DoctorInfo;
