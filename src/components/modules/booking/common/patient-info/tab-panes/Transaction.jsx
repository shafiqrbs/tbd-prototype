import { useDisclosure } from "@mantine/hooks";
import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  NavLink,
  Select,
  Table,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconChevronsRight, IconPlus, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./form-tab/FormInput";
import TransactionDetails from "./transaction/TransactionDetails";
import styles from "../../../../../../assets/css/BookingIndex.module.css";

const transactionHeader = [
  "Created Date",
  "Created By",
  "Invoice No",
  "Doctor",
  "Referred",
  "Delivery Date",
  "Net Total",
  "Payment",
  "Balance",
  "Status",
  "Report",
  "Closed",
  "Action",
];

const initialTransactionData = [
  {
    created: "11-05-2023 01:15 AM",
    createdBy: "Nur Mohammad",
    invoiceNo: "DIA-23056930",
    doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "2800",
    payment: "0",
    balance: "2800",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1500",
    fromNumber: "01701-010299",
    toNumber: "01901-010377",
    fromName: "MD Foysal",
    toName: "MD Asraf",
  },
  {
    created: "11-05-2023 01:20 AM",
    createdBy: "Nur Mohammad",
    invoiceNo: "DIA-23056931",
    doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "200",
    payment: "0",
    balance: "200",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1800",
    fromNumber: "01301-010399",
    toNumber: "01401-010277",
    fromName: "MD Hassan",
    toName: "MD Hridoy",
  },
  {
    created: "11-05-2023 01:55 AM",
    createdBy: "Nur Mohammad",
    invoiceNo: "DIA-23056932",
    doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "800",
    payment: "800",
    balance: "0",
    status: "Paid",
    report: "In-progress",
    closed: "",
    money: "600",
    fromNumber: "01709-908879",
    toNumber: "01901-666555",
    fromName: "MD Himel",
    toName: "MD Akib",
  },
  {
    created: "29-05-2023 11:58 PM",
    createdBy: "01732817101",
    invoiceNo: "DIA-23056933",
    doctor: "-Change Doctor-",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "3500",
    payment: "3000",
    balance: "500",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1200",
    fromNumber: "01701-112233",
    toNumber: "01901-445566",
    fromName: "MD Nayeem",
    toName: "MD Raju",
  },
  {
    created: "29-05-2023 12:00 PM",
    createdBy: "01732817101",
    invoiceNo: "DIA-23056934",
    doctor: "-Dr. AKM Azad (Bone Doctor)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "30-05-2023 12:00 PM",
    netTotal: "3500",
    payment: "3000",
    balance: "500",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "3000",
    fromNumber: "01701-009988",
    toNumber: "01901-776655",
    fromName: "MD Riaz",
    toName: "MD Hridoy",
  },
  {
    created: "29-05-2023 12:20 PM",
    createdBy: "01732817101",
    invoiceNo: "DIA-23056935",
    doctor: "-Change Doctor-",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "3500",
    payment: "3000",
    balance: "500",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1000",
    fromNumber: "01701-556677",
    toNumber: "01901-776655",
    fromName: "MD Shakhawat",
    toName: "MD Sazzad",
  },
  {
    created: "11-05-2023 01:15 AM",
    createdBy: "Nur Mohammad",
    invoiceNo: "DIA-23056930",
    doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "2800",
    payment: "0",
    balance: "2800",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1500",
    fromNumber: "01701-010299",
    toNumber: "01901-010377",
    fromName: "MD Foysal",
    toName: "MD Asraf",
  },
  {
    created: "11-05-2023 01:20 AM",
    createdBy: "Nur Mohammad",
    invoiceNo: "DIA-23056931",
    doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "200",
    payment: "0",
    balance: "200",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1800",
    fromNumber: "01301-010399",
    toNumber: "01401-010277",
    fromName: "MD Hassan",
    toName: "MD Hridoy",
  },
  {
    created: "11-05-2023 01:55 AM",
    createdBy: "Nur Mohammad",
    invoiceNo: "DIA-23056932",
    doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "800",
    payment: "800",
    balance: "0",
    status: "Paid",
    report: "In-progress",
    closed: "",
    money: "600",
    fromNumber: "01709-908879",
    toNumber: "01901-666555",
    fromName: "MD Himel",
    toName: "MD Akib",
  },
  {
    created: "29-05-2023 11:58 PM",
    createdBy: "01732817101",
    invoiceNo: "DIA-23056933",
    doctor: "-Change Doctor-",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "3500",
    payment: "3000",
    balance: "500",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1200",
    fromNumber: "01701-112233",
    toNumber: "01901-445566",
    fromName: "MD Nayeem",
    toName: "MD Raju",
  },
  {
    created: "29-05-2023 12:00 PM",
    createdBy: "01732817101",
    invoiceNo: "DIA-23056934",
    doctor: "-Dr. AKM Azad (Bone Doctor)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "30-05-2023 12:00 PM",
    netTotal: "3500",
    payment: "3000",
    balance: "500",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "3000",
    fromNumber: "01701-009988",
    toNumber: "01901-776655",
    fromName: "MD Riaz",
    toName: "MD Hridoy",
  },
  {
    created: "29-05-2023 12:20 PM",
    createdBy: "01732817101",
    invoiceNo: "DIA-23056935",
    doctor: "-Change Doctor-",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "3500",
    payment: "3000",
    balance: "500",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1000",
    fromNumber: "01701-556677",
    toNumber: "01901-776655",
    fromName: "MD Shakhawat",
    toName: "MD Sazzad",
  },
  {
    created: "11-05-2023 01:15 AM",
    createdBy: "Nur Mohammad",
    invoiceNo: "DIA-23056930",
    doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "2800",
    payment: "0",
    balance: "2800",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1500",
    fromNumber: "01701-010299",
    toNumber: "01901-010377",
    fromName: "MD Foysal",
    toName: "MD Asraf",
  },
  {
    created: "11-05-2023 01:20 AM",
    createdBy: "Nur Mohammad",
    invoiceNo: "DIA-23056931",
    doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "200",
    payment: "0",
    balance: "200",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1800",
    fromNumber: "01301-010399",
    toNumber: "01401-010277",
    fromName: "MD Hassan",
    toName: "MD Hridoy",
  },
  {
    created: "11-05-2023 01:55 AM",
    createdBy: "Nur Mohammad",
    invoiceNo: "DIA-23056932",
    doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "800",
    payment: "800",
    balance: "0",
    status: "Paid",
    report: "In-progress",
    closed: "",
    money: "600",
    fromNumber: "01709-908879",
    toNumber: "01901-666555",
    fromName: "MD Himel",
    toName: "MD Akib",
  },
  {
    created: "29-05-2023 11:58 PM",
    createdBy: "01732817101",
    invoiceNo: "DIA-23056933",
    doctor: "-Change Doctor-",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "3500",
    payment: "3000",
    balance: "500",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1200",
    fromNumber: "01701-112233",
    toNumber: "01901-445566",
    fromName: "MD Nayeem",
    toName: "MD Raju",
  },
  {
    created: "29-05-2023 12:00 PM",
    createdBy: "01732817101",
    invoiceNo: "DIA-23056934",
    doctor: "-Dr. AKM Azad (Bone Doctor)",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "30-05-2023 12:00 PM",
    netTotal: "3500",
    payment: "3000",
    balance: "500",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "3000",
    fromNumber: "01701-009988",
    toNumber: "01901-776655",
    fromName: "MD Riaz",
    toName: "MD Hridoy",
  },
  {
    created: "29-05-2023 12:20 PM",
    createdBy: "01732817101",
    invoiceNo: "DIA-23056935",
    doctor: "-Change Doctor-",
    referred: "Akhi (SKSH Cleaner)",
    deliveryDate: "",
    netTotal: "3500",
    payment: "3000",
    balance: "500",
    status: "Due",
    report: "In-progress",
    closed: "",
    money: "1000",
    fromNumber: "01701-556677",
    toNumber: "01901-776655",
    fromName: "MD Shakhawat",
    toName: "MD Sazzad",
  },
];

