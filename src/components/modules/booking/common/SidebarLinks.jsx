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
import { NavLink, useOutletContext } from "react-router-dom";

import styles from "../../../../assets/css/BookingIndex.module.css";
import { IconBrandBooking } from "@tabler/icons-react";

export default function SidebarLinks() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { isOnline, mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 200;

  const bookingMenuLinks = [
    {
      linkName: "Dashboard",
      href: "/booking/booking-dashboard",
      tooltip: "Dashboard",
    },
    {
      linkName: "Booking",
      href: "/booking/booking-entry",
      tooltip: "Booking",
    },
    {
      linkName: "IPD",
      href: "/booking/booking-ipd",
      tooltip: "IPD",
    },
    {
      linkName: "OPD",
      href: "/booking/booking-opd",
      tooltip: "OPD",
    },
    {
      linkName: "Diagnostic",
      href: "/booking/booking-diagnostic",
      tooltip: "Diagnostic",
    },
    {
      linkName: "DoctorVisit",
      href: "/booking/booking-doctor-visit",
      tooltip: "Doctor Visit",
    },
    {
      linkName: "Billing",
      href: "/booking/booking-billing",
      tooltip: "Billing",
    },
    {
      linkName: "Accounts",
      href: "/booking/booking-accounts",
      tooltip: "Accounts",
    },
    {
      linkName: "Pharmacy",
      href: "/booking/booking-pharmacy",
      tooltip: "Pharmacy",
    },
    {
      linkName: "HumanResource",
      href: "/booking/booking-human-resource",
      tooltip: "Human Resource",
    },
    {
      linkName: "Inventory",
      href: "/booking/booking-inventory",
      tooltip: "Inventory",
    },
    {
      linkName: "MedicalRecords",
      href: "/booking/booking-medical-record",
      tooltip: "Medical Record",
    },
    {
      linkName: "SampleCollection",
      href: "/booking/booking-sample-collection",
      tooltip: "Sample Collection",
    },
    {
      linkName: "NotesMessaging",
      href: "/booking/booking-notes-messaging",
      tooltip: "Notes & Messaging",
    },
    {
      linkName: "RefferelCommission",
      href: "/booking/booking-refferal-commission",
      tooltip: "Refferel / Commission",
    },
    {
      linkName: "AssetsPurchase",
      href: "/booking/booking-assets-purchase",
      tooltip: "Assets & Purchase",
    },
    {
      linkName: "Reports",
      href: "/booking/booking-reports",
      tooltip: "Reports",
    },
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
              <Title
                order={6}
                w={"max-content"}
                pl={"6"}
                fz={{ xl: "h6", lg: "15px" }}>
                {t("Menu")}
              </Title>
            </Grid.Col>
          </Grid>
        </Box>
        <ScrollArea scrollbarSize={2} scrollbars="y" type="never">
          <Stack className="borderRadiusAll" gap={2} h={height + 56}>
            {bookingMenuLinks.map((data, index) => {
              return (
                <Box key={index}>
                  <Tooltip label={data.tooltip}>
                    <NavLink
                      style={({ isActive }) => {
                        return {
                          color: isActive ? "white" : "",
                          backgroundColor: isActive ? "#ff6b6b" : "",
                        };
                      }}
                      className={styles.sidebar_links}
                      to={data.href}>
                      <IconBrandBooking />{" "}
                      <Text fz={{ xl: 13, lg: 12 }}>
                        {t(`${data.linkName}`)}
                      </Text>
                    </NavLink>
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
