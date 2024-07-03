import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  Group,
  Box,
  ActionIcon,
  Text,
  Menu,
  rem,
  Anchor,
  CheckIcon,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  IconEye,
  IconEdit,
  IconTrash,
  IconInfoCircle,
  IconSettings,
  IconEyeEdit,
  IconTrashX,
  IconPencil,
  IconDotsVertical,
} from "@tabler/icons-react";
import { DataTable } from "mantine-datatable";
import { useDispatch, useSelector } from "react-redux";
import {
  editEntityData,
  getIndexEntityData,
  setFetching,
  setFormLoading,
  setInsertType,
  showEntityData,
} from "../../../../store/core/crudSlice.js";
import KeywordSearch from "../../filter/KeywordSearch.jsx";
import { modals } from "@mantine/modals";
import { deleteEntityData } from "../../../../store/core/crudSlice.js";
import tableCss from "../../../../assets/css/Table.module.css";
import ComissionViewModel from "./ComissionViewModel.jsx";

function ComissionTable() {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { isOnline, mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight - 98; //TabList height 104

  const perPage = 50;
  const [page, setPage] = useState(1);
  const [comissionViewModel, setComissionViewModel] = useState(false);

  const fetching = useSelector((state) => state.crudSlice.fetching);
  const searchKeyword = useSelector((state) => state.crudSlice.searchKeyword);
  const indexData = useSelector((state) => state.crudSlice.indexEntityData);
  const customerFilterData = useSelector(
    (state) => state.crudSlice.customerFilterData
  );

  const data = [
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
    {
      service_name: "Healt Checkup",
      person_name: "Foysal Mahmud",
    },
  ];

  useEffect(() => {
    const value = {
      url: "core/customer",
      param: {
        term: searchKeyword,
        name: customerFilterData.name,
        mobile: customerFilterData.mobile,
        page: page,
        offset: perPage,
      },
    };
    dispatch(getIndexEntityData(value));
  }, [fetching]);

  return (
    <>
      <Box
        pl={`xs`}
        pr={8}
        pt={"6"}
        pb={"4"}
        className={"boxBackground borderRadiusAll border-bottom-none"}>
        <KeywordSearch module={"customer"} />
      </Box>

      {/*  */}
      <Box className={"borderRadiusAll border-top-none"}>
        <DataTable
          classNames={{
            root: tableCss.root,
            table: tableCss.table,
            header: tableCss.header,
            footer: tableCss.footer,
            pagination: tableCss.pagination,
          }}
          records={data}
          columns={[
            {
              accessor: "index",
              title: t("S/N"),
              textAlignment: "right",
              render: (item) => data.indexOf(item) + 1,
            },
            { accessor: "service_name", title: t("ServiceName") },
            { accessor: "person_name", title: t("PersonName") },
            {
              accessor: "action",
              title: t("Action"),
              textAlign: "right",
              render: (data) => (
                <Group gap={4} justify="right" wrap="nowrap">
                  <Menu
                    position="bottom-end"
                    offset={3}
                    withArrow
                    trigger="hover"
                    openDelay={100}
                    closeDelay={400}>
                    <Menu.Target>
                      <ActionIcon
                        variant="outline"
                        color="gray.6"
                        radius="xl"
                        aria-label="Settings">
                        <IconDotsVertical
                          height={"18"}
                          width={"18"}
                          stroke={1.5}
                        />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item w={"200"} href="/inventory/config">
                        {t("Status")}
                      </Menu.Item>
                      <Menu.Item w={"200"} href="/inventory/config">
                        {t("Edit")}
                      </Menu.Item>
                      <Menu.Item href="/inventory/config">
                        {t("Show")}
                      </Menu.Item>
                      <Menu.Item
                        href={``}
                        target="_blank"
                        component="a"
                        w={"200"}
                        mt={"2"}
                        bg={"red.1"}
                        c={"red.6"}
                        rightSection={
                          <IconTrashX
                            style={{ width: rem(14), height: rem(14) }}
                          />
                        }>
                        {t("Delete")}
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Group>
              ),
            },
          ]}
          fetching={fetching}
          totalRecords={indexData.total}
          recordsPerPage={perPage}
          page={page}
          onPageChange={(p) => {
            setPage(p);
            dispatch(setFetching(true));
          }}
          loaderSize="xs"
          loaderColor="grape"
          height={height}
          scrollAreaProps={{ type: "never" }}
        />
      </Box>
      {/*  */}

      {comissionViewModel && (
        <ComissionViewModel
          comissionViewModel={comissionViewModel}
          setComissionViewModel={setComissionViewModel}
        />
      )}
    </>
  );
}

export default ComissionTable;
