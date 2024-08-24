import { Drawer, Button, Tooltip, Box, Flex, Text, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../../../../../../assets/css/BookingIndex.module.css";
import VisitingCardText from "./VisitingCardText";
import { IconEye } from "@tabler/icons-react";

const ViewPayslipDetails = ({
  doctorAddress,
  doctorMobile,
  doctorEmail,
  doctorWebsite,
  date,
  staffId,
  department,
  name,
  designation,
  earning,
  deduction,
  paymentMode,
  basicSalary,
  grossSalary,
  tax,
  netSalary,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        transitionProps={{
          transition: "slide-right",
          duration: 200,
          timingFunction: "linear",
        }}
        size={"45%"}
        opened={opened}
        onClose={close}
        title="Details">
        {/* Payslip content start */}
        <Box mt={20}>
          <Flex align={"center"} justify={"space-between"}>
            <Box>
              <img
                width={"120px"}
                src="/images/Hospital_logo.jpg"
                alt="logo image"
              />
            </Box>

            <Box>
              <VisitingCardText
                justify={"flex-end"}
                title={"Address"}
                label={doctorAddress}
              />
              <VisitingCardText
                justify={"flex-end"}
                title={"Phone No"}
                label={doctorMobile}
              />
              <VisitingCardText
                justify={"flex-end"}
                title={"Email"}
                label={doctorEmail}
              />
              <VisitingCardText
                justify={"flex-end"}
                title={"Website"}
                label={doctorWebsite}
              />
            </Box>
          </Flex>

          <Box my={10} py={2} ta={"center"} bg={"#ffeded"}>
            <Text fw={"bold"}>Payslip</Text>
          </Box>

          <Box w={"100%"}>
            <Flex align={"center"} justify={"space-between"} gap={"md"}>
              <Text>Payslip #10</Text>
              <Text>Payment Date: {date}</Text>
            </Flex>
          </Box>

          <Box mt={25}>
            <Grid mt={20}>
              <Grid.Col span={6}>
                <Box>
                  <VisitingCardText
                    justify={"space-between"}
                    title="Staff ID"
                    label={staffId}
                  />
                </Box>
                <Box>
                  <VisitingCardText
                    justify={"space-between"}
                    title="Department"
                    label={department}
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={6}>
                <Box>
                  <VisitingCardText
                    justify={"space-between"}
                    title="Name"
                    label={name}
                  />
                </Box>
                <Box>
                  <VisitingCardText
                    justify={"space-between"}
                    title="Designation"
                    label={designation}
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

          <Box mt={25}>
            <Grid>
              <Grid.Col span={6}>
                <Box>
                  <Flex align={"center"} justify={"space-between"} gap={15}>
                    <Text fw={"bold"}>Earning</Text>
                    <Text fw={"bold"}>Amount($)</Text>
                  </Flex>
                  <Flex align={"center"} justify={"space-between"} gap={15}>
                    <Text>Extra Time</Text>
                    <Text>{earning}</Text>
                  </Flex>
                  <Flex align={"center"} justify={"space-between"} gap={15}>
                    <Text fw={"bold"}>Total Earning</Text>
                    <Text fw={"bold"}>{earning}</Text>
                  </Flex>
                </Box>
              </Grid.Col>
              <Grid.Col span={6}>
                <Box>
                  <Flex align={"center"} justify={"space-between"} gap={15}>
                    <Text fw={"bold"}>Deduction</Text>
                    <Text fw={"bold"}>Amount($)</Text>
                  </Flex>
                  <Flex align={"center"} justify={"space-between"} gap={15}>
                    <Text>Leave</Text>
                    <Text>{deduction}</Text>
                  </Flex>
                  <Flex align={"center"} justify={"space-between"} gap={15}>
                    <Text fw={"bold"}>Total Deduction</Text>
                    <Text fw={"bold"}>{deduction}</Text>
                  </Flex>
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

          <Box mt={25}>
            <Grid>
              <Grid.Col span={6}>
                <Box>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Payment Mode"}
                    label={paymentMode}
                  />
                </Box>
                <Box>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Basic Salary($)"}
                    label={basicSalary}
                  />
                </Box>
                <Box>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Gross Salary($)"}
                    label={grossSalary}
                  />
                </Box>
                <Box>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Tax($)"}
                    label={tax}
                  />
                </Box>
                <Box>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Net Salary($)"}
                    label={netSalary}
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

          <Box mt={50}>
            <Text>
              This invoice is printed electronically, so no signature is
              required
            </Text>
          </Box>
        </Box>
        {/* Payslip content end */}

        <Box mt={50} ta={"right"}>
          <Button>Print</Button>
        </Box>
      </Drawer>

      <Tooltip label="View Payslip">
        <Button className={styles.show_btn_style} onClick={open}>
          <IconEye size={16} />
        </Button>
      </Tooltip>
    </>
  );
};
export default ViewPayslipDetails;
