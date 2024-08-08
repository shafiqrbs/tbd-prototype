import { Button, Flex, ScrollArea, Tabs, rem } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import styles from "../../../../../assets/css/BookingIndex.module.css";
import BasicInfo from "./tab-panes/BasicInfo";
import FormTab from "./tab-panes/FormTab";
import { useTranslation } from "react-i18next";

const ProfileNavTabs = () => {
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
      value: "form",
      text: "Form",
      icon: <IconPhoto />,
    },
    {
      value: "doctor_info",
      text: "Doctor info",
      icon: <IconPhoto />,
    },
    {
      value: "gallery",
      text: "Gallery",
      icon: <IconPhoto />,
    },
    {
      value: "edit",
      text: "Edit",
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
      value: "form",
      tabComponent: <FormTab />,
    },
    {
      id: 3,
      value: "doctor_info",
      tabComponent: <BasicInfo services={myService} />,
    },
    {
      id: 4,
      value: "gallery",
      tabComponent: "Gallery",
    },
    {
      id: 5,
      value: "edit",
      tabComponent: "Edit",
    },
  ];
  return (
    <>
      <Tabs defaultValue="basic">
        <Tabs.List grow className={styles.tab_icon}>
          {tabList.map(({ index, value, text, icon }) => {
            return (
              <Tabs.Tab key={index} value={value} leftSection={icon}>
                {text}
              </Tabs.Tab>
            );
          })}
        </Tabs.List>

        <ScrollArea
          h={"78vh"}
          scrollbarSize={"0px"}
          className={styles.profile_tabpanes}>
          {tabPanel.map((data) => {
            return (
              <Tabs.Panel key={data.id} value={data?.value}>
                {data?.tabComponent}
              </Tabs.Panel>
            );
          })}
        </ScrollArea>
      </Tabs>

      <footer className={`${styles.profile_footer}`}>
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

export default ProfileNavTabs;
