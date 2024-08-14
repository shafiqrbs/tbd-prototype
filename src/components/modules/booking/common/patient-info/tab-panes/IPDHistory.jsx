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
import styles from "../../../../../../../src/assets/css/BookingIndex.module.css";
import FormInput from "./form-tab/FormInput";

const ipdHistoryHeader = [
  "IPD No",
  "Case ID",
  "Name",
  "Gender",
  "Phone",
  "Bed",
  "Previous Medical Issue",
  "Credit Limit ($)",
  "Action",
];

const initialIpdHistory = [
  {
    ipdNo: "IPDN001",
    caseID: "caseID001",
    name: "Prakash Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-102",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN002",
    caseID: "caseID002",
    name: "Shumon Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-103",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN003",
    caseID: "caseID003",
    name: "Sumaiya Akter",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-106",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN004",
    caseID: "caseID004",
    name: "Ononna Aziz",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-104",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN001",
    caseID: "caseID001",
    name: "Prakash Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-102",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN002",
    caseID: "caseID002",
    name: "Shumon Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-103",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN003",
    caseID: "caseID003",
    name: "Sumaiya Akter",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-106",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN004",
    caseID: "caseID004",
    name: "Ononna Aziz",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-104",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN001",
    caseID: "caseID001",
    name: "Prakash Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-102",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN002",
    caseID: "caseID002",
    name: "Shumon Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-103",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN003",
    caseID: "caseID003",
    name: "Sumaiya Akter",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-106",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN004",
    caseID: "caseID004",
    name: "Ononna Aziz",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-104",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN001",
    caseID: "caseID001",
    name: "Prakash Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-102",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN002",
    caseID: "caseID002",
    name: "Shumon Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-103",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN003",
    caseID: "caseID003",
    name: "Sumaiya Akter",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-106",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN004",
    caseID: "caseID004",
    name: "Ononna Aziz",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-104",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN001",
    caseID: "caseID001",
    name: "Prakash Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-102",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN002",
    caseID: "caseID002",
    name: "Shumon Chowdhury",
    gender: "Male",
    mobile: "01300030003",
    consultant: "Bed-103",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN003",
    caseID: "caseID003",
    name: "Sumaiya Akter",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-106",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
  {
    ipdNo: "IPDN004",
    caseID: "caseID004",
    name: "Ononna Aziz",
    gender: "Female",
    mobile: "01300030003",
    consultant: "Bed-104",
    medicalIssue: "Previous Medical Issue",
    creditLimit: "Credit Limit ($)",
  },
];

const IpdHistory = () => {
  const [active, setActive] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [ipdHistoryData, setIpdHistoryData] = useState(initialIpdHistory); // Initialize state with data
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);

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

  const filteredHistory = ipdHistoryData.filter((patient) =>
    Object.values(patient).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDelete = (indexToDelete) => {
    setIpdHistoryData((prevData) =>
      prevData.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      <Flex
        bg={"white"}
        pos={"sticky"}
        top={0}
        className={`${styles.z10}`}
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>

        <Flex justify={"flex-end"} gap={10} align={"center"}>
          <Box>
            <Button bg={"#40C057"} onClick={open}>
              <IconPlus size={16} /> Add Patient
            </Button>

            {/* Add patient Modal start */}
            <Modal opened={opened} onClose={close} title="Add Patient">
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
          <Table.Tr className={styles.table_header}>
            {ipdHistoryHeader?.map((data, index) => {
              return <Table.Th key={index}>{data}</Table.Th>;
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
                    label={highlightText(data?.ipdNo, searchTerm)}
                    href={"#"}
                    active={index === active}
                    onClick={() => setActive(index)}
                    rightSection={<IconChevronsRight size="1rem" />}
                  />
                </Table.Td>
                <Table.Td>{highlightText(data?.caseID, searchTerm)}</Table.Td>
                <Table.Td>{highlightText(data?.name, searchTerm)}</Table.Td>
                <Table.Td>{highlightText(data?.gender, searchTerm)}</Table.Td>
                <Table.Td>{highlightText(data?.mobile, searchTerm)}</Table.Td>
                <Table.Td>
                  {highlightText(data?.consultant, searchTerm)}
                </Table.Td>
                <Table.Td>
                  {highlightText(data?.medicalIssue, searchTerm)}
                </Table.Td>
                <Table.Td>
                  {highlightText(data?.creditLimit, searchTerm)}
                </Table.Td>
                <Table.Td ta={"center"}>
                  <Button
                    className={styles.delete_btn_style}
                    onClick={() => handleDelete(index)} // Delete button click
                  >
                    <IconTrash color={"#FA5252"} size={18} stroke={2.5} />
                  </Button>
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>

        <Table.Tfoot>
          <Table.Tr c={"black"} fw={"bold"} fz={"h5"}>
            <Table.Td>
              Total: {filteredHistory.length} / {ipdHistoryData.length}
            </Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default IpdHistory;
