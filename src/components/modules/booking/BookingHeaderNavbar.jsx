import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Progress,
  Title,
  Group,
  Burger,
  Menu,
  rem,
  ActionIcon,
  Text,
  NavLink,
} from "@mantine/core";
import {
  getHotkeyHandler,
  useDisclosure,
  useHotkeys,
  useToggle,
} from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import classes from "../../../assets/css/HeaderSearch.module.css";
import {
  IconInfoCircle,
  IconTrash,
  IconSearch,
  IconSettings,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function BookingHeaderNavbar(props) {
  const { pageTitle, roles, currancySymbol, allowZeroPercentage } = props;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [opened, { toggle }] = useDisclosure(false);
  const navigate = useNavigate();
  const links = [
    { link: "/booking/voucher-entry", label: t("BookingEntry") },
    { link: "/booking/Ledger", label: t("BookingLedger") },
    { link: "/booking/reports", label: t("BookingReports") },
  ];
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link);
      }}>
      {link.label}
    </a>
  ));
  return (
    <>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Group ml={10}>
            <Text>{pageTitle}</Text>
          </Group>
          <Group>
            <Group
              ml={50}
              gap={5}
              className={classes.links}
              visibleFrom="sm"
              mt={2}>
              {items}
            </Group>
            <Menu
              withArrow
              arrowPosition="center"
              trigger="hover"
              openDelay={100}
              closeDelay={400}
              mr={"8"}>
              <Menu.Target>
                <ActionIcon
                  mt={4}
                  variant="filled"
                  color="red.5"
                  radius="xl"
                  aria-label="Settings">
                  <IconInfoCircle height={"12"} width={"12"} stroke={1.5} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  href="/accounting/transaction-mode"
                  component="button"
                  onClick={(e) => {
                    navigate("/accounting/transaction-mode");
                  }}
                  leftSection={
                    <IconSettings style={{ width: rem(14), height: rem(14) }} />
                  }>
                  {t("Transaction")}
                </Menu.Item>
                <Menu.Item
                  href="/accounting/head-group"
                  component="button"
                  onClick={(e) => {
                    navigate("/accounting/head-group");
                  }}
                  leftSection={
                    <IconSettings style={{ width: rem(14), height: rem(14) }} />
                  }>
                  {t("AccountHeadGroup")}
                </Menu.Item>
                <Menu.Item
                  href="/accounting/head-subgroup"
                  component="button"
                  onClick={(e) => {
                    navigate("/accounting/head-subgroup");
                  }}
                  leftSection={
                    <IconSettings style={{ width: rem(14), height: rem(14) }} />
                  }>
                  {t("AccountSubHeadGroup")}
                </Menu.Item>
                <Menu.Item
                  href="/accounting/config"
                  component="button"
                  onClick={(e) => {
                    navigate("/accounting/config");
                  }}
                  leftSection={
                    <IconSettings style={{ width: rem(14), height: rem(14) }} />
                  }>
                  {t("Settings")}
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </div>
      </header>
    </>
  );
}

export default BookingHeaderNavbar;
