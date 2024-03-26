import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
    Button,
    rem, Flex,
    Grid, Box, ScrollArea, Group, Text, Title, Alert, List,
} from "@mantine/core";
import { useTranslation } from 'react-i18next';
import {
    IconCheck,
    IconDeviceFloppy, IconInfoCircle, IconPlus,
} from "@tabler/icons-react";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { hasLength, useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";

import {
    getExecutiveDropdown, getLocationDropdown,
} from "../../../../store/core/utilitySlice";
import { setEntityNewData, setFetching, setValidationData, storeEntityData } from "../../../../store/core/crudSlice.js";

import Shortcut from "../../shortcut/Shortcut";
import InputForm from "../../../form-builders/InputForm";
import SelectForm from "../../../form-builders/SelectForm";
import TextAreaForm from "../../../form-builders/TextAreaForm";
import DamageGroupModel from "./DamageGroupModal.jsx";

function DamageForm() {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { isOnline, mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 80; //TabList height 104
    const [opened, { open, close }] = useDisclosure(false);

    const [saveCreateLoading, setSaveCreateLoading] = useState(false);
    // const [CustomerGroupData, setCustomerGroupData] = useState(null);

    const [damageGroupData, setDamageGroupData] = useState(null);

    const executiveDropdownData = useSelector((state) => state.utilitySlice.executiveDropdownData)
    const validationMessage = useSelector((state) => state.crudSlice.validationMessage)
    const validation = useSelector((state) => state.crudSlice.validation)
    const entityNewData = useSelector((state) => state.crudSlice.entityNewData)



    const form = useForm({
        initialValues: {
            stock_id: '',
            damage_quantity: '',
            damage_notes: '',
        },
        validate: {
            stock_id: (value) => !value ? 'Stock Name is required' : undefined,
            damage_quantity: (value) => {
                if (!value) {
                    return 'Quantity is required';
                } else if (isNaN(value) || parseInt(value) <= 0) {
                    return 'Quantity must be a positive value';
                }
                return undefined;
            },
        }
    });

    useEffect(() => {
        if (validation) {
            validationMessage.stock_id && form.setFieldError('stock_id', validationMessage.stock_id);
            validationMessage.quantity && form.setFieldError('damage_quantity', validationMessage.quantity);
            dispatch(setValidationData(false))
        }

        if (entityNewData.message === 'success') {
            notifications.show({
                color: 'teal',
                title: t('CreateSuccessfully'),
                icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                loading: false,
                autoClose: 700,
                style: { backgroundColor: 'lightgray' },
            });

            setTimeout(() => {
                form.reset()
                setMarketingExeData(null)
                setCustomerGroupData(null)
                setLocationData(null)
                dispatch(setEntityNewData([]))
                dispatch(setFetching(true))
            }, 700)
        }
    }, [validation, validationMessage, entityNewData, form, dispatch]);

    useHotkeys([['alt+n', () => {
        document.getElementById('stock_id').focus()
    }]], []);

    useHotkeys([['alt+r', () => {
        form.reset()
    }]], []);

    useHotkeys([['alt+s', () => {
        document.getElementById('EntityFormSubmit').click()
    }]], []);


    return (
        <Box bg={"white"} mt={`xs`}>
            <form onSubmit={form.onSubmit((values) => {
                dispatch(setValidationData(false))
                modals.openConfirmModal({
                    title: 'Please confirm your action',
                    children: (
                        <Text size="sm">
                            This action is so important that you are required to confirm it with a
                            modal. Please click
                            one of these buttons to proceed.
                        </Text>
                    ),
                    labels: { confirm: 'Confirm', cancel: 'Cancel' },
                    onCancel: () => console.log('Cancel'),
                    onConfirm: () => {
                        const value = {
                            url: 'core/damage',
                            data: values
                        }
                        dispatch(storeEntityData(value))
                    },
                });
            })}>
                <Box pb={`xs`} pl={`xs`} pr={8}>
                    <Grid>
                        <Grid.Col span={6} h={54}>
                            <Title order={6} mt={'xs'} pl={'6'}>{t('AddDamage')}</Title>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Group mr={'md'} pos={`absolute`} right={0} gap={0}>

                                <>
                                    {
                                        !saveCreateLoading && isOnline &&
                                        <Button
                                            size="xs"
                                            color={`indigo.6`}
                                            type="submit"
                                            mt={4}
                                            id="EntityFormSubmit"
                                            leftSection={<IconDeviceFloppy size={16} />}
                                        >

                                            <Flex direction={`column`} gap={0}>
                                                <Text fz={12} fw={400}>
                                                    {t("Save")}
                                                </Text>
                                            </Flex>
                                        </Button>
                                    }
                                </>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Box>
                <Box h={1} bg={`gray.3`}></Box>
                <Box pl={`xs`} pr={'xs'} mt={'xs'}>
                    <Grid columns={24}>
                        <Grid.Col span={'auto'}>
                            <ScrollArea h={height} scrollbarSize={2} type="never">
                                <Box pl={'xs'} pb={'md'}>
                                    {
                                        Object.keys(form.errors).length > 0 && validationMessage != 0 &&
                                        <Alert variant="light" color="red" radius="md" title={
                                            <List withPadding size="sm">
                                                {validationMessage.name && <List.Item>{t('NameValidateMessage')}</List.Item>}
                                                {validationMessage.mobile && <List.Item>{t('MobileValidateMessage')}</List.Item>}
                                                {validationMessage.alternative_mobile && <List.Item>{t('AlternativeMobile')}</List.Item>}
                                            </List>
                                        }></Alert>
                                    }

                                    <SelectForm
                                        tooltip={t('StockValidateMessage')}
                                        label={t('StockLabel')}
                                        placeholder={t('StockName')}
                                        required={true}
                                        nextField={'damage_quantity'}
                                        name={'stock_id'}
                                        form={form}
                                        dropdownValue={["Napa", "Ace"]}
                                        mt={0}
                                        id={'stock_id'}
                                        searchable={false}
                                        value={damageGroupData}
                                        changeValue={setDamageGroupData}
                                    />
                                    {/* <Grid gutter={{ base: 6 }}>
                                        <Grid.Col span={10}>


                                        </Grid.Col>
                                        <Grid.Col span={2}><Button mt={32} color={'gray'} variant={'outline'}
                                            onClick={open}><IconPlus size={12}
                                                opacity={0.5} /></Button></Grid.Col>
                                        {opened &&
                                            <DamageGroupModel openedModel={opened} open={open} close={close} />
                                        }
                                    </Grid> */}

                                    <InputForm
                                        tooltip={t('DamageQuantityValidateMessage')}
                                        label={t('DamageQuantitiy')}
                                        placeholder={t('DamageQunatityPH')}
                                        required={true}
                                        nextField={'damage_notes'}
                                        name={'damage_quantity'}
                                        form={form}
                                        mt={8}
                                        id={'damage_quantity'}
                                    />

                                    <TextAreaForm
                                        tooltip={t('DamageNotesValidateMessage')}
                                        label={t('DamageNotes')}
                                        placeholder={t('DamageNotesInformation')}
                                        required={false}
                                        name={'damage_notes'}
                                        nextField={'Status'}
                                        form={form}
                                        mt={8}
                                        id={'damage_notes'}
                                    />

                                </Box>
                            </ScrollArea>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Shortcut
                                form={form}
                                FormSubmit={'EntityFormSubmit'}
                                Name={'stock_id'}
                            />
                        </Grid.Col>
                    </Grid>
                </Box>
            </form>
        </Box>
    );
}

export default DamageForm;
