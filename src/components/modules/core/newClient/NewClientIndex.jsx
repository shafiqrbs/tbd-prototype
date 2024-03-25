import React, { useEffect, useState } from "react";
import {
    Box,
    Grid, Progress, Title
} from "@mantine/core";
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from "react-redux";

import NewClientForm from "./NewClientForm.jsx";
import NewClientTable from "./NewClientTable.jsx";
import NewClientUpdateForm from "./NewClientUpdateForm.jsx";
import {
    setCustomerFilterData,
    setEntityNewData,
    setInsertType,
    setSearchKeyword
} from "../../../../store/core/crudSlice.js";

function NewClientIndex() {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const insertType = useSelector((state) => state.crudSlice.insertType)
    const customerFilterData = useSelector((state) => state.crudSlice.customerFilterData)

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => setProgress((oldProgress) => {
            if (oldProgress === 100) return 100;
            const diff = Math.random() * 20;
            return Math.min(oldProgress + diff, 100);
        });

        const timer = setInterval(updateProgress, 100);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        dispatch(setInsertType('create'))
        dispatch(setSearchKeyword(''))
        dispatch(setEntityNewData([]))
        dispatch(setCustomerFilterData({
            ...customerFilterData,
            ['name']: '',
            ['mobile']: ''
        }))
    }, [])

    const user = localStorage.getItem("user");

    return (
        <>
            {progress !== 100 && <Progress color="red" size={"xs"} striped animated value={progress} />}

            {progress === 100 &&
                <Box>
                    <Box pl={`md`} pr={8} pb={'8'} pt={'6'} bg={'gray.1'}>
                        <Grid>
                            <Grid.Col span={12}>
                                <Title order={6} pl={'md'} fz={'18'} c={'indigo.4'}>{t('NewClient')}</Title>
                            </Grid.Col>
                        </Grid>
                    </Box>
                    <Box pr={12} pl={'12'}>
                        <Grid>
                            <Grid.Col span={8}>
                                <NewClientTable />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                {
                                    insertType === 'create' ? <NewClientForm /> : <NewClientUpdateForm />
                                }
                            </Grid.Col>
                        </Grid>
                    </Box>
                </Box>
            }
        </>

    );
}

export default NewClientIndex;
