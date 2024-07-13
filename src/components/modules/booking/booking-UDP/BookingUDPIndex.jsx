import React, { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setInsertType } from "../../../../store/inventory/crudSlice.js";
import { setSearchKeyword } from "../../../../store/core/crudSlice.js";
import getConfigData from "../../../global-hook/config-data/getConfigData.js";
import { getLoadingProgress } from "../../../global-hook/loading-progress/getLoadingProgress.js";
import BookingUDPFormIndex from "./BookingUDPFromIndex.jsx";
import BookingUDPTableNew from "./BookingUDPTableNew.jsx";
import BookingHeaderNavbar from "../BookingHeaderNavbar.jsx";
import { useOutletContext } from "react-router-dom";
import BookingUDPTableInProgress from "./BookingUDPTableInProgress.jsx";
import BookingUDPTableApprove from "./BookingUDPTableApprove.jsx";
import BookingUDPTableArchive from "./BookingUDPTableArchive.jsx";
import { Tooltip } from "recharts";
import styles from "../../../../assets/css/BookingUDPIndex.module.css";
function BookingUDPIndex() {
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
                    <Tabs.Tab m={2} value="New">
                      {t("Dashboard")}
                    </Tabs.Tab>
                    <Tabs.Tab m={2} value="InProgress">
                      {t("Booked")}
                    </Tabs.Tab>
                    <Tabs.Tab m={2} value="Approve">
                      {t("Hold")}
                    </Tabs.Tab>
                    <Tabs.Tab m={2} value="Archive">
                      {t("Maintaince")}
                    </Tabs.Tab>
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
                      <BookingUDPTableNew />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="InProgress">
                    <Box>
                      <BookingUDPTableInProgress />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="Approve">
                    <Box>
                      <BookingUDPTableApprove />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="Archive">
                    <Box>
                      <BookingUDPTableArchive />
                    </Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="BookingEntry">
                    <Box bg={"white"}>
                      <BookingUDPFormIndex />
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

export default BookingUDPIndex;
