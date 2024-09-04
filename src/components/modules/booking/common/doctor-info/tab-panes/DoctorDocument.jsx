import { useState } from "react";
import { Box, Button, Flex, Grid, Text } from "@mantine/core";
import styles from "../../../../../../assets/css/BookingIndex.module.css";
import { IconFileInfo, IconDownload, IconX } from "@tabler/icons-react";
import AddDocument from "./doctor-document/AddDocument";

const DoctorDocument = () => {
  const documentCardArr = [
    { title: "Offer Letter" },
    { title: "Joining Letter" },
    { title: "Promotion Letter" },
    { title: "Letter" },
  ];
  const [documentCards, setDocumentCards] = useState(documentCardArr);

  const handleDelete = (index) => {
    const updatedCards = documentCards.filter((_, i) => i !== index);
    setDocumentCards(updatedCards);
  };

  return (
    <>
      <Box>
        <Box pb={15} ta={"right"}>
          <AddDocument />
        </Box>

        <Grid>
          {documentCards.map((data, index) => (
            <Grid.Col span={3} key={index}>
              <Box
                className={styles.box_border}
                p={10}
                w={"100%"}
                bg={"#D7E8CD"}>
                <Flex align={"center"} justify={"space-between"} gap={10}>
                  <Box>
                    <Text fw={"bold"} fz={"h5"}>
                      {data?.title}
                    </Text>
                    <Box>
                      <Flex align={"center"} gap={5}>
                        <Button className={styles.document_card_button} px={6}>
                          <IconDownload size={12} />
                        </Button>
                        <Button
                          className={styles.document_card_button}
                          px={6}
                          onClick={() => handleDelete(index)}>
                          <IconX size={12} />
                        </Button>
                      </Flex>
                    </Box>
                  </Box>

                  <Box>
                    <IconFileInfo size={30} />
                  </Box>
                </Flex>
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default DoctorDocument;
