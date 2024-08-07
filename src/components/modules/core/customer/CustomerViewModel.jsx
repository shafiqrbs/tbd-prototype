import React from "react";
import {
    rem, Modal, List, ThemeIcon, Box, Grid, useMantineTheme,
} from "@mantine/core";
import { useTranslation } from 'react-i18next';
import {
    IconCircleCheck
} from "@tabler/icons-react";
import { showEntityData } from "../../../../store/core/crudSlice"

import { useSelector } from "react-redux";

function CustomerViewModel(props) {
    const { t, i18n } = useTranslation();
    const showEntityData = useSelector((state) => state.crudSlice.showEntityData)
    const entityEditData = useSelector((state => state.crudSlice.entityEditData))
    const theme = useMantineTheme();

    const closeModel = () => {
        props.setCustomerViewModel(false)
    }

    return (
        <Modal opened={props.customerViewModel} onClose={closeModel} title={t('CustomerDetailsData')} size="75%" overlayProps={{
            color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.dark[8],
            opacity: 0.9,
            blur: 3,
        }}>
            <Box m={'md'}>
                <Grid columns={24}>
                    <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('CustomerId')}</Grid.Col>
                    <Grid.Col span={'1'}>:</Grid.Col>
                    <Grid.Col span={'auto'}>{entityEditData && entityEditData.customerId && entityEditData.customerId}</Grid.Col>
                </Grid>
                <Grid columns={24}>
                    <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('Name')}</Grid.Col>
                    <Grid.Col span={'1'}>:</Grid.Col>
                    <Grid.Col span={'auto'}>{entityEditData && entityEditData.name && entityEditData.name}</Grid.Col>
                </Grid>
                <Grid columns={24}>
                    <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('Mobile')}</Grid.Col>
                    <Grid.Col span={'1'}>:</Grid.Col>
                    <Grid.Col span={'auto'}>{entityEditData && entityEditData.mobile && entityEditData.mobile}</Grid.Col>
                </Grid>

                <Grid columns={24}>
                    <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('AlternativeMobile')}</Grid.Col>
                    <Grid.Col span={'1'}>:</Grid.Col>
                    <Grid.Col span={'auto'}>{entityEditData && entityEditData.alternative_mobile && entityEditData.alternative_mobile}</Grid.Col>
                </Grid>

                <Grid columns={24}>
                    <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('Email')}</Grid.Col>
                    <Grid.Col span={'1'}>:</Grid.Col>
                    <Grid.Col span={'auto'}>{entityEditData && entityEditData.email && entityEditData.email}</Grid.Col>
                </Grid>

                <Grid columns={24}>
                    <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('ReferenceId')}</Grid.Col>
                    <Grid.Col span={'1'}>:</Grid.Col>
                    <Grid.Col span={'auto'}>{entityEditData && entityEditData.reference_id && entityEditData.reference_id}</Grid.Col>
                </Grid>

                <Grid columns={24}>
                    <Grid.Col span={'6'} align={'left'} fw={'600'} fz={'14'}>{t('Created')}</Grid.Col>
                    <Grid.Col span={'1'}>:</Grid.Col>
                    <Grid.Col span={'auto'}>{entityEditData && entityEditData.created && entityEditData.created}</Grid.Col>
                </Grid>

            </Box>
        </Modal>

    );
}

export default CustomerViewModel;
