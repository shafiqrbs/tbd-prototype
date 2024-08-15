import { IconChevronsRight, IconEye } from "@tabler/icons-react";
import DoctorCard from "../../ManyTypeCard";
import { Box, Grid, Input, NavLink, Table, Text } from "@mantine/core";
import { IconCashBanknote } from "@tabler/icons-react";
import styles from "../../../../../../assets/css/BookingIndex.module.css";
import { useState } from "react";
import ViewPayslipDetails from "./doctor-payroll/ViewPayslipDetails";

const DoctorPayroll = () => {
  const [active, setActive] = useState(0);
  const payrollCardData = [
    {
      align: "center",
      title: "Total Net Salary Paid",
      subTitle: "BDT 200345",
      subTitle2: "",
      icon: <IconCashBanknote size={36} />,
    },
    {
      align: "center",
      title: "Total Gross Salary",
      subTitle: "BDT 200388",
      subTitle2: "",
      icon: <IconCashBanknote size={36} />,
    },
    {
      align: "center",
      title: "Total Earning",
      subTitle: "BDT 200377",
      subTitle2: "",
      icon: <IconCashBanknote size={36} />,
    },
    {
      align: "center",
      title: "Total Deduction",
      subTitle: "BDT 220345",
      subTitle2: "",
      icon: <IconCashBanknote size={36} />,
    },
  ];
  const payrollHeaderData = [
    "Payslip #",
    "Month-Year",
    "Date",
    "Mode",
    "Status",
    "Net Salary (BDT)",
    "Action",
  ];
  const payrollData = [
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
    {
      payslip: "100",
      monthYear: "September - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      netSalary: "27090.00",
      action: <IconEye size={16} />,
    },
  ];

  return (
    <>
      <Box>
        <Box className={styles.box_border}>
          <Grid w={"100%"} p={10}>
            {payrollCardData.map((payroll, index) => {
              return (
                <Grid.Col span={3} key={index}>
                  <Box w={"100%"}>
                    <DoctorCard
                      align={payroll?.align}
                      title={payroll?.title}
                      subTitle={payroll?.subTitle}
                      subTitle2={payroll?.subTitle2}
                      icon={payroll?.icon}
                    />
                  </Box>
                </Grid.Col>
              );
            })}
          </Grid>

          <Box>
            <Box w={"100%"} my={5}>
              <Input type="text" placeholder="Search here" w={"100%"} />
            </Box>
          </Box>
        </Box>

        {/* table data start */}
        <Box mt={5}>
          <Table
            stickyHeader
            stickyHeaderOffset={0}
            className={`${styles.box_border}`}>
            <Table.Thead>
              <Table.Tr
                className={`${styles.table_header} ${styles.box_border}`}>
                {payrollHeaderData?.map((data, index) => (
                  <Table.Th key={index}>
                    <Text w={"max-content"} fw={"bold"} fz={14}>
                      {data}
                    </Text>
                  </Table.Th>
                ))}
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {payrollData?.map((data, index) => (
                <Table.Tr key={index} className={`${styles.table_row}`}>
                  <Table.Td>
                    <NavLink
                      fz={12}
                      py={7}
                      px={0}
                      className={`${styles.patient_link_hover}`}
                      label={data?.payslip}
                      href={"#"}
                      active={index === active}
                      onClick={() => setActive(index)}
                      rightSection={<IconChevronsRight size="1rem" />}
                    />
                  </Table.Td>
                  <Table.Td fz={12}>{data?.payslip}</Table.Td>
                  <Table.Td fz={12}>{data?.monthYear}</Table.Td>
                  <Table.Td fz={12}>{data?.mode}</Table.Td>
                  <Table.Td fz={12}>{data?.status}</Table.Td>
                  <Table.Td fz={12}>{data?.netSalary}</Table.Td>
                  <Table.Td fz={12}>
                    <ViewPayslipDetails buttonText={data?.action} />
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>

            <Table.Tfoot>
              <Table.Tr c={"black"} fw={"bold"} fz={"h5"}>
                <Table.Td>
                  Total: {payrollData.length} / {payrollData.length}
                </Table.Td>
              </Table.Tr>
            </Table.Tfoot>
          </Table>
        </Box>
        {/* table data end */}
      </Box>
    </>
  );
};

export default DoctorPayroll;
