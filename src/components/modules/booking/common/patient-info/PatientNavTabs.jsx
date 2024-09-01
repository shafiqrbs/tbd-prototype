import { Button, Flex, ScrollArea, Tabs, Text, rem } from "@mantine/core";
import {
  IconActivity,
  IconCurrencyDollar,
  IconDeviceHeartMonitor,
  IconEmergencyBed,
  IconReport,
  IconStethoscope,
} from "@tabler/icons-react";
import styles from "../../../../../assets/css/BookingIndex.module.css";
import { useTranslation } from "react-i18next";
import BasicInfo from "./tab-panes/BasicInfo";
import MedicalHistory from "./tab-panes/MedicalHistory";
import IpdHistory from "./tab-panes/IPDHistory";
import OpdHistory from "./tab-panes/OPDHistory";
import Transaction from "./tab-panes/Transaction";
import Emr from "./tab-panes/EMR";
import ActivityLog from "./tab-panes/ActivityLog";
import { IconUserSquare } from "@tabler/icons-react";

const PatientNavTabs = ({ formEdit }) => {
  const { t, i18n } = useTranslation();

  const tabList = [
    {
      value: "basic",
      text: "Basic",
      icon: (
        <IconUserSquare
          color={"#FA5252"}
          stroke={2.5}
          className={styles.tab_icon}
        />
      ),
    },
    {
      value: "medical_history",
      text: "MedicalHistory",
      icon: <IconDeviceHeartMonitor color={"#FA5252"} stroke={2.5} />,
    },
    {
      value: "ipd_history",
      text: "IPDHistory",
      icon: <IconEmergencyBed color={"#FA5252"} stroke={2.5} />,
    },
    {
      value: "opd_history",
      text: "OPDHistory",
      icon: <IconStethoscope color={"#FA5252"} stroke={2.5} />,
    },
    {
      value: "transaction",
      text: "Transaction",
      icon: <IconCurrencyDollar color={"#FA5252"} stroke={2.5} />,
    },
    {
      value: "emr",
      text: "EMR",
      icon: <IconReport color="#fa5252" stroke={2.5} />,
    },
    {
      value: "activity_log",
      text: "ActivityLog",
      icon: <IconActivity color="#FA5252" stroke={2.5} />,
    },
  ];

  const tabPanel = [
    {
      id: 1,
      value: "basic",
      tabComponent: <BasicInfo formEdit={formEdit} />,
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

  const print = () => {
    window.print();
  };
  return (
    <>
      <Tabs defaultValue={tabPanel[0].value}>
        <Tabs.List grow className={`${styles.tab_icon}`}>
          {tabList.map(({ index, value, text, icon }) => {
            return (
              <Tabs.Tab
                key={index}
                value={value}
                leftSection={icon}
                color="#FA5252">
                <Text>{t(text)}</Text>
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
          <Button c={"#fff"} bg={"blue"} onClick={print}>
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
