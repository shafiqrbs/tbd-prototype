import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Flex,
  Tooltip,
  Input,
  Autocomplete,
  Text,
  Tabs,
  Drawer,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDisclosure, useHotkeys } from "@mantine/hooks";
import { useDispatch, useSelector } from "react-redux";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { DataTable } from "mantine-datatable";
import { setFetching } from "../../../../store/accounting/crudSlice.js";
import tableCss from "../../../../assets/css/Table.module.css";
import styles from "../../../../assets/css/BookingIndex.module.css";
import ShortcutVoucher from "../../shortcut/ShortcutVoucher.jsx";
import SidebarLinks from "../common/SidebarLinks.jsx";
import {
  IconRefresh,
  IconCirclePlus,
  IconPrinter,
  IconBaselineDensityMedium,
  IconListSearch,
  IconTriangleFilled,
  IconX,
  IconCopy,
  IconPdf,
  IconFileSpreadsheet,
  IconFileTypeCsv,
} from "@tabler/icons-react";
import {
  handleCopy,
  handleCsv,
  handleDelete,
  handleExcel,
  handlePdf,
  handlePrint,
} from "../common/CopyPrintExcelCsvPdf.js";
import FullDetails from "../common/full-details/FullDetails.jsx";
import Invoice from "../invoice/invoice.jsx";

