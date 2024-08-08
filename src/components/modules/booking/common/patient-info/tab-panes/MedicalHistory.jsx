import { Box, Button, Flex, Grid, Text, Textarea } from "@mantine/core";
import React from "react";
import SelectInput from "./form-tab/SelectInput";
import { IconStethoscope } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import FormInput from "./form-tab/FormInput";
import CheckBoxInput from "./form-tab/CheckBoxInput";

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
    { id: 1, name: "Heart disease" },
    { id: 2, name: "Cancer" },
    { id: 3, name: "Accidents (unintentional injuries)" },
    { id: 4, name: "COVID-19" },
    { id: 5, name: "Stroke (cerebrovascular diseases)" },
    { id: 6, name: "Chronic lower respiratory diseases" },
    { id: 7, name: "Alzheimer’s disease" },
    { id: 8, name: "Diabetes" },
    { id: 9, name: "Nephritis, nephrotic syndrome, and nephrosis" },
    { id: 10, name: "Chronic liver disease and cirrhosis" },
  ];

  return (
    <>
      <Box>
        {/* <Text ta={"center"} fw={"bold"} fz={"h1"} td={"underline"}>
          {t("Addmission")}
        </Text> */}

        <form>
          {/* Patient Info */}
          <Box>
            <Flex
              align={"center"}
              gap={"5px"}
              fw={"bold"}
              fz={"h3"}
              bg={"#40c057"}
              mb={"lg"}
              c={"#fff"}>
              <IconStethoscope /> {t("PatientInformation")}
            </Flex>

            <Grid>
              <Grid.Col span={6}>
                {patientInfo.map((data) => {
                  return (
                    <Box w={"100%"}>
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

                <Box mt={"xl"}>
                  <Box mb={"20px"}>
                    <Text fw={"bold"} fz={"h3"}>
                      Have you ever had (Please check all that apply)
                    </Text>
                  </Box>
                  <Box>
                    {disease?.map((data) => {
                      return (
                        <Box key={data.id}>
                          <CheckBoxInput label={data.name} />
                        </Box>
                      );
                    })}
                  </Box>

                  <Box w={"100%"}>
                    <FormInput
                      label={"Other Illness"}
                      inputPlaceholder={"Enter Weight"}
                      inputType={"Text"}
                      inputWidth={"100%"}
                      nameID={"weight"}
                    />
                  </Box>
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                {patientInfoRightSide.map((data) => {
                  return (
                    <Box w={"100%"}>
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
          </Box>

          <Flex justify={"flex-end"} gap={10} my={10}>
            <Button bg={"#FA5252"} type="reset">
              {t("Reset")}
            </Button>
            <Button bg={"#228BE6"} type="submit">
              {t("SaveAndContinue")}
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};

export default MedicalHistory;
