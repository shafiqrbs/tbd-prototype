import { Box, Button, Flex, Text } from "@mantine/core";
import { IconTrashX } from "@tabler/icons-react";
import styles from "../../../../../../assets/css/BookingIndex.module.css";
import { useState } from "react";
import AddDoctor from "./doctor-timeline/AddDoctor";

const DoctorTimeline = () => {
  const documents = [
    {
      label: "Document Pending",
    },
    {
      label: "Document Pending",
    },
    {
      label: "Document Pending",
    },
    {
      label: "Document Pending",
    },
  ];

  const [pendingDocument, setPendingDocument] = useState(documents);
  const handleDelete = (index) => {
    const updatedCards = pendingDocument.filter((_, i) => i !== index);
    setPendingDocument(updatedCards);
  };

  return (
    <>
      <Box>
        <Box className={styles.timeline_circle_list}>
          <Flex align={"center"} justify={"space-between"} w={"100%"}>
            <Box bg={"#228BE6"} px={10} py={5}>
              <Text c={"white"} fw={"bold"}>
                10/12/2023
              </Text>
            </Box>

            <Box>
              <AddDoctor />
            </Box>
          </Flex>
        </Box>

        <Box>
          {pendingDocument.map((document, index) => {
            return (
              <Box key={index} className={styles.timeline_circle_list}>
                <Box bg={"#D7E8CD"} w={"100%"} mt={8}>
                  <Flex p={10} align={"center"} justify={"space-between"}>
                    <Text fw={"bold"}>{document?.label}</Text>
                    <Button
                      className={styles.delete_btn_style}
                      onClick={() => handleDelete(index)}>
                      <IconTrashX size={14} />
                    </Button>
                  </Flex>

                  <Box className={styles.border_top}>
                    <Box p={10}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Inventore magni culpa qui harum consectetur maxime
                      deserunt incidunt vero quod ipsum molestiae autem sapiente
                      impedit, nemo, unde tempora eum quis cupiditate!
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default DoctorTimeline;
