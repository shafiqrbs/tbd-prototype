import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  Button,
  Box,
  Input,
  Flex,
  Autocomplete,
  Select,
  Textarea,
  Table,
  Tooltip,
  Text,
} from "@mantine/core";
import styles from "../../../../assets/css/BookingIndex.module.css";
import {
  IconCirclePlus,
  IconMenu2,
  IconMinus,
  IconPlus,
  IconReportMedical,
  IconTrash,
} from "@tabler/icons-react";
import { IconDeviceFloppy } from "@tabler/icons-react";

const Invoice = () => {
  const { t, i18n } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleRefer, setToggleRefer] = useState(false);
  const invoiceData = ["data"];

  return (
    <>
      <Drawer
        size="85%"
        opened={opened}
        onClose={close}
        title="Create New Invoice">
        <form action="#">
          <Box>
            <Box p={10} bg={"blue"}>
              <Flex align={"center"} justify={"space-between"} gap={150}>
                <Box w={"100%"}>
                  <Autocomplete
                    placeholder="Patient ID/Name/Mobile no"
                    data={invoiceData}
                    maxDropdownHeight={200}
                    w={"100%"}
                  />
                </Box>

                <Box>
                  <Flex align={"center"} gap={10}>
                    <Box>
                      <Button bg={"#fa5252"} onClick={() => navigate("#")}>
                        <IconMenu2 /> Invoice
                      </Button>
                    </Box>
                    <Box>
                      <Button bg={"#fa5252"}>
                        <IconMenu2 /> Delivery Report
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            {/*  */}
            <Box p={10} bg={"lightgray"}>
              <Flex gap={30}>
                <Box w={"25%"}>
                  <Flex direction={"column"} gap={10}>
                    <Box>
                      <Input.Wrapper label={"Patient ID"}>
                        <Input placeholder="Enter patient ID" />
                      </Input.Wrapper>
                    </Box>
                    <Box>
                      <Input.Wrapper label={"Patient Name"}>
                        <Input placeholder="Enter patient Name" />
                      </Input.Wrapper>
                    </Box>
                  </Flex>
                </Box>
                <Box w={"50%"}>
                  <Box w={"100%"}>
                    <Autocomplete
                      label={"Addmission ID"}
                      placeholder="Enter Addmission ID"
                      data={invoiceData}
                      maxDropdownHeight={200}
                      w={"100%"}
                    />
                  </Box>
                  <Box mt={10}>
                    <Flex justify={"space-between"} gap={15}>
                      <Box w={"100%"}>
                        <Input.Wrapper label={"Mobile No"}>
                          <Input placeholder="Enter Valid Mobile No" required />
                        </Input.Wrapper>
                      </Box>
                      <Box w={"100%"}>
                        <Input.Wrapper label={"Age"}>
                          <Input placeholder="Enter Valid Age" required />
                        </Input.Wrapper>
                      </Box>
                      <Box w={"100%"}>
                        <Select
                          w={"100%"}
                          label=" "
                          data={["Years", "Month", "Days"]}
                          defaultValue="Years"
                          searchable
                        />
                      </Box>
                      <Box w={"100%"}>
                        <Select
                          w={"100%"}
                          label="Gender"
                          data={["Male", "Female", "Others"]}
                          defaultValue={"Male"}
                          searchable
                        />
                      </Box>
                    </Flex>
                  </Box>
                </Box>
                <Box w={"25%"}>
                  <Textarea
                    w={"100%"}
                    autosize
                    placeholder={"Enter Patient Address"}
                    minRows={6}
                    maxRows={6}
                  />
                </Box>
              </Flex>
            </Box>
            {/*  */}
            <Box p={10} bg={"blue"}>
              <Flex align={"center"} justify={"space-between"} gap={80}>
                <Box w={"100%"}>
                  <Select
                    w={"100%"}
                    data={["Test", "Accessories", "Surgery"]}
                    placeholder="Test Name, accessories, surgery etc."
                    searchable
                  />
                </Box>

                <Box>
                  <Flex align={"center"} gap={30}>
                    <Box>
                      <Flex align={"center"} gap={0}>
                        <Button
                          disabled={count <= 0 ? true : false}
                          bg={"#fa5252"}
                          onClick={() => setCount(count - 1)}>
                          <IconMinus size={"xl"} stroke={5} />
                        </Button>
                        <Input
                          type={"number"}
                          value={count}
                          onChange={(e) => setCount(parseInt(e.target.value))}
                        />
                        <Button
                          disabled={count >= 100 ? true : false}
                          bg={"#fa5252"}
                          onClick={() => setCount(count + 1)}>
                          <IconPlus size={"xl"} stroke={5} />
                        </Button>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex align={"center"} gap={0}>
                        <Input type="text" />
                        <Button bg={"#fa5252"}>
                          <IconPlus size={"40px"} stroke={5} /> Add
                        </Button>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            {/*  */}
            <Box className={styles.blue_border_all} py={10}>
              <Flex justify={"space-between"} gap={20}>
                <Box w={"70%"}>
                  <Table border={"1px"}>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>Sl / No</Table.Th>
                        <Table.Th>Particular</Table.Th>
                        <Table.Th>Qnt</Table.Th>
                        <Table.Th>Unit</Table.Th>
                        <Table.Th>Amount</Table.Th>
                        <Table.Th>
                          <IconTrash />
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td></Table.Td>
                        <Table.Td>Sub Total TK. =</Table.Td>
                        <Table.Td></Table.Td>
                        <Table.Td>0</Table.Td>
                        <Table.Td></Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td></Table.Td>
                        <Table.Td>Discount TK. =</Table.Td>
                        <Table.Td></Table.Td>
                        <Table.Td>0</Table.Td>
                        <Table.Td></Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td></Table.Td>
                        <Table.Td>Grand Total TK. =</Table.Td>
                        <Table.Td></Table.Td>
                        <Table.Td>0</Table.Td>
                        <Table.Td></Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </Box>
                {/*  */}
                <Box w={"30%"} pr={10}>
                  <Box>
                    <Select
                      defaultValue={"Choose Marketing Executive"}
                      w={"100%"}
                      placeholder="Pick value"
                      data={[
                        "Choose Marketing Executive",
                        "Angular",
                        "Vue",
                        "Svelte",
                      ]}
                      searchable
                    />
                  </Box>
                  {/*  */}
                  <Box>
                    <Box mt={5}>
                      <Flex align={"center"} gap={10}>
                        <Select
                          defaultValue={"Choose Marketing Executive"}
                          w={"100%"}
                          placeholder="Pick value"
                          data={[
                            "Choose Marketing Executive",
                            "Angular",
                            "Vue",
                            "Svelte",
                          ]}
                          searchable
                        />
                        <Tooltip label="Show form">
                          <Button
                            bg={"#fa5252"}
                            onClick={() => setToggleForm(!toggleForm)}>
                            <IconReportMedical />
                          </Button>
                        </Tooltip>
                      </Flex>
                    </Box>
                    {/*  */}
                    <Box
                      display={toggleForm ? "block" : "none"}
                      className={styles.box_border}
                      mt={5}
                      p={5}>
                      <Box>
                        <Input
                          w={"100%"}
                          type="text"
                          placeholder="Enter Doctor Name"
                        />
                      </Box>
                      <Box mt={5}>
                        <Input
                          w={"100%"}
                          type="text"
                          placeholder="Enter Doctor Name"
                        />
                      </Box>
                      <Box mt={5}>
                        <Textarea
                          rows={2}
                          w={"100%"}
                          placeholder="Enter Doctor Signature"
                        />
                      </Box>
                      <Box mt={5}>
                        <Textarea
                          rows={4}
                          w={"100%"}
                          placeholder="Enter Doctor Signature"
                        />
                      </Box>
                      <Box mt={5}>
                        <Textarea
                          rows={4}
                          w={"100%"}
                          placeholder="Enter Doctor Signature"
                        />
                      </Box>
                    </Box>
                  </Box>
                  {/*  */}
                  <Box mt={5}>
                    <Box>
                      <Flex align={"center"} justify={"space-between"} gap={15}>
                        <Text fw={"bold"}>Discount Type</Text>
                        <Select
                          w={"60%"}
                          defaultValue={"Flat"}
                          data={["Flat", "Parcentage"]}
                        />
                      </Flex>
                      <Flex
                        align={"center"}
                        justify={"space-between"}
                        gap={15}
                        mt={5}>
                        <Text fw={"bold"}>Discount</Text>
                        <Input type="text" w={"60%"} placeholder="0" />
                      </Flex>
                      <Flex
                        align={"center"}
                        justify={"space-between"}
                        gap={15}
                        mt={5}>
                        <Select
                          w={"100%"}
                          defaultValue={"Flat"}
                          data={["Flat", "Parcentage"]}
                        />
                        <Input type="date" w={"100%"} />
                      </Flex>
                    </Box>
                  </Box>
                  {/*  */}
                  <Box>
                    <Box mt={5}>
                      <Flex align={"center"} gap={10}>
                        <Select
                          defaultValue={"Choose Marketing Executive"}
                          w={"100%"}
                          placeholder="Pick value"
                          data={[
                            "Choose Marketing Executive",
                            "Angular",
                            "Vue",
                            "Svelte",
                          ]}
                          searchable
                        />
                        <Tooltip label="Show form">
                          <Button
                            bg={"#fa5252"}
                            onClick={() => setToggleRefer(!toggleRefer)}>
                            <IconReportMedical />
                          </Button>
                        </Tooltip>
                      </Flex>
                    </Box>
                    {/*  */}
                    <Box
                      display={toggleRefer ? "block" : "none"}
                      className={styles.box_border}
                      mt={5}
                      p={5}>
                      <Box>
                        <Input
                          w={"100%"}
                          type="text"
                          placeholder="Enter Doctor Name"
                        />
                      </Box>
                      <Box mt={5}>
                        <Input
                          w={"100%"}
                          type="text"
                          placeholder="Enter Doctor Name"
                        />
                      </Box>
                      <Box mt={5}>
                        <Textarea
                          rows={4}
                          w={"100%"}
                          placeholder="Enter Doctor Signature"
                        />
                      </Box>
                    </Box>
                  </Box>
                  {/*  */}
                  <Box bg={"lightgray"} py={10} px={5}>
                    <Flex align={"center"} justify={"space-between"} gap={15}>
                      <Text fw={"bold"}>Receivable TK.</Text>
                      <Input placeholder="0" />
                      <Text fw={"bold"}>00</Text>
                    </Flex>
                  </Box>
                  {/*  */}
                </Box>
              </Flex>
            </Box>
            {/*  */}
            <Box bg={"blue"} p={10}>
              <Flex align={"center"} justify={"space-between"} gap={"50px"}>
                <Box w={"75%"}>
                  <Input w={"100%"} placeholder="Add Remark" />
                </Box>

                <Box w={"25%"}>
                  <Button w={"100%"} bg={"#fa5252"}>
                    <IconDeviceFloppy /> Save
                  </Button>
                </Box>
              </Flex>
            </Box>
            {/*  */}
          </Box>
        </form>
      </Drawer>

      <Tooltip label={t("NewInvoice")}>
        <Button bg={"#fa5252"} p={5} w={"100%"} onClick={open}>
          <IconCirclePlus size={"16px"} />
        </Button>
      </Tooltip>
    </>
  );
};

export default Invoice;
