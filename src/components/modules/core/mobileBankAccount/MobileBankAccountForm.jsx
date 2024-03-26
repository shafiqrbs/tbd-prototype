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
} from "../../../../store/core/utilitySlice.js";
import { setEntityNewData, setFetching, setValidationData, storeEntityData } from "../../../../store/core/crudSlice.js";

import Shortcut from "../../shortcut/Shortcut.jsx";
import InputForm from "../../../form-builders/InputForm.jsx";
import SelectForm from "../../../form-builders/SelectForm.jsx";
import TextAreaForm from "../../../form-builders/TextAreaForm.jsx";
import MobileBankAccountGroupModal from "./MobileBankAccountGroupModal.jsx";

function MobileBankAccountForm() {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { isOnline, mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 80; //TabList height 104
    const [opened, { open, close }] = useDisclosure(false);

    const [saveCreateLoading, setSaveCreateLoading] = useState(false);
    const [mobileBankAccountGroupData, setMobileBankAccountGroupData] = useState(null);
    const [locationData, setLocationData] = useState(null);
    const [marketingExeData, setMarketingExeData] = useState(null);

    const locationDropdownData = useSelector((state) => state.utilitySlice.locationDropdownData)
    const executiveDropdownData = useSelector((state) => state.utilitySlice.executiveDropdownData)
    const validationMessage = useSelector((state) => state.crudSlice.validationMessage)
    const validation = useSelector((state) => state.crudSlice.validation)
    const entityNewData = useSelector((state) => state.crudSlice.entityNewData)


    let locationDropdown = locationDropdownData && locationDropdownData.length > 0 ? locationDropdownData.map((type, index) => {
        return ({ 'label': type.name, 'value': String(type.id) })
    }) : []
    let executiveDropdown = executiveDropdownData && executiveDropdownData.length > 0 ? executiveDropdownData.map((type, index) => {
        return ({ 'label': type.name, 'value': String(type.id) })
    }) : []

    useEffect(() => {
        const valueForLocation = {
            url: 'core/select/location',
            param: {
                term: ''
            }
        }
        dispatch(getLocationDropdown(valueForLocation))

        const valueForExecutive = {
            url: 'core/select/executive',
            param: {
                term: ''
            }
        }
        dispatch(getExecutiveDropdown(valueForExecutive))
    }, []);

    const form = useForm({
        initialValues: {
            mba_mobile: '',
            mba_owner: '',
            mba_authorized: '',
            mba_service_name_id: '',
            mba_type_id: '',
            mba_service_charge: '',
        },
        validate: {
            mba_owner: (value) => {
                if (!value) {
                    return 'Owner name is required';
                }
                if (!/^[A-Za-z]+$/.test(value)) {
                    return 'Owner name must contain only characters';
                }
                if (value.length < 2 || value.length > 20) {
                    return 'Owner name must be between 2 and 20 characters';
                }
                return undefined;
            },
            mba_mobile: (value) => {
                if (!value || !/^\d{11}$/.test(value) || !value.startsWith('01')) {
                    return 'Mobile number must start with "01" and be 11 digits long';
                }
                return undefined;
            },
            mba_authorized: (value) => {
                if (!value) {
                    return 'Authorized must be present';
                }
                return undefined;
            },
            mba_service_name_id: (value) => {
                if (!value) {
                    return 'Service must be present';
                }
                return undefined;
            },
            mba_type_id: (value) => {
                if (!value) {
                    return 'Account type must be present';
                }
                return undefined;
            },
            mba_service_charge: (value) => {
                if (value === '' || isNaN(value)) {
                    return 'Service charge must be a number';
                }
                const numValue = parseFloat(value);
                if (numValue < 0) {
                    return 'Service charge must be positive';
                }
                return undefined;
            },
        }
    });

    useEffect(() => {
        if (validation) {
            form.setFieldError('mba_owner', validationMessage.owner);
            form.setFieldError('mba_mobile', validationMessage.mobile);
            form.setFieldError('mba_authorized', validationMessage.authorized);
            form.setFieldError('mba_service_name_id', validationMessage.service);
            form.setFieldError('mba_type_id', validationMessage.type);
            form.setFieldError('mba_service_charge', validationMessage.service_charge);
            dispatch(setValidationData(false));
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
                form.reset();
                setMarketingExeData(null);
                setMbAccountGroupData(null);
                setLocationData(null);
                dispatch(setEntityNewData([]));
                dispatch(setFetching(true));
            }, 700);
        }
    }, [validation, validationMessage, entityNewData, form, dispatch]);


    useHotkeys([['alt+n', () => {
        document.getElementById('mba_mobile').focus()
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
                            url: 'core/mobileBankAccount',
                            data: values
                        }
                        dispatch(storeEntityData(value))
                    },
                });
            })}>
                <Box pb={`xs`} pl={`xs`} pr={8} mb={8}>
                    <Grid>
                        <Grid.Col span={6} h={54}>
                            <Title order={6} mt={'xs'} pl={'6'}>{t('MobileBankAccountInformation')}</Title>
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
                                            mt={12}
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

                                    <InputForm
                                        tooltip={t('MBAMobileValidate')}
                                        label={t('MBAMobile')}
                                        placeholder={t('MBAMobileInformation')}
                                        required={true}
                                        nextField={'mba_owner'}
                                        name={'mba_mobile'}
                                        form={form}
                                        mt={0}
                                        id={'mba_mobile'}
                                    />

                                    <InputForm
                                        tooltip={t('MBAAccountOwnerValidate')}
                                        label={t('MBAAccountOwner')}
                                        placeholder={t('MBAAccountOwnerInformation')}
                                        required={true}
                                        nextField={'mba_authorized'}
                                        name={'mba_owner'}
                                        form={form}
                                        mt={8}
                                        id={'mba_owner'}
                                    />

                                    <InputForm
                                        tooltip={t('MBAAuthorizedValidation')}
                                        label={t('MBAAuthorized')}
                                        placeholder={t('MBAAuthorizedInformation')}
                                        required={true}
                                        nextField={'mba_service_name_id'}
                                        name={'mba_authorized'}
                                        form={form}
                                        mt={8}
                                        id={'mba_authorized'}
                                    />


                                    <SelectForm
                                        tooltip={t('MBAServiceValidate')}
                                        label={t('MBAService')}
                                        placeholder={t('MBAServiceInformation')}
                                        required={true}
                                        nextField={'mba_type_id'}
                                        name={'mba_service_name_id'}
                                        form={form}
                                        dropdownValue={locationDropdown}
                                        mt={8}
                                        id={'mba_service_name_id'}
                                        searchable={true}
                                        value={locationData}
                                        changeValue={setLocationData}
                                    />


                                    <SelectForm
                                        tooltip={t('MBATypeValidate')}
                                        label={t('MBAType')}
                                        placeholder={t('MBATypeInformation')}
                                        required={true}
                                        nextField={'mba_service_charge'}
                                        name={'mba_type_id'}
                                        form={form}
                                        dropdownValue={executiveDropdown}
                                        mt={8}
                                        id={'mba_type_id'}
                                        searchable={true}
                                        value={marketingExeData}
                                        changeValue={setMarketingExeData}
                                    />

                                    <InputForm
                                        tooltip={t('MBAChargeValidate')}
                                        label={t('MBACharge')}
                                        placeholder={t('MBAChargeInformation')}
                                        required={false}
                                        nextField={'Status'}
                                        name={'mba_service_charge'}
                                        form={form}
                                        mt={8}
                                        id={'mba_service_charge'}
                                    />



                                </Box>
                            </ScrollArea>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Shortcut
                                form={form}
                                FormSubmit={'EntityFormSubmit'}
                                Name={'mba_mobile'}
                            />
                        </Grid.Col>
                    </Grid>
                </Box>
            </form>
        </Box>
    );
}

export default MobileBankAccountForm;
