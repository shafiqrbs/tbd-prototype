import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Grid,
  Progress,
  Title,
  Group,
  Burger,
  Menu,
  rem,
  ActionIcon,
  Tabs,
  Divider,
} from "@mantine/core";
import { setInsertType } from "../../../../store/inventory/crudSlice.js";
import { setSearchKeyword } from "../../../../store/core/crudSlice.js";
import getConfigData from "../../../global-hook/config-data/getConfigData.js";
import { getLoadingProgress } from "../../../global-hook/loading-progress/getLoadingProgress.js";
import BookingHeaderNavbar from "../BookingHeaderNavbar.jsx";
import BookingMedicalRecordFormIndex from "./BookingMedicalRecordFormIndex.jsx";
import BookingMedicalRecordTableNew from "./BookingMedicalRecordTableNew.jsx";
import BookingMedicalRecordTableInProgress from "./BookingMedicalRecordTableInProgress.jsx";
import BookingMedicalRecordTableApprove from "./BookingMedicalRecordTableApprove.jsx";
import BookingMedicalRecordTableArchive from "./BookingMedicalRecordTableArchive.jsx";
import { Tooltip } from "recharts";
import styles from "../../../../assets/css/BookingIndex.module.css";
import { IconX } from "@tabler/icons-react";
function BookingMedicalRecordIndex() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const insertType = useSelector((state) => state.crudSlice.insertType);

  const configData = getConfigData();
  const progress = getLoadingProgress();
  const { isOnline, mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 500;

  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    setActiveTab("");
  }, []);

  useEffect(() => {
    dispatch(setInsertType("create"));
    dispatch(setSearchKeyword(""));
  }, []);

  const rightButtons = (
    <Group pos="absolute" right={0} gap={0}>
      <Tooltip
        label={t("Tooltip")}
        px={20}
        py={3}
        color={"red.6"}
        offset={2}
        transtionProps={{ transition: "pop-bottom-left", duration: 500 }}>
        <Button size="sm" variant="filled" color="red.6">
          {t("NewBooking")}
        </Button>
      </Tooltip>
    </Group>
  );

  return (
    <>
      {progress !== 100 && (
        <Progress
          color="red"
          size={"xs"}
          striped
          animated
          value={progress}
          transitionDuration={200}
        />
      )}
      {progress === 100 && (
        <>
          <Box>
            <BookingHeaderNavbar
              pageTitle={t("ManageBooking")}
              roles={t("Roles")}
              allowZeroPercentage=""
              currencySymbol=""
            />
            <Box>
              <Box className="" bg={"#f0f1f9"}>
                <Tabs
                  height={50}
                  p={4}
                  bg={"#f0f1f9"}
                  defaultValue="BookingEntry"
                  color="red.6"
                  variant="pills"
                  radius="sm"
                  onChange={(value) => setActiveTab(value)}>
                  <Tabs.List pos={"relative"}>
                    <Box>
                      <Tabs.Tab m={2} value="New" className={styles.cross_tabs}>
                        {t("Free")}
                      </Tabs.Tab>
                    </Box>

                    <Box pos={"relative"}>
                      <Tabs.Tab
                        m={2}
                        value="InProgress"
                        className={styles.cross_tabs}>
                        {t("Booked")}
                      </Tabs.Tab>
                      <Button className={styles.cross_icon_style}>
                        <IconX />
                      </Button>
                    </Box>

                    <Box pos={"relative"}>
                      <Tabs.Tab
                        m={2}
                        value="Approve"
                        className={styles.cross_tabs}>
                        {t("Hold")}
                      </Tabs.Tab>
                      <Button className={styles.cross_icon_style}>
                        <IconX />
                      </Button>
                    </Box>

                    <Box pos={"relative"}>
                      <Tabs.Tab
                        m={2}
                        value="Archive"
                        className={styles.cross_tabs}>
                        {t("Maintaince")}
                      </Tabs.Tab>
                      <Button className={styles.cross_icon_style}>
                        <IconX />
                      </Button>
                    </Box>

                    {activeTab !== "BookingEntry" && activeTab !== "" && (
                      <Tabs.Tab
                        m={2}
                        bg={"red.5"}
                        value="BookingEntry"
                        ml="auto">
                        {t("BookingEntry")}
                      </Tabs.Tab>
                    )}
                  </Tabs.List>

                  <Tabs.Panel value="New">
                    <Box>
                      <BookingMedicalRecordTableNew />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="InProgress">
                    <Box>
                      <BookingMedicalRecordTableInProgress />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="Approve">
                    <Box>
                      <BookingMedicalRecordTableApprove />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="Archive">
                    <Box>
                      <BookingMedicalRecordTableArchive />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="BookingEntry">
                    <Box bg={"white"}>
                      <BookingMedicalRecordFormIndex />
                    </Box>
                  </Tabs.Panel>
                </Tabs>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default BookingMedicalRecordIndex;
