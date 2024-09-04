import { useState } from "react";
import { Accordion, Box, Button, Flex, Text } from "@mantine/core";
import { IconTrashX } from "@tabler/icons-react";
import styles from "../../../../../../assets/css/BookingIndex.module.css";

const DoctorTimeline = () => {
  const documents = [
    {
      label: "Document Pending",
      time: "10:00 AM",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ips again is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore mipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ips",
    },
    {
      label: "Document Pending",
      time: "11:35 AM",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore",
    },
    {
      label: "Document Pending",
      time: "01:20 PM",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore",
    },
    {
      label: "Document Pending",
      time: "04:04 PM",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is LoreLorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore",
    },
    {
      label: "Document Pending",
      time: "04:04 PM",
      description:
        "Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore Lorem Ipsum is Lorem Ipsum is Lorem Ipsum is Lore",
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
          </Flex>
        </Box>

        <Box>
          {pendingDocument.map((document, index) => {
            return (
              <>
                {/* <Box key={index} className={styles.timeline_circle_list}>
                  <Box bg={"#D7E8CD"} w={"100%"} mt={8}>
                    <Flex
                      px={10}
                      py={5}
                      align={"center"}
                      justify={"space-between"}>
                      <Text fw={"bold"}>{document?.label}</Text>
                      <Button
                        className={styles.delete_btn_style}
                        onClick={() => handleDelete(index)}>
                        <IconTrashX size={14} />
                      </Button>
                    </Flex>

                    <Box>
                      <Box p={10}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Inventore magni culpa qui harum consectetur maxime
                        deserunt incidunt vero quod ipsum molestiae autem
                        sapiente impedit, nemo, unde tempora eum quis
                        cupiditate!
                      </Box>
                    </Box>
                    <Text fw={"bold"} px={10} mb={5} ta={"right"}>
                      Time: {document?.time ? document.time : "--:-- --"}
                    </Text>
                  </Box>
                </Box> */}

                <Accordion
                  multiple={true}
                  key={index}
                  className={styles.timeline_circle_list}>
                  <Accordion.Item
                    className={`${styles.box_border}`}
                    value={document.label}
                    bg={"#D7E8CD"}
                    w={"100%"}
                    mt={8}>
                    <Accordion.Control>{document.label}</Accordion.Control>
                    <Accordion.Panel className={styles.border_top}>
                      {document.description}
                    </Accordion.Panel>

                    <Accordion.Panel>
                      <Flex align={"center"} justify={"space-between"}>
                        <Text fw={"bold"}>{document?.time}</Text>
                        <Button
                          className={styles.delete_btn_style}
                          onClick={() => handleDelete(index)}>
                          <IconTrashX size={14} />
                        </Button>
                      </Flex>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default DoctorTimeline;
