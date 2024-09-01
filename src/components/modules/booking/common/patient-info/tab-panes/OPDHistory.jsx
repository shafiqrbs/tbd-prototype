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
} from "@mantine/core";
import { IconChevronsRight, IconPlus, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../../../../assets/css/BookingIndex.module.css";
import FormInput from "./form-tab/FormInput";
import { useTranslation } from "react-i18next";

const opdHistoryHeader = [
  "Name",
  "PatientID",
  "GuardianName",
  "Gender",
  "Phone",
  "Consultant",
  "LastVisit",
  "TotalRecheckup",
  "Action",
];

const initialOpdHistoryData = [
  {
    name: "Prakash Chowdhury",
    patientID: "OPDN001",
    guardian: "MD Alamgir Hossain",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Sonia Bush",
    lastVisit: "12/12/2024 12:00 PM",
    totalRecheckup: "12",
  },
  {
    name: "Rabby Islam",
    patientID: "OPDN002",
    guardian: "MD Prokash Hossain",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Sonia Bush",
    lastVisit: "11/11/2024 11:00 PM",
    totalRecheckup: "11",
  },
  {
    name: "Zimu Ahmed",
    patientID: "OPDN003",
    guardian: "MD Raiyan Hossain",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Sonia Bush",
    lastVisit: "12/12/2024 12:10 PM",
    totalRecheckup: "13",
  },
  {
    name: "Sabina Akter",
    patientID: "OPDN004",
    guardian: "Mrs Sadiya Begum",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Rifat Ahmed",
    lastVisit: "12/12/2024 12:30 PM",
    totalRecheckup: "7",
  },
  {
    name: "Sharmin Akter",
    patientID: "OPDN005",
    guardian: "Mrs Rubina Sheikh",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Riya Sarker",
    lastVisit: "12/12/2024 11:40 PM",
    totalRecheckup: "7",
  },
  {
    name: "Prakash Chowdhury",
    patientID: "OPDN006",
    guardian: "MD Alamgir Hossain",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Sonia Bush",
    lastVisit: "12/12/2024 12:00 PM",
    totalRecheckup: "12",
  },
  {
    name: "Rabby Islam",
    patientID: "OPDN007",
    guardian: "MD Prokash Hossain",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Sonia Bush",
    lastVisit: "11/11/2024 11:00 PM",
    totalRecheckup: "11",
  },
  {
    name: "Zimu Ahmed",
    patientID: "OPDN008",
    guardian: "MD Raiyan Hossain",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Sonia Bush",
    lastVisit: "12/12/2024 12:10 PM",
    totalRecheckup: "13",
  },
  {
    name: "Sabina Akter",
    patientID: "OPDN009",
    guardian: "Mrs Sadiya Begum",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Rifat Ahmed",
    lastVisit: "12/12/2024 12:30 PM",
    totalRecheckup: "7",
  },
  {
    name: "Sharmin Akter",
    patientID: "OPDN010",
    guardian: "Mrs Rubina Sheikh",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Riya Sarker",
    lastVisit: "12/12/2024 11:40 PM",
    totalRecheckup: "7",
  },
  {
    name: "Prakash Chowdhury",
    patientID: "OPDN011",
    guardian: "MD Alamgir Hossain",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Sonia Bush",
    lastVisit: "12/12/2024 12:00 PM",
    totalRecheckup: "12",
  },
  {
    name: "Rabby Islam",
    patientID: "OPDN012",
    guardian: "MD Prokash Hossain",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Sonia Bush",
    lastVisit: "11/11/2024 11:00 PM",
    totalRecheckup: "11",
  },
  {
    name: "Zimu Ahmed",
    patientID: "OPDN013",
    guardian: "MD Raiyan Hossain",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Sonia Bush",
    lastVisit: "12/12/2024 12:10 PM",
    totalRecheckup: "13",
  },
  {
    name: "Sabina Akter",
    patientID: "OPDN014",
    guardian: "Mrs Sadiya Begum",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Rifat Ahmed",
    lastVisit: "12/12/2024 12:30 PM",
    totalRecheckup: "7",
  },
  {
    name: "Sharmin Akter",
    patientID: "OPDN015",
    guardian: "Mrs Rubina Sheikh",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Riya Sarker",
    lastVisit: "12/12/2024 11:40 PM",
    totalRecheckup: "7",
  },
];

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

const OpdHistory = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [opdHistoryData, setOpdHistoryData] = useState(initialOpdHistoryData);
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

  const filteredHistory = opdHistoryData.filter((patient) =>
    Object.values(patient).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDelete = (patientID) => {
    setOpdHistoryData((prevData) =>
      prevData.filter((patient) => patient.patientID !== patientID)
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
            placeholder={t("SearchAnyKeyword")}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
        <Flex justify={"flex-end"} gap={10} align={"center"}>
          <Box>
            <Button bg={"#40C057"} onClick={open}>
              <IconPlus size={16} /> {t("AddPatient")}
            </Button>

            {/* Add patient Modal start */}
            <Modal opened={opened} onClose={close} title={t("AddPatient")}>
              <form action="#">
                <Box>
                  <Text>{t("Name")}</Text>
                  <FormInput
                    label={""}
                    inputType={"text"}
                    inputPlaceholder={t("EnterYourName")}
                    nameID={"name"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box>
                  <Text>{t("Mobile")}</Text>
                  <FormInput
                    label={""}
                    inputType={"number"}
                    inputPlaceholder={t("EnterYourNumber")}
                    nameID={"mobile"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box>
                  <Text>{t("BedNumber")}</Text>
                  <FormInput
                    label={""}
                    inputType={"text"}
                    inputPlaceholder={t("BedNumber")}
                    nameID={"bed_number"}
                    inputWidth={"100%"}
                  />
                </Box>

                <Box>
                  <Text>{t("Gender")}</Text>
                  <Select
                    label=""
                    placeholder={t("SelectYourGender")}
                    data={["Male", "Female", "Other"]}
                    allowDeselect
                  />
                </Box>

                <Box ta={"right"} mt={10}>
                  <Button onClick={(e) => e.preventDefault()} type="submit">
                    {t("Add")}
                  </Button>
                </Box>
              </form>
            </Modal>
            {/* Add patient Modal end */}
          </Box>

          <Box>
            <Button onClick={() => navigate("/")} bg={"#FA5252"}>
              {t("DischargedPatient")}
            </Button>
          </Box>
        </Flex>
      </Flex>

      <Table
        stickyHeader
        stickyHeaderOffset={40}
        className={`${styles.box_border}`}>
        <Table.Thead>
          <Table.Tr className={`${styles.table_header}`}>
            {opdHistoryHeader?.map((data, index) => {
              return <Table.Th key={index}>{t(data)}</Table.Th>;
            })}
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {filteredHistory?.map((data, index) => {
            return (
              <Table.Tr key={index} className={`${styles.table_row}`}>
                <Table.Td>
                  <NavLink
                    py={7}
                    px={0}
                    className={`${styles.patient_link_hover}`}
                    label={highlightText(data?.name, searchTerm)}
                    href={"#"}
                    active={index === active}
                    onClick={() => setActive(index)}
                    rightSection={<IconChevronsRight size="1rem" />}
                  />
                </Table.Td>
                <Table.Td>
                  {highlightText(data?.patientID, searchTerm)}
                </Table.Td>
                <Table.Td>{highlightText(data?.guardian, searchTerm)}</Table.Td>
                <Table.Td>{highlightText(data?.gender, searchTerm)}</Table.Td>
                <Table.Td>{highlightText(data?.mobile, searchTerm)}</Table.Td>
                <Table.Td>
                  {highlightText(data?.consultant, searchTerm)}
                </Table.Td>
                <Table.Td>
                  {highlightText(data?.lastVisit, searchTerm)}
                </Table.Td>
                <Table.Td>
                  {highlightText(data?.totalRecheckup, searchTerm)}
                </Table.Td>
                <Table.Td ta={"center"}>
                  <Button
                    className={styles.delete_btn_style}
                    onClick={() => handleDelete(data.patientID)}>
                    <IconTrash size={18} stroke={2.5} />
                  </Button>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>

        <Table.Tfoot>
          <Table.Tr c={"black"} fw={"bold"} fz={"h5"}>
            <Table.Td>
              Total: {filteredHistory.length} / {opdHistoryData.length}
            </Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default OpdHistory;

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

// const opdHistoryHeader = [
//   "Name",
//   "Patient ID",
//   "Guardian Name",
//   "Gender",
//   "Phone",
//   "Consultant",
//   "Last Visit",
//   "Total Recheckup",
//   "Action",
// ];

// const opdHistory = [
//   {
//     name: "Prakash Chowdhury",
//     patientID: "OPDN001",
//     guardian: "MD Alamgir Hossain",
//     gender: "Male",
//     mobile: "01300030003",
//     consultant: "Sonia Bush",
//     lastVisit: "12/12/2024 12:00 PM",
//     totalRecheckup: "12",
//   },
//   {
//     name: "Rabby Islam",
//     patientID: "OPDN002",
//     guardian: "MD Prokash Hossain",
//     gender: "Male",
//     mobile: "01300030003",
//     consultant: "Sonia Bush",
//     lastVisit: "11/11/2024 11:00 PM",
//     totalRecheckup: "11",
//   },
//   {
//     name: "Zimu Ahmed",
//     patientID: "OPDN003",
//     guardian: "MD Raiyan Hossain",
//     gender: "Male",
//     mobile: "01300030003",
//     consultant: "Sonia Bush",
//     lastVisit: "12/12/2024 12:10 PM",
//     totalRecheckup: "13",
//   },
//   {
//     name: "Sabina Akter",
//     patientID: "OPDN004",
//     guardian: "Mrs Sadiya Begum",
//     gender: "Female",
//     mobile: "01300030003",
//     consultant: "Rifat Ahmed",
//     lastVisit: "12/12/2024 12:30 PM",
//     totalRecheckup: "7",
//   },
//   {
//     name: "Sharmin Akter",
//     patientID: "OPDN005",
//     guardian: "Mrs Rubina Sheikh",
//     gender: "Female",
//     mobile: "01300030003",
//     consultant: "Riya Sarker",
//     lastVisit: "12/12/2024 11:40 PM",
//     totalRecheckup: "7",
//   },
//   {
//     name: "Prakash Chowdhury",
//     patientID: "OPDN001",
//     guardian: "MD Alamgir Hossain",
//     gender: "Male",
//     mobile: "01300030003",
//     consultant: "Sonia Bush",
//     lastVisit: "12/12/2024 12:00 PM",
//     totalRecheckup: "12",
//   },
//   {
//     name: "Rabby Islam",
//     patientID: "OPDN002",
//     guardian: "MD Prokash Hossain",
//     gender: "Male",
//     mobile: "01300030003",
//     consultant: "Sonia Bush",
//     lastVisit: "11/11/2024 11:00 PM",
//     totalRecheckup: "11",
//   },
//   {
//     name: "Zimu Ahmed",
//     patientID: "OPDN003",
//     guardian: "MD Raiyan Hossain",
//     gender: "Male",
//     mobile: "01300030003",
//     consultant: "Sonia Bush",
//     lastVisit: "12/12/2024 12:10 PM",
//     totalRecheckup: "13",
//   },
//   {
//     name: "Sabina Akter",
//     patientID: "OPDN004",
//     guardian: "Mrs Sadiya Begum",
//     gender: "Female",
//     mobile: "01300030003",
//     consultant: "Rifat Ahmed",
//     lastVisit: "12/12/2024 12:30 PM",
//     totalRecheckup: "7",
//   },
//   {
//     name: "Sharmin Akter",
//     patientID: "OPDN005",
//     guardian: "Mrs Rubina Sheikh",
//     gender: "Female",
//     mobile: "01300030003",
//     consultant: "Riya Sarker",
//     lastVisit: "12/12/2024 11:40 PM",
//     totalRecheckup: "7",
//   },
//   {
//     name: "Prakash Chowdhury",
//     patientID: "OPDN001",
//     guardian: "MD Alamgir Hossain",
//     gender: "Male",
//     mobile: "01300030003",
//     consultant: "Sonia Bush",
//     lastVisit: "12/12/2024 12:00 PM",
//     totalRecheckup: "12",
//   },
//   {
//     name: "Rabby Islam",
//     patientID: "OPDN002",
//     guardian: "MD Prokash Hossain",
//     gender: "Male",
//     mobile: "01300030003",
//     consultant: "Sonia Bush",
//     lastVisit: "11/11/2024 11:00 PM",
//     totalRecheckup: "11",
//   },
//   {
//     name: "Zimu Ahmed",
//     patientID: "OPDN003",
//     guardian: "MD Raiyan Hossain",
//     gender: "Male",
//     mobile: "01300030003",
//     consultant: "Sonia Bush",
//     lastVisit: "12/12/2024 12:10 PM",
//     totalRecheckup: "13",
//   },
//   {
//     name: "Sabina Akter",
//     patientID: "OPDN004",
//     guardian: "Mrs Sadiya Begum",
//     gender: "Female",
//     mobile: "01300030003",
//     consultant: "Rifat Ahmed",
//     lastVisit: "12/12/2024 12:30 PM",
//     totalRecheckup: "7",
//   },
//   {
//     name: "Sharmin Akter",
//     patientID: "OPDN005",
//     guardian: "Mrs Rubina Sheikh",
//     gender: "Female",
//     mobile: "01300030003",
//     consultant: "Riya Sarker",
//     lastVisit: "12/12/2024 11:40 PM",
//     totalRecheckup: "7",
//   },
// ];

// const OpdHistory = () => {
//   const [active, setActive] = useState(0);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const [opened, { open, close }] = useDisclosure(false);

//   const highlightText = (text, searchTerm) => {
//     if (!searchTerm) return text;
//     const parts = text.split(new RegExp(`(${searchTerm})`, "gi"));
//     return parts.map((part, index) =>
//       part.toLowerCase() === searchTerm.toLowerCase() ? (
//         <span key={index} style={{ backgroundColor: "yellow" }}>
//           {part}
//         </span>
//       ) : (
//         part
//       )
//     );
//   };

//   const filteredHistory = opdHistory.filter((patient) =>
//     Object.values(patient).some((value) =>
//       value.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <>
//       <Flex mb={20} justify={"space-between"} gap={10} align={"center"}>
//         <Box w={"100%"}>
//           <Input
//             w={"100%"}
//             placeholder="Search any keyword"
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </Box>
//         <Flex justify={"flex-end"} gap={10} align={"center"}>
//           <Box>
//             <Button bg={"#40C057"} onClick={open}>
//               <IconPlus size={16} /> Add Patient
//             </Button>

//             {/* Add patient Modal start */}
//             <Modal opened={opened} onClose={close} title="Add Paient">
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

//       <Table stickyHeader stickyHeaderOffset={0}>
//         <Table.Thead>
//           <Table.Tr>
//             {opdHistoryHeader?.map((data, index) => {
//               return <Table.Th key={index}>{data}</Table.Th>;
//             })}
//           </Table.Tr>
//         </Table.Thead>

//         <Table.Tbody>
//           {filteredHistory?.map((data, index) => {
//             return (
//               <Table.Tr key={index}>
//                 <Table.Td>
//                   <NavLink
//                     py={7}
//                     px={0}
//                     c={"cyan"}
//                     label={highlightText(data?.name, searchTerm)}
//                     href={"#"}
//                     active={index === active}
//                     onClick={() => setActive(index)}
//                     rightSection={<IconChevronsRight size="1rem" />}
//                   />
//                 </Table.Td>
//                 <Table.Td>
//                   {highlightText(data?.patientID, searchTerm)}
//                 </Table.Td>
//                 <Table.Td>{highlightText(data?.guardian, searchTerm)}</Table.Td>
//                 <Table.Td>{highlightText(data?.gender, searchTerm)}</Table.Td>
//                 <Table.Td>{highlightText(data?.mobile, searchTerm)}</Table.Td>
//                 <Table.Td>
//                   {highlightText(data?.consultant, searchTerm)}
//                 </Table.Td>
//                 <Table.Td>
//                   {highlightText(data?.lastVisit, searchTerm)}
//                 </Table.Td>
//                 <Table.Td>
//                   {highlightText(data?.totalRecheckup, searchTerm)}
//                 </Table.Td>
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
//               Total: {filteredHistory.length} / {opdHistory.length}
//             </Table.Td>
//           </Table.Tr>
//         </Table.Tfoot>

//         <Table.Caption>Scroll page to see sticky thead</Table.Caption>
//       </Table>
//     </>
//   );
// };

// export default OpdHistory;
