import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  rem,
  Flex,
  Grid,
  Box,
  ScrollArea,
  Text,
  Title,
  Alert,
  List,
  Stack,
  Tooltip,
  ActionIcon,
  FileInput,
  Select,
  Checkbox,
  NativeSelect,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  IconCheck,
  IconDeviceFloppy,
  IconUsersGroup,
} from "@tabler/icons-react";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { hasLength, useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";

import {
  setEntityNewData,
  setFetching,
  setValidationData,
  storeEntityData,
} from "../../../../store/core/crudSlice.js";

import Shortcut from "../../shortcut/Shortcut.jsx";
import InputForm from "../../../form-builders/InputForm.jsx";
import SelectForm from "../../../form-builders/SelectForm.jsx";
import TextAreaForm from "../../../form-builders/TextAreaForm.jsx";
import getLocationDropdownData from "../../../global-hook/dropdown/getLocationDropdownData.js";
import getExecutiveDropdownData from "../../../global-hook/dropdown/getExecutiveDropdownData.js";
import getCoreSettingCustomerGroupDropdownData from "../../../global-hook/dropdown/getCoreSettingCustomerGroupDropdownData.js";
import PhoneNumber from "../../../form-builders/PhoneNumberInput.jsx";
import InputNumberForm from "../../../form-builders/InputNumberForm.jsx";
import SurgeryGroupModal from "./SurgeryGroupModal.jsx";

function SurgeryForm() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { isOnline, mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 100; //TabList height 104
  const [opened, { open, close }] = useDisclosure(false);

  const [saveCreateLoading, setSaveCreateLoading] = useState(false);
  const [customerGroupData, setCustomerGroupData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [marketingExeData, setMarketingExeData] = useState(null);

  const validationMessage = useSelector(
    (state) => state.crudSlice.validationMessage
  );
  const validation = useSelector((state) => state.crudSlice.validation);
  const entityNewData = useSelector((state) => state.crudSlice.entityNewData);

  const locationDropdown = getLocationDropdownData();
  const executiveDropdown = getExecutiveDropdownData();

  const form = useForm({
    initialValues: {
      name: "",
      customer_group: "",
      credit_limit: "",
      reference_id: "",
      mobile: "",
      alternative_mobile: "",
      email: "",
      location_id: "",
      marketing_id: "",
      address: "",
    },
    validate: {
      name: hasLength({ min: 2, max: 20 }),
      mobile: (value) => !/^\d+$/.test(value),
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
    },
  });

  useEffect(() => {
    if (validation) {
      validationMessage.name && form.setFieldError("name", true);
      validationMessage.mobile && form.setFieldError("mobile", true);
      validationMessage.email && form.setFieldError("email", true);
      validationMessage.credit_limit &&
        form.setFieldError("credit_limit", true);
      validationMessage.alternative_mobile &&
        form.setFieldError("alternative_mobile", true);
      dispatch(setValidationData(false));
    }

    if (entityNewData.message === "success") {
      notifications.show({
        color: "teal",
        title: t("CreateSuccessfully"),
        icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
        loading: false,
        autoClose: 700,
        style: { backgroundColor: "lightgray" },
      });

      setTimeout(() => {
        form.reset();
        setMarketingExeData(null);
        setCustomerGroupData(null);
        setLocationData(null);
        dispatch(setEntityNewData([]));
        dispatch(setFetching(true));
      }, 700);
    }
  }, [validation, validationMessage, form]);

  useHotkeys(
    [
      [
        "alt+n",
        () => {
          document.getElementById("customer_group").focus();
        },
      ],
    ],
    []
  );

  useHotkeys(
    [
      [
        "alt+r",
        () => {
          form.reset();
        },
      ],
    ],
    []
  );

  useHotkeys(
    [
      [
        "alt+s",
        () => {
          document.getElementById("EntityFormSubmit").click();
        },
      ],
    ],
    []
  );

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) => {
          dispatch(setValidationData(false));
          modals.openConfirmModal({
            title: <Text size="md"> {t("FormConfirmationTitle")}</Text>,
            children: <Text size="sm"> {t("FormConfirmationMessage")}</Text>,
            labels: { confirm: t("Submit"), cancel: t("Cancel") },
            confirmProps: { color: "red" },
            onCancel: () => console.log("Cancel"),
            onConfirm: () => {
              const value = {
                url: "core/customer",
                data: values,
              };
              dispatch(storeEntityData(value));
            },
          });
        })}>
        <Grid columns={9} gutter={{ base: 8 }}>
          <Grid.Col span={8}>
            <Box bg={"white"} p={"xs"} className={"borderRadiusAll"}>
              <Box bg={"white"}>
                <Box
                  pl={`xs`}
                  pr={8}
                  pt={"6"}
                  pb={"6"}
                  mb={"4"}
                  className={"boxBackground borderRadiusAll"}>
                  <Grid>
                    <Grid.Col span={6}>
                      <Title order={6} pt={"6"}>
                        {t("ManageSurgery")}
                      </Title>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Stack right align="flex-end">
                        <>
                          {!saveCreateLoading && isOnline && (
                            <Button
                              size="xs"
                              color={`green.8`}
                              type="submit"
                              id="EntityFormSubmit"
                              leftSection={<IconDeviceFloppy size={16} />}>
                              <Flex direction={`column`} gap={0}>
                                <Text fz={14} fw={400}>
                                  {" "}
                                  {t("CreateAndSave")}
                                </Text>
                              </Flex>
                            </Button>
                          )}
                        </>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Box>
                <Box pl={`xs`} pr={"xs"} className={"borderRadiusAll"}>
                  <ScrollArea
                    h={height}
                    scrollbarSize={2}
                    scrollbars="y"
                    type="never">
                    <Box>
                      {Object.keys(form.errors).length > 0 &&
                        validationMessage != 0 && (
                          <Alert
                            variant="light"
                            color="red"
                            radius="md"
                            title={
                              <List withPadding size="sm">
                                {validationMessage.name && (
                                  <List.Item>
                                    {t("NameValidateMessage")}
                                  </List.Item>
                                )}
                                {validationMessage.mobile && (
                                  <List.Item>
                                    {t("MobileValidateMessage")}
                                  </List.Item>
                                )}
                              </List>
                            }></Alert>
                        )}
                      <Box mt={"xs"}>
                        <Select
                          tooltip={t("NameValidateMessage")}
                          label={t("SurgeryDepartment")}
                          placeholder={t("SurgeryDepartment")}
                          required={true}
                          nextField={"account_head"}
                          name={"surgery_department"}
                          form={form}
                          mt={0}
                          id={"surgery_department"}
                          defaultValue="----Select surgery department----"
                          data={[
                            "----Select surgery department----",
                            "Surgery",
                            "Surgery fees",
                            "General Ward-male",
                            "General Ward-Female",
                            "HDU Surgery",
                            "ICU",
                            "ICU Surgery",
                            "NIC U",
                            "VIP Surgery",
                          ]}
                        />
                      </Box>
                      <Box mt={"xs"}>
                        <NativeSelect
                          tooltip={t("NameValidateMessage")}
                          label={t("AccountHead")}
                          placeholder={t("AccountHead")}
                          required={true}
                          nextField={"details"}
                          name={"account_choose"}
                          form={form}
                          mt={0}
                          id={"account_choose"}
                          defaultValue="----Choose a account----"
                          data={[
                            {
                              group: "",
                              items: [
                                {
                                  label: "----Choose a account----",
                                  value: "----choose a account----",
                                },
                              ],
                            },
                            {
                              group: "Current Liabilities",
                              items: [
                                {
                                  label: "Account Payable",
                                  value: "account payable",
                                },
                                { label: "Angular", value: "angular" },
                                { label: "Vue", value: "vue" },
                              ],
                            },
                            {
                              group: "Backend libraries",
                              items: [
                                { label: "Express", value: "express" },
                                { label: "Koa", value: "koa" },
                                { label: "Django", value: "django" },
                              ],
                            },
                          ]}
                        />
                      </Box>
                      <Box mt={"xs"} mb={"xs"}>
                        <TextAreaForm
                          tooltip={t("Address")}
                          label={t("Details")}
                          placeholder={t("DetailsPlaceholder")}
                          required={false}
                          nextField={"surgery"}
                          name={"details"}
                          form={form}
                          mt={8}
                          id={"details"}
                        />
                      </Box>
                      <Box mt={"xs"}>
                        <InputForm
                          tooltip={t("NameValidateMessage")}
                          label={t("Surgery")}
                          placeholder={t("SurgeryPlaceholder")}
                          required={true}
                          nextField={"price"}
                          name={"surgery"}
                          form={form}
                          mt={0}
                          id={"surgery"}
                        />
                      </Box>
                      <Box mt={"xs"}>
                        <InputForm
                          tooltip={t("NameValidateMessage")}
                          label={t("Price")}
                          placeholder={t("FeesPlaceholder")}
                          required={true}
                          nextField={"minimum_price"}
                          name={"price"}
                          form={form}
                          mt={0}
                          id={"price"}
                        />
                      </Box>
                      <Box mt={"xs"}>
                        <InputForm
                          tooltip={t("NameValidateMessage")}
                          label={t("MinimumPrice")}
                          placeholder={t("MinimumPricePlaceholder")}
                          required={true}
                          nextField={"doctor_charge"}
                          name={"minimum_price"}
                          form={form}
                          mt={0}
                          id={"minimum_price"}
                        />
                      </Box>
                      <Box mt={"xs"}>
                        <InputForm
                          tooltip={t("NameValidateMessage")}
                          label={t("DoctorCharge")}
                          placeholder={t("DoctorCharge")}
                          required={true}
                          nextField={"room_no"}
                          name={"doctor_charge"}
                          form={form}
                          mt={0}
                          id={"doctor_charge"}
                        />
                      </Box>
                      <Box mt={"xs"}>
                        <InputForm
                          tooltip={t("NameValidateMessage")}
                          label={t("RoomNo")}
                          placeholder={t("RoomNo")}
                          required={true}
                          nextField={"EntityFormSubmit"}
                          name={"room_no"}
                          form={form}
                          mt={0}
                          id={"room_no"}
                        />
                      </Box>
                    </Box>
                  </ScrollArea>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={1}>
            <Box bg={"white"} className={"borderRadiusAll"} pt={"16"}>
              <Shortcut
                form={form}
                FormSubmit={"EntityFormSubmit"}
                Name={"name"}
                inputType="select"
              />
            </Box>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  );
}

export default SurgeryForm;
