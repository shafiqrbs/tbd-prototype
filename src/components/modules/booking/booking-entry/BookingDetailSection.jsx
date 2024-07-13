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
  ScrollArea,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";

import styles from "../../../../assets/css/BookingIndex.module.css";

export default function BookingDetailSection(props) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { isOnline, mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 200;

  const bookingMenuLinks = [
    { linkName: "Booking", href: "/booking/booking-entry", tooltip: "Booking" },
    { linkName: "IPD", href: "/booking/booking-IPD", tooltip: "IPD" },
    { linkName: "OPD", href: "/booking/booking-OPD", tooltip: "OPD" },
    {
      linkName: "Diagnostic",
      href: "/booking/booking-entry",
      tooltip: "Diagnostic",
    },
    {
      linkName: "Doctor Visit",
      href: "/booking/booking-visit",
      tooltip: "Doctor Visit",
    },
    { linkName: "Billing", href: "/booking/booking-entry", tooltip: "Billing" },
    {
      linkName: "Accounts",
      href: "/booking/booking-entry",
      tooltip: "Accounts",
    },
    {
      linkName: "Pharmacy",
      href: "/booking/booking-entry",
      tooltip: "Pharmacy",
    },
    {
      linkName: "Human Resource",
      href: "/booking/booking-entry",
      tooltip: "Human Resource",
    },
    {
      linkName: "Inventory",
      href: "/booking/booking-entry",
      tooltip: "Inventory",
    },
    {
      linkName: "Medical Record",
      href: "/booking/booking-entry",
      tooltip: "Medical Record",
    },
    {
      linkName: "Sample Collection",
      href: "/booking/booking-entry",
      tooltip: "Sample Collection",
    },
    {
      linkName: "Notes & Messaging",
      href: "/booking/booking-entry",
      tooltip: "Notes & Messaging",
    },
    {
      linkName: "Refferel / Commission",
      href: "/booking/booking-entry",
      tooltip: "Refferel / Commission",
    },
    {
      linkName: "Assets & Purchase",
      href: "/booking/booking-entry",
      tooltip: "Assets & Purchase",
    },
    { linkName: "Reports", href: "/booking/booking-entry", tooltip: "Reports" },
  ];

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
        <ScrollArea scrollbarSize={2} scrollbars="y" type="never">
          <Stack className="borderRadiusAll" gap={2} h={height + 56}>
            {bookingMenuLinks.map((data, index) => {
              return (
                <Box key={index} fz={14}>
                  <Tooltip label={data.tooltip}>
                    <Link className={styles.sidebar_links} to={data.href}>
                      {data.linkName}
                    </Link>
                  </Tooltip>
                </Box>
              );
            })}
          </Stack>
        </ScrollArea>
      </Box>
    </Box>
  );
}
