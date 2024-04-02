import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
    Group,
    Box,
    ActionIcon, Text, Button, Grid, Flex,
    GridCol, Tooltip, rem
} from "@mantine/core";
import { DateInput } from '@mantine/dates';
import { useTranslation } from "react-i18next";
import {
    IconEye, IconEdit, IconTrash, IconPrinter, IconSearch,
    IconFilter, IconRestore
} from "@tabler/icons-react";
import { DataTable } from 'mantine-datatable';
import { useDispatch, useSelector } from "react-redux";
import {
    editEntityData,
    getIndexEntityData,
    setFetching, setFormLoading,
    setInsertType,
    showEntityData
} from "../../../../store/core/crudSlice.js";
import KeywordSearch from "../../filter/KeywordSearch";
import { modals } from "@mantine/modals";
import { deleteEntityData } from "../../../../store/core/crudSlice";


const data = [
    {
        "Created": "12-03-2024 6:42:18 am ",
        "Invoice": "032400010 ",
        "Name": "SK Sharif ",
        "Mobile": "01711111111 ",
        "Device Sales": "",
        "Total": "3,764 ",
        "Payment": "0 ",
        "Due": "3,764 ",
        "Sales By": "medicine ",
        "Transaction": "Cash ",
        "Process": "Done"
    },
    {
        "Created": "12-03-2024 6:21:17 am ",
        "Invoice": "032400003 ",
        "Name": "SK Sharif ",
        "Mobile": "01711111111 ",
        "Device Sales": "",
        "Total": "3,764 ",
        "Payment": "0 ",
        "Due": "0 ",
        "Sales By": "",
        "Transaction": "Cash ",
        "Process": "Created "
    },
    {
        "Created": "12-03-2024 6:20:24 am ",
        "Invoice": "032400002 ",
        "Name": "SK Sharif ",
        "Mobile": "01711111111 ",
        "Device Sales": "",
        "Total": "3,764 ",
        "Payment": "0 ",
        "Due": "3,764 ",
        "Sales By": "medicine ",
        "Transaction": "Cash ",
        "Process": "Done "
    },
    {
        "Created": "12-03-2024 6:07:06 am ",
        "Invoice": "032400001 ",
        "Name": "SK Sharif ",
        "Mobile": "01711111111 ",
        "Device Sales": "",
        "Total": "3,764 ",
        "Payment": "0 ",
        "Due": "3,764 ",
        "Sales By": "medicine ",
        "Transaction": "Cash ",
        "Process": "Done"
    }
]


