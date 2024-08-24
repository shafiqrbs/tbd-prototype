import { Drawer, Tooltip, NavLink, Box, Grid } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../../../../../../assets/css/BookingIndex.module.css";
import VisitingCardText from "./VisitingCardText";
import { IconChevronsRight } from "@tabler/icons-react";

const ViewAppointmentDetails = ({
  linkLabel,
  PatientName,
  AppointmentNo,
  AppointmentDate,
  Phone,
  Gender,
  Doctor,
  Source,
  AppointmentPriority,
  LiveConsultant,
  AlternateAddress,
  Fees,
  Status,
  Appointment_SNo,
  Age,
  Email,
  Shift,
  Slot,
  Department,
  PaymentNote,
  PaymentMode,
  TransactionID,
  Message,
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
        size={"60%"}
        opened={opened}
        onClose={close}
        title="Details">
        <Box>
          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText title={"Patient Name"} label={PatientName} />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText
                title={"Appointment No"}
                label={AppointmentNo}
              />
            </Grid.Col>
          </Grid>

          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText title={"Age"} label={Age} />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText
                title={"Appointment S.No."}
                label={Appointment_SNo}
              />
            </Grid.Col>
          </Grid>

          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText title={"Email"} label={Email} />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText
                title={"Appointment Date"}
                label={AppointmentDate}
              />
            </Grid.Col>
          </Grid>
          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText title={"Phone"} label={Phone} />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText
                title={"Appointment Priority"}
                label={AppointmentPriority}
              />
            </Grid.Col>
          </Grid>

          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText title={"Gender"} label={Gender} />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText title={"Shift"} label={Shift} />
            </Grid.Col>
          </Grid>

          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText title={"Doctor"} label={Doctor} />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText title={"Slot"} label={Slot} />
            </Grid.Col>
          </Grid>

          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText title={"Department"} label={Department} />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText title={"Amount"} label={Fees} />
            </Grid.Col>
          </Grid>

          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText
                title={"Live Consultant"}
                label={LiveConsultant}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText title={"Status"} label={Status} />
            </Grid.Col>
          </Grid>

          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText title={"Payment Note"} label={PaymentNote} />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText title={"Payment Mode"} label={PaymentMode} />
            </Grid.Col>
          </Grid>

          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText
                title={"Transaction ID"}
                label={TransactionID}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText title={"Message"} label={Message} />
            </Grid.Col>
          </Grid>

          <Grid gutter={30}>
            <Grid.Col span={6}>
              <VisitingCardText title={"Source"} label={Source} />
            </Grid.Col>

            <Grid.Col span={6}>
              <VisitingCardText
                title={"Alternate Address"}
                label={AlternateAddress}
              />
            </Grid.Col>
          </Grid>
        </Box>
      </Drawer>

      <Tooltip label="Click & View Details">
        <NavLink
          w={"max-content"}
          fz={12}
          py={7}
          px={0}
          className={`${styles.patient_link_hover}`}
          label={linkLabel}
          href={"#"}
          onClick={open}
          rightSection={<IconChevronsRight size="1rem" />}
        />
      </Tooltip>
    </>
  );
};
export default ViewAppointmentDetails;
