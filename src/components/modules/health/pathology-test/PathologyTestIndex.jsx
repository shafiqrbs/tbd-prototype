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

import PathologyTestForm from "./PathologyTestForm.jsx";
import PathologyTestTable from "./PathologyTestTable.jsx";
import PathologyTestUpdateForm from "./PathologyTestUpdateForm.jsx";
import HealthHeaderNavbar from "../../inventory/configuraton/HealthHeaderNavbar.jsx";

function PathologyTestIndex() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const insertType = useSelector((state) => state.crudSlice.insertType);
  const customerFilterData = useSelector(
    (state) => state.crudSlice.customerFilterData
  );

  const progress = getLoadingProgress();

  /* useEffect(() => {
    dispatch(setInsertType("create"));
    dispatch(setSearchKeyword(""));
    dispatch(setEntityNewData([]));
    dispatch(
      setCustomerFilterData({
        ...customerFilterData,
        ["name"]: "",
        ["mobile"]: "",
      })
    );
  }, []); */

  const user = localStorage.getItem("user");

  return (
    <>
      {progress !== 100 && (
        <Progress color="red" size={"xs"} striped animated value={progress} />
      )}
      {progress === 100 && (
        <>
          <HealthHeaderNavbar
            pageTitle={t("ManageDiagnosticReports")}
            roles={t("Roles")}
            allowZeroPercentage=""
            currencySymbol=""
          />
          <Box p={"8"}>
            <Grid columns={24} gutter={{ base: 8 }}>
              <Grid.Col span={15}>
                <Box bg={"white"} p={"xs"} className={"borderRadiusAll"}>
                  <PathologyTestTable />
                </Box>
              </Grid.Col>
              <Grid.Col span={9}>
                {insertType === "create" ? (
                  <PathologyTestForm />
                ) : (
                  <PathologyTestUpdateForm />
                )}
              </Grid.Col>
            </Grid>
          </Box>
        </>
      )}
    </>
  );
}

export default PathologyTestIndex;
