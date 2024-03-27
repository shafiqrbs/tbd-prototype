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
    IconDeviceFloppy, IconInfoCircle, IconPlus, IconLetterA
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

function FormComp() {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { isOnline, mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 80; //TabList height 104
    const [opened, { open, close }] = useDisclosure(false);

    const [saveCreateLoading, setSaveCreateLoading] = useState(false);
    const [newClientGroupData, setNewClientGroupData] = useState(null);
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
            company_name: '',
            mobile: '',
            location_id: '',
            main_application_id: '',
            business_model_id: '',
            owner_name: '',
            user_name: '',
        },
        validate: {
            owner_name: (value) => {
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
            mobile: (value) => {
                if (!value || !/^\d{11}$/.test(value)) {
                    return 'Mobile number must start with "01" and be 11 digits long';
                }
                return undefined;
            },
            location_id: (value) => {
                if (!value) {
                    return 'Authorized must be present';
                }
                return undefined;
            },
            main_application_id: (value) => {
                if (!value) {
                    return 'Authorized must be present';
                }
                return undefined;
            },
            user_name: (value) => {
                if (!value) {
                    return 'Authorized must be present';
                }
                return undefined;
            },
            business_model_id: (value) => {
                if (!value) {
                    return 'Authorized must be present';
                }
                return undefined;
            },
            company_name: (value) => {
                if (!value) {
                    return 'Authorized must be present';
                }
                return undefined;
            },
        }
    });


    useEffect(() => {
        if (validation) {
            // form.setFieldError('company_name', validationMessage.name);
            // form.setFieldError('mobile', validationMessage.mobile);
            // form.setFieldError('location_id', validationMessage.location);
            // form.setFieldError('main_application_id', validationMessage.application);
            // form.setFieldError('business_model_id', validationMessage.bModel);
            // form.setFieldError('owner_name', validationMessage.owner);
            // form.setFieldError('user_name', validationMessage.user);
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
        document.getElementById('company_name').focus()
    }]], []);

    useHotkeys([['alt+r', () => {
        form.reset()
    }]], []);

    useHotkeys([['alt+s', () => {
        document.getElementById('EntityFormSubmit').click()
    }]], []);


    return (
        <Box bg={"white"} mt={`xs`} h={100}>

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
                            url: 'core/customer',
                            data: values
                        }
                        dispatch(storeEntityData(value))
                    },
                });
            })}>
                <Box pb={`xs`} pl={`xs`} pr={8}>
                    <Grid>
                        <Grid.Col span={6} h={54}>
                            <Title order={6} mt={'xs'} pl={'6'}>{t('NewClientInfo')}</Title>
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
                <ScrollArea h={height} scrollbarSize={2}>
                    <Box pl={`xs`} pr={'xs'} mt={'xs'}>
                        <Grid columns={24}>
                            <Grid.Col span={'auto'}>
                                <ScrollArea h={height} scrollbarSize={2} type="never">
                                    <Box pl={'xs'} pb={'md'}>


                                        <InputForm
                                            tooltip={t('CompanyNameValidate')}
                                            label={t('CompanyName')}
                                            placeholder={t('CompanyNameInformation')}
                                            required={true}
                                            leftSection={<IconDeviceFloppy size={16} />}
                                            nextField={'mobile'}
                                            name={'company_name'}
                                            form={form}
                                            mt={0}
                                            id={'company_name'}
                                        />

                                        <InputForm
                                            tooltip={t('MobileValidateMessage')}
                                            label={t('Mobile')}
                                            placeholder={t('Mobile')}
                                            required={true}
                                            nextField={'location_id'}
                                            name={'mobile'}
                                            form={form}
                                            mt={8}
                                            id={'mobile'}
                                        />
                                        <SelectForm
                                            tooltip={t('Location')}
                                            label={t('Location')}
                                            placeholder={t('ChooseLocation')}
                                            required={true}
                                            nextField={'main_application_id'}
                                            name={'location_id'}
                                            form={form}
                                            dropdownValue={locationDropdown}
                                            mt={8}
                                            id={'location_id'}
                                            searchable={true}
                                            value={locationData}
                                            changeValue={setLocationData}
                                        />

                                        <SelectForm
                                            tooltip={t('MainApplicationValidate')}
                                            label={t('MainApplication')}
                                            placeholder={t('MainApplicationInfo')}
                                            required={true}
                                            nextField={'business_model_id'}
                                            name={'main_application_id'}
                                            form={form}
                                            dropdownValue={executiveDropdown}
                                            mt={8}
                                            id={'main_application_id'}
                                            searchable={true}
                                            value={marketingExeData}
                                            changeValue={setMarketingExeData}
                                        />
                                        <SelectForm
                                            tooltip={t('BusinessModelValidate')}
                                            label={t('BusinessModel')}
                                            placeholder={t('BusinessModelInfo')}
                                            required={true}
                                            nextField={'owner_name'}
                                            name={'business_model_id'}
                                            form={form}
                                            dropdownValue={executiveDropdown}
                                            mt={8}
                                            id={'business_model_id'}
                                            searchable={true}
                                            value={marketingExeData}
                                            changeValue={setMarketingExeData}
                                        />

                                        <InputForm
                                            tooltip={t('OwnerNameValidate')}
                                            label={t('OwnerName')}
                                            placeholder={t('OwnerNameInfo')}
                                            required={true}
                                            nextField={'user_name'}
                                            name={'owner_name'}
                                            form={form}
                                            mt={8}
                                            id={'owner_name'}
                                        />

                                        <InputForm
                                            tooltip={t('OwnerNameValidate')}
                                            label={t('UserName')}
                                            placeholder={t('OwnerNameInfo')}
                                            required={true}
                                            nextField={'Status'}
                                            name={'user_name'}
                                            form={form}
                                            mt={8}
                                            id={'user_name'}
                                        />

                                    </Box>
                                </ScrollArea>
                            </Grid.Col>
                            <Grid.Col span={3}>
                                <Shortcut
                                    form={form}
                                    FormSubmit={'EntityFormSubmit'}
                                    Name={'company_name'}
                                />
                            </Grid.Col>
                        </Grid>
                    </Box>
                </ScrollArea>
            </form>

        </Box>
    );
}

export default FormComp;
