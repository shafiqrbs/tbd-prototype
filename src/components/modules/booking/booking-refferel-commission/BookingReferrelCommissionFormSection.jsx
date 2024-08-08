import React, { useState, useEffect, useRef } from "react";
import {
  Stack,
  Box,
  Button,
  Grid,
  Title,
  Text,
  Flex,
  ScrollArea,
  Tabs,
  TextInput,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import {
  IconDeviceFloppy,
  IconCalendar,
  IconHospital,
  IconDots,
} from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import SelectForm from "../../../form-builders/SelectForm";
import _SelectForm from "../../../form-builders/_SelectForm";
import _InputForm from "../../../form-builders/_InputForm";
import TextAreaForm from "../../../form-builders/TextAreaForm";
import InputForm from "../../../form-builders-filter/InputForm";
import InputNumberForm from "../../../form-builders/InputNumberForm";
import { DateInput } from "@mantine/dates";
import SwitchForm from "../../../form-builders/SwitchForm";
import styles from "../../../../assets/css/BookingIndex.module.css";
import NavTabs from "./NavTabs";
import ModalFilter from "../common/ModalFilter";

export default function BookingReferrelCommissionFormSection() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isOnline, mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 200;
  const [saveCreateLoading, setSaveCreateLoading] = useState(false);
  const [paymentMode, setPaymentMode] = useState("");
  const [ledgerHead, setLedgerHead] = useState("");
  const [paymentMode2, setPaymentMode2] = useState("");
  const [nextField, setNextField] = useState("amount");

  const form = useForm({
    initialValues: {
      payment_mode: "",
      ledger_head: "",
      cheque_no: "",
      bank_name: "",
      branch_name: "",
      received_from: "",
      amount: "",
      narration: "",
      pay_mode: "",
    },
    validate: {
      amount: (value) => (value ? null : "Amount is required"),
      narration: (value) => (value ? null : "Narration is required"),
    },
  });

  const paymentModeData = ["Debit", "Credit"];
  const paymentModeData2 = ["Cheque", "Cash", "Transfer"];
  const categorizedOptions = [
    {
      group: t("Arms&Ammunition"),
      items: [
        { value: "arms_ammunition_32", label: ".32 Bore Cartridges" },
        { value: "arms_ammunition_7", label: "7 mm Cartridges" },
      ],
    },
    {
      group: t("AccountReceivable"),
      items: [
        {
          value: "account_receivable_asian",
          label: "15th Asian Airgun Championship, Daegu Korea",
        },
        {
          value: "account_receivable_shooting",
          label: "15th Asian Shooting Championship, Korea 2023",
        },
      ],
    },
    {
      group: t("BankAccount"),
      items: [
        {
          value: "bank_account_sonali",
          label: "Sonali Bank, Gulshan Branch (00115633005315)",
        },
        { value: "bank_account_agrani", label: "Agrani Bank" },
      ],
    },
  ];

  const amountInputRef = useRef(null);
  const chequeNoInputRef = useRef(null);
  const payModeInputRef = useRef(null);

  useEffect(() => {
    if (ledgerHead && ledgerHead.startsWith("bank_account")) {
      chequeNoInputRef.current?.focus();
    }
  }, [ledgerHead]);

  useEffect(() => {
    if (nextField === "pay_mode" && payModeInputRef.current) {
      payModeInputRef.current.focus();
    } else if (nextField === "amount" && amountInputRef.current) {
      amountInputRef.current.focus();
    }
  }, [nextField]);

  const handleLedgerHeadChange = (value) => {
    form.setFieldValue("ledger_head", value);
    setLedgerHead(value);
    setPaymentMode2("");
    if (value && value.startsWith("bank_account")) {
      setNextField("cheque_no");
    } else {
      setNextField("amount");
    }
  };

  const [bookingUDPDropdown, setBookingUDPDropdown] = useState(false);
  const dropdownLists = [
    {
      name: "IPD",
      href: "#",
    },
    {
      name: "OPD",
      href: "#",
    },
    {
      name: "Diagnostic",
      href: "#",
    },
    {
      name: "Doctor Visit",
      href: "#",
    },
    {
      name: "Billing",
      href: "#",
    },
    {
      name: "Accounts",
      href: "#",
    },
    {
      name: "Pharmacy",
      href: "#",
    },
    {
      name: "Human Resources",
      href: "#",
    },
  ];

  return (
    <Box>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
        })}>
        <Box p={"xs"} pt={"0"} className={"borderRadiusAll"}>
          <Box
            pl={"xs"}
            pb={"0.4rem"}
            pr={8}
            pt={"0.4rem"}
            mb={"xs"}
            mt={"xs"}
            className={`boxBackground borderRadiusAll ${styles.flex_box}`}>
            <Grid>
              <Grid.Col span={9}>
                <Title
                  w={"max-content"}
                  order={6}
                  pl={"6"}
                  fz={{ xl: 16, lg: 13 }}>
                  {t("NewBooking")}
                </Title>
              </Grid.Col>
            </Grid>

            <Box>
              {/* <TextInput placeholder={t("SearchForBed")} /> */}
              <ModalFilter filterArray={dropdownLists} />
            </Box>
          </Box>
          <Box bg={"white"}>
            <Box pl={"xs"} pr={"xs"} className={"borderRadiusAll"}>
              <Grid columns={24}>
                <Grid.Col span={"auto"}>
                  <ScrollArea
                    h={height - 15}
                    scrollbarSize={2}
                    scrollbars="y"
                    type="never"
                    pb={"xs"}>
                    <Box>
                      <NavTabs />
                    </Box>
                  </ScrollArea>
                </Grid.Col>
              </Grid>
            </Box>
          </Box>
          <Box
            pl={"xs"}
            pb={"xs"}
            pr={8}
            pt={"xs"}
            mt={"xs"}
            className={"boxBackground borderRadiusAll"}>
            <Grid>
              <Grid.Col span={8} h={54}>
                <InputNumberForm
                  tooltip={t("Amount")}
                  label={t("")}
                  placeholder={t("Amount")}
                  required={true}
                  nextField={"EntityFormSubmit"}
                  name={"amount"}
                  form={form}
                  id={"amount"}
                  ref={amountInputRef}
                />
              </Grid.Col>
              <Grid.Col span={4}>
                <Stack right align="flex-end">
                  {!saveCreateLoading && isOnline && (
                    <Button
                      size="xs"
                      color={"red.6"}
                      type="submit"
                      mt={4}
                      id="EntityFormSubmit"
                      leftSection={<IconDeviceFloppy size={16} />}>
                      <Flex direction={"column"} gap={0}>
                        <Text fz={12} fw={400}>
                          {t("AddBooking")}
                        </Text>
                      </Flex>
                    </Button>
                  )}
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
      </form>
    </Box>
  );
}
