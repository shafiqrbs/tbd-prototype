import React, { useEffect, useState } from "react";
import { Box, Button, Progress, Tabs } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { setInsertType } from "../../../../store/inventory/crudSlice.js";
import { setSearchKeyword } from "../../../../store/core/crudSlice.js";
import { getLoadingProgress } from "../../../global-hook/loading-progress/getLoadingProgress.js";
import BookingIDPFormIndex from "./BookingIDPFromIndex.jsx";
import BookingIDPTableNew from "./BookingIDPTableNew.jsx";
import BookingHeaderNavbar from "../BookingHeaderNavbar.jsx";
import BookingIDPTableInProgress from "./BookingIDPTableInProgress.jsx";
import BookingIDPTableApprove from "./BookingIDPTableApprove.jsx";
import BookingIDPTableArchive from "./BookingIDPTableArchive.jsx";
import styles from "../../../../assets/css/BookingIndex.module.css";
import { IconX } from "@tabler/icons-react";
function BookingIPDIndex() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const progress = getLoadingProgress();

  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    setActiveTab("");
  }, []);

  useEffect(() => {
    dispatch(setInsertType("create"));
    dispatch(setSearchKeyword(""));
  }, []);

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
                      <BookingIDPTableNew />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="InProgress">
                    <Box>
                      <BookingIDPTableInProgress />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="Approve">
                    <Box>
                      <BookingIDPTableApprove />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="Archive">
                    <Box>
                      <BookingIDPTableArchive />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="BookingEntry">
                    <Box bg={"white"}>
                      <BookingIDPFormIndex />
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

export default BookingIPDIndex;
