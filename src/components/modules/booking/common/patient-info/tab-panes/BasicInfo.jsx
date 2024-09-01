import { Box, Flex, Grid, Text } from "@mantine/core";
import styles from "../../../../../../assets/css/BookingIndex.module.css";
import { useTranslation } from "react-i18next";
import { IconId, IconMapPins } from "@tabler/icons-react";
import FormInput from "./form-tab/FormInput";
import SelectInput from "./form-tab/SelectInput";

const BasicInfo = ({ formEdit }) => {
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
    <Box>
      <form>
        {/* Personal Info */}
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
            <IconId /> {t("PersonalInformation")}
          </Flex>

          <Grid>
            <Grid.Col span={6} pl={20}>
              <Box w={"100%"}>
                <FormInput
                  required={true}
                  disabled={!formEdit}
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
                      required={true}
                      disabled={!formEdit}
                      label={""}
                      inputType={"text"}
                      inputPlaceholder={t("EnterYourAge")}
                      nameID={"age"}
                      inputWidth={"100%"}
                    />
                  </Box>
                  <Box w={"100%"}>
                    <SelectInput
                      required={true}
                      disabled={!formEdit}
                      label=""
                      inputPlaceholder={t("EnterYears")}
                      inputWidth={"100%"}
                      dataArr={Years}
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
                      required={true}
                      disabled={!formEdit}
                      label=""
                      inputPlaceholder={t("SelectAGender")}
                      inputWidth={"100%"}
                      dataArr={gender}
                    />
                  </Box>
                  <Box w={"100%"}>
                    <SelectInput
                      required={true}
                      disabled={!formEdit}
                      label=""
                      inputPlaceholder={t("SelectMeritalStatus")}
                      inputWidth={"100%"}
                      dataArr={maritalStatus}
                    />
                  </Box>
                </Flex>
              </Flex>

              <Box w={"100%"}>
                <FormInput
                  required={true}
                  disabled={!formEdit}
                  label={t("DateOfBirth")}
                  inputType={"date"}
                  inputPlaceholder={t("EnterYourName")}
                  nameID={"name"}
                  inputWidth={"100%"}
                />
              </Box>
            </Grid.Col>

            <Grid.Col span={6}>
              <Box w={"100%"}>
                <FormInput
                  required={true}
                  disabled={!formEdit}
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
                      required={true}
                      disabled={!formEdit}
                      label={""}
                      inputType={"text"}
                      inputPlaceholder={t("FatherHusbandName")}
                      nameID={"father_name"}
                      inputWidth={"100%"}
                    />
                  </Box>
                  <Box w={"100%"}>
                    <FormInput
                      required={true}
                      disabled={!formEdit}
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
                  required={true}
                  disabled={!formEdit}
                  label={t("Profession")}
                  inputType={"text"}
                  inputPlaceholder={t("EnterProfession")}
                  nameID={"profession"}
                  inputWidth={"100%"}
                />
              </Box>

              <Box w={"100%"}>
                <SelectInput
                  required={true}
                  disabled={!formEdit}
                  label={t("BloodGroup")}
                  inputPlaceholder={t("SelectYourBloodGroup")}
                  inputWidth={"100%"}
                  dataArr={bloodGroup}
                />
              </Box>
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
            bg={"#d7e8cd"}
            mb={"lg"}
            c={"#000"}
            pl={10}>
            <IconMapPins /> {t("Address")}
          </Flex>

          <Grid>
            <Grid.Col span={6} pl={20}>
              <Box w={"100%"}>
                <FormInput
                  required={true}
                  disabled={!formEdit}
                  label={t("Religion")}
                  inputType={"text"}
                  inputPlaceholder={t("Religion")}
                  nameID={"name"}
                  inputWidth={"100%"}
                />
              </Box>

              <Box w={"100%"}>
                <FormInput
                  required={true}
                  disabled={!formEdit}
                  label={t("Nationality")}
                  inputType={"text"}
                  inputPlaceholder={t("Nationality")}
                  nameID={"name"}
                  inputWidth={"100%"}
                />
              </Box>
            </Grid.Col>

            <Grid.Col span={6}>
              <Box w={"100%"}>
                <SelectInput
                  required={true}
                  disabled={!formEdit}
                  label={t("SelectLocation")}
                  inputPlaceholder={t("SelectLocation")}
                  inputWidth={"100%"}
                  dataArr={selectionData}
                />
              </Box>

              <Box w={"100%"}>
                <FormInput
                  required={true}
                  disabled={!formEdit}
                  label={t("Address")}
                  inputType={"text"}
                  inputPlaceholder={t("PatientAddress")}
                  nameID={"name"}
                  inputWidth={"100%"}
                />
              </Box>

              {/* <Flex justify={"flex-end"} gap={10} my={10}>
                <Button bg={"#FA5252"} type="reset">
                  {t("Reset")}
                </Button>
                <Button bg={"#228BE6"} type="submit">
                  {t("SaveAndContinue")}
                </Button>
              </Flex> */}
            </Grid.Col>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default BasicInfo;
