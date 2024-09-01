import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import * as XLSX from "xlsx";
import {
  Autocomplete,
  Box,
  Button,
  Flex,
  Grid,
  Input,
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
  IconListSearch,
  IconPdf,
  IconPrinter,
  IconTrash,
  IconTriangle,
  IconX,
} from "@tabler/icons-react";
import styles from "../../../../../../assets/css/BookingIndex.module.css";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ViewEmrDetails from "./patient-emr/ViewEmrDetails";
import { IconTriangleFilled } from "@tabler/icons-react";

const Emr = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);
  // const filterBoxRef = useRef(null);
  const [filters, setFilters] = useState([{ id: Date.now() }]);

  const [visibleColumns, setVisibleColumns] = useState({
    RecordType: true,
    Title: true,
    DepartmentCategory: true,
    InvoiceNo: true,
    CreatedDate: true,
    PublishedDate: true,
    CreatedBy: true,
    Status: true,
    Action: true,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const emrCard = [
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

  const emrHeader = [
    "RecordType",
    "Title",
    "DepartmentCategory",
    "InvoiceNo",
    "CreatedDate",
    "PublishedDate",
    "CreatedBy",
    "Status",
    "Action",
  ];

  const emrTableData = [
    {
      RecordType: "Sophie Hurst (1105)",
      Title: "Patient",
      DepartmentCategory: "Neurologist",
      InvoiceNo: "01",
      CreatedDate: "09/01/2024 06:30 AM",
      PublishedDate: "17/01/2024 12:30 pm",
      CreatedBy: "Manager",
      Status: "Online",
      //
      PatientName: "MD Asraf",
      AppointmentNo: "5",
      AppointmentDate: "12/03/2024",
      Phone: "01733-909899",
      Gender: "Male",
      Doctor: "MD Abdur Rouf",
      Source: "None",
      AppointmentPriority: "Normal",
      LiveConsultant: "None",
      AlternateAddress: "Uttara-1230",
      Fees: "3,000",
      Appointment_SNo: "05",
      Age: "22",
      Email: "asraf@gmail.com",
      Shift: "Day",
      Slot: "*******",
      Department: "Neurologist",
      PaymentNote: "03",
      PaymentMode: "Rocket",
      TransactionID: "Trans113z",
      Message: "Hello, I am MD Asraf.",
    },
    {
      RecordType: "Sophie Hurst (1105)",
      Title: "Patient",
      DepartmentCategory: "Neurologist",
      InvoiceNo: "02",
      CreatedDate: "13/01/2024 03:30 AM",
      PublishedDate: "20/01/2024 12:00 pm",
      CreatedBy: "Manager",
      Status: "Online",
      PatientName: "MD Foysal",
      //
      AppointmentNo: "5",
      AppointmentDate: "12/03/2024",
      Phone: "01733-909899",
      Gender: "Male",
      Doctor: "MD Abdur Rouf",
      Source: "None",
      AppointmentPriority: "Normal",
      LiveConsultant: "None",
      AlternateAddress: "Uttara-1230",
      Fees: "3,000",
      Appointment_SNo: "05",
      Age: "22",
      Email: "foysal@gmail.com",
      Shift: "Day",
      Slot: "*******",
      Department: "Neurologist",
      PaymentNote: "03",
      PaymentMode: "Bkash",
      TransactionID: "Trans113z",
      Message: "Hello, I am MD Foysal.",
    },
    {
      RecordType: "Sophie Hurst (1105)",
      Title: "Patient",
      DepartmentCategory: "Neurologist",
      InvoiceNo: "03",
      CreatedDate: "10/01/2024 10:30 AM",
      PublishedDate: "18/01/2024 11:00 AM",
      CreatedBy: "Assistant",
      Status: "Online",
      PatientName: "MD Zesan",
      //
      AppointmentNo: "5",
      AppointmentDate: "12/03/2024",
      Phone: "01733-909899",
      Gender: "Male",
      Doctor: "MD Abdur Rouf",
      Source: "None",
      AppointmentPriority: "Normal",
      LiveConsultant: "None",
      AlternateAddress: "Uttara-1230",
      Fees: "3,000",
      Appointment_SNo: "05",
      Age: "22",
      Email: "zesan@gmail.com",
      Shift: "Day",
      Slot: "*******",
      Department: "Neurologist",
      PaymentNote: "03",
      PaymentMode: "Bkash",
      TransactionID: "Trans113z",
      Message: "Hello, I am MD Zesan.",
    },
  ];

  const [emrData, setEmrData] = useState(emrTableData);

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
    const table = document.querySelector("#emrTable");
    const range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Table copied to clipboard!");
  };

  const handlePdf = () => {
    const input = document.getElementById("emrTable");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("emr.pdf");
    });
  };

  const handleExcel = () => {
    const table = document.getElementById("emrTable");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
    XLSX.writeFile(wb, "emr.xlsx");
  };

  const handleCsv = () => {
    const table = document.getElementById("emrTable");
    const wb = XLSX.utils.table_to_book(table, { sheet: "Sheet JS" });
    XLSX.writeFile(wb, "emr.csv", { bookType: "csv" });
  };

  const handleDelete = (index) => {
    const updatedEmrData = [...emrData];
    updatedEmrData.splice(index, 1);
    setEmrData(updatedEmrData);
  };

  // Filtered data based on search term
  const filteredData = emrData.filter((item) =>
    Object.values(item).some((val) =>
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const highlightText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  /* filter logics start */
  const addFilter = () => {
    setFilters([...filters, { id: Date.now() }]);
  };

  const clearFilters = () => {
    setFilters([{ id: Date.now() }]); // Keeping one row as the default after clearing
  };

  const deleteFilter = (id) => {
    setFilters(filters.filter((filter) => filter.id !== id));
  };

  /* filter logics end */

  /* filter button toggle with outside click start */
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       filterBoxRef.current &&
  //       !filterBoxRef.current.contains(event.target)
  //     ) {
  //       setFilterToggle(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [filterBoxRef]);
  /* filter button toggle with outside click end */

  return (
    <>
      <Box>
        {/* cards start */}
        <Box className={styles.print_d_none}>
          <Grid w={"100%"} p={10}>
            {emrCard?.map((patient, index) => {
              return (
                <Grid.Col span={3} key={index}>
                  <Box w={"100%"}>
                    <DoctorCard
                      align={"center"}
                      title={patient?.header}
                      subTitle={patient?.days}
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

        {/* emr start */}
        <Box p={10}>
          {/* Tools box start */}
          <Box>
            <Flex align={"center"} gap={"50px"}>
              {/* search box start */}
              <Box w={"100%"}>
                <Input
                  w={"100%"}
                  placeholder="Search any keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                />
              </Box>
              {/* search box end */}

              {/* Filter items start */}
              <Box pos={"relative"} w={"100%"}>
                <Box ta={"left"}>
                  <Button
                    c={"white"}
                    bg={"#fa5252"}
                    px={10}
                    py={5}
                    h={"max-content"}
                    onClick={() => {
                      setFilterToggle(!filterToggle);
                    }}>
                    <IconListSearch />
                    <Text fw={"bold"} ml={5}>{` ${t("AdvancedSearch")}`}</Text>
                  </Button>
                </Box>

                <Box
                  // ref={filterBoxRef} // Reference added here
                  display={filterToggle ? "block" : "none"}
                  w={"100%"}
                  p={20}
                  className={`${styles.box_border} ${styles.z20} ${styles.radius5}`}
                  pos={"absolute"}
                  top={"125%"}
                  bg={"#FEEAEA"}>
                  <Box
                    pos={"absolute"}
                    top={"-11px"}
                    left={"17%"}
                    className={`${styles.advanced_search_icon} ${styles.z20}`}>
                    <IconTriangleFilled color={"white"} stroke={2} />
                  </Box>

                  {filters.map((filter) => (
                    <Flex key={filter.id} gap={10} mb={4}>
                      <Box>
                        <Autocomplete
                          defaultValue={t(emrHeader[0])}
                          placeholder="Pick value"
                          data={emrHeader.map((data) => {
                            return t(data);
                          })}
                        />
                      </Box>
                      <Box>
                        <Autocomplete
                          defaultValue="Equals"
                          placeholder="Pick value"
                          data={[
                            "Equals",
                            "Not Equals",
                            "Like",
                            "Not Like",
                            "In",
                            "Not In",
                            "Is",
                          ]}
                        />
                      </Box>
                      <Box>
                        <Autocomplete
                          defaultValue="ID"
                          placeholder="Pick value"
                          data={[
                            "ID",
                            "Angular",
                            "Vue",
                            "Svelte",
                            "ID1",
                            "Angular2",
                            "Vue3",
                            "Svelte4",
                          ]}
                        />
                      </Box>
                      <Box className={styles.advanced_search_X_icon}>
                        <Button onClick={() => deleteFilter(filter.id)}>
                          <IconX size={20} color={"#FA5252"} />
                        </Button>
                      </Box>
                    </Flex>
                  ))}

                  <Flex justify={"space-between"} mt={10}>
                    <Box>
                      <Button p={10} bg={"#228BE6"} onClick={addFilter}>
                        Add Filter
                      </Button>
                    </Box>
                    <Flex gap={10}>
                      <Button p={10} bg={"#FA5252"} onClick={clearFilters}>
                        Clear Filter
                      </Button>
                      <Button p={10} bg={"#40C057"}>
                        Apply Filter
                      </Button>
                    </Flex>
                  </Flex>
                </Box>
              </Box>
              {/* Filter items end */}

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
                      {emrHeader.slice(1).map((column) => (
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

          {/* emr sheet start */}
          {/* table data start */}
          <Box mt={20}>
            <Table
              id="emrTable"
              stickyHeader
              stickyHeaderOffset={0}
              className={`${styles.box_border}`}>
              <Table.Thead>
                <Table.Tr
                  className={`${styles.table_header} ${styles.box_border}`}>
                  {emrHeader?.map(
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
                {filteredData.length > 0 ? (
                  filteredData.map((data, index) => (
                    <Table.Tr key={index} className={`${styles.table_row}`}>
                      {visibleColumns.RecordType && (
                        <Table.Td fz={12} c={"#000"}>
                          {highlightText(data?.RecordType, searchTerm)}
                        </Table.Td>
                      )}

                      {visibleColumns.Title && (
                        <Table.Td fz={12} c={"#000"}>
                          {highlightText(data?.Title, searchTerm)}
                        </Table.Td>
                      )}

                      {visibleColumns.DepartmentCategory && (
                        <Table.Td fz={12} c={"#000"}>
                          {highlightText(data?.DepartmentCategory, searchTerm)}
                        </Table.Td>
                      )}

                      {visibleColumns.InvoiceNo && (
                        <Table.Td fz={12} c={"#000"}>
                          {highlightText(data?.InvoiceNo, searchTerm)}
                        </Table.Td>
                      )}

                      {visibleColumns.CreatedDate && (
                        <Table.Td fz={12} c={"#000"}>
                          {highlightText(data?.CreatedDate, searchTerm)}
                        </Table.Td>
                      )}

                      {visibleColumns.PublishedDate && (
                        <Table.Td fz={12} c={"#000"}>
                          {highlightText(data?.PublishedDate, searchTerm)}
                        </Table.Td>
                      )}

                      {visibleColumns.CreatedBy && (
                        <Table.Td fz={12} c={"#000"}>
                          {highlightText(data?.CreatedBy, searchTerm)}
                        </Table.Td>
                      )}

                      {visibleColumns.Status && (
                        <Table.Td fz={12} c={"#000"}>
                          {highlightText(data?.Status, searchTerm)}
                        </Table.Td>
                      )}

                      {visibleColumns.Action && (
                        <Table.Td fz={12} c={"#000"}>
                          <Flex>
                            <Box>
                              <ViewEmrDetails
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
                            </Box>

                            <Box>
                              <Tooltip label="Delete">
                                <Button
                                  className={styles.delete_btn_style}
                                  onClick={() => handleDelete(index)}>
                                  <IconTrash size={18} stroke={2.5} />
                                </Button>
                              </Tooltip>
                            </Box>
                          </Flex>
                        </Table.Td>
                      )}
                    </Table.Tr>
                  ))
                ) : (
                  <Table.Tr>
                    <Table.Td colSpan={emrHeader.length}>
                      <Text align="center">No matching records found</Text>
                    </Table.Td>
                  </Table.Tr>
                )}
              </Table.Tbody>
            </Table>
          </Box>
          {/* table data end */}
          {/* emr sheet end */}
        </Box>
        {/* emr end */}
      </Box>
    </>
  );
};

export default Emr;