function BookingDiagnosticFormIndex(props) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { mainAreaHeight, isOnline } = useOutletContext();
  const height = mainAreaHeight - 215;

  const perPage = 50;
  const [page, setPage] = useState(1);
  const fetching = useSelector((state) => state.crudSlice.fetching);
  const indexData = useSelector((state) => state.crudSlice.indexEntityData);

  const [filterToggle, setFilterToggle] = useState(false);
  const [filters, setFilters] = useState([{ id: Date.now() }]);

  const [records, setRecords] = useState([
    {
      created: "01-05-2023",
      created_by: "Nur Mohammad",
      invoice_no: "ADM-23057094",
      patient_ID: "052300408",
      name: "Baby Of Mitu",
      doctor: "Dr. MD. TANJIR ISLAM ROBIN (M.B.B.S, P.G.T)",
      referred: "Md Hasan (SKS hospital Family)",
      cabin: "NIC.U-B3",
      diseases: "Asthma - হাঁপানি, শ্বাসকষ্ট",
      net_total: "1000",
      payment: "1000",
      due: "0",
      process: "Admitted",
      action: "",
    },
    {
      created: "02-05-2023",
      created_by: "Foysal Mahmud",
      invoice_no: "ADM-23057095",
      patient_ID: "052300409",
      name: "Baby Of Sinthiya",
      doctor: "Dr. MD. TANJIR ISLAM ROBIN (M.B.B.S-2)",
      referred: "Md Hasan",
      cabin: "NIC.U-B4",
      diseases: "Asthma - হাঁপানি",
      net_total: "1001",
      payment: "1000",
      due: "1",
      process: "Admitted",
      action: "",
    },
    {
      created: "03-05-2023",
      created_by: "Riaz Ahmed",
      invoice_no: "ADM-23057096",
      patient_ID: "052300410",
      name: "Baby Of Sumaiya",
      doctor: "Dr. MD. TANJIR ISLAM ROBIN (P.G.T-2)",
      referred: "Md Akib",
      cabin: "NIC.U-B5",
      diseases: "Asthma",
      net_total: "1002",
      payment: "1000",
      due: "2",
      process: "Admitted",
      action: "",
    },
    {
      created: "04-05-2023",
      created_by: "Shohel",
      invoice_no: "ADM-23057097",
      patient_ID: "052300411",
      name: "Baby Of Ononna",
      doctor: "Dr. MD. TANJIR ISLAM ROBIN (M.B.B.S-3)",
      referred: "Md Hridoy",
      cabin: "NIC.U-B6",
      diseases: "হাঁপানি",
      net_total: "10001",
      payment: "5000",
      due: "5001",
      process: "Admitted",
      action: "",
    },
    {
      created: "05-05-2023",
      created_by: "Sonet Datta",
      invoice_no: "ADM-23057098",
      patient_ID: "052300412",
      name: "Baby Of Sharmeen",
      doctor: "Dr. MD. TANJIR ISLAM ROBIN (P.G.T-3)",
      referred: "Md Rahman",
      cabin: "NIC.U-B7",
      diseases: "Asthma",
      net_total: "10000",
      payment: "3000",
      due: "7000",
      process: "Admitted",
      action: "",
    },
    {
      created: "06-05-2023",
      created_by: "Mahim Rahman",
      invoice_no: "ADM-23057099",
      patient_ID: "052300413",
      name: "Baby Of Sabina",
      doctor: "Dr. MD. TANJIR ISLAM ROBIN (M.B.B.S-4)",
      referred: "Md Sezan",
      cabin: "NIC.U-B8",
      diseases: "Asthma",
      net_total: "2000",
      payment: "1000",
      due: "1000",
      process: "Admitted",
      action: "",
    },
    {
      created: "07-05-2023",
      created_by: "Reon Mahmud",
      invoice_no: "ADM-230570910",
      patient_ID: "052300414",
      name: "Baby Of Elit",
      doctor: "Dr. MD. TANJIR ISLAM ROBIN (P.G.T-4)",
      referred: "Md Hasan Mahmud",
      cabin: "NIC.U-B9",
      diseases: "শ্বাসকষ্ট",
      net_total: "5000",
      payment: "3000",
      due: "2000",
      process: "Admitted",
      action: "",
    },
  ]);

  const [searchKeyword, setSearchKeyword] = useState(""); // State for the search input
  const [filteredRecords, setFilteredRecords] = useState(records); // State for filtered records

  // Function to handle the search input and filter records
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase(); // Get the input value and convert it to lowercase
    setSearchKeyword(keyword); // Update the searchKeyword state

    // Filter the records based on the search keyword
    const filtered = records.filter((record) =>
      Object.values(record).some((value) =>
        value.toString().toLowerCase().includes(keyword)
      )
    );

    setFilteredRecords(filtered); // Update the filtered records
  };

  // Function to highlight search keyword in the text
  const highlightText = (text, keyword) => {
    if (!keyword) return text; // If no keyword, return original text
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <mark key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  const form = useForm({
    initialValues: {
      method_id: "",
      name: "",
      short_name: "",
      authorised_mode_id: "",
      account_mode_id: "",
      service_charge: "",
      account_owner: "",
      path: "",
    },
    validate: {
      method_id: isNotEmpty(),
      name: hasLength({ min: 2, max: 20 }),
      short_name: hasLength({ min: 2, max: 20 }),
      authorised_mode_id: isNotEmpty(),
      account_mode_id: isNotEmpty(),
      path: isNotEmpty(),
      service_charge: (value) => {
        if (value) {
          const isNumberOrFractional = /^-?\d+(\.\d+)?$/.test(value);
          if (!isNumberOrFractional) {
            return true;
          }
        }
        return null;
      },
    },
  });

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

  return (
    <Box pt={6} bg={"#f0f1f9"}>
      <form action="#">
        <Box>
          <Grid columns={24} gutter={{ base: 6 }}>
            <Grid.Col
              span={{ xl: 2.5, lg: 3.5 }}
              className={styles.print_d_none}>
              <Box bg={"white"}>
                <SidebarLinks />
              </Box>
            </Grid.Col>

            <Grid.Col span={{ xl: 20.5, lg: 19.2 }}>
              <Box
                p={"xs"}
                className={"borderRadiusAll"}
                bg={"white"}
                h={"100%"}>
                <Box>
                  <Box mb={15}>
                    <Flex align={"center"} gap={"50px"}>
                      {/* search box start */}
                      <Box w={"100%"}>
                        <Input
                          w={"100%"}
                          placeholder="Search any keyword"
                          value={searchKeyword}
                          onChange={handleSearch}
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
                            <Text fw={"bold"} ml={5}>
                              {`${t("AdvancedSearch")}`}
                            </Text>
                          </Button>
                        </Box>

                        <Box
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
                                  defaultValue={t("data")}
                                  placeholder="Pick value"
                                  data={records.map((data, index) => {
                                    return t(data.doctor);
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
                                {t("AddFilter")}
                              </Button>
                            </Box>
                            <Flex gap={10}>
                              <Button
                                p={10}
                                bg={"#FA5252"}
                                onClick={clearFilters}>
                                {t("ClearFilter")}
                              </Button>
                              <Button p={10} bg={"#40C057"}>
                                {t("ApplyFilter")}
                              </Button>
                            </Flex>
                          </Flex>
                        </Box>
                      </Box>
                      {/* Filter items end */}

                      {/* Tools are here */}
                      <Flex align={"center"}>
                        <Tooltip label="Copy">
                          <Button
                            p={5}
                            bg={"none"}
                            onClick={() => handleCopy("#diagnostic_table")}>
                            <IconCopy size={"20"} stroke={1} color="black" />
                          </Button>
                        </Tooltip>
                        <Tooltip label="Printer">
                          <Button p={5} bg={"none"} onClick={handlePrint}>
                            <IconPrinter size={"20"} stroke={1} color="black" />
                          </Button>
                        </Tooltip>
                        <Tooltip label="PDF">
                          <Button
                            p={5}
                            bg={"none"}
                            onClick={() => handlePdf("diagnostic_table")}>
                            <IconPdf size={"20"} stroke={1} color="black" />
                          </Button>
                        </Tooltip>
                        <Tooltip label="Excel">
                          <Button
                            p={5}
                            bg={"none"}
                            onClick={() => handleExcel("diagnostic_table")}>
                            <IconFileSpreadsheet
                              size={"20"}
                              stroke={1}
                              color="black"
                            />
                          </Button>
                        </Tooltip>
                        <Tooltip label="CSV">
                          <Button
                            p={5}
                            bg={"none"}
                            onClick={() => handleCsv("diagnostic_table")}>
                            <IconFileTypeCsv
                              size={"20"}
                              stroke={1}
                              color="black"
                            />
                          </Button>
                        </Tooltip>
                      </Flex>
                      {/* Tools are end */}
                    </Flex>
                  </Box>
                </Box>

                {/*  */}
                <Tabs
                  height={50}
                  p={4}
                  bg={"#f0f1f9"}
                  color="red.6"
                  defaultValue={"All"}
                  variant="default"
                  radius="sm">
                  <Tabs.List>
                    <Tabs.Tab m={2} value="All">
                      {t("All")}
                    </Tabs.Tab>
                    <Tabs.Tab m={2} value="Process">
                      {t("Process")}
                    </Tabs.Tab>
                    <Tabs.Tab m={2} value="Done">
                      {t("Done")}
                    </Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel value="All">
                    {/* data table start */}
                    <Box id="diagnostic_table" className="borderRadiusAll">
                      <DataTable
                        classNames={{
                          root: tableCss.root,
                          table: tableCss.table,
                          header: tableCss.header,
                          footer: tableCss.footer,
                          pagination: tableCss.pagination,
                        }}
                        records={filteredRecords}
                        columns={[
                          {
                            accessor: "created",
                            title: t("Created"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.created, searchKeyword),
                          },
                          {
                            accessor: "created_by",
                            title: t("CreatedBy"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.created_by, searchKeyword),
                          },
                          {
                            accessor: "invoice_no",
                            title: t("InvoiceNo"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.invoice_no, searchKeyword),
                          },
                          {
                            accessor: "patient_ID",
                            title: t("PatientID"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.patient_ID, searchKeyword),
                          },
                          {
                            accessor: "name",
                            title: t("Name"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.name, searchKeyword),
                          },
                          {
                            accessor: "doctor",
                            title: t("Doctor"),
                            width: "100%",
                            render: (data) =>
                              highlightText(data.doctor, searchKeyword),
                          },
                          {
                            accessor: "referred",
                            title: t("Referred"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.referred, searchKeyword),
                          },
                          {
                            accessor: "cabin",
                            title: t("Cabin"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.cabin, searchKeyword),
                          },
                          {
                            accessor: "diseases",
                            title: t("Diseases"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.diseases, searchKeyword),
                          },
                          {
                            accessor: "net_total",
                            title: t("NetTotal"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.net_total, searchKeyword),
                          },
                          {
                            accessor: "payment",
                            title: t("Payment"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.payment, searchKeyword),
                          },
                          {
                            accessor: "due",
                            title: t("Due"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.due, searchKeyword),
                          },
                          {
                            accessor: "process",
                            title: t("Process"),
                            width: 100,
                            render: (data) =>
                              highlightText(data.process, searchKeyword),
                          },
                          {
                            accessor: "action",
                            title: t("Action"),
                            render: (data, index) => (
                              <Box w={"100%"}>
                                <Flex align={"center"} gap={2}>
                                  <Box w={"100%"}>
                                    <Tooltip label={t("Process")}>
                                      <Button bg={"#fa5252"} p={5} w={"100%"}>
                                        <IconRefresh size={"16px"} />
                                      </Button>
                                    </Tooltip>
                                  </Box>

                                  <Box w={"100%"}>
                                    <Invoice />
                                  </Box>

                                  <Box w={"100%"}>
                                    <Tooltip label={t("Print")}>
                                      <Button
                                        onClick={handlePrint}
                                        bg={"#fa5252"}
                                        p={5}
                                        w={"100%"}>
                                        <IconPrinter size={"16px"} />
                                      </Button>
                                    </Tooltip>
                                  </Box>

                                  <Box
                                    w={"100%"}
                                    pos={"relative"}
                                    className={styles.idp_option}>
                                    <Box>
                                      <Button bg={"#fa5252"} p={5} w={"100%"}>
                                        <IconBaselineDensityMedium
                                          size={"16px"}
                                          stroke={3}
                                        />
                                      </Button>
                                    </Box>

                                    <Box
                                      bg={"white"}
                                      className={`${styles.z20}`}
                                      pos={"absolute"}
                                      top={"100%"}
                                      right={0}>
                                      <Box mt={1}>
                                        <Button bg={"#fa5252"} p={5} w={"100%"}>
                                          {t("Edit")}
                                        </Button>
                                      </Box>
                                      <Box mt={1}>
                                        <Button
                                          onClick={() =>
                                            handleDelete(
                                              filteredRecords,
                                              index,
                                              setFilteredRecords
                                            )
                                          }
                                          bg={"#fa5252"}
                                          p={5}
                                          w={"100%"}>
                                          {t("Delete")}
                                        </Button>
                                      </Box>
                                      <Box mt={1}>
                                        <Button bg={"#fa5252"} p={5} w={"100%"}>
                                          {t("Print")}
                                        </Button>
                                      </Box>
                                      <Box mt={1}>
                                        <FullDetails />
                                      </Box>
                                    </Box>
                                  </Box>
                                </Flex>
                              </Box>
                            ),
                          },
                        ]}
                        fetching={fetching}
                        totalRecords={indexData.total}
                        height={height + 30}
                        key={"item_index"}
                        recordsPerPage={perPage}
                        onPageChange={(p) => {
                          setPage(p);
                          dispatch(setFetching(true));
                        }}
                        loaderSize="xs"
                        loaderColor="grape"
                        scrollAreaProps={{ type: "never" }}
                      />
                    </Box>
                    {/* data table end */}
                  </Tabs.Panel>
                  <Tabs.Panel value="Process">
                    <Box>Process</Box>
                  </Tabs.Panel>
                  <Tabs.Panel value="Done">
                    <Box>Done</Box>
                  </Tabs.Panel>
                </Tabs>
                {/*  */}
              </Box>
            </Grid.Col>
            <Grid.Col span={{ xl: 1, lg: 1.3 }}>
              <Box className={"borderRadiusAll"} pt={"16"} bg={"white"}>
                <ShortcutVoucher
                  form={form}
                  FormSubmit={"EntityFormSubmit"}
                  Name={"method_id"}
                  inputType="select"
                />
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </form>
    </Box>
  );
}

export default BookingDiagnosticFormIndex;
