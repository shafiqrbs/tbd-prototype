import React, { useEffect, useState } from "react";
import { Box, Grid, Progress, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import {
  setCustomerFilterData,
  setEntityNewData,
  setInsertType,
  setSearchKeyword,
} from "../../../../store/core/crudSlice.js";
import { getLoadingProgress } from "../../../global-hook/loading-progress/getLoadingProgress.js";

import EmergencyServicesForm from "./EmergencyServicesForm.jsx";
import EmergencyServicesTable from "./EmergencyServicesTable.jsx";
import EmergencyServicesUpdateForm from "./EmergencyServicesUpdateForm.jsx";
import HealthHeaderNavbar from "../../inventory/configuraton/HealthHeaderNavbar.jsx";

function EmergencyServicesIndex() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const insertType = useSelector((state) => state.crudSlice.insertType);
  const customerFilterData = useSelector(
    (state) => state.crudSlice.customerFilterData
  );

  const progress = getLoadingProgress();

  const user = localStorage.getItem("user");

  return (
    <>
      {progress !== 100 && (
        <Progress color="red" size={"xs"} striped animated value={progress} />
      )}
      {progress === 100 && (
        <>
          <HealthHeaderNavbar
            pageTitle={t("ManageCustomer")}
            roles={t("Roles")}
            allowZeroPercentage=""
            currencySymbol=""
          />
          <Box p={"8"}>
            <Grid columns={24} gutter={{ base: 8 }}>
              <Grid.Col span={15}>
                <Box bg={"white"} p={"xs"} className={"borderRadiusAll"}>
                  <EmergencyServicesTable />
                </Box>
              </Grid.Col>
              <Grid.Col span={9}>
                {insertType === "create" ? (
                  <EmergencyServicesForm />
                ) : (
                  <EmergencyServicesUpdateForm />
                )}
              </Grid.Col>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}

export default EmergencyServicesIndex;