function TableComp() {

    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const { isOnline, mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 210; //TabList height 104

    const perPage = 20;
    const [page, setPage] = useState(1);
    const [newClientViewModel, setNewClientViewModel] = useState(false);

    // const [value, setValue] = useState < Date | null > (null);

    const fetching = useSelector((state) => state.crudSlice.fetching);
    const searchKeyword = useSelector((state) => state.crudSlice.searchKeyword);
    const indexData = useSelector((state) => state.crudSlice.indexEntityData);
    const customerFilterData = useSelector((state) => state.crudSlice.customerFilterData);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setFetching(false))
        }, 1000)
    })

    useEffect(() => {
        const value = {
            url: 'core/modalWithThree',
            param: {
                term: searchKeyword,
                name: customerFilterData.name,
                mobile: customerFilterData.mobile,
                page: page,
                offset: perPage
            }
        }
        dispatch(getIndexEntityData(value))
    }, [fetching]);

    return (
        <>
            <Box>
                <div radius="xl">
                    <Box bg={`white`} ml={`md`} mt={`md`} mb={`sm`}>
                        <Box >
                            <Grid>
                                <GridCol span={4}>
                                    <DateInput
                                        // value={value}
                                        // onChange={setValue}
                                        label="Start Date"
                                        placeholder="Start Date"
                                        mt={`md`}
                                    />
                                </GridCol>
                                <GridCol span={4} >
                                    <DateInput
                                        // value={value}
                                        // onChange={setValue}
                                        label="End Date"
                                        placeholder="End Date"
                                        ml={`sm`}
                                        mt={`md`}
                                    />
                                </GridCol>
                                <Grid.Col span={4}  >
                                    <Box mt={`md`} pt={"md"} pl={`lg`} >
                                        <ActionIcon.Group mt={'xs'}>
                                            <ActionIcon variant="transparent" size="lg" mr={16} aria-label="Gallery"
                                                onClick={() => {
                                                    searchKeyword.length > 0 ?
                                                        (dispatch(setFetching(true)),
                                                            setSearchKeywordTooltip(false))
                                                        :
                                                        (setSearchKeywordTooltip(true),
                                                            setTimeout(() => {
                                                                setSearchKeywordTooltip(false)
                                                            }, 1500))
                                                }}
                                            >
                                                <Tooltip
                                                    label={t('SearchButton')}

                                                    withArrow
                                                    position={"bottom"}
                                                    c={'indigo'}
                                                    bg={`gray.1`}
                                                    transitionProps={{ transition: "pop-bottom-left", duration: 500 }}
                                                >
                                                    <IconSearch style={{ width: rem(20) }} stroke={2.0} />
                                                </Tooltip>
                                            </ActionIcon>


                                            <ActionIcon
                                                variant="transparent"
                                                size="lg"
                                                mr={16}
                                                aria-label="Settings"
                                                onClick={(e) => {
                                                    setFilterModel(true)
                                                }}
                                            >
                                                <Tooltip
                                                    label={t("FilterButton")}

                                                    withArrow
                                                    position={"bottom"}
                                                    c={'indigo'}
                                                    bg={`gray.1`}
                                                    transitionProps={{ transition: "pop-bottom-left", duration: 500 }}
                                                >
                                                    <IconFilter style={{ width: rem(20) }} stroke={2.0} />
                                                </Tooltip>
                                            </ActionIcon>



                                            <ActionIcon variant="transparent" size="lg" aria-label="Settings">
                                                <Tooltip
                                                    label={t("ResetButton")}

                                                    withArrow
                                                    position={"bottom"}
                                                    c={'indigo'}
                                                    bg={`gray.1`}
                                                    transitionProps={{ transition: "pop-bottom-left", duration: 500 }}
                                                >
                                                    <IconRestore style={{ width: rem(20) }} stroke={2.0} onClick={() => {
                                                        // dispatch(setSearchKeyword(''))
                                                        dispatch(setFetching(true))

                                                        if (props.module === 'customer') {
                                                            dispatch(setCustomerFilterData({
                                                                ...customerFilterData,
                                                                name: '',
                                                                mobile: ''
                                                            }));
                                                        }
                                                    }} />
                                                </Tooltip>
                                            </ActionIcon>
                                        </ActionIcon.Group>
                                    </Box>

                                </Grid.Col>
                            </Grid>
                        </Box>
                    </Box>
                    <Box bg={`white`}>
                        <Box pb={`xs`} pl={`md`} pr={'md'}>
                            <DataTable
                                withTableBorder
                                records={data}
                                columns={[
                                    {
                                        accessor: 'index',
                                        title: 'S/N',
                                        textAlignment: 'right',
                                        render: (item) => (data.indexOf(item) + 1)
                                    },
                                    { accessor: 'Created', title: "Created" },
                                    { accessor: 'Invoice', title: "Invoice" },
                                    { accessor: 'Name', title: "Name" },
                                    { accessor: 'Process', title: "Process" },
                                    {
                                        accessor: "action",
                                        title: "Action",
                                        textAlign: "right",
                                        render: (data) => (
                                            <Group gap={4} justify="right" wrap="nowrap">
                                                <ActionIcon
                                                    size="sm"
                                                    variant="subtle"
                                                    color="green"
                                                // onClick={() => {
                                                //     setDamageViewModel(true)
                                                //     dispatch(showEntityData('core/damage/' + data.id))
                                                // }}
                                                >
                                                    <IconEye size={16} />
                                                </ActionIcon>
                                                <ActionIcon
                                                    size="sm"
                                                    variant="subtle"
                                                    color="blue"
                                                    onClick={() => {
                                                        dispatch(setInsertType('update'))
                                                        dispatch(editEntityData('core/damage/' + data.id))
                                                        dispatch(setFormLoading(true))
                                                    }}
                                                >
                                                    <IconEdit size={16} />
                                                </ActionIcon>
                                                <ActionIcon
                                                    size="sm"
                                                    variant="subtle"
                                                    color="red"
                                                    onClick={() => {
                                                        modals.openConfirmModal({
                                                            title: (
                                                                <Text size="md"> {t("FormConfirmationTitle")}</Text>
                                                            ),
                                                            children: (
                                                                <Text size="sm"> {t("FormConfirmationMessage")}</Text>
                                                            ),
                                                            labels: { confirm: 'Confirm', cancel: 'Cancel' },
                                                            onCancel: () => console.log('Cancel'),
                                                            onConfirm: () => {
                                                                dispatch(deleteEntityData('core/damage/' + data.id))
                                                                dispatch(setFetching(true))
                                                            },
                                                        });
                                                    }}
                                                >
                                                    <IconTrash size={16} />
                                                </ActionIcon>
                                            </Group>
                                        ),
                                    },
                                ]
                                }
                                fetching={fetching}
                                // totalRecords={indexData.total}
                                // recordsPerPage={perPage}
                                // page={page}
                                // onPageChange={(p) => {
                                //     setPage(p)
                                //     dispatch(setFetching(true))
                                // }}
                                loaderSize="xs"
                                loaderColor="grape"
                                height={height}
                                scrollAreaProps={{ type: 'never' }}
                            />
                        </Box>
                    </Box>
                </div>
                <Grid
                    gutter="1"
                    columns={2}
                    justify="end"
                    align="center"
                >
                    <Button
                        mr={'md'}
                        size="xs"
                        color={`indigo.6`}
                        type="submit"
                        mt={10}
                        id="EntityFormSubmit"
                        leftSection={<IconPrinter size={16} />}
                    >

                        <Flex direction={`column`} gap={0}>
                            <Text fz={14} fw={400}>
                                {t("Print")}
                            </Text>
                        </Flex>
                    </Button>
                </Grid>
            </Box >

        </>
    );
}

export default TableComp;