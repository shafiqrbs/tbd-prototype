import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
    Button,
    Group,
    rem,
    Text,
    Tooltip,
    Box,
    ScrollArea,
    Title,
    TextInput, SimpleGrid, List, ColorInput, Select, ThemeIcon, Switch,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Container } from '@mantine/core';
import {
    IconCircleCheck,
    IconFilter, IconEyeSearch,
    IconUserCircle, IconInfoCircle, IconList, IconPlus,
} from "@tabler/icons-react";
import { getHotkeyHandler, useViewportSize } from "@mantine/hooks";

import axios from "axios";

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine component features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo } from 'react';
import {
    MantineReactTable,
    useMantineReactTable,
} from 'mantine-react-table';
import FormComp from "./FormComp";
import TableComp from "./TableComp";
import { HeaderSearch } from "./HeaderComp";
import CustomerDetails from "./CustomerDetails";

function ThreeGrid(props) {
    const { isFormSubmit, setFormSubmit, setFormSubmitData, form } = props
    const iconStyle = { width: rem(12), height: rem(12) };


    const { t, i18n } = useTranslation();
    const { isOnline, mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 90; //TabList height 36
    const [fetching, setFetching] = useState(true)
    const [data, setRecords] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: "https://jsonplaceholder.typicode.com/users",
        })
            .then(function (res) {
                setRecords(res.data);
                setFetching(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);



    return (
        <>
            <Container fluid h={50}>
                <HeaderSearch />
            </Container>

            <Box pt={10} >
                <SimpleGrid cols={3} bg={`white`}  >

                    <div className="view-gird">
                        <Box m={`sm`}>
                            <Title order={5}>{t(`CustomerDetails`)}</Title>
                            {/* <Text fz={`sm`}>Select a customer from the list to </Text> */}
                        </Box>
                        <Box bg={`white`} mt={`lg`}></Box>

                        <CustomerDetails />

                    </div>

                    <div className="view-gird">
                        <TableComp />
                    </div>
                    <div className="view-gird" >
                        <Box m={`sm`}>
                            <Title order={5}>{t('InvoiceDetails')}</Title>
                            {/* <Text fz={`sm`}>Select a customer from the list to </Text> */}
                        </Box>
                        <Box bg={`white`} mt={`lg`}></Box>
                        <FormComp />

                    </div>
                </SimpleGrid>
            </Box>
        </>
    );
}

export default ThreeGrid;
