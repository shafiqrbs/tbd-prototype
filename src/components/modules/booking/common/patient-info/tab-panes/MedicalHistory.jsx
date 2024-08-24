import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Radio,
  TagsInput,
  Text,
  Textarea,
} from "@mantine/core";
import React from "react";
import SelectInput from "./form-tab/SelectInput";
import { IconStethoscope } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import FormInput from "./form-tab/FormInput";
import CheckBoxInput from "./form-tab/CheckBoxInput";
import styles from "../../../../../../assets/css/BookingIndex.module.css";

const MedicalHistory = () => {
  const { t, i18n } = useTranslation();

  const selectionData = [
    "Cabin - 201",
    "Cabin - 202",
    "Cabin - 203",
    "Cabin - 204",
    "Cabin - 205",
    "Cabin - 206",
    "Cabin - 207",
    "Cabin - 208",
    "Cabin - 209",
    "Cabin - 210",
  ];
  const patientInfo = [
    {
      label: "AssignDoctor",
      patientPlaceholder: "ChooseAssignDoctor",
    },
    {
      label: "Reffered",
      patientPlaceholder: "ChooseReffered",
    },
    {
      label: "AssistantDoctor",
      patientPlaceholder: "ChooseAssistantDoctor",
    },
    {
      label: "AnesthesiaDoctor",
      patientPlaceholder: "ChooseAnesthesiaDoctor",
    },
    {
      label: "Department",
      patientPlaceholder: "ChooseADepartment",
    },
  ];

  const patientInfoRightSide = [
    {
      label: "MarketingExecutive",
      patientPlaceholder: "ChooseMarketingExecutive",
    },
    {
      label: "DiseasesProfile",
      patientPlaceholder: "DiseasesProfile",
    },
  ];
  const disease = [
    { name: "Heart disease" },
    { name: "Cancer" },
    { name: "Accidents (unintentional injuries)" },
    { name: "COVID-19" },
    { name: "Stroke (cerebrovascular diseases)" },
    { name: "Chronic lower respiratory diseases" },
    { name: "Alzheimer’s disease" },
    { name: "Diabetes" },
    { name: "Nephritis, nephrotic syndrome, and nephrosis" },
    { name: "Chronic liver disease and cirrhosis" },
  ];

  const healthyUnhealthyHabits = [
    {
      radioGroupName: "excercise",
      mainLabel: "Excercise",
      OptionA: "Never",
      OptionB: "1-2 days",
      OptionC: "3-4 days",
      OptionD: "5+ days",
    },
    {
      radioGroupName: "eating_following_a_diet",
      mainLabel: "Eating following a diet",
      OptionA: "I have a loose diet",
      OptionB: "I have a strict diet",
      OptionC: "I don't have a diet plan",
    },
    {
      radioGroupName: "alcohol_onsumption",
      mainLabel: "Alcohol Consumption",
      OptionA: "I don't drink",
      OptionB: "1-2 glasses/day",
      OptionC: "3-4 glasses/day",
      OptionD: "5+ glasses/day",
    },
    {
      radioGroupName: "caffeine_consumption",
      mainLabel: "Caffeine Consumption",
      OptionA: "I don't use caffeine",
      OptionB: "1-2 cups/day",
      OptionC: "3-4 cups/day",
      OptionD: "5+ cups/day",
    },
    {
      radioGroupName: "do_you_smoke",
      mainLabel: "Do you smoke",
      OptionA: "No",
      OptionB: "0-1 packs/day",
      OptionC: "1-2 packs/day",
      OptionD: "2+ packs/day",
    },
  ];

  return (
    <>
      <Box>
        <form>
          {/* Patient Info */}
          <Box>
            <Flex
              align={"center"}
              gap={"5px"}
              fw={"bold"}
              fz={"h3"}
              bg={"#d7e8cd"}
              mb={"lg"}
              c={"#000"}
              pl={10}>
              <IconStethoscope /> {t("PatientInformation")}
            </Flex>

            <Grid>
              <Grid.Col span={6} pl={20}>
                {patientInfo.map((data, index) => {
                  return (
                    <Box key={index} w={"100%"}>
                      <SelectInput
                        label={t(data.label)}
                        inputPlaceholder={t(data.patientPlaceholder)}
                        inputWidth={"100%"}
                        dataArr={selectionData}
                      />
                    </Box>
                  );
                })}

                <Box w={"100%"}>
                  <FormInput
                    label={"Height"}
                    inputPlaceholder={"Enter Height"}
                    inputType={"Text"}
                    inputWidth={"100%"}
                    nameID={"height"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    label={"Weight"}
                    inputPlaceholder={"Enter Weight"}
                    inputType={"Text"}
                    inputWidth={"100%"}
                    nameID={"weight"}
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                {patientInfoRightSide.map((data, index) => {
                  return (
                    <Box key={index} w={"100%"}>
                      <SelectInput
                        label={t(data.label)}
                        inputPlaceholder={t(data.patientPlaceholder)}
                        inputWidth={"100%"}
                        dataArr={selectionData}
                      />
                    </Box>
                  );
                })}

                <Flex w={"100%"}>
                  <Text fz={"14px"} w={"35%"}>
                    {t("DiseaseDescription")}
                  </Text>
                  <Box w={"100%"}>
                    <Textarea
                      w={"100%"}
                      rows={5}
                      placeholder={t("ChooseDiseaseDescription")}
                    />
                  </Box>
                </Flex>
              </Grid.Col>
            </Grid>

            <Grid>
              <Grid.Col span={6} pl={20}>
                {/* Check boxes start */}
                <Box mt={"xl"}>
                  <Box mb={"20px"}>
                    <Text fw={"bold"} fz={"h3"}>
                      Have you ever had (Please check all that apply)
                    </Text>
                  </Box>

                  <Box>
                    {disease?.map((data, index) => {
                      return (
                        <Box key={index}>
                          <CheckBoxInput label={data.name} />
                        </Box>
                      );
                    })}
                  </Box>

                  <Box w={"100%"}>
                    <Flex align={"center"}>
                      <Text fz={"14px"} w={"35%"}>
                        {t("OtherIllness")}
                      </Text>

                      <TagsInput
                        w={"100%"}
                        label={""}
                        placeholder={"Enter your Illness"}
                        clearable
                      />
                    </Flex>
                  </Box>
                </Box>
                {/* Check boxes end */}
              </Grid.Col>

              <Grid.Col span={6}>
                {/* radio group option start */}
                <Box mt={"xl"}>
                  <Box>
                    <Text fz={"h3"} fw={"bold"}>
                      Please Fill this field
                    </Text>
                  </Box>
                  {healthyUnhealthyHabits?.map((data, index) => {
                    return (
                      <Box key={index} mt={"10px"}>
                        <Radio.Group
                          name={data?.radioGroupName}
                          label={`${index + 1}. ${data?.mainLabel}`}
                          withAsterisk>
                          <Group mt="xs" ml={"xl"}>
                            <Flex
                              w={"100%"}
                              align={"center"}
                              justify={"space-between"}
                              gap={10}>
                              <Radio
                                display={
                                  data?.OptionA == null || data?.OptionA == ""
                                    ? "none"
                                    : "block"
                                }
                                value={data?.OptionA}
                                label={data?.OptionA}
                              />
                              <Radio
                                display={
                                  data?.OptionB == null ? "none" : "block"
                                }
                                value={data?.OptionB}
                                label={data?.OptionB}
                              />
                              <Radio
                                display={
                                  data?.OptionC == null ? "none" : "block"
                                }
                                value={data?.OptionC}
                                label={data?.OptionC}
                              />
                              <Radio
                                display={
                                  data?.OptionD == null ? "none" : "block"
                                }
                                value={data?.OptionD}
                                label={data?.OptionD}
                              />
                            </Flex>
                          </Group>
                        </Radio.Group>
                      </Box>
                    );
                  })}
                </Box>
                {/* radio group option end */}
              </Grid.Col>
            </Grid>
          </Box>

          {/* <Flex justify={"flex-end"} gap={10} my={10}>
            <Button bg={"#FA5252"} type="reset">
              {t("Reset")}
            </Button>
            <Button bg={"#228BE6"} type="submit">
              {t("SaveAndContinue")}
            </Button>
          </Flex> */}
        </form>
      </Box>
    </>
  );
};

export default MedicalHistory;
