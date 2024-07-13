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

import styles from "../../../../assets/css/BookingOTIndex.module.css";

export default function BookingDetailSection() {
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
              <Link
                className={styles.circle_link}
                to={"/booking/booking-entry"}>
                DB
              </Link>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="Operation Theatre">
              <Link className={styles.circle_link} to={"/booking/booking-OT"}>
                OT
              </Link>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="IDP">
              <Link className={styles.circle_link} to={"/booking/booking-IPD"}>
                IPD
              </Link>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="Visit">
              <Link
                className={styles.circle_link}
                to={"/booking/booking-visit"}>
                Visit
              </Link>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip label="UDP">
              <Link className={styles.circle_link} to={"/booking/booking-UDP"}>
                UDP
              </Link>
            </Tooltip>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
