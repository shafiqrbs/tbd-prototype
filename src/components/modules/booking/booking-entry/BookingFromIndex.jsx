import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Grid,
  Box,
  Text,
  Stack,
  Button,
  Flex,
  Select,
  Textarea,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { useHotkeys } from "@mantine/hooks";

import ShortcutVoucher from "../../shortcut/ShortcutVoucher.jsx";
import SidebarLinks from "../common/SidebarLinks.jsx";
import BookingFormSection from "./BookingFormSection.jsx";
import FormInput from "./common/FormInput.jsx";
import { IconX } from "@tabler/icons-react";

function BookingFormIndex({ selectedRoom, onClose }) {
  const { t, i18n } = useTranslation();
  const { mainAreaHeight, isOnline } = useOutletContext();
  const height = mainAreaHeight - 215;
  const [saveCreateLoading, setSaveCreateLoading] = useState(false);

  useHotkeys(
    [
      [
        "alt+n",
        () => {
          document.getElementById("method_id").click();
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

  const patient = [
    {
      id: "idn001",
      name: "Foysal Ahmed",
      invoiceNo: "inv333",
      mobile: "01378998017",
    },
    {
      id: "idn002",
      name: "Asraful Alam",
      invoiceNo: "inv335",
      mobile: "01478998016",
    },
    {
      id: "idn003",
      name: "Riaz Hossain",
      invoiceNo: "inv339",
      mobile: "01578998018",
    },
    {
      id: "idn004",
      name: "Hridoy Ahmed",
      invoiceNo: "inv343",
      mobile: "01678998019",
    },
    {
      id: "idn005",
      name: "Mahim Rahman",
      invoiceNo: "inv344",
      mobile: "01778998013",
    },
  ];

  return (
    <Box pt={6} bg={"#f0f1f9"}>
      <form>
        <Box>
          <Grid columns={24} gutter={{ base: 6 }}>
            <Grid.Col span={{ xl: 2.5, lg: 3.5 }}>
              <Box bg={"white"}>
                <SidebarLinks />
              </Box>
            </Grid.Col>

            <Grid.Col span={8}>
              <Box>
                <Box bg={"white"}>
                  <BookingFormSection />
                </Box>
              </Box>
            </Grid.Col>

            <Grid.Col span={{ xl: 12.5, lg: 11.2 }}>
              <Box
                h={"69%"}
                p={"xs"}
                className={"borderRadiusAll"}
                bg={"white"}>
                {/* Form input are here start */}
                {/* Display the room number at the top start */}
                <Box h={"100%"} className="borderRadiusAll" p={10}>
                  <Box>
                    <Text display={selectedRoom ? "none" : "block"}>
                      Click a Free Room & fill up the form for booking.
                    </Text>
                  </Box>
                  {/* Display the room number at the top end */}

                  {selectedRoom && (
                    <>
                      <Box mb={10} p={10} bg="white">
                        <Flex justify={"space-between"} gap={10}>
                          <Text fz="lg" fw={700}>
                            {t("Room Selected")}: {selectedRoom.title}
                          </Text>

                          <Button onClick={onClose}>
                            <IconX />{" "}
                          </Button>
                        </Flex>
                      </Box>

                      <Flex h={"100%"} gap={10}>
                        <Box w={"100%"} className="borderRadiusAll" p={10}>
                          <Box>
                            <FormInput
                              required={true}
                              disabled={false}
                              label={"GuardianName"}
                              inputPlaceholder={"GuardianName"}
                              nameID={"guardianName"}
                              inputWidth={"100%"}
                            />
                          </Box>
                          <Box>
                            <FormInput
                              required={true}
                              disabled={false}
                              label={"GuardianMobile"}
                              inputPlaceholder={"EnterGuardianMobile"}
                              nameID={"guardianMobile"}
                              inputWidth={"100%"}
                            />
                          </Box>
                          <Box>
                            <FormInput
                              required={true}
                              disabled={false}
                              label={"RelationWithPatient"}
                              inputPlaceholder={"RelationWithPatient"}
                              nameID={"relationWithPatient"}
                              inputWidth={"100%"}
                            />
                          </Box>
                          <Box mb={10}>
                            <Flex justify={"flex-start"} align={"center"}>
                              <Text fz={"14px"} w={"35%"}>
                                {t("MarketingExecutive")}
                              </Text>
                              <Select
                                w={"100%"}
                                placeholder={t("MarketingExecutive")}
                                data={["React", "Angular", "Vue", "Svelte"]}
                                searchable
                              />
                            </Flex>
                          </Box>
                          <Box mb={10}>
                            <Flex justify={"flex-start"} align={"center"}>
                              <Text fz={"14px"} w={"35%"}>
                                {t("Referred")}
                              </Text>
                              <Select
                                w={"100%"}
                                placeholder={t("Referred")}
                                data={["React", "Angular", "Vue", "Svelte"]}
                                searchable
                              />
                            </Flex>
                          </Box>
                        </Box>
                        {/*  */}
                        <Box w={"100%"} className="borderRadiusAll" p={10}>
                          <Box mb={10}>
                            <Flex justify={"flex-start"} align={"center"}>
                              <Text fz={"14px"} w={"35%"}>
                                {t("AssignDoctor")}
                              </Text>
                              <Select
                                w={"100%"}
                                placeholder={t("AssignDoctor")}
                                data={["React", "Angular", "Vue", "Svelte"]}
                                searchable
                              />
                            </Flex>
                          </Box>
                          <Box mb={10}>
                            <Flex justify={"flex-start"} align={"center"}>
                              <Text fz={"14px"} w={"35%"}>
                                {t("AnesthesiaDoctor")}
                              </Text>
                              <Select
                                w={"100%"}
                                placeholder={t("AnesthesiaDoctor")}
                                data={["React", "Angular", "Vue", "Svelte"]}
                                searchable
                              />
                            </Flex>
                          </Box>
                          <Box mb={10}>
                            <Flex justify={"flex-start"} align={"center"}>
                              <Text fz={"14px"} w={"35%"}>
                                {t("Department")}
                              </Text>
                              <Select
                                w={"100%"}
                                placeholder={t("Department")}
                                data={["React", "Angular", "Vue", "Svelte"]}
                                searchable
                              />
                            </Flex>
                          </Box>
                          <Box mb={10}>
                            <Flex justify={"flex-start"} align={"center"}>
                              <Text fz={"14px"} w={"35%"}>
                                {t("DiseasesProfile")}
                              </Text>
                              <Select
                                w={"100%"}
                                placeholder={t("DiseasesProfile")}
                                data={["React", "Angular", "Vue", "Svelte"]}
                                searchable
                              />
                            </Flex>
                          </Box>
                          <Box mb={10}>
                            <Flex justify={"flex-start"} align={"center"}>
                              <Text fz={"14px"} w={"35%"}>
                                {t("DiseasesDescription")}
                              </Text>
                              <Textarea
                                w={"100%"}
                                placeholder={t("DiseasesDescription")}
                              />
                            </Flex>
                          </Box>
                        </Box>
                      </Flex>
                    </>
                  )}
                </Box>
                {/* Form input are here end */}
              </Box>
              <Box mt={4}>
                <Box p={"xs"} className="borderRadiusAll" bg={"white"}>
                  <Grid columns={12} gutter={{ base: 6 }}>
                    <Grid.Col span={6}>
                      <Box
                        h={"100%"}
                        className="borderRadiusAll"
                        p={"xs"}
                        bg={"white"}>
                        <Box>
                          <Box>
                            <Select
                              placeholder="Search with id"
                              label="Search with id"
                              data={patient.map((data) => data.id)}
                              searchable
                            />
                          </Box>
                          <Box mt={10}>
                            <Select
                              placeholder="Search with mobile number"
                              label="Search with mobile number"
                              data={patient.map((data) => data.mobile)}
                              searchable
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Grid.Col>
                    <Grid.Col span={6}>
                      <Box
                        className="borderRadiusAll"
                        pl={"xs"}
                        pr={"xs"}
                        h={154}
                        bg={"white"}>
                        <Box mt={"md"}>
                          <Box>
                            <Flex align={"center"} gap={10} fw={"bold"}>
                              {t("ID")}: <Text>{"hps113"}</Text>
                            </Flex>
                          </Box>
                          <Box>
                            <Flex align={"center"} gap={10} fw={"bold"}>
                              {t("Name")}: <Text>{"MD Asraful"}</Text>
                            </Flex>
                          </Box>
                          <Flex justify={"space-between"}>
                            <Box>
                              <Flex align={"center"} gap={10} fw={"bold"}>
                                {t("Mobile")}: <Text>{"01700000000"}</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex align={"center"} gap={10} fw={"bold"}>
                                {t("BloodGroup")}: <Text>{"A+"}</Text>
                              </Flex>
                            </Box>
                          </Flex>
                          <Box>
                            <Flex align={"center"} gap={10} fw={"bold"}>
                              {t("Address")}:{" "}
                              <Text>{"Uttara, Dhaka-1230"}</Text>
                            </Flex>
                          </Box>
                        </Box>
                      </Box>
                    </Grid.Col>
                  </Grid>
                  <Box mt={"xs"} bg={"white"}>
                    <Box
                      pl={"xs"}
                      pb={"xs"}
                      pr={8}
                      pt={"xs"}
                      className={"boxBackground borderRadiusAll"}>
                      <Grid span={12}>
                        <Grid.Col span={12}>
                          <Stack right align="flex-end">
                            <Flex align={"center"} gap={10}>
                              {!saveCreateLoading && isOnline && (
                                <Button
                                  size="xs"
                                  color={"red.6"}
                                  type="submit"
                                  mt={4}
                                  id="EntityFormSubmits"
                                  leftSection={<IconDeviceFloppy size={16} />}>
                                  <Flex direction={"column"} gap={0}>
                                    <Text fz={12} fw={400}>
                                      {t("AddBooking")}
                                    </Text>
                                  </Flex>
                                </Button>
                              )}

                              <Button
                                size="xs"
                                color={"red.6"}
                                type="submit"
                                mt={4}>
                                {t("Print")}
                              </Button>
                              <Button
                                size="xs"
                                color={"red.6"}
                                type="submit"
                                mt={4}>
                                {t("Download")}
                              </Button>
                            </Flex>
                          </Stack>
                        </Grid.Col>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid.Col>

            {/* Hotkeys button start */}
            <Grid.Col span={{ xl: 1, lg: 1.3 }}>
              <Box className={"borderRadiusAll"} pt={"16"} bg={"white"}>
                <ShortcutVoucher
                  FormSubmit={"EntityFormSubmit"}
                  Name={"method_id"}
                  inputType="select"
                />
              </Box>
            </Grid.Col>
            {/* Hotkeys button end */}
          </Grid>
        </Box>
      </form>
    </Box>
  );
}

export default BookingFormIndex;
