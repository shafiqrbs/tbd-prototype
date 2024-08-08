import { Box, Button, Flex, Grid, Text, Textarea } from "@mantine/core";
import React from "react";
import FormInput from "./form-tab/FormInput";
import SelectInput from "./form-tab/SelectInput";
import { IconId, IconMenu2, IconStethoscope } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { IconMapPins } from "@tabler/icons-react";

const FormTab = () => {
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
  const Years = ["Years", "Month", "Days"];
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
  const gender = ["Male", "Female", "Others"];
  const maritalStatus = ["Single", "Married", "Divorced", "Widow"];
  const bloodGroup = [
    "A+",
    "A-",
    "B+",
    "B-",
    "AB+",
    "AB-",
    "O+",
    "O-",
    "Bombay Blood",
  ];

  return (
    <>
      <Box>
        {/* <Text ta={"center"} fw={"bold"} fz={"h1"} td={"underline"}>
          {t("Addmission")}
        </Text> */}

        <form>
          {/* Personal Info */}
          <Box>
            <Flex
              align={"center"}
              gap={"5px"}
              fw={"bold"}
              fz={"h3"}
              bg={"#40c057"}
              mb={"lg"}
              c={"#fff"}>
              <IconId /> {t("PersonalInformation")}
            </Flex>

            <Grid>
              <Grid.Col span={6}>
                <Box w={"100%"}>
                  <FormInput
                    label={t("Name")}
                    inputType={"text"}
                    inputPlaceholder={t("EnterYourName")}
                    nameID={"name"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <SelectInput
                    label={t("CabinWardBed")}
                    inputPlaceholder={t("SelectCabinWardNo")}
                    inputWidth={"100%"}
                    dataArr={selectionData}
                  />
                </Box>

                <Flex justify={"flex-start"} align={"center"}>
                  <Text fz={"14px"} w={"35%"}>
                    {t("AgeAndDateOfBirth")}
                  </Text>

                  <Flex gap={5} w={"100%"}>
                    <Box w={"100%"}>
                      <FormInput
                        label={""}
                        inputType={"text"}
                        inputPlaceholder={t("EnterYourAge")}
                        nameID={"age"}
                        inputWidth={"100%"}
                      />
                    </Box>
                    <Box w={"100%"}>
                      <SelectInput
                        label=""
                        inputPlaceholder={t("EnterYears")}
                        inputWidth={"100%"}
                        dataArr={Years}
                      />
                    </Box>
                    <Box w={"100%"}>
                      <FormInput
                        label={""}
                        inputType={"date"}
                        inputPlaceholder={t("EnterYourName")}
                        nameID={"name"}
                        inputWidth={"100%"}
                      />
                    </Box>
                  </Flex>
                </Flex>

                <Flex justify={"flex-start"} align={"center"}>
                  <Text fz={"14px"} w={"35%"}>
                    {t("GenderAndMerital")}
                  </Text>

                  <Flex gap={5} justify={"space-between"} w={"100%"}>
                    <Box w={"100%"}>
                      <SelectInput
                        label=""
                        inputPlaceholder={t("SelectAGender")}
                        inputWidth={"100%"}
                        dataArr={gender}
                      />
                    </Box>
                    <Box w={"100%"}>
                      <SelectInput
                        label=""
                        inputPlaceholder={t("SelectMeritalStatus")}
                        inputWidth={"100%"}
                        dataArr={maritalStatus}
                      />
                    </Box>
                  </Flex>
                </Flex>

                <Box w={"100%"}>
                  <SelectInput
                    label={t("BloodGroup")}
                    inputPlaceholder={t("SelectYourBloodGroup")}
                    inputWidth={"100%"}
                    dataArr={bloodGroup}
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                <Box w={"100%"}>
                  <FormInput
                    label={t("MobileNo")}
                    inputType={"number"}
                    inputPlaceholder={t("EnterYourMobileNumber")}
                    nameID={"mobile"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Flex justify={"flex-start"} align={"center"}>
                  <Text fz={"14px"} w={"35%"}>
                    {t("FatherAndMotherName")}
                  </Text>

                  <Flex gap={"sm"} justify={"space-between"} w={"100%"}>
                    <Box w={"100%"}>
                      <FormInput
                        label={""}
                        inputType={"text"}
                        inputPlaceholder={t("FatherHusbandName")}
                        nameID={"father_name"}
                        inputWidth={"100%"}
                      />
                    </Box>
                    <Box w={"100%"}>
                      <FormInput
                        label={""}
                        inputType={"text"}
                        inputPlaceholder={t("MotherName")}
                        nameID={"mother_name"}
                        inputWidth={"100%"}
                      />
                    </Box>
                  </Flex>
                </Flex>

                <Flex justify={"flex-start"} align={"center"}>
                  <Text fz={"14px"} w={"35%"}>
                    {t("GuardianAndMobile")}
                  </Text>

                  <Flex gap={"sm"} justify={"space-between"} w={"100%"}>
                    <Box w={"100%"}>
                      <FormInput
                        label={""}
                        inputType={"text"}
                        inputPlaceholder={t("GuardianName")}
                        nameID={"guardian_name"}
                        inputWidth={"100%"}
                      />
                    </Box>
                    <Box w={"100%"}>
                      <FormInput
                        label={""}
                        inputType={"text"}
                        inputPlaceholder={t("GuardianMobileNo")}
                        nameID={"guardian_mobile"}
                        inputWidth={"100%"}
                      />
                    </Box>
                  </Flex>
                </Flex>

                <Box w={"100%"}>
                  <FormInput
                    label={t("RelationWithPatient")}
                    inputType={"text"}
                    inputPlaceholder={t("RelationWithThePatient")}
                    nameID={"patient_relation"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    label={t("Profession")}
                    inputType={"text"}
                    inputPlaceholder={t("EnterProfession")}
                    nameID={"profession"}
                    inputWidth={"100%"}
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

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

          {/* Address Info */}
          <Box>
            <Flex
              align={"center"}
              gap={"5px"}
              fw={"bold"}
              fz={"h3"}
              bg={"#40c057"}
              mb={"lg"}
              c={"#fff"}>
              <IconMapPins /> {t("Address")}
            </Flex>

            <Grid>
              <Grid.Col span={4}>
                <Box w={"100%"}>
                  <FormInput
                    label={t("Religion")}
                    inputType={"text"}
                    inputPlaceholder={t("Religion")}
                    nameID={"name"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    label={t("Nationality")}
                    inputType={"text"}
                    inputPlaceholder={t("Nationality")}
                    nameID={"name"}
                    inputWidth={"100%"}
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={8}>
                <Flex w={"100%"} align={"center"}>
                  <Text fz={"14px"} w={"25%"}>
                    {t("SelectLocation")}
                  </Text>
                  <Box w={"100%"}>
                    <SelectInput
                      label={t("")}
                      inputPlaceholder={t("SelectLocation")}
                      inputWidth={"100%"}
                      dataArr={selectionData}
                    />
                  </Box>
                </Flex>

                <Flex w={"100%"}>
                  <Text fz={"14px"} w={"25%"}>
                    {t("Address")}
                  </Text>
                  <Box w={"100%"}>
                    <FormInput
                      label={t("")}
                      inputType={"text"}
                      inputPlaceholder={t("PatientAddress")}
                      nameID={"name"}
                      inputWidth={"100%"}
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

export default FormTab;
