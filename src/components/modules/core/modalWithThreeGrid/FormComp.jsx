import React, { useRef } from "react";
import ReactToPrint from 'react-to-print';
import {
    rem, Modal, List, ThemeIcon, Box, Grid, useMantineTheme,
    Paper, Flex, Text, Button, Title,
    GridCol,
    Container,
    ScrollArea
} from "@mantine/core";
import { useTranslation } from 'react-i18next';
import { useOutletContext } from "react-router-dom";

import {
    IconDeviceFloppy,
    IconPrinter
} from "@tabler/icons-react";

import { useSelector } from "react-redux";
import TableInvoice from "./TableInvoice";

function FormComp(props) {
    const { t, i18n } = useTranslation();
    const showEntityData = useSelector((state) => state.crudSlice.showEntityData)
    const theme = useMantineTheme();
    const { isOnline, mainAreaHeight } = useOutletContext();

    const closeModel = () => {
        props.setCustomerViewModel(false)
    }
    const ref = useRef(null);

    return (
        <>
            <div ref={ref}>
                {/* <div id="print-area"> */}
                < Paper style={{ border: '1.5px solid #e0e0e0' }} mb={`xs`}>
                    <Box mt={`sm`} ml={`sm`}>
                        <Box >
                            <Title order={5} size="h6" style={{ textAlign: 'left', fontSize: '12' }}>{t('CustomerDetails')}</Title>
                        </Box>
                        <Grid gutter={1} mt={`xs`}>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Customer')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.customerId && showEntityData.customerId}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Mobile')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.name && showEntityData.name}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Address')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.mobile && showEntityData.mobile}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Created')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</div>
                                </div>
                            </GridCol>
                        </Grid>

                        {/* Payment Details */}
                        <Box >
                            <Title order={5} size="h6" mt={`md`} style={{ textAlign: 'left', fontSize: '12' }}>{t('PaymentDetails')}</Title>
                        </Box>
                        <Grid gutter={1} mt={`xs`}>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('TotalBDT')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.customerId && showEntityData.customerId}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('PaymentBDT')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.name && showEntityData.name}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('DiscountBDT')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.mobile && showEntityData.mobile}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('DueBDT')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('PaymentStatus')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</div>
                                </div>
                            </GridCol>
                        </Grid>
                        {/* Payment Method */}
                        <Box >
                            <Title order={5} size="h6" mt={`md`} style={{ textAlign: 'left', fontSize: '12' }}>{t('PaymentDetails')}</Title>
                        </Box>

                        <Grid gutter={1} mt={`xs`} >
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('Process')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.customerId && showEntityData.customerId}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('PaymentMethod')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.name && showEntityData.name}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('SalesBy')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.mobile && showEntityData.mobile}</div>
                                </div>
                            </GridCol>
                            <GridCol span={4} mb={`sm`}>
                                <div style={{ display: 'flex', alignItems: 'center' }} >
                                    <div style={{ width: '60px', fontWeight: 400, fontSize: '10px' }}>{t('ConfirmedBy')}</div>
                                    <div >:</div>
                                    <div>{showEntityData && showEntityData.alternative_mobile && showEntityData.alternative_mobile}</div>
                                </div>
                            </GridCol>
                        </Grid>
                    </Box>
                </Paper>
            </div>
            <TableInvoice ref={ref} />
            <Grid
                m={`xs`}
                mt={`md`}
                gutter="lg"
                columns={2}
                justify="end"
                align="center"
            >
                {/* <Button
                    size="xs"
                    color={`indigo.6`}
                    type="submit"
                    mt={`lg`}
                    id="EntityFormSubmit"
                    leftSection={<IconPrinter size={16} />}

                >

                    <ReactToPrint
                        trigger={() => (
                            <Flex direction={`column`} gap={0}>
                                <Text fz={14} fw={400}>
                                    {t("Print")}
                                </Text>
                            </Flex>
                        )}
                        content={() => document.getElementById("print-area")}
                    />


                </Button> */}
            </Grid>
        </>

    );
}

export default FormComp;
