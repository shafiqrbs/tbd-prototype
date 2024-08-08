import { Box, Button, Drawer, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../../../../assets/css/BookingIndex.module.css";
import ProfileSidebar from "./ProfileSidebar";
import ProfileNavTabs from "./ProfileNavTabs";
import { useTranslation } from "react-i18next";

const ProfileInfo = () => {
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
        title={t("ProfileInformation")}>
        <Flex align={"flex-start"} gap={10} bg={"#F0F1F9"}>
          <Box
            w={"350px"}
            h={"91.5vh"}
            p={"15px"}
            mt={5}
            bg={"white"}
            className={`${styles.profile_padding} ${styles.profile_sidebar}`}>
            <ProfileSidebar />
          </Box>
          <Box w={"100%"} className={styles.profile_navtabs}>
            <ProfileNavTabs />
          </Box>
        </Flex>
      </Drawer>
      <Button onClick={open}>Open Drawer</Button>
    </>
  );
};

export default ProfileInfo;
