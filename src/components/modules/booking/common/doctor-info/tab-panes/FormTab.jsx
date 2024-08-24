import { Box, Button, Flex, Grid, Text, Textarea } from "@mantine/core";
import React from "react";
import FormInput from "./form-tab/FormInput";
import SelectInput from "./form-tab/SelectInput";
import { IconId, IconStethoscope } from "@tabler/icons-react";
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
        <form>
          {/* Personal Info */}
          <Box>
            <Flex
              align={"center"}
              gap={"5px"}
              fw={"bold"}
              fz={"h3"}
              bg={"#D7E8CD"}
              mb={"lg"}
              px={10}
              c={"#000"}>
              <IconId /> {t("PersonalInformation")}
            </Flex>

            <Grid pl={10}>
              <Grid.Col span={6}>
                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("Name")}
                    inputType={"text"}
                    inputPlaceholder={t("EnterYourName")}
                    nameID={"name"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Flex justify={"flex-start"} align={"center"}>
                  <Text fz={"14px"} w={"35%"}>
                    {t("Age")}
                  </Text>

                  <Flex gap={5} w={"100%"}>
                    <Box w={"100%"}>
                      <FormInput
                        disabled={true}
                        required={true}
                        label={""}
                        inputType={"text"}
                        inputPlaceholder={t("EnterYourAge")}
                        nameID={"age"}
                        inputWidth={"100%"}
                      />
                    </Box>
                    <Box w={"100%"}>
                      <SelectInput
                        disabled={true}
                        required={true}
                        label=""
                        inputPlaceholder={t("EnterYears")}
                        inputWidth={"100%"}
                        dataArr={Years}
                      />
                    </Box>
                  </Flex>
                </Flex>

                <Box>
                  <Box w={"100%"}>
                    <FormInput
                      disabled={true}
                      required={true}
                      label={t("DateOfBirth")}
                      inputType={"date"}
                      inputPlaceholder={t("EnterYourDateOfBirth")}
                      nameID={"name"}
                      inputWidth={"100%"}
                    />
                  </Box>
                </Box>

                <Flex justify={"flex-start"} align={"center"}>
                  <Text fz={"14px"} w={"35%"}>
                    {t("GenderAndMerital")}
                  </Text>

                  <Flex gap={5} justify={"space-between"} w={"100%"}>
                    <Box w={"100%"}>
                      <SelectInput
                        disabled={true}
                        required={true}
                        label=""
                        inputPlaceholder={t("SelectAGender")}
                        inputWidth={"100%"}
                        dataArr={gender}
                      />
                    </Box>
                    <Box w={"100%"}>
                      <SelectInput
                        disabled={true}
                        required={true}
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
                    disabled={true}
                    required={true}
                    label={t("BloodGroup")}
                    inputPlaceholder={t("SelectYourBloodGroup")}
                    inputWidth={"100%"}
                    dataArr={bloodGroup}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("MobileNo")}
                    inputType={"number"}
                    inputPlaceholder={t("EnterYourMobileNumber")}
                    nameID={"mobile"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("Email")}
                    inputType={"email"}
                    inputPlaceholder={t("EnterYourEmailAddress")}
                    nameID={"email"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("Religion")}
                    inputType={"text"}
                    inputPlaceholder={t("Religion")}
                    nameID={"name"}
                    inputWidth={"100%"}
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("Nationality")}
                    inputType={"text"}
                    inputPlaceholder={t("Nationality")}
                    nameID={"nationality"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={"EmergencyContact"}
                    inputType={"number"}
                    inputPlaceholder={t("EmergencyContact")}
                    nameID={"emergency_contact"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={"Specialization"}
                    inputType={"text"}
                    inputPlaceholder={t("Specialization")}
                    nameID={"guardian_name"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={"WorkExperience"}
                    inputType={"text"}
                    inputPlaceholder={t("WorkExperience")}
                    nameID={"guardian_name"}
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
                        disabled={true}
                        required={true}
                        label={""}
                        inputType={"text"}
                        inputPlaceholder={t("FatherHusbandName")}
                        nameID={"father_name"}
                        inputWidth={"100%"}
                      />
                    </Box>
                    <Box w={"100%"}>
                      <FormInput
                        disabled={true}
                        required={true}
                        label={""}
                        inputType={"text"}
                        inputPlaceholder={t("MotherName")}
                        nameID={"mother_name"}
                        inputWidth={"100%"}
                      />
                    </Box>
                  </Flex>
                </Flex>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={"Qualification"}
                    inputType={"text"}
                    inputPlaceholder={t("Qualification")}
                    nameID={"guardian_name"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("Profession")}
                    inputType={"text"}
                    inputPlaceholder={t("EnterProfession")}
                    nameID={"profession"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("ReferenceContact")}
                    inputType={"number"}
                    inputPlaceholder={t("EnterYourReferenceContact")}
                    nameID={"reference-Contact"}
                    inputWidth={"100%"}
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

          {/* Patient Info */}
          {/* <Box>
            <Flex
              align={"center"}
              gap={"5px"}
              fw={"bold"}
              fz={"h3"}
              bg={"#D7E8CD"}
              mb={"lg"}
              px={10}
              c={"#000"}>
              <IconStethoscope /> {t("PatientInformation")}
            </Flex>

            <Grid pl={10}>
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
          </Box> */}

          {/* Address Info */}
          <Box>
            <Flex
              align={"center"}
              gap={"5px"}
              fw={"bold"}
              fz={"h3"}
              bg={"#D7E8CD"}
              mb={"lg"}
              px={10}
              c={"#000"}>
              <IconMapPins /> {t("Address")}
            </Flex>

            <Grid pl={10}>
              <Grid.Col span={6}>
                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("PresentAddress")}
                    inputType={"text"}
                    inputPlaceholder={t("PresentAddress")}
                    nameID={"present_address"}
                    inputWidth={"100%"}
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("PermanentAddress")}
                    inputType={"text"}
                    inputPlaceholder={t("PermanentAddress")}
                    nameID={"permanent_address"}
                    inputWidth={"100%"}
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

          {/* Bank Account Info */}
          <Box>
            <Flex
              align={"center"}
              gap={"5px"}
              fw={"bold"}
              fz={"h3"}
              bg={"#D7E8CD"}
              mb={"lg"}
              px={10}
              c={"#000"}>
              <IconMapPins /> {t("BankAccountDetails")}
            </Flex>

            <Grid pl={10}>
              <Grid.Col span={6}>
                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("AccountTitle")}
                    inputType={"text"}
                    inputPlaceholder={t("AccountTitle")}
                    nameID={"account_title"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("BankName")}
                    inputType={"text"}
                    inputPlaceholder={t("BankName")}
                    nameID={"bank_name"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("BankBranchName")}
                    inputType={"text"}
                    inputPlaceholder={t("BankBranchName")}
                    nameID={"bank_branch_name"}
                    inputWidth={"100%"}
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("BankAccountNumber")}
                    inputType={"text"}
                    inputPlaceholder={t("BankAccountNumber")}
                    nameID={"bank_account_number"}
                    inputWidth={"100%"}
                  />
                </Box>
                <Box w={"100%"}>
                  <FormInput
                    disabled={true}
                    required={true}
                    label={t("IFSCCode")}
                    inputType={"text"}
                    inputPlaceholder={t("IFSCCode")}
                    nameID={"IFSC_code"}
                    inputWidth={"100%"}
                  />
                </Box>
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
