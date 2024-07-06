import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Button,
  rem,
  Flex,
  Switch,
  Grid,
  Box,
  ScrollArea,
  Group,
  Text,
  Title,
  Modal,
  Stack,
  Tooltip,
  ActionIcon,
  Checkbox,
  TextInput,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  IconCheck,
  IconDeviceFloppy,
  IconXboxX,
  IconPlus,
  IconUsersGroup,
} from "@tabler/icons-react";
import { getHotkeyHandler, useDisclosure } from "@mantine/hooks";
import { useHotkeys } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { isNotEmpty, useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { notifications } from "@mantine/notifications";

import Shortcut from "../../shortcut/Shortcut.jsx";
import InputForm from "../../../form-builders/InputForm.jsx";
import SelectForm from "../../../form-builders/SelectForm.jsx";
import TextAreaForm from "../../../form-builders/TextAreaForm.jsx";
import {
  setFormLoading,
  setValidationData,
  getShowEntityData,
  updateEntityData,
} from "../../../../store/inventory/crudSlice.js";
import getSettingBusinessModelDropdownData from "../../../global-hook/dropdown/getSettingBusinessModelDropdownData.js";
import SwitchForm from "../../../form-builders/SwitchForm.jsx";
import ImageUploadDropzone from "../../../form-builders/ImageUploadDropzone.jsx";
import InputNumberForm from "../../../form-builders/InputNumberForm.jsx";
import styles from "../../../../assets/css/HealthConfigurationForm.module.css";
import CkEditor from "./CkEditor.jsx";

function HealthConfigurationForm() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { isOnline, mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 130; //TabList height 104
  const [saveCreateLoading, setSaveCreateLoading] = useState(false);
  const [businessModelData, setBusinessModelData] = useState(null);
  const [testModelOpend, setTestModelOpend] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [customerGroupData, setCustomerGroupData] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [marketingExeData, setMarketingExeData] = useState(null);
  const [checked, setChecked] = useState(false);

  /* File input js start */
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const [fileFooter, setFileFooter] = useState();
  function handleChangeFooter(e) {
    console.log(e.target.files);
    setFileFooter(URL.createObjectURL(e.target.files[0]));
  }
  /* File input js end */

  const showEntityData = useSelector(
    (state) => state.inventoryCrudSlice.showEntityData
  );

  const validationMessage = useSelector(
    (state) => state.inventoryCrudSlice.validationMessage
  );
  const validation = useSelector(
    (state) => state.inventoryCrudSlice.validation
  );

  const [setFormData, setFormDataForUpdate] = useState(false);
  const [formLoad, setFormLoad] = useState(true);
  useEffect(() => {
    // dispatch(getShowEntityData('inventory/config'))
  }, []);

  const form = useForm({
    initialValues: {
      business_model_id: "",
      address: "",
      sku_wearhouse: "",
      sku_category: "",
      vat_percent: "",
      is_vat_enabled: "",
      ait_percent: "",
      is_ait_enabled: "",
      production_type: "",
      invoice_comment: "",
      logo: "",
      remove_image: "",
      invoice_print_logo: "",
      print_outstanding: "",
      pos_print: "",
      is_print_header: "",
      is_invoice_title: "",
      is_print_footer: "",
      is_powered: "",
      print_footer_text: "",
      body_font_size: "",
      invoice_height: "",
      invoice_width: "",
      border_color: "",
      border_width: "",
      print_left_margin: "",
      print_top_margin: "",
      custom_invoice: "",
      bonus_from_stock: "",
      is_unit_price: "",
      zero_stock: "",
      stock_item: "",
      custom_invoice_print: "",
      is_stock_history: "",
      condition_sales: "",
      store_ledger: "",
      is_marketing_executive: "",
      //fuel_station: '',
      tlo_commission: "",
      sales_return: "",
      sr_commission: "",
      due_sales_without_customer: "",
    },
    validate: {
      business_model_id: isNotEmpty(),
      vat_percent: (value) => {
        if (value) {
          const isNumberOrFractional = /^-?\d+(\.\d+)?$/.test(value);
          if (!isNumberOrFractional) {
            return true;
          }
        }
        return null;
      },
      ait_percent: (value) => {
        if (value) {
          const isNumberOrFractional = /^-?\d+(\.\d+)?$/.test(value);
          if (!isNumberOrFractional) {
            return true;
          }
        }
        return null;
      },
    },
  });

  useEffect(() => {
    if (validation) {
      validationMessage.business_model_id &&
        form.setFieldError("business_model_id", true);
      validationMessage.vat_percent && form.setFieldError("vat_percent", true);
      validationMessage.ait_percent && form.setFieldError("ait_percent", true);
      validationMessage.address && form.setFieldError("address", true);
      validationMessage.invoice_comment &&
        form.setFieldError("invoice_comment", true);
      dispatch(setValidationData(false));
      setTimeout(() => {
        // setSaveCreateLoading(false)
      }, 700);
    }

    if (validationMessage.message === "success") {
      notifications.show({
        color: "teal",
        title: t("UpdateSuccessfully"),
        icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
        loading: false,
        autoClose: 700,
        style: { backgroundColor: "lightgray" },
      });

      setTimeout(() => {
        // setSaveCreateLoading(false)
      }, 700);
    }
  }, [validation, validationMessage]);

  useEffect(() => {
    setFormLoad(true);
    setFormDataForUpdate(true);
  }, [dispatch]);

  useEffect(() => {
    form.setValues({
      business_model_id: showEntityData.business_model_id
        ? showEntityData.business_model_id
        : "",
      vat_percent: showEntityData.vat_percent ? showEntityData.vat_percent : "",
      ait_percent: showEntityData.ait_percent ? showEntityData.ait_percent : "",
      address: showEntityData.address ? showEntityData.address : "",
      invoice_comment: showEntityData.invoice_comment
        ? showEntityData.invoice_comment
        : "",
    });

    dispatch(setFormLoading(false));
    setTimeout(() => {
      setFormLoad(false);
      setFormDataForUpdate(false);
    }, 500);
  }, [dispatch, setFormData]);

  // console.log(form.values)

  useHotkeys(
    [
      [
        "alt+n",
        () => {
          document.getElementById("BusinessModel").click();
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
          document.getElementById("VendorFormSubmit").click();
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
              // dispatch(storeEntityData(value))
            },
          });
        })}>
        <Grid columns={24} gutter={{ base: 8 }}>
          {/* core start */}
          <Grid.Col span={7}>
            <Box bg={"white"} p={"xs"} className={"borderRadiusAll"}>
              <Box bg={"white"}>
                <Box
                  pl={`xs`}
                  pb={"xs"}
                  pr={8}
                  pt={"xs"}
                  mb={"xs"}
                  className={"boxBackground borderRadiusAll"}>
                  <Grid>
                    <Grid.Col h={54}>
                      <Title order={6} mt={"xs"} pl={"6"}>
                        {t("Core")}
                      </Title>
                    </Grid.Col>
                  </Grid>
                </Box>
                <Box
                  pl={`xs`}
                  pr={"xs"}
                  mt={"xs"}
                  className={"borderRadiusAll"}>
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
                                {validationMessage.business_model_id && (
                                  <List.Item>{t("ValidateMessage")}</List.Item>
                                )}
                                {validationMessage.vat_percent && (
                                  <List.Item>{t("ValidateMessage")}</List.Item>
                                )}
                                {validationMessage.ait_percent && (
                                  <List.Item>{t("ValidateMessage")}</List.Item>
                                )}
                                {validationMessage.address && (
                                  <List.Item>{t("ValidateMessage")}</List.Item>
                                )}
                                {validationMessage.invoice_comment && (
                                  <List.Item>{t("ValidateMessage")}</List.Item>
                                )}
                              </List>
                            }></Alert>
                        )}

                      <Box>
                        <Box mt={"xs"}>
                          <Text fz="sm">{t("Inventory")}</Text>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("InitialDiagnosticShow")}
                                label=""
                                nextField={"commission_auto_approved"}
                                name={"initial_diagnostic_show"}
                                form={form}
                                color="red"
                                id={"initial_diagnostic_show"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("InitialDiagnosticShow")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("CommissionAutoApproved")}
                                label=""
                                nextField={"prescription_builder"}
                                name={"commission_auto_approved"}
                                form={form}
                                color="red"
                                id={"commission_auto_approved"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("CommissionAutoApproved")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("PrescriptionBuilder")}
                                label=""
                                nextField={"appointment_prescription"}
                                name={"prescription_builder"}
                                form={form}
                                color="red"
                                id={"prescription_builder"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("PrescriptionBuilder")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("AppointmentPrescription")}
                                label=""
                                nextField={"marketing_executive"}
                                name={"appointment_prescription"}
                                form={form}
                                color="red"
                                id={"appointment_prescription"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("AppointmentPrescription")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("MarketingExecutive")}
                                label=""
                                nextField={"is_inventory"}
                                name={"marketing_executive"}
                                form={form}
                                color="red"
                                id={"marketing_executive"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("MarketingExecutive")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("IsInventory")}
                                label=""
                                nextField={"EntityFormSubmit"}
                                name={"is_inventory"}
                                form={form}
                                color="red"
                                id={"is_inventory"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("IsInventory")}
                            </Grid.Col>
                          </Grid>
                        </Box>
                      </Box>

                      {/* Invoice start */}
                      <Box mt={"30px"}>
                        <Box mt={"xs"}>
                          <Text fz="sm">{t("InvoiceProcess")}</Text>
                        </Box>
                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("OPD")}
                                label=""
                                nextField={"ipd"}
                                name={"opd"}
                                form={form}
                                color="red"
                                id={"opd"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("OPD")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("IPD")}
                                label=""
                                nextField={"visit"}
                                name={"ipd"}
                                form={form}
                                color="red"
                                id={"ipd"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("IPD")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Visit")}
                                label=""
                                nextField={"emergency"}
                                name={"visit"}
                                form={form}
                                color="red"
                                id={"visit"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Visit")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Emergency")}
                                label=""
                                nextField={"others_invoice"}
                                name={"emergency"}
                                form={form}
                                color="red"
                                id={"emergency"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Emergency")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("OthersInvoice")}
                                label=""
                                nextField={"commission"}
                                name={"others_invoice"}
                                form={form}
                                color="red"
                                id={"others_invoice"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("OthersInvoice")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Commission")}
                                label=""
                                nextField={"advance_search_particular"}
                                name={"commission"}
                                form={form}
                                color="red"
                                id={"commission"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Commission")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("AdvanceSearchParticular")}
                                label=""
                                nextField={"EntityFormSubmit"}
                                name={"advance_search_particular"}
                                form={form}
                                color="red"
                                id={"advance_search_particular"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("AdvanceSearchParticular")}
                            </Grid.Col>
                          </Grid>
                        </Box>
                      </Box>

                      {/* Accessories */}
                      <Box mt={"30px"}>
                        <Box mt={"xs"}>
                          <Text fz="sm">{t("Accessories")}</Text>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Accessories")}
                                label=""
                                nextField={"cabin_bed"}
                                name={"accessories"}
                                form={form}
                                color="red"
                                id={"accessories"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Accessories")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("CabinBed")}
                                label=""
                                nextField={"diagnostic"}
                                name={"cabin_bed"}
                                form={form}
                                color="red"
                                id={"cabin_bed"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("CabinBed")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Diagnostic")}
                                label=""
                                nextField={"diseases_profile"}
                                name={"diagnostic"}
                                form={form}
                                color="red"
                                id={"diagnostic"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Diagnostic")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("DiseasesProfile")}
                                label=""
                                nextField={"doctor"}
                                name={"diseases_profile"}
                                form={form}
                                color="red"
                                id={"diseases_profile"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("DiseasesProfile")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Doctor")}
                                label=""
                                nextField={"emergency_service"}
                                name={"doctor"}
                                form={form}
                                color="red"
                                id={"doctor"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Doctor")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("EmergencyService")}
                                label=""
                                nextField={"lab_user"}
                                name={"emergency_service"}
                                form={form}
                                color="red"
                                id={"emergency_service"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("EmergencyService")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("LabUser")}
                                label=""
                                nextField={"marketing_executive"}
                                name={"lab_user"}
                                form={form}
                                color="red"
                                id={"lab_user"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("LabUser")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("MarketingExecutive")}
                                label=""
                                nextField={"medicine"}
                                name={"marketing_executive"}
                                form={form}
                                color="red"
                                id={"marketing_executive"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("MarketingExecutive")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Medicine")}
                                label=""
                                nextField={"procedure"}
                                name={"medicine"}
                                form={form}
                                color="red"
                                id={"medicine"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Medicine")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Procedure")}
                                label=""
                                nextField={"referred_doctor"}
                                name={"procedure"}
                                form={form}
                                color="red"
                                id={"procedure"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Procedure")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("ReferredDoctor")}
                                label=""
                                nextField={"specialization"}
                                name={"referred_doctor"}
                                form={form}
                                color="red"
                                id={"referred_doctor"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("ReferredDoctor")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Specialization")}
                                label=""
                                nextField={"surgery"}
                                name={"specialization"}
                                form={form}
                                color="red"
                                id={"specialization"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Specialization")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("Surgery")}
                                label=""
                                nextField={"surgery_department"}
                                name={"surgery"}
                                form={form}
                                color="red"
                                id={"surgery"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("Surgery")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("SurgeryDepartment")}
                                label=""
                                nextField={"visit_mode"}
                                name={"surgery_department"}
                                form={form}
                                color="red"
                                id={"surgery_department"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("SurgeryDepartment")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("VisitMode")}
                                label=""
                                nextField={"EntityFormSubmit"}
                                name={"visit_mode"}
                                form={form}
                                color="red"
                                id={"visit_mode"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("VisitMode")}
                            </Grid.Col>
                          </Grid>
                        </Box>
                      </Box>

                      <Box mt={"30px"}>
                        <TextAreaForm
                          tooltip={t("Address")}
                          label={t("Address")}
                          placeholder={t("Address")}
                          required={false}
                          nextField={"EntityFormSubmit"}
                          name={"cofiguration_comment"}
                          form={form}
                          mt={8}
                          id={"cofiguration_comment"}
                        />
                      </Box>
                    </Box>
                  </ScrollArea>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
          {/* core end */}

          {/* Print start */}
          <Grid.Col span={8}>
            <Box bg={"white"} p={"xs"} className={"borderRadiusAll"}>
              <Box bg={"white"}>
                <Box
                  pl={`xs`}
                  pb={"xs"}
                  pr={8}
                  pt={"xs"}
                  mb={"xs"}
                  className={"boxBackground borderRadiusAll"}>
                  <Grid>
                    <Grid.Col h={54}>
                      <Title order={6} mt={"xs"} pl={"6"}>
                        {t("Print")}
                      </Title>
                    </Grid.Col>
                  </Grid>
                </Box>

                <Box
                  pl={`xs`}
                  pr={"xs"}
                  mt={"xs"}
                  className={"borderRadiusAll"}>
                  <ScrollArea
                    h={height}
                    scrollbarSize={2}
                    scrollbars="y"
                    type="never">
                    <Box pl={"xs"} pt={"xs"}>
                      <Box mt={"xs"}>
                        <Grid gutter={{ base: 1 }}>
                          <Grid.Col span={2}>
                            <SwitchForm
                              tooltip={t("CustomPrint")}
                              label=""
                              nextField={"print_off"}
                              name={"custom_print"}
                              form={form}
                              color="red"
                              id={"custom_print"}
                              position={"left"}
                              defaultChecked={1}
                            />
                          </Grid.Col>
                          <Grid.Col span={6} fz={"sm"} pt={"1"}>
                            {t("CustomPrint")}
                          </Grid.Col>
                        </Grid>
                      </Box>

                      <Box mt={"xs"}>
                        <Grid gutter={{ base: 1 }}>
                          <Grid.Col span={2}>
                            <SwitchForm
                              tooltip={t("PrintOff")}
                              label=""
                              nextField={"print_logo"}
                              name={"print_off"}
                              form={form}
                              color="red"
                              id={"print_off"}
                              position={"left"}
                              defaultChecked={1}
                            />
                          </Grid.Col>
                          <Grid.Col span={6} fz={"sm"} pt={"1"}>
                            {t("PrintOff")}
                          </Grid.Col>
                        </Grid>
                      </Box>

                      <Box mt={"xs"}>
                        <Grid gutter={{ base: 1 }}>
                          <Grid.Col span={2}>
                            <SwitchForm
                              tooltip={t("PrintLogo")}
                              label=""
                              nextField={"print_invoice_header"}
                              name={"print_logo"}
                              form={form}
                              color="red"
                              id={"print_logo"}
                              position={"left"}
                              defaultChecked={1}
                            />
                          </Grid.Col>
                          <Grid.Col span={6} fz={"sm"} pt={"1"}>
                            {t("PrintLogo")}
                          </Grid.Col>
                        </Grid>
                      </Box>

                      <Box mt={"xs"}>
                        <Grid gutter={{ base: 1 }}>
                          <Grid.Col span={2}>
                            <SwitchForm
                              tooltip={t("PrintInvoiceHeader")}
                              label=""
                              nextField={"print_invoice_title"}
                              name={"print_invoice_header"}
                              form={form}
                              color="red"
                              id={"print_invoice_header"}
                              position={"left"}
                              defaultChecked={1}
                            />
                          </Grid.Col>
                          <Grid.Col span={6} fz={"sm"} pt={"1"}>
                            {t("PrintInvoiceHeader")}
                          </Grid.Col>
                        </Grid>
                      </Box>

                      <Box mt={"xs"}>
                        <Grid gutter={{ base: 1 }}>
                          <Grid.Col span={2}>
                            <SwitchForm
                              tooltip={t("PrintInvoiceTitle")}
                              label=""
                              nextField={"print_power"}
                              name={"print_invoice_title"}
                              form={form}
                              color="red"
                              id={"print_invoice_title"}
                              position={"left"}
                              defaultChecked={1}
                            />
                          </Grid.Col>
                          <Grid.Col span={6} fz={"sm"} pt={"1"}>
                            {t("PrintInvoiceTitle")}
                          </Grid.Col>
                        </Grid>
                      </Box>

                      <Box mt={"xs"}>
                        <Grid gutter={{ base: 1 }}>
                          <Grid.Col span={2}>
                            <SwitchForm
                              tooltip={t("PrintPower")}
                              label=""
                              nextField={"print_instruction"}
                              name={"print_power"}
                              form={form}
                              color="red"
                              id={"print_power"}
                              position={"left"}
                              defaultChecked={0}
                            />
                          </Grid.Col>
                          <Grid.Col span={6} fz={"sm"} pt={"1"}>
                            {t("PrintPower")}
                          </Grid.Col>
                        </Grid>
                      </Box>

                      <Box mt={"xs"}>
                        <Grid gutter={{ base: 1 }}>
                          <Grid.Col span={2}>
                            <SwitchForm
                              tooltip={t("PrintInstruction")}
                              label=""
                              nextField={"invoice_height"}
                              name={"print_instruction"}
                              form={form}
                              color="red"
                              id={"print_instruction"}
                              position={"left"}
                              defaultChecked={0}
                            />
                          </Grid.Col>
                          <Grid.Col span={6} fz={"sm"} pt={"1"}>
                            {t("PrintInstruction")}
                          </Grid.Col>
                        </Grid>
                      </Box>

                      {/*  */}
                      <Box>
                        <Box>
                          <Text mt={"lg"}>{t("InvoicePrint")}</Text>
                        </Box>

                        <Box mt={"xs"}>
                          <TextInput
                            tooltip={t("InvoiceHeight")}
                            label={t("InvoiceHeight")}
                            placeholder={t("EnterInvoiceHeight")}
                            required={false}
                            nextField={"margin_left_right"}
                            name={"invoice_height"}
                            form={form}
                            mt={8}
                            id={"invoice_height"}
                          />
                        </Box>

                        <Box mt={"xs"}>
                          <TextInput
                            tooltip={t("MarginLeftRight")}
                            label={t("MarginLeftRight")}
                            placeholder={t("EnterMarginLeftRight")}
                            required={false}
                            nextField={"margin_top"}
                            name={"margin_left_right"}
                            form={form}
                            mt={8}
                            id={"margin_left_right"}
                          />
                        </Box>

                        <Box mt={"xs"}>
                          <TextInput
                            tooltip={t("MarginTop")}
                            label={t("MarginTop")}
                            placeholder={t("EnterMarginTop")}
                            required={false}
                            nextField={"show_header"}
                            name={"margin_top"}
                            form={form}
                            mt={8}
                            id={"margin_top"}
                          />
                        </Box>
                      </Box>

                      {/*  */}
                      <Box>
                        <Box>
                          <Text mt={"lg"}>{t("ReportFormat")}</Text>
                        </Box>

                        <Box mt={"xs"}>
                          <Grid gutter={{ base: 1 }}>
                            <Grid.Col span={2}>
                              <SwitchForm
                                tooltip={t("ShowHeader")}
                                label=""
                                nextField={"report_height"}
                                name={"show_header"}
                                form={form}
                                color="red"
                                id={"show_header"}
                                position={"left"}
                                defaultChecked={0}
                              />
                            </Grid.Col>
                            <Grid.Col span={6} fz={"sm"} pt={"1"}>
                              {t("ShowHeader")}
                            </Grid.Col>
                          </Grid>
                        </Box>

                        <Box mt={"xs"}>
                          <TextInput
                            tooltip={t("ReportHeight")}
                            label={t("ReportHeight")}
                            placeholder={t("EnterReportHeight")}
                            required={false}
                            nextField={"report_margin_top"}
                            name={"report_height"}
                            form={form}
                            mt={8}
                            id={"report_height"}
                          />
                        </Box>

                        <Box mt={"xs"}>
                          <TextInput
                            tooltip={t("ReportMarginTop")}
                            label={t("ReportMarginTop")}
                            placeholder={t("EnterReportMarginTop")}
                            required={false}
                            nextField={"report_margin_left_right"}
                            name={"report_margin_top"}
                            form={form}
                            mt={8}
                            id={"report_margin_top"}
                          />
                        </Box>
                        <Box mt={"xs"}>
                          <TextInput
                            tooltip={t("ReportMarginLeftRight")}
                            label={t("ReportMarginLeftRight")}
                            placeholder={t("EnterReportMarginLeftRight")}
                            required={false}
                            nextField={"custom_print_css"}
                            name={"report_margin_left_right"}
                            form={form}
                            mt={8}
                            id={"report_margin_left_right"}
                          />
                        </Box>
                      </Box>

                      {/*  */}
                      <Box>
                        <Box>
                          <Text fw={"bold"} mt={"lg"}>
                            {t("InvoiceCustomCssPrint")}
                          </Text>
                        </Box>

                        <Box mt={"xs"}>
                          <TextAreaForm
                            tooltip={t("PrintCustomPrint")}
                            label={t("PrintCustomPrint")}
                            placeholder={t("EnterPrintCustomPrint")}
                            required={false}
                            nextField={"vat_enable"}
                            name={"custom_print_css"}
                            form={form}
                            mt={8}
                            id={"custom_print_css"}
                          />
                        </Box>
                      </Box>
                      {/*  */}
                    </Box>
                  </ScrollArea>
                </Box>
              </Box>
            </Box>
          </Grid.Col>
          {/* Print end */}

          {/* Configuration start */}
          <Grid.Col span={8}>
            <Box bg={"white"} p={"xs"} className={"borderRadiusAll"}>
              <Box bg={"white"}>
                <Box
                  pl={`xs`}
                  pb={"xs"}
                  pr={8}
                  pt={"xs"}
                  mb={"xs"}
                  className={"boxBackground borderRadiusAll"}>
                  <Grid>
                    <Grid.Col span={6} h={54}>
                      <Title order={6} mt={"xs"} pl={"6"}>
                        {t("Configuration")}
                      </Title>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Stack right align="flex-end">
                        <>
                          {!saveCreateLoading && isOnline && (
                            <Button
                              size="xs"
                              color={`red.6`}
                              type="submit"
                              mt={4}
                              id="EntityFormSubmit"
                              leftSection={<IconDeviceFloppy size={16} />}>
                              <Flex direction={`column`} gap={0}>
                                <Text fz={12} fw={400}>
                                  {t("UpdateAndSave")}
                                </Text>
                              </Flex>
                            </Button>
                          )}
                        </>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Box>
                {/*  */}
                <Box
                  pl={`xs`}
                  pr={"xs"}
                  mt={"xs"}
                  className={"borderRadiusAll"}>
                  <ScrollArea
                    h={height}
                    scrollbarSize={2}
                    scrollbars="y"
                    type="never">
                    <Box>
                      <Box>
                        <Grid.Col span={6} fz={"sm"} pt={"20"}>
                          {t("VAT")}
                        </Grid.Col>

                        <Box>
                          <Box mt={"xs"}>
                            <Grid gutter={{ base: 1 }}>
                              <Grid.Col span={2}>
                                <SwitchForm
                                  tooltip={t("VATEnable")}
                                  label=""
                                  nextField={"vat_registration_no"}
                                  name={"vat_enable"}
                                  form={form}
                                  color="red"
                                  id={"vat_enable"}
                                  position={"left"}
                                  defaultChecked={0}
                                />
                              </Grid.Col>
                              <Grid.Col span={6} fz={"sm"} pt={"1"}>
                                {t("VATEnable")}
                              </Grid.Col>
                            </Grid>
                          </Box>

                          <Box mt={"xs"}>
                            <TextInput
                              tooltip={t("VatRegistrationNo")}
                              label={t("VatRegistrationNo")}
                              placeholder={t("EnterVatRegistrationNo")}
                              required={false}
                              nextField={"vat_percentage"}
                              name={"vat_registration_no"}
                              form={form}
                              mt={8}
                              id={"vat_registration_no"}
                            />
                          </Box>

                          <Box mt={"xs"}>
                            <TextInput
                              tooltip={t("VatPercentage")}
                              label={t("VatPercentage")}
                              placeholder={t("EnterVatPercentage")}
                              required={false}
                              nextField={"customer_prefix"}
                              name={"vat_percentage"}
                              form={form}
                              mt={8}
                              id={"vat_percentage"}
                            />
                          </Box>

                          <Box mt={"xs"}>
                            <TextInput
                              tooltip={t("CustomerPrefix")}
                              label={t("CustomerPrefix")}
                              placeholder={t("EnterCustomerPrefix")}
                              required={false}
                              nextField={"invoice_prefix"}
                              name={"customer_prefix"}
                              form={form}
                              mt={8}
                              id={"customer_prefix"}
                            />
                          </Box>

                          <Box mt={"xs"}>
                            <TextInput
                              tooltip={t("InvoicePrefix")}
                              label={t("InvoicePrefix")}
                              placeholder={t("EnterInvoicePrefix")}
                              required={false}
                              nextField={"header_banner_img"}
                              name={"invoice_prefix"}
                              form={form}
                              mt={8}
                              id={"invoice_prefix"}
                            />
                          </Box>
                          {/*  */}
                        </Box>
                      </Box>

                      {/* header and footer */}
                      <Box mt={"lg"}>
                        <Grid.Col span={6} fz={"sm"} pt={"1"}>
                          {t("HeaderAndFooter")}
                        </Grid.Col>

                        <Box>
                          <Grid columns={2}>
                            <Grid.Col span={1}>
                              <Box mt={"xs"}>
                                <Box className="App">
                                  <Text mt={"lg"}>{t("HeaderBanner")}</Text>
                                  <input
                                    className={styles.input_button}
                                    type="file"
                                    onChange={handleChange}
                                  />
                                  <Box mt={5}>
                                    <img
                                      className={styles.file_img}
                                      src={file}
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Grid.Col>

                            <Grid.Col span={1}>
                              <Box mt={"xs"}>
                                <Box className="App">
                                  <Text mt={"lg"}>{t("FooterBanner")}</Text>
                                  <input
                                    className={styles.input_button}
                                    type="file"
                                    onChange={handleChangeFooter}
                                  />
                                  <Box mt={5}>
                                    <img
                                      className={styles.file_img}
                                      src={fileFooter}
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Grid.Col>
                          </Grid>

                          {/*  */}
                        </Box>
                      </Box>

                      {/* Messages start */}
                      <Box mt={"lg"}>
                        <Grid.Col span={6} fz={"sm"} pt={"1"}>
                          {t("Messages")}
                        </Grid.Col>

                        <Box>
                          <CkEditor />
                          {/*  */}
                        </Box>
                      </Box>
                      {/* Messages end */}
                    </Box>
                  </ScrollArea>
                </Box>
                {/*  */}
              </Box>
            </Box>
          </Grid.Col>
          {/* Configuration end */}

          {/* side menu start */}
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
          {/* side menu end */}
        </Grid>
      </form>
    </Box>
  );
}
export default HealthConfigurationForm;
