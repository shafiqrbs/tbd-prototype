import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import {
  Box,
  Button,
  Flex,
  Grid,
  Select,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
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

const DoctorStaffAttendance = () => {
  const [toggle, setToggle] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    January: true,
    February: true,
    March: true,
    April: true,
    May: true,
    June: true,
    July: true,
    August: true,
    September: true,
    October: true,
    November: true,
    December: true,
  });
  const staffCard = [
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
  const attendanceHeader = [
    "Date | Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const attendanceData = [
    {
      days: "01",
      january: "H",
      february: "L",
      march: "A",
      april: "F",
      may: "H",
      june: "P",
      july: "L",
      august: "A",
      september: "F",
      october: "H",
      november: "A",
      december: "P",
    },
    {
      days: "02",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "03",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "04",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "05",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "06",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "07",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "08",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "09",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "10",
      january: "A",
      february: "L",
      march: "A",
      april: "F",
      may: "H",
      june: "P",
      july: "L",
      august: "A",
      september: "F",
      october: "H",
      november: "A",
      december: "P",
    },
    {
      days: "11",
      january: "P",
      february: "L",
      march: "A",
      april: "F",
      may: "H",
      june: "P",
      july: "L",
      august: "A",
      september: "F",
      october: "H",
      november: "A",
      december: "P",
    },
    {
      days: "12",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "13",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "14",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "15",
      january: "P",
      february: "L",
      march: "A",
      april: "F",
      may: "H",
      june: "P",
      july: "L",
      august: "A",
      september: "F",
      october: "H",
      november: "A",
      december: "P",
    },
    {
      days: "16",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "17",
      january: "P",
      february: "L",
      march: "A",
      april: "F",
      may: "H",
      june: "P",
      july: "L",
      august: "A",
      september: "F",
      october: "H",
      november: "A",
      december: "P",
    },
    {
      days: "18",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "19",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "20",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "21",
      january: "P",
      february: "L",
      march: "A",
      april: "F",
      may: "H",
      june: "P",
      july: "L",
      august: "A",
      september: "F",
      october: "H",
      november: "A",
      december: "P",
    },
    {
      days: "22",
      january: "P",
      february: "L",
      march: "A",
      april: "F",
      may: "H",
      june: "P",
      july: "L",
      august: "A",
      september: "F",
      october: "H",
      november: "A",
      december: "P",
    },
    {
      days: "23",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "24",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "25",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "26",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "27",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "28",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "29",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "30",
      january: "",
      february: "",
      march: "",
      april: "",
      may: "",
      june: "",
      july: "",
      august: "",
      september: "",
      october: "",
      november: "",
      december: "",
    },
    {
      days: "31",
      january: "P",
      february: "L",
      march: "A",
      april: "F",
      may: "H",
      june: "P",
      july: "L",
      august: "A",
      september: "F",
      october: "H",
      november: "A",
      december: "P",
    },
  ];

  const handleColumnToggle = (column) => {
    setVisibleColumns((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  };

  const handleCopy = () => {
    const table = document.querySelector("#attendanceTable");
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Table copied to clipboard!");
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePdf = () => {
    const input = document.getElementById("attendanceTable");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("attendance.pdf");
    });
  };
  const handleExcel = () => {
    const table = document.getElementById("attendanceTable");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
    XLSX.writeFile(wb, "attendance.xlsx");
  };
  const handleCsv = () => {
    const table = document.getElementById("attendanceTable");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
    XLSX.writeFile(wb, "attendance.csv", { bookType: "csv" });
  };

  return (
    <>
      <Box>
        {/* cards start */}
        <Box className={styles.print_d_none}>
          <Grid w={"100%"} p={10}>
            {staffCard?.map((staff, index) => {
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

        {/* attendance start */}
        <Box p={10}>
          {/* Tools box start */}
          <Box className={styles.print_d_none}>
            <Flex align={"center"} justify={"space-between"} gap={15}>
              <Flex align={"center"} gap={10}>
                <Text>Years: </Text>
                <Box>
                  <Select
                    defaultValue={"2024"}
                    placeholder="Year: "
                    data={["2024", "2023", "2022", "2021"]}
                  />
                </Box>
                <Box></Box>
              </Flex>

              <Flex align={"center"} gap={10}>
                <Text fz={16}>
                  Present:{" "}
                  <Text display={"inline-block"} c={"#3C763D"} fz={16}>
                    P
                  </Text>
                </Text>
                <Text fz={16}>
                  Late:{" "}
                  <Text display={"inline-block"} c={"#8A6D3B"} fz={16}>
                    L
                  </Text>
                </Text>
                <Text fz={16}>
                  Absent:{" "}
                  <Text display={"inline-block"} c={"#A94442"} fz={16}>
                    A
                  </Text>
                </Text>
                <Text fz={16}>
                  Half Day:{" "}
                  <Text display={"inline-block"} c={"#8A6D3B"} fz={16}>
                    F
                  </Text>
                </Text>
                <Text fz={16}>
                  Holiday:{" "}
                  <Text display={"inline-block"} c={"#333333"} fz={16}>
                    H
                  </Text>
                </Text>
              </Flex>

              {/* Tools are here */}
              <Flex>
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
                      {attendanceHeader.slice(1).map((column) => (
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

          {/* Attendance sheet start */}
          {/* table data start */}
          <Box mt={5}>
            <Table
              id="attendanceTable"
              stickyHeader
              stickyHeaderOffset={0}
              className={`${styles.box_border}`}>
              <Table.Thead>
                <Table.Tr
                  className={`${styles.table_header} ${styles.box_border}`}>
                  {attendanceHeader?.map(
                    (data, index) =>
                      (data === "Date | Month" || visibleColumns[data]) && (
                        <Table.Th key={index}>
                          <Text w={"max-content"} fw={"bold"} fz={14}>
                            {data}
                          </Text>
                        </Table.Th>
                      )
                  )}
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {attendanceData.map((data, index) => (
                  <Table.Tr
                    key={index}
                    className={`${styles.table_row}`}
                    fz={12}>
                    <Table.Td>{data?.days}</Table.Td>
                    {visibleColumns["January"] && (
                      <Table.Td
                        c={
                          data.january === "P" || data.january === "p"
                            ? "#3c763d"
                            : data.january === "L" || data.january === "l"
                            ? "#8a6d3b"
                            : data.january === "A" || data.january === "a"
                            ? "#a94442"
                            : data.january === "F" || data.january === "f"
                            ? "#8a6d3b"
                            : data.january === "H" || data.january === "h"
                            ? "#333333"
                            : "black"
                        }
                        fw={"bold"}>
                        {data?.january}
                      </Table.Td>
                    )}
                    {visibleColumns["February"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.february === "P" || data.february === "p"
                            ? "#3C763D"
                            : data.february === "L" || data.february === "l"
                            ? "#8A6D3B"
                            : data.february === "A" || data.february === "a"
                            ? "#A94442"
                            : data.february === "F" || data.february === "f"
                            ? "#8A6D3B"
                            : data.february === "H" || data.february === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.february}
                      </Table.Td>
                    )}
                    {visibleColumns["March"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.march === "P" || data.march === "p"
                            ? "#3c763d"
                            : data.march === "L" || data.march === "l"
                            ? "#8a6d3b"
                            : data.march === "A" || data.march === "a"
                            ? "#a94442"
                            : data.march === "F" || data.march === "f"
                            ? "#8a6d3b"
                            : data.march === "H" || data.march === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.march}
                      </Table.Td>
                    )}
                    {visibleColumns["April"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.april === "P" || data.april === "p"
                            ? "#3c763d"
                            : data.april === "L" || data.april === "l"
                            ? "#8a6d3b"
                            : data.april === "A" || data.april === "a"
                            ? "#a94442"
                            : data.april === "F" || data.april === "f"
                            ? "#8a6d3b"
                            : data.april === "H" || data.april === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.april}
                      </Table.Td>
                    )}
                    {visibleColumns["May"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.may === "P" || data.may === "p"
                            ? "#3c763d"
                            : data.may === "L" || data.may === "l"
                            ? "#8a6d3b"
                            : data.may === "A" || data.may === "a"
                            ? "#a94442"
                            : data.may === "F" || data.may === "f"
                            ? "#8a6d3b"
                            : data.may === "H" || data.may === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.may}
                      </Table.Td>
                    )}
                    {visibleColumns["June"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.june === "P" || data.june === "p"
                            ? "#3c763d"
                            : data.june === "L" || data.june === "l"
                            ? "#8a6d3b"
                            : data.june === "A" || data.june === "a"
                            ? "#a94442"
                            : data.june === "F" || data.june === "f"
                            ? "#8a6d3b"
                            : data.june === "H" || data.june === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.june}
                      </Table.Td>
                    )}
                    {visibleColumns["July"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.july === "P" || data.july === "p"
                            ? "#3c763d"
                            : data.july === "L" || data.july === "l"
                            ? "#8a6d3b"
                            : data.july === "A" || data.july === "a"
                            ? "#a94442"
                            : data.july === "F" || data.july === "f"
                            ? "#8a6d3b"
                            : data.july === "H" || data.july === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.july}
                      </Table.Td>
                    )}
                    {visibleColumns["August"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.august === "P" || data.august === "p"
                            ? "#3c763d"
                            : data.august === "L" || data.august === "l"
                            ? "#8a6d3b"
                            : data.august === "A" || data.august === "a"
                            ? "#a94442"
                            : data.august === "F" || data.august === "f"
                            ? "#8a6d3b"
                            : data.august === "H" || data.august === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.august}
                      </Table.Td>
                    )}
                    {visibleColumns["September"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.september === "P" || data.september === "p"
                            ? "#3c763d"
                            : data.september === "L" || data.september === "l"
                            ? "#8a6d3b"
                            : data.september === "A" || data.september === "a"
                            ? "#a94442"
                            : data.september === "F" || data.september === "f"
                            ? "#8a6d3b"
                            : data.september === "H" || data.september === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.september}
                      </Table.Td>
                    )}
                    {visibleColumns["October"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.october === "P" || data.october === "p"
                            ? "#3c763d"
                            : data.october === "L" || data.october === "l"
                            ? "#8a6d3b"
                            : data.october === "A" || data.october === "a"
                            ? "#a94442"
                            : data.october === "F" || data.october === "f"
                            ? "#8a6d3b"
                            : data.october === "H" || data.october === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.october}
                      </Table.Td>
                    )}
                    {visibleColumns["November"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.november === "P" || data.november === "p"
                            ? "#3c763d"
                            : data.november === "L" || data.november === "l"
                            ? "#8a6d3b"
                            : data.november === "A" || data.november === "a"
                            ? "#a94442"
                            : data.november === "F" || data.november === "f"
                            ? "#8a6d3b"
                            : data.november === "H" || data.november === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.november}
                      </Table.Td>
                    )}
                    {visibleColumns["December"] && (
                      <Table.Td
                        fw={"bold"}
                        c={
                          data.december === "P" || data.december === "p"
                            ? "#3c763d"
                            : data.december === "L" || data.december === "l"
                            ? "#8a6d3b"
                            : data.december === "A" || data.december === "a"
                            ? "#a94442"
                            : data.december === "F" || data.december === "f"
                            ? "#8a6d3b"
                            : data.december === "H" || data.december === "h"
                            ? "#333333"
                            : "black"
                        }>
                        {data?.december}
                      </Table.Td>
                    )}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Box>
          {/* table data end */}
          {/* Attendance sheet end */}
        </Box>
        {/* attendance end */}
      </Box>
    </>
  );
};

export default DoctorStaffAttendance;
