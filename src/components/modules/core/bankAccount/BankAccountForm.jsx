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
import BankAccountGroupModel from "./BankAccountGroupModal.jsx";

function BankAccountForm() {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { isOnline, mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 80; //TabList height 104
    const [opened, { open, close }] = useDisclosure(false);

    const [saveCreateLoading, setSaveCreateLoading] = useState(false);
    const [customerGroupData, setCustomerGroupData] = useState(null);
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
            bank_name_id: '',
            branch_name: '',
            account_owner: '',
            account_type_id: '',
            account_number: '',
            service_charge: '',
            bank_account_address: '',
        },
        validate: {
            name: hasLength({ min: 2, max: 20 }),
            mobile: (value) => (!/^\d+$/.test(value)),
            email: (value) => {
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return true;
                }
                return null;
            },
            credit_limit: (value) => {
                if (value) {
                    const isNumberOrFractional = /^-?\d+(\.\d+)?$/.test(value);
                    if (!isNumberOrFractional) {
                        return true;
                    }
                }
                return null;
            },
            alternative_mobile: (value) => {
                if (value && value.trim()) {
                    const isDigitsOnly = /^\d+$/.test(value);
                    if (!isDigitsOnly) {
                        return true;
                    }
                }
                return null;
            },
        }
    });


    useEffect(() => {
        if (validation) {
            validationMessage.name && (form.setFieldError('name', true));
            validationMessage.mobile && (form.setFieldError('mobile', true));
            validationMessage.email && (form.setFieldError('email', true));
            validationMessage.credit_limit && (form.setFieldError('credit_limit', true));
            validationMessage.alternative_mobile && (form.setFieldError('alternative_mobile', true));
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
    }, [validation, validationMessage, form]);

    useHotkeys([['alt+n', () => {
        document.getElementById('bank_name_id').focus()
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
                            <Title order={6} mt={'xs'} pl={'6'}>{t('BankAccountInformationAdd')}</Title>
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
                                        tooltip={t('BankSelectValidate')}
                                        label={t('BankName')}
                                        placeholder={t('BankSelectInformation')}
                                        required={true}
                                        nextField={'branch_name'}
                                        name={'bank_name_id'}
                                        form={form}
                                        dropdownValue={["Family", "Local"]}
                                        mt={0}
                                        id={'bank_name_id'}
                                        searchable={false}
                                        value={customerGroupData}
                                        changeValue={setCustomerGroupData}
                                    />

                                    <InputForm
                                        tooltip={t('BranchNameValidate')}
                                        label={t('BranchName')}
                                        placeholder={t('BranchNameInformation')}
                                        required={true}
                                        nextField={'account_owner'}
                                        name={'branch_name'}
                                        form={form}
                                        mt={8}
                                        id={'branch_name'}
                                    />

                                    <InputForm
                                        tooltip={t('AccountOwnerValidate')}
                                        label={t('AccountOwner')}
                                        placeholder={t('AccountOwnerInformation')}
                                        required={true}
                                        nextField={'account_type_id'}
                                        name={'account_owner'}
                                        form={form}
                                        mt={8}
                                        id={'account_owner'}
                                    />

                                    <SelectForm
                                        tooltip={t('AccountTypeValidate')}
                                        label={t('AccountType')}
                                        placeholder={t('AccountTypeInformation')}
                                        required={true}
                                        nextField={'account_number'}
                                        name={'account_type_id'}
                                        form={form}
                                        // dropdownValue={["Family", "Local"]}
                                        mt={8}
                                        id={'account_type_id'}
                                        searchable={false}
                                        value={customerGroupData}
                                        changeValue={setCustomerGroupData}
                                    />

                                    <InputForm
                                        tooltip={t('AccountNumberValidation')}
                                        label={t('AccountNumber')}
                                        placeholder={t('AccountNumberInformation')}
                                        required={true}
                                        nextField={'service_charge'}
                                        name={'account_number'}
                                        form={form}
                                        mt={8}
                                        id={'account_number'}
                                    />



                                    <InputForm
                                        tooltip={t('ServiceChargeValidation')}
                                        label={t('ServiceCharge')}
                                        placeholder={t('ServiceChargeInformation')}
                                        required={true}
                                        nextField={'bank_account_address'}
                                        name={'service_charge'}
                                        form={form}
                                        mt={8}
                                        id={'service_charge'}
                                    />
                                    <TextAreaForm
                                        tooltip={t('BankAccountAddressValidation')}
                                        label={t('BankAccountAddress')}
                                        placeholder={t('BankAccountAddressInformation')}
                                        required={false}
                                        nextField={'Status'}
                                        name={'bank_account_address'}
                                        form={form}
                                        mt={8}
                                        id={'bank_account_address'}
                                    />
                                    {/* <InputForm
                                        tooltip={t('MobileValidateMessage')}
                                        label={t('Mobile')}
                                        placeholder={t('Mobile')}
                                        required={true}
                                        nextField={'AlternativeMobile'}
                                        name={'mobile'}
                                        form={form}
                                        mt={8}
                                        id={'Mobile'}
                                    /> */}

                                    {/* <InputForm
                                        tooltip={t('MobileValidateMessage')}
                                        label={t('AlternativeMobile')}
                                        placeholder={t('AlternativeMobile')}
                                        required={false}
                                        nextField={'Email'}
                                        name={'alternative_mobile'}
                                        form={form}
                                        mt={8}
                                        id={'AlternativeMobile'}
                                    /> */}

                                    {/* <InputForm
                                        tooltip={t('InvalidEmail')}
                                        label={t('Email')}
                                        placeholder={t('Email')}
                                        required={false}
                                        nextField={'Location'}
                                        name={'email'}
                                        form={form}
                                        mt={8}
                                        id={'Email'}
                                    /> */}

                                    {/* <SelectForm
                                        tooltip={t('Location')}
                                        label={t('Location')}
                                        placeholder={t('ChooseLocation')}
                                        required={false}
                                        nextField={'MarketingExecutive'}
                                        name={'location_id'}
                                        form={form}
                                        dropdownValue={locationDropdown}
                                        mt={8}
                                        id={'Location'}
                                        searchable={true}
                                        value={locationData}
                                        changeValue={setLocationData}
                                    /> */}


                                    {/* <SelectForm
                                        tooltip={t('MarketingExecutive')}
                                        label={t('MarketingExecutive')}
                                        placeholder={t('ChooseMarketingExecutive')}
                                        required={false}
                                        nextField={'Address'}
                                        name={'marketing_id'}
                                        form={form}
                                        dropdownValue={executiveDropdown}
                                        mt={8}
                                        id={'MarketingExecutive'}
                                        searchable={true}
                                        value={marketingExeData}
                                        changeValue={setMarketingExeData}
                                    /> */}




                                </Box>
                            </ScrollArea>
                        </Grid.Col>
                        <Grid.Col span={3}>
                            <Shortcut
                                form={form}
                                FormSubmit={'EntityFormSubmit'}
                                Name={'bank_name_id'}
                            />
                        </Grid.Col>
                    </Grid>
                </Box>
            </form>
        </Box>
    );
}

export default BankAccountForm;
