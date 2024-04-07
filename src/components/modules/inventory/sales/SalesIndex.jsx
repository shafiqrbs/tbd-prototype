import React, { useEffect, useState } from "react";
import {
    Box, Button,
    Grid, Progress, Title
} from "@mantine/core";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";
import { getLoadingProgress } from "../../../global-hook/loading-progress/getLoadingProgress.js";
import getConfigData from "../../../global-hook/config-data/getConfigData.js";
import SampleHeaderNavbar from "../../sample-module/sample-layout/SampleHeaderNavbar";
import SampleTableView from "../../sample-module/sample-layout/SampleTableView";
import SalesHeaderNavbar from "../../sample-module/sample-layout/SampleHeaderNavbar";
import SalesTable from "./SalesTable";

function SalesIndex() {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const insertType = useSelector((state) => state.crudSlice.insertType)

    const progress = getLoadingProgress()
    const configData = getConfigData()


    return (
        <>
            {progress !== 100 &&
                <Progress color="red" size={"xs"} striped animated value={progress} transitionDuration={200} />}
            {progress === 100 &&
                <Box>
                    <SalesHeaderNavbar
                        pageTitle={t('Sales')}
                        roles={t('roles')}
                        allowZeroPercentage={configData.zero_stock}
                    // currancySymbol={configData.currency.symbol}
                    />
                    <Box p={'8'}>
                        <SalesTable
                            allowZeroPercentage={configData.zero_stock}
                            currancySymbol={configData.currency.symbol}
                        />
                    </Box>
                </Box>
            }
        </>
    );
}

export default SalesIndex;
