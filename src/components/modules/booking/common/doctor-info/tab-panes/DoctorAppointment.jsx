import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import { Box, Button, Flex, Grid, Table, Text, Tooltip } from "@mantine/core";
import DoctorCard from "../../DoctorCard";
import {
  IconCheckbox,
  IconColumns2,
  IconCopy,
  IconFileSpreadsheet,
  IconFileTypeCsv,
  IconPdf,
  IconPrinter,
} from "@tabler/icons-react";
import styles from "../../../../../../assets/css/BookingIndex.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ViewAppointmentDetails from "./doctor-appointment/ViewAppointmentDetails";

const DoctorAppointment = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    PatientName: true,
    AppointmentNo: true,
    AppointmentDate: true,
    Phone: true,
    Gender: true,
    Doctor: true,
    Source: true,
    Priority: true,
    LiveConsultant: true,
    AlternateAddress: true,
    Fees: true,
    Status: true,
  });
  const appointmentCard = [
    {
      header: "Total Present",
      days: "64",
    },
    {
      header: "Total Late",
      days: "9",
    },
    {
      header: "Total Absent",
      days: "1",
    },
    {
      header: "Total Half Day",
      days: "3",
    },
    {
      header: "Total Holiday",
      days: "0",
    },
  ];
  const appointmentHeader = [
    "PatientName",
    "AppointmentNo",
    "AppointmentDate",
    "Phone",
    "Gender",
    "Doctor",
    "Source",
    "Priority",
    "LiveConsultant",
    "AlternateAddress",
    "Fees",
    "Status",
  ];

  const appointmentData = [
    {
      PatientName: "Sophie Hurst (1105)",
      AppointmentNo: "APPNO6568",
      AppointmentDate: "09/01/2024 06:30 AM",
      Phone: "8909806567",
      Gender: "Female",
      Doctor: "Sonia Bush (9002)",
      Source: "Online",
      Priority: "Normal",
      LiveConsultant: "No",
      AlternateAddress: "83 Caerfai Bay Road THAMES DITTON KT7 6DL",
      Fees: "1440.00",
      Status: "Pending",
      //
      Appointment_SNo: "1",
      Age: "25",
      Email: "sophi7@gmail.com",
      AppointmentPriority: "Normal",
      Shift: "Morning",
      Slot: "06:00 AM - 07:00 AM",
      Department: "OT",
      PaymentNote:
        "Payment deposit through Stripe TXN ID: ch_3PjINLGufJyZiUEp1gwuWd7g",
      PaymentMode: "Online",
      TransactionID: "TRANID9565",
      Message: "Urgent Appointment",
    },
    {
      PatientName: "Evana Rahman (1106)",
      AppointmentNo: "APPNO6568",
      AppointmentDate: "09/01/2024 06:30 AM",
      Phone: "8909806567",
      Gender: "Female",
      Doctor: "Sonia Bush (9002)",
      Source: "Online",
      Priority: "Normal",
      LiveConsultant: "No",
      AlternateAddress: "83 Caerfai Bay Road THAMES DITTON KT7 6DL",
      Fees: "1880.00",
      Status: "Approved",
      //
      Appointment_SNo: "2",
      Age: "22",
      Email: "sophi7@gmail.com",
      AppointmentPriority: "Normal",
      Shift: "Morning",
      Slot: "06:00 AM - 07:00 AM",
      Department: "OT",
      PaymentNote:
        "Payment deposit through Stripe TXN ID: ch_3PjINLGufJyZiUEp1gwuWd7g",
      PaymentMode: "Online",
      TransactionID: "TRANID9565",
      Message: "Urgent Appointment",
    },
    {
      PatientName: "Neha Kakkar (1107)",
      AppointmentNo: "APPNO6568",
      AppointmentDate: "09/01/2024 06:30 AM",
      Phone: "8909806567",
      Gender: "Female",
      Doctor: "Sonia Bush (9002)",
      Source: "Online",
      Priority: "Normal",
      LiveConsultant: "No",
      AlternateAddress: "83 Caerfai Bay Road THAMES DITTON KT7 6DL",
      Fees: "1550.00",
      Status: "Desclined",
      //
      Appointment_SNo: "3",
      Age: "28",
      Email: "sophi7@gmail.com",
      AppointmentPriority: "Normal",
      Shift: "Morning",
      Slot: "06:00 AM - 07:00 AM",
      Department: "OT",
      PaymentNote:
        "Payment deposit through Stripe TXN ID: ch_3PjINLGufJyZiUEp1gwuWd7g",
      PaymentMode: "Online",
      TransactionID: "TRANID9565",
      Message: "Urgent Appointment",
    },
  ];

  const handleColumnToggle = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const table = document.querySelector("#appointmentTable");
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Table copied to clipboard!");
  };

  const handlePdf = () => {
    const input = document.getElementById("appointmentTable");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("appointments.pdf");
    });
  };
  const handleExcel = () => {
    const table = document.getElementById("appointmentTable");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
    XLSX.writeFile(wb, "appointments.xlsx");
  };
  const handleCsv = () => {
    const table = document.getElementById("appointmentTable");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
    XLSX.writeFile(wb, "appointments.csv", { bookType: "csv" });
  };

  return (
    <>
      <Box>
        {/* cards start */}
        <Box className={styles.print_d_none}>
          <Grid w={"100%"} p={10}>
            {appointmentCard?.map((staff, index) => {
              return (
                <Grid.Col span={3} key={index}>
                  <Box w={"100%"}>
                    <DoctorCard
                      align={"center"}
                      title={staff?.header}
                      subTitle={staff?.days}
                      subTitle2={""}
                      icon={<IconCheckbox />}
                    />
                  </Box>
                </Grid.Col>
              );
            })}
          </Grid>
        </Box>
        {/* cards end */}

        {/* appointment start */}
        <Box p={10}>
          {/* Tools box start */}
          <Box>
            <Flex justify={"flex-end"}>
              {/* Tools are here */}
              <Flex align={"center"}>
                <Tooltip label="Copy">
                  <Button p={5} bg={"none"} onClick={handleCopy}>
                    <IconCopy size={"20"} stroke={1} color="black" />
                  </Button>
                </Tooltip>
                <Tooltip label="Printer">
                  <Button p={5} bg={"none"} onClick={handlePrint}>
                    <IconPrinter size={"20"} stroke={1} color="black" />
                  </Button>
                </Tooltip>
                <Tooltip label="PDF">
                  <Button p={5} bg={"none"} onClick={handlePdf}>
                    <IconPdf size={"20"} stroke={1} color="black" />
                  </Button>
                </Tooltip>
                <Tooltip label="Excel">
                  <Button p={5} bg={"none"} onClick={handleExcel}>
                    <IconFileSpreadsheet size={"20"} stroke={1} color="black" />
                  </Button>
                </Tooltip>
                <Tooltip label="CSV">
                  <Button p={5} bg={"none"} onClick={handleCsv}>
                    <IconFileTypeCsv size={"20"} stroke={1} color="black" />
                  </Button>
                </Tooltip>

                <Box pos={"relative"}>
                  <Tooltip label="Columns">
                    <Button
                      p={5}
                      bg={"none"}
                      onClick={() => setToggle(!toggle)}>
                      <IconColumns2 size={"20"} stroke={1} color="black" />
                    </Button>
                  </Tooltip>

                  <Box
                    className={`${styles.z20} ${styles.box_border}`}
                    pos={"absolute"}
                    right={0}
                    display={toggle ? "block" : "none"}>
                    <Flex direction={"column"}>
                      {appointmentHeader.slice(1).map((column) => (
                        <Box
                          w={"100%"}
                          key={column}
                          className={styles.button_hover}>
                          <Button
                            w={"100%"}
                            bg={visibleColumns[column] ? "#D7E8CD" : "#FFEDED"}
                            c={"black"}
                            onClick={() => handleColumnToggle(column)}>
                            {visibleColumns[column]
                              ? `Hide ${column}`
                              : `Show ${column}`}
                          </Button>
                        </Box>
                      ))}
                    </Flex>
                  </Box>
                </Box>
              </Flex>
              {/* Tools are end */}
            </Flex>
          </Box>
          {/* Tools box end */}

          {/* appointment sheet start */}
          {/* table data start */}
          <Box mt={5}>
            <Table
              id="appointmentTable"
              stickyHeader
              stickyHeaderOffset={0}
              className={`${styles.box_border}`}>
              <Table.Thead>
                <Table.Tr
                  className={`${styles.table_header} ${styles.box_border}`}>
                  {appointmentHeader?.map(
                    (header, index) =>
                      visibleColumns[header] && (
                        <Table.Th key={index}>
                          <Text w={"max-content"} fw={"bold"} fz={14}>
                            {t(header)}
                          </Text>
                        </Table.Th>
                      )
                  )}
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {appointmentData.map((data, index) => (
                  <Table.Tr key={index} className={`${styles.table_row}`}>
                    {visibleColumns.PatientName && (
                      <Table.Td fz={12} c={"#000"}>
                        <ViewAppointmentDetails
                          linkLabel={data?.PatientName}
                          PatientName={data?.PatientName}
                          AppointmentNo={data?.AppointmentNo}
                          AppointmentDate={data?.AppointmentDate}
                          Phone={data?.Phone}
                          Gender={data?.Gender}
                          Doctor={data?.Doctor}
                          Source={data?.Source}
                          AppointmentPriority={data?.AppointmentPriority}
                          LiveConsultant={data?.LiveConsultant}
                          AlternateAddress={data?.AlternateAddress}
                          Fees={data?.Fees}
                          Status={data?.Status}
                          Appointment_SNo={data?.Appointment_SNo}
                          Age={data?.Age}
                          Email={data?.Email}
                          Shift={data?.Shift}
                          Slot={data?.Slot}
                          Department={data?.Department}
                          PaymentNote={data?.PaymentNote}
                          PaymentMode={data?.PaymentMode}
                          TransactionID={data?.TransactionID}
                          Message={data?.Message}
                        />
                      </Table.Td>
                    )}

                    {visibleColumns.AppointmentNo && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.AppointmentNo}
                      </Table.Td>
                    )}

                    {visibleColumns.AppointmentDate && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.AppointmentDate}
                      </Table.Td>
                    )}
                    {visibleColumns.Phone && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.Phone}
                      </Table.Td>
                    )}
                    {visibleColumns.Gender && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.Gender}
                      </Table.Td>
                    )}
                    {visibleColumns.Doctor && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.Doctor}
                      </Table.Td>
                    )}
                    {visibleColumns.Source && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.Source}
                      </Table.Td>
                    )}
                    {visibleColumns.Priority && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.Priority}
                      </Table.Td>
                    )}
                    {visibleColumns.LiveConsultant && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.LiveConsultant}
                      </Table.Td>
                    )}
                    {visibleColumns.AlternateAddress && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.AlternateAddress}
                      </Table.Td>
                    )}
                    {visibleColumns.Fees && (
                      <Table.Td fz={12} c={"#000"}>
                        {data?.Fees}
                      </Table.Td>
                    )}
                    {visibleColumns.Status && (
                      <Table.Td
                        fz={12}
                        c={
                          data.Status === "Pending"
                            ? "#228BE6"
                            : data.Status === "Approved"
                            ? "#40C057"
                            : data.Status === "Desclined"
                            ? "#FA5252"
                            : "black"
                        }>
                        {data?.Status}
                      </Table.Td>
                    )}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Box>
          {/* table data end */}
          {/* appointment sheet end */}
        </Box>
        {/* appointment end */}
      </Box>
    </>
  );
};

export default DoctorAppointment;
