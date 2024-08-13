import { Box, Button, Drawer, Flex, Text, Tooltip } from "@mantine/core";
import { IconChecks, IconEye } from "@tabler/icons-react";
import styles from "../../../../../../../assets/css/BookingIndex.module.css";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const TransactionDetails = ({
  money,
  fromNumber,
  toNumber,
  fromName,
  toName,
}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [printPreview, setPrintPreview] = useState(false);

  /* Drawer for show transaction details start */
  const transactionDetails = [
    {
      label: "Transaction Status",
      text: "Successful",
    },
    {
      label: "Transaction Type",
      text: "Cash In",
    },
    {
      label: "Date",
      text: "08-05-2024",
    },
    {
      label: "Time",
      text: "06:14:26 PM",
    },
    {
      label: "Transaction ID",
      text: "T9164XYT",
    },
  ];
  /* Drawer for show transaction details end */
  return (
    <>
      <Box>
        <Tooltip label="Show">
          <Button px={3} bg={"#40C057"} onClick={open}>
            <IconEye size={18} stroke={2.5} />
          </Button>
        </Tooltip>

        {/* Transaction details Drawer start */}
        <Drawer
          size={printPreview ? "80%" : "30%"}
          opened={opened}
          onClose={close}
          title="Transaction Details"
          transitionProps={{
            transition: "slide-right",
            duration: 500,
            timingFunction: "linear",
          }}
          overlayProps={{
            backgroundOpacity: 0.7,
          }}>
          <Flex gap={"30px"}>
            {/* transaction details start */}
            <Box w={printPreview ? "30%" : "100%"}>
              <Box ta={"center"} mt={40}>
                <Box
                  className={styles.check_mark_style}
                  display={"inline-flex"}>
                  <IconChecks size={"40px"} color={"white"} />
                </Box>
              </Box>

              <Box mt={15}>
                <Box>
                  <Flex align={"center"} justify={"center"} gap={8}>
                    <Text fw={"bold"} fz={30}>
                      {money}
                    </Text>
                    <Text fz={18} fw={"bold"}>
                      Taka
                    </Text>
                  </Flex>
                </Box>
                <Text ta={"center"} fz={14}>
                  Cash In Completed!
                </Text>
              </Box>

              <Box className={styles.transaction_form_to}>
                <Flex>
                  <Box
                    px={10}
                    py={15}
                    w={"50%"}
                    className={styles.border_right}>
                    <Text c={"gray"} td={"underline"}>
                      From
                    </Text>
                    <Text fw={"bold"}>{fromNumber}</Text>
                    <Text c={"gray"}>{fromName}</Text>
                  </Box>
                  <Box
                    px={10}
                    py={15}
                    w={"50%"}
                    className={styles.border_right}>
                    <Text c={"gray"} td={"underline"}>
                      To
                    </Text>
                    <Text fw={"bold"}>{toNumber}</Text>
                    <Text c={"gray"}>{toName}</Text>
                  </Box>
                </Flex>
              </Box>

              <Box
                className={styles.transaction_form_to}
                p={"15px 10px 0 10px"}>
                {transactionDetails?.map((data) => {
                  return (
                    <Flex
                      align={"flex-start"}
                      justify={"space-between"}
                      mb={10}
                      className={styles.border_b}>
                      <Box>
                        <Text c={"gray"}>{data?.label}</Text>
                      </Box>
                      <Box>
                        <Text fw={"bold"}>{data?.text}</Text>
                      </Box>
                    </Flex>
                  );
                })}
              </Box>

              <Box w={"100%"}>
                <Box>
                  <Flex gap={10} mt={30}>
                    <Box w={"100%"}>
                      <Button bg={"#40C057"} w={"100%"} h={"45px"}>
                        Share
                      </Button>
                    </Box>
                    <Box w={"100%"}>
                      <Button
                        onClick={() => setPrintPreview(!printPreview)}
                        bg={"#228BE6"}
                        w={"100%"}
                        h={"45px"}>
                        Print
                      </Button>
                    </Box>
                    <Box w={"100%"}>
                      <Button bg={"#FA5252"} w={"100%"} h={"45px"}>
                        Download
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
            {/* transaction details end */}

            {/* vertical line start */}
            <Box
              display={printPreview ? "block" : "none"}
              w={1}
              h={"85vh"}
              bg={"gray"}></Box>
            {/* vertical line end */}

            {/* Invoice Print view start */}
            <Box w={"70%"} display={printPreview ? "block" : "none"}>
              <Box
                className={styles.print_preview_border}
                w={"60%"}
                h={"100%"}
                m={"0 auto"}>
                <Box>
                  <Box ta={"center"}>
                    <Box
                      className={styles.check_mark_style}
                      display={"inline-flex"}>
                      <IconChecks size={"40px"} color={"white"} />
                    </Box>
                  </Box>

                  <Box mt={15}>
                    <Box>
                      <Flex align={"center"} justify={"center"} gap={8}>
                        <Text fw={"bold"} fz={30}>
                          {money}
                        </Text>
                        <Text fz={18} fw={"bold"}>
                          Taka
                        </Text>
                      </Flex>
                    </Box>
                    <Text ta={"center"} fz={14}>
                      Cash In Completed!
                    </Text>
                  </Box>

                  <Box className={styles.transaction_form_to}>
                    <Flex>
                      <Box
                        px={10}
                        py={15}
                        w={"50%"}
                        className={styles.border_right}>
                        <Text c={"gray"}>From</Text>
                        <Text fw={"bold"}>{fromNumber}</Text>
                        <Text c={"gray"}>{fromName}</Text>
                      </Box>
                      <Box
                        px={10}
                        py={15}
                        w={"50%"}
                        className={styles.border_right}>
                        <Text c={"gray"}>To</Text>
                        <Text fw={"bold"}>{toNumber}</Text>
                        <Text c={"gray"}>{toName}</Text>
                      </Box>
                    </Flex>
                  </Box>

                  <Box
                    className={styles.transaction_form_to}
                    p={"15px 10px 0 10px"}>
                    {transactionDetails?.map((data) => {
                      return (
                        <Flex
                          align={"flex-start"}
                          justify={"space-between"}
                          mb={10}>
                          <Box>
                            <Text c={"gray"}>{data?.label}</Text>
                          </Box>
                          <Box>
                            <Text fw={"bold"}>{data?.text}</Text>
                          </Box>
                        </Flex>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* Invoice Print view end */}
          </Flex>
        </Drawer>
        {/* Transaction details Drawer end */}
      </Box>
    </>
  );
};

export default TransactionDetails;
