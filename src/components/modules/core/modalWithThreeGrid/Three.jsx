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
            <Container fluid h={100}>
                <HeaderSearch />
            </Container>

            <Box >
                <SimpleGrid cols={3} bg={`white`} >


                    <div>

                        <TableComp />
                    </div>
                    <div className="view-gird">
                        <Box p={`xs`}>
                            <Title order={4}>Details Data</Title>
                            <Text fz={`sm`}>We'll always let you know about important changes</Text>
                        </Box>
                        <Box bg={`white`}></Box>

                        <ScrollArea h={height} scrollbarSize={2} bg={`white`}>
                            <List
                                px={4}
                                pt={10}
                                spacing="xs"
                                size="sm"
                                center
                                icon={
                                    <ThemeIcon color="teal" size={24} radius="xl">
                                        <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                                    </ThemeIcon>
                                }
                            >
                                <List.Item>Clone or download repository from GitHub </List.Item>
                                <List.Item>Install dependencies with yarn</List.Item>
                                <List.Item>To start development server run npm start command</List.Item>
                                <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                                <List.Item>Clone or download repository from GitHub</List.Item>
                                <List.Item>Install dependencies with yarn</List.Item>
                                <List.Item>To start development server run npm start command</List.Item>
                                <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                                <List.Item>Clone or download repository from GitHub</List.Item>
                                <List.Item>Install dependencies with yarn</List.Item>
                                <List.Item>To start development server run npm start command</List.Item>
                                <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                                <List.Item>Clone or download repository from GitHub</List.Item>
                                <List.Item>Install dependencies with yarn</List.Item>
                                <List.Item>To start development server run npm start command</List.Item>
                                <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                                <List.Item>Clone or download repository from GitHub</List.Item>
                                <List.Item>Install dependencies with yarn</List.Item>
                                <List.Item>To start development server run npm start command</List.Item>
                                <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                                <List.Item>Clone or download repository from GitHub</List.Item>
                                <List.Item>Install dependencies with yarn</List.Item>
                                <List.Item>To start development server run npm start command</List.Item>
                                <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                                <List.Item>Clone or download repository from GitHub</List.Item>
                                <List.Item>Install dependencies with yarn</List.Item>
                                <List.Item>To start development server run npm start command</List.Item>
                                <List.Item>Run tests to make sure your changes do not break the build</List.Item>
                            </List>
                        </ScrollArea>
                    </div>
                    <div className={"form-grid"} h={1}>
                        <Box p={`xs`} pl={`md`}>
                            <FormComp />
                        </Box>
                    </div>
                </SimpleGrid>
            </Box>
        </>
    );
}

export default ThreeGrid;
