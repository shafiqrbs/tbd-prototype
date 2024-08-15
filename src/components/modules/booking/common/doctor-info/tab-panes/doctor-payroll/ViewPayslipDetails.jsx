import { Drawer, Button, Tooltip, Box, Flex, Text, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../../../../../../assets/css/BookingIndex.module.css";
import VisitingCardText from "./VisitingCardText";

const ViewPayslipDetails = ({ buttonText }) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Drawer
        transitionProps={{
          transition: "slide-right",
          duration: 200,
          timingFunction: "linear",
        }}
        size={"50%"}
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
              <VisitingCardText title="Address" label="Uttara, Dhaka-1230" />
              <VisitingCardText title="Phone No" label="01700-000088" />
              <VisitingCardText title="Email" label="hospital567@gmail.com" />
              <VisitingCardText title="Website" label="www.web-hospital.com" />
            </Box>
          </Flex>

          <Box my={10} py={2} ta={"center"} bg={"#ffeded"}>
            <Text fw={"bold"}>Payslip</Text>
          </Box>

          <Box w={"100%"}>
            <Flex align={"center"} justify={"space-between"} gap={"md"}>
              <Text>Payslip #10</Text>
              <Text>Payment Date: 11/03/2021</Text>
            </Flex>
          </Box>

          <Box>
            <Grid>
              <Grid.Col span={6}></Grid.Col>
              <Grid.Col span={6}></Grid.Col>
            </Grid>
          </Box>
        </Box>
        {/* Payslip content end */}
      </Drawer>

      <Tooltip label="View Payslip">
        <Button className={styles.show_btn_style} onClick={open}>
          {buttonText}
        </Button>
      </Tooltip>
    </>
  );
};
export default ViewPayslipDetails;
