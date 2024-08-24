import { Drawer, Button, Tooltip, Box, Flex, Text, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../../../../../../assets/css/BookingIndex.module.css";
import { IconEye } from "@tabler/icons-react";
import VisitingCardText from "../doctor-payroll/VisitingCardText";

const LeavesDetails = ({
  name,
  leaveDate,
  status,
  reason,

  staffId,
  leaveType,
  applyDate,
  note,
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
        size={"sm"}
        opened={opened}
        onClose={close}
        title="Details">
        {/* Payslip content start */}
        <Box mt={20}>
          <Box mt={25}>
            <Grid columns={12}>
              <Grid.Col span={12}>
                <Box mt={15}>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Name"}
                    label={name}
                  />
                </Box>
                <Box mt={15}>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Leave"}
                    label={leaveDate}
                  />
                </Box>
                <Box mt={15}>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Status"}
                    label={status}
                  />
                </Box>
                <Box mt={15}>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Reason"}
                    label={reason}
                  />
                </Box>
              </Grid.Col>

              <Grid.Col span={12}>
                <Box mt={15}>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Staff ID"}
                    label={staffId}
                  />
                </Box>
                <Box mt={15}>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Leave Type"}
                    label={leaveType}
                  />
                </Box>
                <Box mt={15}>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Date"}
                    label={applyDate}
                  />
                </Box>
                <Box mt={15}>
                  <VisitingCardText
                    justify={"space-between"}
                    title={"Note"}
                    label={note}
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
        </Box>
        {/* Payslip content end */}
      </Drawer>

      <Tooltip label="View Payslip">
        <Button className={styles.show_btn_style} onClick={open}>
          <IconEye size={16} />
        </Button>
      </Tooltip>
    </>
  );
};
export default LeavesDetails;
