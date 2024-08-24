import { IconChevronsRight, IconEye } from "@tabler/icons-react";
import DoctorCard from "../../DoctorCard";
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
      date: "09/27/2021",
      mode: "Cash",
      status: "Paid",
      doctorAddress: "Uttara, Dhaka-1230",
      doctorMobile: "01700-000099",
      doctorEmail: "hospital567@gmail.com",
      doctorWebsite: "www.web-hospital.com",
      staffId: "9002",
      department: "OT",
      name: "Sonia Bush",
      designation: "Doctor",
      earning: 500.0,
      deduction: 400.0,
      paymentMode: "Cash",
      basicSalary: 30000.0,
      tax: 10.0,
    },
    {
      payslip: "101",
      monthYear: "October - 2021",
      date: "10/20/2021",
      mode: "Cash",
      status: "Paid",
      doctorAddress: "Uttara, Dhaka-1230",
      doctorMobile: "01300-088099",
      doctorEmail: "rakib567@gmail.com",
      doctorWebsite: "www.hospital.rakib.com",
      staffId: "9003",
      department: "OT",
      name: "MD. Rakib Ahmed",
      designation: "Doctor",
      earning: "550.00",
      deduction: "440.00",
      paymentMode: "Cash",
      basicSalary: "32000.00",
      tax: "10.00",
    },
    {
      payslip: "102",
      monthYear: "October - 2021",
      date: "10/27/2021",
      mode: "Cash",
      status: "Paid",
      doctorAddress: "BNS-center, Dhaka-1230",
      doctorMobile: "01500-220559",
      doctorEmail: "akib778@gmail.com",
      doctorWebsite: "www.hospital.akib.com",
      staffId: "9005",
      department: "Labratories",
      name: "Akib Hossain",
      designation: "Lab Head",
      earning: "400.00",
      deduction: "350.00",
      paymentMode: "Cash",
      basicSalary: "25000.00",
      tax: "10.00",
    },
    {
      payslip: "103",
      monthYear: "November - 2021",
      date: "11/05/2021",
      mode: "Cash",
      status: "Paid",
      doctorAddress: "House-building, Dhaka-1230",
      doctorMobile: "01606-060699",
      doctorEmail: "sabina687@gmail.com",
      doctorWebsite: "www.hospital.sabina.com",
      staffId: "9004",
      department: "Nurse",
      name: "Sabina Akter",
      designation: "Nurse",
      earning: "250.00",
      deduction: "200.00",
      paymentMode: "Cash",
      basicSalary: "15000.00",
      tax: "10.00",
    },
    {
      payslip: "105",
      monthYear: "December - 2021",
      date: "12/12/2021",
      mode: "Cash",
      status: "Paid",
      doctorAddress: "Ajampur, Dhaka-1230",
      doctorMobile: "01902-112399",
      doctorEmail: "sabbir654@gmail.com",
      doctorWebsite: "www.hospital.sabbir.com",
      staffId: "9006",
      department: "OT",
      name: "Sabbir Hossain",
      designation: "Doctor",
      earning: "700.00",
      deduction: "500.00",
      paymentMode: "Cash",
      basicSalary: "38000.00",
      tax: "10.00",
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
                  <Table.Td fz={12}>{data?.monthYear}</Table.Td>
                  <Table.Td fz={12}>{data?.date}</Table.Td>
                  <Table.Td fz={12}>{data?.mode}</Table.Td>
                  <Table.Td fz={12}>{data?.status}</Table.Td>
                  <Table.Td fz={12}>{`${
                    parseInt(data?.basicSalary) +
                    (parseInt(data?.earning) - parseInt(data?.deduction)) -
                    ((parseInt(data?.basicSalary) +
                      parseInt(data?.earning - data?.deduction)) *
                      parseInt(data?.tax)) /
                      100
                  }`}</Table.Td>
                  <Table.Td fz={12}>
                    <ViewPayslipDetails
                      doctorAddress={data?.doctorAddress}
                      doctorMobile={data?.doctorMobile}
                      doctorEmail={data?.doctorEmail}
                      doctorWebsite={data?.doctorWebsite}
                      date={data?.date}
                      staffId={data?.staffId}
                      department={data?.department}
                      name={data?.name}
                      designation={data?.designation}
                      earning={data?.earning}
                      deduction={data?.deduction}
                      paymentMode={data?.paymentMode}
                      basicSalary={data?.basicSalary}
                      //
                      grossSalary={`${
                        parseInt(data?.basicSalary) +
                        parseInt(data?.earning - data?.deduction)
                      }`}
                      //
                      tax={`${
                        ((parseInt(data?.basicSalary) +
                          parseInt(data?.earning - data?.deduction)) *
                          parseInt(data?.tax)) /
                        100
                      } (${data?.tax}%)`}
                      //
                      netSalary={`${
                        parseInt(data?.basicSalary) +
                        (parseInt(data?.earning) - parseInt(data?.deduction)) -
                        ((parseInt(data?.basicSalary) +
                          parseInt(data?.earning - data?.deduction)) *
                          parseInt(data?.tax)) /
                          100
                      }`}
                    />
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