const Transaction = () => {
  const [active, setActive] = useState(0);
  const [transactionData, setTransactionData] = useState(
    initialTransactionData
  );
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value.toLowerCase());
  };

  const filteredData = transactionData.filter((data) =>
    Object.values(data).some((value) =>
      value.toLowerCase().includes(searchKeyword)
    )
  );

  const handleDelete = (indexToDelete) => {
    setTransactionData((prevData) =>
      prevData.filter((_, index) => index !== indexToDelete)
    );
  };

  const highlightText = (text) => {
    if (!searchKeyword) return text;

    const parts = text.split(new RegExp(`(${searchKeyword})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === searchKeyword ? (
        <span key={i} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <>
      <Flex
        bg={"white"}
        pos={"sticky"}
        top={0}
        className={styles.z10}
        mb={20}
        pb={10}
        justify={"space-between"}
        gap={10}
        align={"center"}>
        <Box w={"100%"}>
          <Input
            w={"100%"}
            placeholder="Search any keyword"
            type="text"
            value={searchKeyword}
            onChange={handleSearch}
          />
        </Box>
        <Flex justify={"flex-end"} gap={10} align={"center"}>
          <Box>
            <Button bg={"#40C057"} onClick={open}>
              <IconPlus size={16} /> Create Invoice
            </Button>

            {/* Add patient Modal start */}
            <Modal opened={opened} onClose={close} title="Create Invoice">
              <form action="#">
                <Box>
                  <Text>Name</Text>
                  <FormInput
                    label={""}
                    inputType={"text"}
                    inputPlaceholder={"Enter Your Name"}
                    nameID={"name"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box>
                  <Text>Mobile</Text>
                  <FormInput
                    label={""}
                    inputType={"number"}
                    inputPlaceholder={"Enter Your Number"}
                    nameID={"mobile"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box>
                  <Text>Bed Number</Text>
                  <FormInput
                    label={""}
                    inputType={"text"}
                    inputPlaceholder={"Bed number"}
                    nameID={"bed_number"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box>
                  <Text>Gender</Text>
                  <Select
                    label=""
                    placeholder="Select your Gender"
                    data={["Male", "Female", "Other"]}
                    allowDeselect
                  />
                </Box>

                <Box ta={"right"} mt={10}>
                  <Button onClick={(e) => e.preventDefault()} type="submit">
                    Add
                  </Button>
                </Box>
              </form>
            </Modal>
            {/* Add patient Modal end */}
          </Box>

          <Box>
            <Button onClick={() => navigate("/")} bg={"#FA5252"}>
              Discharged Patient
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Table
        stickyHeader
        stickyHeaderOffset={40}
        className={`${styles.box_border}`}>
        <Table.Thead>
          <Table.Tr className={`${styles.table_header} ${styles.box_border}`}>
            {transactionHeader?.map((data, index) => (
              <Table.Th key={index}>
                <Text w={"max-content"} fw={"bold"} fz={14}>
                  {data}
                </Text>
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <Table.Tr key={index} className={`${styles.table_row}`}>
                <Table.Td>
                  <NavLink
                    fz={12}
                    py={7}
                    px={0}
                    className={`${styles.patient_link_hover}`}
                    label={highlightText(data?.created)}
                    href={"#"}
                    active={index === active}
                    onClick={() => setActive(index)}
                    rightSection={<IconChevronsRight size="1rem" />}
                  />
                </Table.Td>
                <Table.Td fz={12}>{highlightText(data?.createdBy)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.invoiceNo)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.doctor)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.referred)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.deliveryDate)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.netTotal)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.payment)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.balance)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.status)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.report)}</Table.Td>
                <Table.Td fz={12}>{highlightText(data?.closed)}</Table.Td>
                <Table.Td>
                  <Flex align={"center"} justify={"center"} gap={3}>
                    <Box>
                      {/* transaction details start */}
                      <TransactionDetails
                        money={data?.money}
                        fromNumber={data?.fromNumber}
                        fromName={data?.fromName}
                        toNumber={data?.toNumber}
                        toName={data?.toName}
                      />
                      {/* transaction details end */}
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
              </Table.Tr>
            ))
          ) : (
            <Table.Tr>
              <Table.Td colSpan={transactionHeader.length}>
                <Text align="center">No matching records found</Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>

        <Table.Tfoot>
          <Table.Tr c={"black"} fw={"bold"} fz={"h5"}>
            <Table.Td>
              Total: {filteredData.length} / {transactionData.length}
            </Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default Transaction;

// import { useDisclosure } from "@mantine/hooks";
// import {
//   Box,
//   Button,
//   Flex,
//   Input,
//   Modal,
//   NavLink,
//   Select,
//   Table,
//   Text,
// } from "@mantine/core";
// import { IconChevronsRight, IconPlus, IconTrash } from "@tabler/icons-react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import FormInput from "./form-tab/FormInput";

// const transactionHeader = [
//   "Created",
//   "Created By",
//   "Invoice No",
//   "Doctor",
//   "Reffered",
//   "Delivery Date",
//   "Net Total",
//   "Payment",
//   "Balance",
//   "Status",
//   "Report",
//   "Closed",
//   "Action",
// ];

// const transactionData = [
//   {
//     created: "11-05-2023 01:15 AM",
//     createdBy: "Nur Mohammad",
//     invoiceNo: "DIA-23056930",
//     doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
//     reffered: "Akhi (SKSH Cleaner)",
//     deliveryDate: "",
//     netTotal: "2800",
//     payment: "0",
//     balance: "2800",
//     status: "Due",
//     report: "In-progress",
//     closed: "",
//   },
//   {
//     created: "11-05-2023 01:20 AM",
//     createdBy: "Nur Mohammad",
//     invoiceNo: "DIA-23056931",
//     doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
//     reffered: "Akhi (SKSH Cleaner)",
//     deliveryDate: "",
//     netTotal: "200",
//     payment: "0",
//     balance: "200",
//     status: "Due",
//     report: "In-progress",
//     closed: "",
//   },
//   {
//     created: "11-05-2023 01:55 AM",
//     createdBy: "Nur Mohammad",
//     invoiceNo: "DIA-23056932",
//     doctor: "Dr. Jannatul Ferdous (Runa) M.B.B.S, BCS (Health) DGO (BSMMU)",
//     reffered: "Akhi (SKSH Cleaner)",
//     deliveryDate: "",
//     netTotal: "800",
//     payment: "800",
//     balance: "0",
//     status: "Paid",
//     report: "In-progress",
//     closed: "",
//   },
//   {
//     created: "29-05-2023 11:58 PM",
//     createdBy: "01732817101",
//     invoiceNo: "DIA-23056933",
//     doctor: "-Change Doctor-",
//     reffered: "Akhi (SKSH Cleaner)",
//     deliveryDate: "",
//     netTotal: "3500",
//     payment: "3000",
//     balance: "500",
//     status: "Due",
//     report: "In-progress",
//     closed: "",
//   },
// ];

// const Transaction = () => {
//   const [active, setActive] = useState(0);
//   const navigate = useNavigate();
//   const [opened, { open, close }] = useDisclosure(false);

//   return (
//     <>
//       <Flex mb={20} justify={"space-between"} gap={10} align={"center"}>
//         <Box w={"100%"}>
//           <Input w={"100%"} placeholder="Search any keyword" type="text" />
//         </Box>
//         <Flex justify={"flex-end"} gap={10} align={"center"}>
//           <Box>
//             <Button bg={"#40C057"} onClick={open}>
//               <IconPlus size={16} /> Add Patient
//             </Button>

//             {/* Add patient Modal start */}
//             <Modal opened={opened} onClose={close} title="Add Patient">
//               <form action="#">
//                 <Box>
//                   <Text>Name</Text>
//                   <FormInput
//                     label={""}
//                     inputType={"text"}
//                     inputPlaceholder={"Enter Your Name"}
//                     nameID={"name"}
//                     inputWidth={"100%"}
//                   />
//                 </Box>

//                 <Box>
//                   <Text>Mobile</Text>
//                   <FormInput
//                     label={""}
//                     inputType={"number"}
//                     inputPlaceholder={"Enter Your Number"}
//                     nameID={"mobile"}
//                     inputWidth={"100%"}
//                   />
//                 </Box>

//                 <Box>
//                   <Text>Bed Number</Text>
//                   <FormInput
//                     label={""}
//                     inputType={"text"}
//                     inputPlaceholder={"Bed number"}
//                     nameID={"bed_number"}
//                     inputWidth={"100%"}
//                   />
//                 </Box>

//                 <Box>
//                   <Text>Gender</Text>
//                   <Select
//                     label=""
//                     placeholder="Select your Gender"
//                     data={["Male", "Female", "Other"]}
//                     allowDeselect
//                   />
//                 </Box>

//                 <Box ta={"right"} mt={10}>
//                   <Button onClick={(e) => e.preventDefault()} type="submit">
//                     Add
//                   </Button>
//                 </Box>
//               </form>
//             </Modal>
//             {/* Add patient Modal end */}
//           </Box>

//           <Box>
//             <Button onClick={() => navigate("/")} bg={"#FA5252"}>
//               Discharged Patient
//             </Button>
//           </Box>
//         </Flex>
//       </Flex>

//       <Table stickyHeader stickyHeaderOffset={0} captionSide="top">
//         <Table.Caption>Scroll page to see all data.</Table.Caption>
//         <Table.Thead>
//           <Table.Tr>
//             {transactionHeader?.map((data, index) => {
//               return (
//                 <Table.Th key={index}>
//                   <Text w={"max-content"} fw={"bold"} fz={14}>
//                     {data}
//                   </Text>
//                 </Table.Th>
//               );
//             })}
//           </Table.Tr>
//         </Table.Thead>

//         <Table.Tbody>
//           {transactionData?.map((data, index) => {
//             return (
//               <Table.Tr key={index}>
//                 <Table.Td>
//                   <NavLink
//                     fz={12}
//                     py={7}
//                     px={0}
//                     c={"cyan"}
//                     label={data?.created}
//                     href={"#"}
//                     active={index === active}
//                     onClick={() => setActive(index)}
//                     rightSection={<IconChevronsRight size="1rem" />}
//                   />
//                 </Table.Td>
//                 <Table.Td fz={12}>{data?.createdBy}</Table.Td>
//                 <Table.Td fz={12}>{data?.invoiceNo}</Table.Td>
//                 <Table.Td fz={12}>{data?.doctor}</Table.Td>
//                 <Table.Td fz={12}>{data?.reffered}</Table.Td>
//                 <Table.Td fz={12}>{data?.deliveryDate}</Table.Td>
//                 <Table.Td fz={12}>{data?.netTotal}</Table.Td>
//                 <Table.Td fz={12}>{data?.payment}</Table.Td>
//                 <Table.Td fz={12}>{data?.netTotal - data?.payment}</Table.Td>
//                 <Table.Td fz={12}>{data?.status}</Table.Td>
//                 <Table.Td fz={12}>{data?.report}</Table.Td>
//                 <Table.Td fz={12}>{data?.closed}</Table.Td>
//                 <Table.Td ta={"center"}>
//                   <Button px={3} bg={"#FA5252"}>
//                     <IconTrash size={18} stroke={2.5} />
//                   </Button>
//                 </Table.Td>
//               </Table.Tr>
//             );
//           })}
//         </Table.Tbody>

//         <Table.Tfoot>
//           <Table.Tr c={"black"} fw={"bold"} fz={"h5"}>
//             <Table.Td>
//               Total: {transactionData.length} / {transactionData.length}
//             </Table.Td>
//           </Table.Tr>
//         </Table.Tfoot>
//       </Table>
//     </>
//   );
// };

// export default Transaction;
