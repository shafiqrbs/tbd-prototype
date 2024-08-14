import { Button, Flex, ScrollArea, Tabs, rem } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import styles from "../../../../../assets/css/BookingIndex.module.css";
import FormTab from "./tab-panes/MedicalHistory";
import { useTranslation } from "react-i18next";
import BasicInfo from "./tab-panes/BasicInfo";
import MedicalHistory from "./tab-panes/MedicalHistory";
import IpdHistory from "./tab-panes/IPDHistory";
import OpdHistory from "./tab-panes/OPDHistory";
import Transaction from "./tab-panes/Transaction";
import Emr from "./tab-panes/EMR";
import ActivityLog from "./tab-panes/ActivityLog";

const PatientNavTabs = () => {
  const { t, i18n } = useTranslation();
  const myService = [
    { id: 1, serviceName: "Cardiologist" },
    { id: 2, serviceName: "Neurologist" },
    { id: 3, serviceName: "FamilyMedicine" },
    { id: 4, serviceName: "Ophthalmology" },
    { id: 5, serviceName: "Psychiatrist" },
    { id: 6, serviceName: "Oncologist" },
    { id: 7, serviceName: "Pediatrician" },
    { id: 8, serviceName: "ObstetricsAndGynaecology" },
    { id: 9, serviceName: "Dermatologist" },
    { id: 10, serviceName: "Radiologist" },
    { id: 11, serviceName: "EmergencyPhysician" },
    { id: 12, serviceName: "Surgeon" },
    { id: 13, serviceName: "Anesthesiologist" },
    { id: 14, serviceName: "InternalMedicine" },
    { id: 15, serviceName: "InfectiousDiseaseSpecialist" },
  ];

  const tabList = [
    {
      value: "basic",
      text: "Basic",
      icon: <IconPhoto />,
    },
    {
      value: "medical_history",
      text: "Medical History",
      icon: <IconPhoto />,
    },
    {
      value: "ipd_history",
      text: "IPD History",
      icon: <IconPhoto />,
    },
    {
      value: "opd_history",
      text: "OPD History",
      icon: <IconPhoto />,
    },
    {
      value: "transaction",
      text: "Transaction",
      icon: <IconPhoto />,
    },
    {
      value: "emr",
      text: "EMR",
      icon: <IconPhoto />,
    },
    {
      value: "activity_log",
      text: "Activity Log",
      icon: <IconPhoto />,
    },
  ];

  const tabPanel = [
    {
      id: 1,
      value: "basic",
      tabComponent: <BasicInfo services={myService} />,
    },
    {
      id: 2,
      value: "medical_history",
      tabComponent: <MedicalHistory />,
    },
    {
      id: 3,
      value: "ipd_history",
      tabComponent: <IpdHistory />,
    },
    {
      id: 4,
      value: "opd_history",
      tabComponent: <OpdHistory />,
    },
    {
      id: 5,
      value: "transaction",
      tabComponent: <Transaction />,
    },
    {
      id: 4,
      value: "emr",
      tabComponent: <Emr />,
    },
    {
      id: 5,
      value: "activity_log",
      tabComponent: <ActivityLog />,
    },
  ];
  return (
    <>
      <Tabs defaultValue={tabPanel[0].value}>
        <Tabs.List grow className={`${styles.tab_icon}`}>
          {tabList.map(({ index, value, text, icon }) => {
            return (
              <Tabs.Tab key={index} value={value} leftSection={icon}>
                {text}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>

        <ScrollArea
          h={"77vh"}
          scrollbarSize={"0px"}
          className={`${styles.profile_tabpanes} ${styles.box_border}`}>
          {tabPanel.map((data) => {
            return (
              <Tabs.Panel key={data.id} value={data?.value}>
                {data?.tabComponent}
              </Tabs.Panel>
            );
          })}
        </ScrollArea>
      </Tabs>

      <footer className={`${styles.profile_footer} ${styles.box_border}`}>
        <Flex
          align={"center"}
          justify={"flex-end"}
          gap={10}
          px={"15px"}
          py={15}>
          <Button c={"#fff"} bg={"#40C057"}>
            {t("Save")}
          </Button>
          <Button c={"#fff"} bg={"blue"}>
            {t("Print")}
          </Button>
          <Button c={"#fff"} bg={"#FA5252"}>
            {t("Download")}
          </Button>
        </Flex>
      </footer>
    </>
  );
};

export default PatientNavTabs;
