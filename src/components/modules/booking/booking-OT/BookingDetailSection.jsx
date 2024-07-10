import {
  Grid,
  Box,
  Button,
  Stack,
  Center,
  Tooltip,
  Title,
  Text,
  Container,
  Flex,
} from "@mantine/core";
import {
  IconCreditCardPay,
  IconCreditCardRefund,
  IconDeviceFloppy,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";

import styles from "../../../../assets/css/BookingIndex.module.css";

export default function BookingDetailSection(props) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { isOnline, mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 200;

  return (
    <Box>
      <Box p={"xs"} pt={"0"} className={"borderRadiusAll"}>
        <Box
          pl={"xs"}
          pb={"8"}
          pr={8}
          pt={"8"}
          mb={"xs"}
          mt={"xs"}
          className={"boxBackground borderRadiusAll"}>
          <Grid>
            <Grid.Col span={9}>
              <Title order={6} pl={"6"}>
                {t("BookingMode")}
              </Title>
            </Grid.Col>
          </Grid>
        </Box>
        <Stack
          mt={"xs"}
          className="borderRadiusAll"
          h={height + 56}
          bg="var(--mantine-color-body)"
          align="center">
          <Box mt={"lg"}>
            <Tooltip label="Dashboard">
              <Link className={styles.circle_link} to={"/"}>
                DB
              </Link>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="Operation Theatre">
              <Link className={styles.circle_link} to={"/"}>
                OT
              </Link>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="IDP">
              <Link className={styles.circle_link} to={"/"}>
                IPD
              </Link>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="Visit">
              <Link className={styles.circle_link} to={"/"}>
                Visit
              </Link>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="UDP">
              <Link className={styles.circle_link} to={"/"}>
                UDP
              </Link>
            </Tooltip>
          </Box>
          {/* <Center mt={"sm"} pt={"sm"}>
            <Container fluid mb={"8"}>
              <Flex justify={"center"} align={"center"} direction={"column"}>
                <Tooltip
                  label={t("AltTextNew")}
                  px={16}
                  py={2}
                  withArrow
                  position={"left"}
                  c={"white"}
                  bg={`red.5`}
                  transitionProps={{
                    transition: "pop-bottom-left",
                    duration: 500,
                  }}>
                  <Button
                    size="md"
                    pl={"12"}
                    pr={"12"}
                    mb={"xs"}
                    variant={"light"}
                    color={`red.5`}
                    radius="xl"
                    onClick={(e) => {
                      props.inputType === "select"
                        ? document.getElementById(props.Name).click()
                        : document.getElementById(props.Name).focus();
                    }}>
                    <Flex direction={"column"} align={"center"}>
                      <IconCreditCardPay size={16} />
                    </Flex>
                  </Button>
                </Tooltip>
                <Flex
                  direction={"column"}
                  align={"center"}
                  fz={"12"}
                  c={"gray.5"}>
                  {t("CustomerBooking")}
                </Flex>
              </Flex>
            </Container>
          </Center>
          <Center>
            <Container fluid mb={"8"}>
              <Flex justify={"center"} align={"center"} direction={"column"}>
                <Tooltip
                  label={t("AltTextReset")}
                  px={16}
                  py={2}
                  withArrow
                  position={"left"}
                  c={"white"}
                  bg={`red.5`}
                  transitionProps={{
                    transition: "pop-bottom-left",
                    duration: 500,
                  }}>
                  <Button
                    size="md"
                    pl={"12"}
                    pr={"12"}
                    mb={"xs"}
                    variant={"light"}
                    color={`red`}
                    radius="xl"
                    onClick={(e) => {
                      props.form.reset();
                    }}>
                    <Flex direction={`column`} align={"center"}>
                      <IconCreditCardRefund size={16} />
                    </Flex>
                  </Button>
                </Tooltip>
                <Flex
                  direction={`column`}
                  align={"center"}
                  fz={"12"}
                  c={"gray.5"}>
                  {t("VendorBooking")}
                </Flex>
              </Flex>
            </Container>
          </Center>
          <Center>
            <Container fluid mb={"8"}>
              <Flex direction={"column"} align={"center"} justify={"center"}>
                <Tooltip
                  label={t("AltTextSave")}
                  px={16}
                  py={2}
                  withArrow
                  position={"left"}
                  c={"white"}
                  bg={`red.5`}
                  transitionProps={{
                    transition: "pop-bottom-left",
                    duration: 500,
                  }}>
                  <Button
                    size="md"
                    pl={"12"}
                    pr={"12"}
                    mb={"xs"}
                    variant={"filled"}
                    color={`red`}
                    radius="xl"
                    onClick={(e) => {
                      document.getElementById(props.FormSubmit).click();
                    }}>
                    <Flex direction={`column`} align={"center"}>
                      <IconDeviceFloppy size={16} />
                    </Flex>
                  </Button>
                </Tooltip>
                <Flex
                  direction={`column`}
                  align={"center"}
                  fz={"12"}
                  c={"gray.5"}>
                  {t("ContraBooking")}
                </Flex>
              </Flex>
            </Container>
          </Center>
          <Center>
            <Container fluid mb={"8"}>
              <Flex justify={"center"} align={"center"} direction={"column"}>
                <Tooltip
                  label={t("AltTextSave")}
                  px={16}
                  py={2}
                  withArrow
                  position={"left"}
                  c={"white"}
                  bg={`red.5`}
                  transitionProps={{
                    transition: "pop-bottom-left",
                    duration: 500,
                  }}>
                  <Button
                    size="md"
                    pl={"12"}
                    pr={"12"}
                    mb={"xs"}
                    variant={"filled"}
                    color={`red`}
                    radius="xl"
                    onClick={(e) => {
                      document.getElementById(props.FormSubmit).click();
                    }}>
                    <Flex direction={`column`} align={"center"}>
                      <IconDeviceFloppy size={16} />
                    </Flex>
                  </Button>
                </Tooltip>
                <Flex
                  direction={`column`}
                  align={"center"}
                  fz={"12"}
                  c={"gray.5"}>
                  {t("DebitNote")}
                </Flex>
              </Flex>
            </Container>
          </Center>
          <Center>
            <Container fluid mb={"8"}>
              <Flex justify={"center"} align={"center"} direction={"column"}>
                <Tooltip
                  label={t("AltTextSave")}
                  px={16}
                  py={2}
                  withArrow
                  position={"left"}
                  c={"white"}
                  bg={`red.5`}
                  transitionProps={{
                    transition: "pop-bottom-left",
                    duration: 500,
                  }}>
                  <Button
                    size="md"
                    pl={"12"}
                    pr={"12"}
                    mb={"xs"}
                    variant={"filled"}
                    color={`red`}
                    radius="xl"
                    onClick={(e) => {
                      document.getElementById(props.FormSubmit).click();
                    }}>
                    <Flex direction={`column`} align={"center"}>
                      <IconDeviceFloppy size={16} />
                    </Flex>
                  </Button>
                </Tooltip>
                <Flex
                  direction={`column`}
                  align={"center"}
                  fz={"12"}
                  c={"gray.5"}>
                  {t("CreditNote")}
                </Flex>
              </Flex>
            </Container>
          </Center> */}
        </Stack>
      </Box>
    </Box>
  );
}
