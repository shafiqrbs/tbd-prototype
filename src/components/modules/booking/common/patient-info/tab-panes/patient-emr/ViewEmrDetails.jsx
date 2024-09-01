import { Drawer, Tooltip, Box, Grid, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "../../../../../../../assets/css/BookingIndex.module.css";
import VisitingCardText from "./VisitingCardText";
import { IconEye } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const ViewEmrDetails = ({
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
  const { t, i18n } = useTranslation();
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
        title={t("Details")}>
        <Box>
          <Box className={styles.grid_2}>
            <Box display={PatientName ? "block" : "none"}>
              <VisitingCardText title={"PatientName"} label={PatientName} />
            </Box>
            <Box display={Age ? "block" : "none"}>
              <VisitingCardText title={"Age"} label={Age} />
            </Box>
            <Box display={Email ? "block" : "none"}>
              <VisitingCardText title={"Email"} label={Email} />
            </Box>
            <Box display={Phone ? "block" : "none"}>
              <VisitingCardText title={"Phone"} label={Phone} />
            </Box>
            <Box display={Gender ? "block" : "none"}>
              <VisitingCardText title={"Gender"} label={Gender} />
            </Box>
            <Box display={Doctor ? "block" : "none"}>
              <VisitingCardText title={"Doctor"} label={Doctor} />
            </Box>
            <Box display={Department ? "block" : "none"}>
              <VisitingCardText title={"Department"} label={Department} />
            </Box>
            <Box display={LiveConsultant ? "block" : "none"}>
              <VisitingCardText
                title={"LiveConsultant"}
                label={LiveConsultant}
              />
            </Box>
            <Box display={PaymentNote ? "block" : "none"}>
              <VisitingCardText title={"PaymentNote"} label={PaymentNote} />
            </Box>
            <Box display={TransactionID ? "block" : "none"}>
              <VisitingCardText title={"TransactionID"} label={TransactionID} />
            </Box>
            <Box display={Source ? "block" : "none"}>
              <VisitingCardText title={"Source"} label={Source} />
            </Box>

            {/* right side */}

            <Box display={AppointmentNo ? "block" : "none"}>
              <VisitingCardText title={"AppointmentNo"} label={AppointmentNo} />
            </Box>
            <Box display={Appointment_SNo ? "block" : "none"}>
              <VisitingCardText
                title={"AppointmentSerialNo"}
                label={Appointment_SNo}
              />
            </Box>
            <Box display={AppointmentDate ? "block" : "none"}>
              <VisitingCardText
                title={"AppointmentDate"}
                label={AppointmentDate}
              />
            </Box>
            <Box display={AppointmentPriority ? "block" : "none"}>
              <VisitingCardText
                title={"AppointmentPriority"}
                label={AppointmentPriority}
              />
            </Box>
            <Box display={Shift ? "block" : "none"}>
              <VisitingCardText title={"Shift"} label={Shift} />
            </Box>
            <Box display={Slot ? "block" : "none"}>
              <VisitingCardText title={"Slot"} label={Slot} />
            </Box>
            <Box display={Fees ? "block" : "none"}>
              <VisitingCardText title={"Amount"} label={Fees} />
            </Box>
            <Box display={Status ? "block" : "none"}>
              <VisitingCardText title={"Status"} label={Status} />
            </Box>
            <Box display={PaymentMode ? "block" : "none"}>
              <VisitingCardText title={"PaymentMode"} label={PaymentMode} />
            </Box>
            <Box display={Message ? "block" : "none"}>
              <VisitingCardText title={"Message"} label={Message} />
            </Box>
            <Box display={AlternateAddress ? "block" : "none"}>
              <VisitingCardText
                title={"AlternateAddress"}
                label={AlternateAddress}
              />
            </Box>
          </Box>
        </Box>
      </Drawer>

      <Box>
        <Tooltip label="Show">
          <Button onClick={open} className={styles.show_btn_style}>
            <IconEye size={18} stroke={2.5} />
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};
export default ViewEmrDetails;
