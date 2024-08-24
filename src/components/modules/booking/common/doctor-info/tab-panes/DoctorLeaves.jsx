import {
  IconBaselineDensityMedium,
  IconChevronsRight,
  IconPlaneTilt,
} from "@tabler/icons-react";
import DoctorCard from "../../DoctorCard";
import { Box, Grid, Input, NavLink, Table, Text } from "@mantine/core";
import styles from "../../../../../../assets/css/BookingIndex.module.css";
import { useState } from "react";
import LeavesDetails from "./doctor-leaves/LeavesDetails";

const DoctorLeaves = () => {
  const [active, setActive] = useState(0);
  const payrollCardData = [
    {
      align: "center",
      title: "Casual Leave (5)",
      subTitle: "Used: 0",
      subTitle2: "Availbale: 5",
      icon: <IconPlaneTilt size={36} />,
    },
    {
      align: "center",
      title: "Privilege Leave (15)",
      subTitle: "Used: 4",
      subTitle2: "Availbale: 11",
      icon: <IconPlaneTilt size={36} />,
    },
    {
      align: "center",
      title: "Sick Leave (10)",
      subTitle: "Used: 0",
      subTitle2: "Availbale: 10",
      icon: <IconPlaneTilt size={36} />,
    },
    {
      align: "center",
      title: "Maternity Leave (10)",
      subTitle: "Used: 10",
      subTitle2: "Availbale: 0",
      icon: <IconPlaneTilt size={36} />,
    },
    {
      align: "center",
      title: "Paternity Leave. (15)",
      subTitle: "Used: 0",
      subTitle2: "Availbale: 15",
      icon: <IconPlaneTilt size={36} />,
    },
    {
      align: "center",
      title: "Fever Leave (10)",
      subTitle: "Used: 0",
      subTitle2: "Availbale: 10",
      icon: <IconPlaneTilt size={36} />,
    },
  ];
  const payrollHeaderData = [
    "Leave Type",
    "Leave Date",
    "Days",
    "Apply Date",
    "Status",
    "Action",
  ];
  const payrollData = [
    {
      staffId: "9001",
      name: "MD Yasin",
      leaveType: "Sick Leave",
      leaveDate: "08/20/2024 - 08/23/2024",
      days: "4",
      applyDate: "08/20/2024",
      status: "Pending",
    },
    {
      staffId: "9002",
      name: "Akib Ahmed",
      leaveType: "Sick Leave",
      leaveDate: "08/20/2024 - 08/23/2024",
      days: "4",
      applyDate: "08/20/2024",
      status: "Pending",
    },
    {
      staffId: "9003",
      name: "MD Jehad",
      leaveType: "Sick Leave",
      leaveDate: "08/20/2024 - 08/23/2024",
      days: "4",
      applyDate: "08/20/2024",
      status: "Disapproved",
    },
    {
      staffId: "9004",
      name: "Nayeem Forkan",
      leaveType: "Sick Leave",
      leaveDate: "08/20/2024 - 08/23/2024",
      days: "4",
      applyDate: "08/20/2024",
      status: "Pending",
    },
    {
      staffId: "9005",
      name: "Sazzad Hossain",
      leaveType: "Sick Leave",
      leaveDate: "08/20/2024 - 08/23/2024",
      days: "4",
      applyDate: "08/20/2024",
      status: "Approved",
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
                      label={data?.leaveType}
                      href={"#"}
                      active={index === active}
                      onClick={() => setActive(index)}
                      rightSection={<IconChevronsRight size="1rem" />}
                    />
                  </Table.Td>
                  <Table.Td fz={12}>{data?.leaveDate}</Table.Td>
                  <Table.Td fz={12}>{data?.days}</Table.Td>
                  <Table.Td fz={12}>{data?.applyDate}</Table.Td>
                  <Table.Td fz={12}>{data?.status}</Table.Td>
                  <Table.Td fz={12}>
                    <LeavesDetails
                      name={data?.name}
                      leaveDate={data?.leaveDate}
                      status={data?.status}
                      reason={data?.reason ? data.reason : "It's personal."}
                      staffId={data?.staffId}
                      leaveType={data?.leaveType}
                      applyDate={data?.applyDate}
                      note={data?.note ? data?.note : "No notes for you."}
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

export default DoctorLeaves;
