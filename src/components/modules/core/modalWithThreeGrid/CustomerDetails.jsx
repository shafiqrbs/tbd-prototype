import React from "react";
import {
    rem, Modal, List, ThemeIcon, Box, Grid, useMantineTheme,
    Paper, Flex, Text, Button
} from "@mantine/core";
import { useTranslation } from 'react-i18next';
import {
    IconDeviceFloppy,
    IconPrinter
} from "@tabler/icons-react";

import { useSelector } from "react-redux";

function CustomerDetails(props) {
    const { t, i18n } = useTranslation();
    const showEntityData = useSelector((state) => state.crudSlice.showEntityData)
    const theme = useMantineTheme();

    const closeModel = () => {
        props.setCustomerViewModel(false)
    }

    return (
        // <Modal opened={props.customerViewModel} onClose={closeModel} title={t('CustomerDetailsData')} size="75%" overlayProps={{
        //     color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.dark[8],
        //     opacity: 0.9,
        //     blur: 3,
        // }}>
        <>

            <Paper style={{ border: '1.5px solid #e0e0e0' }} m={10} >
                <Box m={"lg"}>


                    <Grid columns={24}>
                        <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('CustomerId')}</Grid.Col>
                        <Grid.Col span={'1'}>:</Grid.Col>
                        <Grid.Col span={'auto'}>{showEntityData && showEntityData.customerId && showEntityData.customerId}</Grid.Col>
                    </Grid>
                    <Grid columns={24}>
                        <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('Name')}</Grid.Col>
                        <Grid.Col span={'1'}>:</Grid.Col>
                        <Grid.Col span={'auto'}>{showEntityData && showEntityData.name && showEntityData.name}</Grid.Col>
                    </Grid>
                    <Grid columns={24}>
                        <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('Mobile')}</Grid.Col>
                        <Grid.Col span={'1'}>:</Grid.Col>
                        <Grid.Col span={'auto'}>{showEntityData && showEntityData.mobile && showEntityData.mobile}</Grid.Col>
                    </Grid>

                    <Grid columns={24}>
                        <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('TotalSales')}</Grid.Col>
                        <Grid.Col span={'1'}>:</Grid.Col>
                        <Grid.Col span={'auto'}>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</Grid.Col>
                    </Grid>

                    <Grid columns={24}>
                        <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('NumberOfSales')}</Grid.Col>
                        <Grid.Col span={'1'}>:</Grid.Col>
                        <Grid.Col span={'auto'}>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</Grid.Col>
                    </Grid>

                    <Grid columns={24}>
                        <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('Email')}</Grid.Col>
                        <Grid.Col span={'1'}>:</Grid.Col>
                        <Grid.Col span={'auto'}>{showEntityData && showEntityData.email && showEntityData.email}</Grid.Col>
                    </Grid>

                    <Grid columns={24}>
                        <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('Address')}</Grid.Col>
                        <Grid.Col span={'1'}>:</Grid.Col>
                        <Grid.Col span={'auto'}>{showEntityData && showEntityData.reference_id && showEntityData.reference_id}</Grid.Col>
                    </Grid>

                    <Grid columns={24}>
                        <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('Created')}</Grid.Col>
                        <Grid.Col span={'1'}>:</Grid.Col>
                        <Grid.Col span={'auto'}>{showEntityData && showEntityData.created && showEntityData.created}</Grid.Col>
                    </Grid>
                </Box>

            </Paper>
        </>
        // </Modal>

    );
}

export default CustomerDetails;
